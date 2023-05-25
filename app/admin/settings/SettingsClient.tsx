'use client';


import { useCallback, useState } from "react";
import { FieldValues, useFieldArray, useForm } from "react-hook-form";
import { HiChevronUp, HiChevronDown } from "react-icons/hi";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { LangCategoryType, PartCategoryType } from "@/app/types";
import { PartAccordion } from "@/app/components/Accordion";
import { Button, Input } from "@/app/components/htmlTag";
import { Container, ErrorMessage, Heading } from "@/app/components/common";
import PartCreateAndEditModal from "@/app/components/modal/PartCreateAndEditModal";
import usePartCreateModal from "@/app/hooks/usePartCreate";


type Props = {
  parts: Array<PartCategoryType>;
  langs: Array<LangCategoryType>;
  minCnt: number;
}

const partHeader = <div className="text-sm font-semibold px-4 py-2 md:text-xl">単元・章設定</div>;
const langHeader = <div className="text-sm font-semibold px-4 py-2 md:text-xl">言語カテゴリー名称設定</div>;
const settingHeader = <div className="text-sm font-semibold px-4 py-2 md:text-xl">ゲーム詳細設定</div>;

export default function SettingsClient({ parts, langs, minCnt }: Props) {
  const router = useRouter();
  const createModal = usePartCreateModal();
  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const [ data, setData ] = useState<Array<PartCategoryType>>(parts);
  const [ modalData, setModalData ] = useState<PartCategoryType | null>(null);

  const { control, register, formState: { errors }, getValues, watch } = useForm<FieldValues>({
    defaultValues: {
      langs: langs,
      min_cnt: minCnt
    }
  });

  const { fields } = useFieldArray({
    control,
    name: "langs",
  });
  
  const handleSort = useCallback(() => {
    setData((prev: Array<PartCategoryType>) => {
      let newIndex = 1;
      return prev.map((part: PartCategoryType) => {
        if (part.onDelete) {
          return { ...part, sorted: 0 };
        } else {
          const updatedPart = { ...part, sorted: newIndex };
          newIndex++;
          return updatedPart;
        }
      }).sort((a, b) => a.sorted - b.sorted);
    });
  }, [])

  // 単元削除ボタン押下した時
  const handleDeletePart = useCallback((sortedIndex: number) => {
    setData((prev: Array<PartCategoryType>) => {
      return prev.map((part: PartCategoryType, prevIndex: number) => {
        if (sortedIndex === part.sorted) {
          return { ...part, onDelete: true };
        } else {
          return { ...part }
        }
      })
    });

    handleSort();
  }, [handleSort]);
  
  // 単元追加ボタン押下した時
  const handleAppendPart = useCallback((data: any) => {
    setData((prev: Array<PartCategoryType>) => {
      const index = prev.findIndex((part: PartCategoryType) => part.id === data.id);
      if (index === -1 || ! data.id) {
        const newData = { ...data, id: undefined, disabled: false };
        return [ ...prev, newData ];
      } else {
        return prev.map((part: PartCategoryType) => {
          if (part.id === data.id) {
            return { ...part, name: data.name, chapters: data.chapters }
          } else {
            return { ...part };
          }
        })
      }
    })

    handleSort();
  }, [handleSort]);

  // 単元並び順ボタン押下した時
  const handleSortPart = useCallback((sortedIndex: number, direction: "up" | "down") => {
    // 該当データのindexを探す
    const index = data.findIndex((part: PartCategoryType) => part.sorted === sortedIndex);
    if (index === -1 || (direction === 'up' && index === 0) || (direction === 'down' && index === data.length - 1)) {
      return;
    }

    const newData = [ ...data ];
    if (direction === 'up') {
      [newData[index - 1], newData[index]] = [newData[index], newData[index - 1]];
    } else if (direction === 'down') {
      [newData[index], newData[index + 1]] = [newData[index + 1], newData[index]];
    }

    setData(newData);
    handleSort();
  }, [data, handleSort]);
  

  // 全て修正後、修正ボタン押下した時
  const handleOnSubmit = useCallback(async () => {
    setIsLoading(true);

    try {
      if (confirm("設定値を修正します。")) {
        const response = await axios.put(`/api/admin/setting`, {
          parts: data,
          min_cnt: Number(watch("min_cnt")),
          langs: getValues("langs"),
          withCredentials: true,
        });
  
        if (response.status === 200) {
          alert("修正しました。");
          setData(response.data);
          router.refresh();
        }
      } else {
        setIsLoading(false);
      }
    } catch (error: any) {
      alert("error: " + error);
    } finally {
      setIsLoading(false);
    }
  }, [data, router, watch, getValues]);

  
  const partBody = (
    <div className="py-4">
      <ErrorMessage message="※クロスワードゲームが登録されている単元、章は削除できません。" />
      <div className="w-full md:w-40">
        <Button
          label="単元を追加する"
          onClick={() => {
            setModalData(null);
            setTimeout(() => { createModal.onOpen();}, 500);
          }}
          primary
          disabled={isLoading}
        />
      </div>
      <div className="flex flex-col py-1 w-full gap-2 md:py-2">
        {
          data.length === 0 
          ? <div className="text-center font-semibold py-4">単元・章のデータが存在しません。</div>
          : data.filter((part) => !part?.onDelete)
                .map((part, index: number) => (
                  <div key={index} className="flex flex-row gap-1 items-center md:gap-2">
                    <div
                      onClick={() => {
                        if (isLoading) return;
                        setModalData(part);
                        setTimeout(() => { createModal.onOpen(); }, 500)
                      }}
                      className={`p-4 border rounded-lg transition w-full text-center hover:opacity-80 hover:bg-neutral-100 ${isLoading ? "cursor-not-allowed" : "cursor-pointer" }`}
                    >
                      {part.name}
                    </div>
                    <div className="flex-none w-14">
                      <Button
                        label="　"
                        onClick={() => handleSortPart(part.sorted, "up")}
                        disabled={isLoading}
                        icon={HiChevronUp}
                      />
                    </div>
                    <div className="flex-none w-14">
                      <Button
                        label="　"
                        onClick={() => handleSortPart(part.sorted, "down")}
                        disabled={isLoading}
                        icon={HiChevronDown}
                      />
                    </div>
                    <div className="flex-none w-14">
                      <Button
                        label="-"
                        onClick={() => handleDeletePart(part.sorted)}
                        error
                        disabled={isLoading || part.disabled}
                      />
                    </div>
                  </div>
                ))
        }
      </div>
    </div>
  )

  const langBody = (
    <div className="py-4">
      <div className="flex flex-col py-1 gap-2 md:py-2">
        <ErrorMessage message="※名前だけ修正可能、追加や削除はできない。" />
        <div className="flex flex-col gap-2 md:flex-row">
          {
            fields.map((lang, langIndex) => {
              const { id, name_en } = lang as { id: string, name_en: string };
              return (
                <Input
                  key={lang.id}
                  id={`langs.${langIndex}.name`}
                  label={`名称(${name_en})`}
                  register={register}
                  errors={errors}
                />
              )
            })
          }
        </div>
      </div>
    </div>
  );


  const settingBody = (
    <div className="py-4">
      <div className="flex flex-col py-1 w-full gap-2 md:py-2">
        <ErrorMessage message="※各クロスワードゲームの最小問題数を設定してください。" />
        <Input
          type="number"
          id="min_cnt"
          label="最小問題数"
          register={register}
          errors={errors}
        />
      </div>
    </div>
  )

  
  return (
    <Container>
      <PartCreateAndEditModal
        item={modalData}
        handleAppendPart={handleAppendPart}
      />
      <div className="mt-8 px-2">
        <Link href="/admin" className="text-sm text-neutral-500 hover:underline">&lt;&lt; 以前ページへ戻る</Link>
        <Heading title="クロスワードゲーム設定" />
      </div>

      <div className="flex flex-col gap-1 py-4">
        <PartAccordion header={partHeader} body={partBody} />
        <PartAccordion header={langHeader} body={langBody} />
        <PartAccordion header={settingHeader} body={settingBody} />
        <div className="md:w-24">
          <Button label="修正" onClick={() => handleOnSubmit()} primary disabled={isLoading} />
        </div>
      </div>
    </Container>
  )
};
