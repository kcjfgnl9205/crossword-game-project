'use client';


import { useCallback, useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { HiChevronUp, HiChevronDown } from "react-icons/hi";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { CategoryType, CategoryChapterType } from "@/app/types";
import { PartAccordion } from "@/app/components/Accordion";
import { Button, Checkbox, Input } from "@/app/components/htmlTag";
import { Container, ErrorMessage, Heading } from "@/app/components/common";
import PartCreateAndEditModal from "@/app/components/modal/PartCreateAndEditModal";
import usePartCreateModal from "@/app/hooks/usePartCreate";


type Props = {
  category?: CategoryType | null;
  parts: Array<CategoryChapterType>;
  langs: Array<any>;
}

const partHeader = <div className="text-sm font-semibold px-4 py-2 md:text-xl">単元・章設定</div>;
const langHeader = <div className="text-sm font-semibold px-4 py-2 md:text-xl">言語カテゴリー名称設定</div>;
const settingHeader = <div className="text-sm font-semibold px-4 py-2 md:text-xl">ゲーム詳細設定</div>;

export default function CategoryEditClient({ category, parts, langs }: Props) {
  const router = useRouter();
  const createModal = usePartCreateModal();
  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  
  const [ partItem, setPartItem ] = useState<Array<CategoryChapterType>>(parts);
  const [ langChecked, setLangChecked ] = useState<Array<any>>(langs.map((lang) => { return { id: lang.id, name: lang.name, name_en: lang.name_en, checked: Number(lang.cnt) > 0 } }))
  const [ modalData, setModalData ] = useState<CategoryChapterType | null>(null);

  const { register, handleSubmit, formState: { errors }, setValue, getValues, watch } = useForm<FieldValues>({
    defaultValues: {
      id: category?.id,
      name: category?.name || "",
      name_en: category?.name_en || "",
      min_cnt: category?.min_cnt || 0,
      sorted: category?.sorted || 99,
      
      parts: partItem,
      langs: langChecked
    }
  });

  
  const handleSort = useCallback(() => {
    setPartItem((prev: Array<CategoryChapterType>) => {
      let newIndex = 1;
      return prev.map((part: CategoryChapterType) => {
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
    setPartItem((prev: Array<CategoryChapterType>) => {
      return prev.map((part: CategoryChapterType, prevIndex: number) => {
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
    setPartItem((prev: Array<CategoryType>) => {
      const index = prev.findIndex((part: CategoryType) => part.id === data.id);
      if (index === -1 || ! data.id) {
        const newData = { ...data, id: undefined, disabled: false };
        return [ ...prev, newData ];
      } else {
        return prev.map((part: CategoryType) => {
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
    const index = partItem.findIndex((part: CategoryType) => part.sorted === sortedIndex);
    if (index === -1 || (direction === 'up' && index === 0) || (direction === 'down' && index === partItem.length - 1)) {
      return;
    }

    const newData = [ ...partItem ];
    if (direction === 'up') {
      [newData[index - 1], newData[index]] = [newData[index], newData[index - 1]];
    } else if (direction === 'down') {
      [newData[index], newData[index + 1]] = [newData[index + 1], newData[index]];
    }

    setPartItem(newData);
    handleSort();
  }, [partItem, handleSort]);
  

  // 全て修正後、修正ボタン押下した時
  const handleOnSubmit = useCallback(async () => {
    setIsLoading(true);
    try {
      if (confirm("設定値を修正します。")) {
        const response = await axios.put(`/api/category`, {
          category: getValues(),
          withCredentials: true,
        });
  
        if (response.status === 200) {
          alert("修正しました。");
          setPartItem(response.data.parts);
          router.push(`/admin/crossword/${response.data.name_en}`);
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
  }, [router, getValues]);

  
  useEffect(() => {
    setValue("langs", langChecked);
  }, [setValue, langChecked]);

  useEffect(() => {
    setValue("parts", partItem);
  }, [setValue, partItem])

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {  
    setLangChecked((prev: Array<any>) => {
      const arr = [ ...prev ];
      arr[index].checked = !prev[index].checked;
      return arr;
    })
  }

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
          partItem.length === 0 
          ? <div className="text-center font-semibold py-4">単元・章のデータが存在しません。</div>
          : partItem?.filter((part) => !part?.onDelete)
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
                            // disabled={isLoading || part.disabled}
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
        <ErrorMessage message="※このカテゴリーで使用する言語を選択してください。" />
        <div className="flex flex-col gap-2 md:flex-row">
          {
            langChecked.map((lang, index: number) => {
              return (
                <Checkbox
                  key={lang.id}
                  id={lang.name_en}
                  label={lang.name}
                  name={lang.name_en}
                  disabled={isLoading}
                  register={register}
                  defaultChecked={lang.checked}
                  handleOnChange={(e) => handleOnChange(e, index)}
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
        <Link href="/admin/crossword" className="text-sm text-neutral-500 hover:underline">&lt;&lt; 以前ページへ戻る</Link>
        <Heading title="クロスワードゲーム設定" />
        <ErrorMessage message="※カテゴリー名(英語)はパスを意味する" />
        <div className="flex flex-col gap-2 md:flex-row">
          <Input id="name" label="カテゴリー名" register={register} errors={errors} required />
          <Input id="name_en" label="カテゴリー名(英語)" register={register} errors={errors} required />
        </div>
      </div>

      <div className="flex flex-col gap-1 py-4">
        <PartAccordion header={partHeader} body={partBody} />
        <PartAccordion header={langHeader} body={langBody} />
        <PartAccordion header={settingHeader} body={settingBody} />
        <div className="flex flex-col gap-2 md:w-64 md:flex-row">
          <Button label={category ? "修正" : "登録"} onClick={handleSubmit(handleOnSubmit)} primary disabled={isLoading} />
          <Button label="取消" onClick={() => router.push("/admin/crossword")} error disabled={isLoading} />
        </div>
      </div>
    </Container>
  )
};
