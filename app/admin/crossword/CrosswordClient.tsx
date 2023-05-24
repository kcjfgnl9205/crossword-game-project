'use client';

import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { SafeUser } from "@/app/types";
import { Button } from "@/app/components/htmlTag";
import { Container, EmptyState } from "@/app/components/common";
import { CrosswordType } from "@/app/actions/getCrosswords";
import ListingPartsAdmin from "@/app/components/crossword/ListingPartsAdmin";


type Props = {
  currentUser?: SafeUser | null
  listings: Array<CrosswordType>
}

export default function CrosswordClient({ currentUser, listings }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
console.log(listings)
  //　クロスワード削除
  const handleDelete = useCallback(async (title: string, id: number) => {
    setIsLoading(true);
    if (confirm(`「${title}」を削除します。`)) {
      try {
        const response = await axios.delete(`/api/crossword/${id}`, {
          withCredentials: true,
        });

        if (response.status === 200) {
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
    router.push(`/admin/crossword/${id}/edit`)
  }, [router]);


  //　クロスワード結果ページへ移動する
  const handleResultRouter = useCallback((id: number) => {
    router.push(`/admin/crossword/${id}/result`)
  }, [router]);
  
  
  return (
      <Container>
        <div className="pt-4 pb-2 md:w-24">
          <Button label="新規登録" onClick={() => router.push("/admin/crossword/create")} primary />
        </div>

        {
          listings.length === 0
          ? <EmptyState title="クロスワードゲームが存在しません。" subtitle="新規作成ボタンを押下し、クロスワードゲームを作成してください。" />
          : <div className="pt-2 flex flex-col gap-0.5 md:gap-1">
              {
                listings.map((parts: any, index: number) => {
                  return (
                    <ListingPartsAdmin
                      key={index}
                      currentUser={currentUser}
                      item={parts}
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
