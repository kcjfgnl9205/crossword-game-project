'use client';


import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { HiChevronUp, HiChevronDown } from "react-icons/hi";

import { CategoryType } from "@/app/types";
import { Button } from "@/app/components/htmlTag";
import { Container, Heading } from "@/app/components/common";
import useAlertModal from "@/app/hooks/useAlert";
import AlertModal from "@/app/components/modal/AlertModal";


type Props = {
  items: Array<CategoryType>;
}

export default function CategoryClient({ items }: Props) {
  const router = useRouter();
  const alertModal = useAlertModal();
  const [ alertModalText, setAlertText ] = useState<CategoryType>();
  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const [ categories, setCategories ] = useState<Array<CategoryType>>(items);

  // 単元削除ボタン押下した時
  const handleDeletePart = useCallback(async (id: number | undefined) => {
    if (id) {
      setIsLoading(true);
      try {
        const response = await axios.delete(`/api/category/${id}`);
  
        if (response.status === 200) {
          setCategories(response.data);
        }
      } catch (error: any) {
        alert("error: " + error);
      } finally {
        setIsLoading(false);
        router.refresh();
      }
    }
  }, [router]);

  // カテゴリーの並び順
  const handleSortPart = useCallback(async (sortedIndex: number, direction: "up" | "down") => {
    // 該当データのindexを探す
    const index = categories.findIndex((part: CategoryType) => part.sorted === sortedIndex);
    if (index === -1 || (direction === 'up' && index === 0) || (direction === 'down' && index === categories.length - 1)) {
      return;
    }
    
    setIsLoading(true);

    const newData = [ ...categories ];
    if (direction === 'up') {
      [newData[index - 1], newData[index]] = [newData[index], newData[index - 1]];
    } else if (direction === 'down') {
      [newData[index], newData[index + 1]] = [newData[index + 1], newData[index]];
    }
    
    const data = newData.map((category: CategoryType, index: number) => {
      const updatedPart = { ...category, sorted: index + 1 };
      return updatedPart;
    }).sort((a, b) => a.sorted - b.sorted);
    
    try {
      const response = await axios.put(`/api/category`, {
        categories: data,
        withCredentials: true,
      });
      if (response.status === 200) {
        setCategories(newData);
      }
    } catch (error: any) {
      alert("error: " + error);
    } finally {
      setIsLoading(false); 
    }
  }, [categories]);
  
  
  return (
    <Container>
      <AlertModal
        isOpen={alertModal.isOpen}
        onClose={alertModal.onClose}
        title={`「${alertModalText?.name}」カテゴリーを削除します。`}
        onSubmit={() => handleDeletePart(alertModalText?.id)}
        onSubmitLabel="削除"
        secondaryAction={alertModal.onClose}
        secondaryActionLabel="取消"
        disabled={isLoading}
        error
      />
      <div className="mt-8">
        <Link href="/admin" className="text-sm text-neutral-500 hover:underline">&lt;&lt; 以前ページへ戻る</Link>
        <Heading title="クロスワードカテゴリー設定" />
      </div>

      <div className="flex flex-col gap-1 py-4">
        <div className="w-full md:w-40">
          <Button
            label="カテゴリー追加"
            onClick={() => { router.push("/admin/crossword/create/category") }}
            primary
            disabled={isLoading}
          />
        </div>
        <div className="flex flex-col py-1 w-full gap-2 md:py-2">
          {
            categories.length === 0
            ? <Heading center title="カテゴリーデータが存在しません。・" subtitle="カテゴリーを追加してください。" />
            : categories.map((category: CategoryType) => (
                <div key={category.id} className="flex flex-row gap-1 items-center md:gap-2">
                  <div
                    onClick={() =>  router.push(`/admin/crossword/${category.name_en}`)}
                    className="p-4 border rounded-lg transition w-full text-center hover:opacity-80 hover:bg-neutral-100 cursor-pointer"
                  >
                    {category.name}
                  </div>
                  <div className="flex-none w-14">
                    <Button
                      label="　"
                      onClick={() => handleSortPart(category.sorted, "up")}
                      icon={HiChevronUp}
                      disabled={isLoading}
                    />
                  </div>
                  <div className="flex-none w-14">
                    <Button
                      label="　"
                      onClick={() => handleSortPart(category.sorted, "down")}
                      icon={HiChevronDown}
                      disabled={isLoading}
                    />
                  </div>
                  <div className="flex-none w-14">
                    <Button
                      label="-"
                      onClick={() => {
                        setAlertText(category);
                        alertModal.onOpen();
                      }}
                      error
                      disabled={isLoading}
                    />
                  </div>
                </div>
              ))
          }
        </div>
      </div>
    </Container>
  )
};
