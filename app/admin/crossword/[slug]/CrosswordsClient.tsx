'use client';

import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Button } from "@/app/components/htmlTag";
import { Container, EmptyState, Heading } from "@/app/components/common";
import ListingPartsAdmin from "@/app/components/crossword/ListingPartsAdmin";
import Link from "next/link";
import { CategoryType } from "@/app/types";


type Props = {
  category: CategoryType;
  crosswords: Array<any>
}

export default function CrosswordsClient({ category, crosswords }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  //　クロスワード削除
  const handleDelete = useCallback(async (title: string, id: number) => {
    setIsLoading(true);
    if (confirm(`「${title}」を削除します。`)) {
      try {
        const response = await axios.delete(`/api/crossword/${id}`, {
          withCredentials: true,
        });

        if (response.status === 200) {
          alert(`${title}」を削除します。`); 
          router.refresh();
        }
        
      } catch (error: any) {
        alert(`${error.response.status}: ${error.response.statusText}`);
      } finally {
        setIsLoading(false);
      }
    } else {
      setIsLoading(false);
    }
  }, [router]);

  //　クロスワード修正ページへ移動する
  const handleUpdateRouter = useCallback((id: number) => {
    router.push(`/admin/crossword/${category.name_en}/${id}/edit`)
  }, [router, category]);


  //　クロスワード結果ページへ移動する
  const handleResultRouter = useCallback((id: number) => {
    router.push(`/admin/crossword/${category.name_en}/${id}/result`)
  }, [router, category]);
  
  
  return (
      <Container>
        <div className="mt-8">
          <Link href={`/admin/crossword`} className="text-sm text-neutral-500 hover:underline">&lt;&lt; 以前ページへ戻る</Link>
          <Heading title={category.name} />
        </div>
        
        <div className="flex flex-col gap-2 pt-4 pb-2 md:flex-row md:w-64">
          <Button label="新規登録" onClick={() => router.push(`/admin/crossword/${category.name_en}/create`)} primary />
          <Button label="カテゴリー設定" onClick={() => router.push(`/admin/crossword/${category.name_en}/category`)} info />
        </div>

        {
          crosswords.length === 0
          ? <EmptyState title="クロスワードゲームが存在しません。" subtitle="新規作成ボタンを押下し、クロスワードゲームを作成してください。" />
          : <div className="pt-2 flex flex-col gap-0.5 md:gap-1">
              {
                crosswords.map((part: any) => {
                  return (
                    <ListingPartsAdmin
                      key={part.id}
                      item={part}
                      isLoading={isLoading}
                      handleDelete={handleDelete}
                      handleUpdateRouter={handleUpdateRouter}
                      handleResultRouter={handleResultRouter}
                    />
                  )
                })
              }
            </div>
        }
      </Container>
  )
}
