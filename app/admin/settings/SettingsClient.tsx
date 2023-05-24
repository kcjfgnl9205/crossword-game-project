'use client';


import { useCallback, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { HiChevronUp, HiChevronDown } from "react-icons/hi";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { PartCategoryType } from "@/app/types";
import { PartAccordion } from "@/app/components/Accordion";
import { Button, Input } from "@/app/components/htmlTag";
import { Container, ErrorMessage, Heading } from "@/app/components/common";
import PartCreateAndEditModal from "@/app/components/modal/PartCreateAndEditModal";
import usePartCreateModal from "@/app/hooks/usePartCreate";


type Props = {
  parts: Array<PartCategoryType>;
}

const partHeader = <div className="text-sm font-semibold px-4 py-2 md:text-xl">単元・章設定</div>;
const settingHeader = <div className="text-sm font-semibold px-4 py-2 md:text-xl">ゲーム設定</div>;

export default function SettingsClient({ parts }: Props) {
  const router = useRouter();
  const createModal = usePartCreateModal();
  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const [ data, setData ] = useState<Array<PartCategoryType>>(parts);
  const [ modalData, setModalData ] = useState<PartCategoryType | null>(null);

  const { register, formState: { errors }, getValues } = useForm<FieldValues>({
    defaultValues: {
      minCnt: 0,
    }
  });

  
  const handleDeletePart = useCallback((id: number) => {
    setData((prev: Array<PartCategoryType>) => {
      return prev.map((part: PartCategoryType) => {
        if (part.id === id) {
          return { ...part, onDelete: true };
        } else {
          return { ...part }
        }
      })
    });
  }, []);
  
  const handleAppendPart = useCallback((data: any) => {
    setData((prev: Array<PartCategoryType>) => {
      const index = prev.findIndex((part: PartCategoryType) => part.id === data.id);
      if (index === -1) {
        const maxId = prev.length === 0 ? 0 : Math.max(...prev.map(item => item.id));
        const newId = maxId + 1;
        const newData = { ...data, id: undefined, chapters: data.chapters, disabled: false };
        return [...prev, newData];
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
  }, []);

  const handleSortPart = useCallback((id: number, direction: string) => {
    // 該当データのindexを探す
    const index = data.findIndex((part: PartCategoryType) => part.id === id);

    if (index === -1 || (direction === 'up' && index === 0) || (direction === 'down' && index === data.length - 1)) {
      return;
    }

    const newData = [...data];
    if (direction === 'up') {
      [newData[index - 1], newData[index]] = [newData[index], newData[index - 1]];
    } else if (direction === 'down') {
      [newData[index], newData[index + 1]] = [newData[index + 1], newData[index]];
    }

    setData(newData);
  }, [data]);
  
  const handleOnSubmit = useCallback(async () => {
    setIsLoading(true);

    try {
      if (confirm("設定値を修正します。")) {
        const response = await axios.put(`/api/admin/setting`, {
          parts: data,
          minCnt: Number(getValues("minCnt")),
          withCredentials: true,
        });
  
        if (response.status === 200) {
          router.refresh();
        }
        console.log(response)
      } else {
        setIsLoading(false);
      }
    } catch (error: any) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [data, router, getValues]);

  
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
                        onClick={() => handleSortPart(part.id, "up")}
                        disabled={isLoading}
                        icon={HiChevronUp}
                      />
                    </div>
                    <div className="flex-none w-14">
                      <Button
                        label="　"
                        onClick={() => handleSortPart(part.id, "down")}
                        disabled={isLoading}
                        icon={HiChevronDown}
                      />
                    </div>
                    <div className="flex-none w-14">
                      <Button
                        label="-"
                        onClick={() => handleDeletePart(part.id)}
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

  const settingBody = (
    <div className="py-4">
      <div className="flex flex-col py-1 w-full gap-2 md:py-2">
        <p className="px-1">各クロスワードゲームの最小問題数</p>
        <Input
          type="number"
          id="minCnt"
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
        <PartAccordion header={settingHeader} body={settingBody} />
        <div className="md:w-24">
          <Button label="修正" onClick={() => handleOnSubmit()} primary disabled={isLoading} />
        </div>
      </div>
    </Container>
  )
};
