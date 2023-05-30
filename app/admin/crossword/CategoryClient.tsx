'use client';


import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { HiChevronUp, HiChevronDown } from "react-icons/hi";

import { CategoryType } from "@/app/types";
import { Button } from "@/app/components/htmlTag";
import { Container, Heading } from "@/app/components/common";


type Props = {
  categories: Array<CategoryType>;
}

export default function CategoryClient({ categories }: Props) {
  const router = useRouter();
  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const [ item, setItem ] = useState<Array<CategoryType>>(categories);

  
  // 単元削除ボタン押下した時
  const handleDeletePart = useCallback(async (id: number) => {
    setIsLoading(true);
    const category = item.filter((category: CategoryType) => category.id === id)?.[0];
    try {
      if (confirm(`カテゴリー「${category.name}」を削除します。\n※このカテゴリーに該当するクロスワード問題は全て削除されます。`)) {
        const response = await axios.delete(`/api/category/${id}`);

        if (response.status === 200) {
          alert(`カテゴリー「${category.name}」を削除しました。`);
          setItem(response.data);
          router.refresh();
        }
      }
    } catch (error: any) {
      alert("error: " + error);
    } finally {
      setIsLoading(false);
    }
  }, [router, item]);


  // カテゴリーの並び順
  const handleSortPart = useCallback(async (sortedIndex: number, direction: "up" | "down") => {
    // 該当データのindexを探す
    const index = item.findIndex((part: CategoryType) => part.sorted === sortedIndex);
    if (index === -1 || (direction === 'up' && index === 0) || (direction === 'down' && index === item.length - 1)) {
      return;
    }
    
    setIsLoading(true);

    const newData = [ ...item ];
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
      const params = {
        categories: data,
        withCredentials: true,
      }
      const response = await axios.put(`/api/category`, params);
      if (response.status === 200) {
        setItem(newData);
      }
    } catch (error: any) {
      alert("error: " + error);
    } finally {
      setIsLoading(false); 
    }
  }, [item]);
  
  
  return (
    <Container>
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
            item.length === 0
            ? <Heading center title="カテゴリーデータが存在しません。・" subtitle="カテゴリーを追加してください。" />
            : item.map((category: CategoryType) => (
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
                          onClick={() => handleDeletePart(category.id)}
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
