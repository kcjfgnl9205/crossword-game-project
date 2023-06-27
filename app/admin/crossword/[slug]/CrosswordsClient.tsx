'use client';


import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import { Button } from "@/app/components/htmlTag";
import { Container, EmptyState, Heading } from "@/app/components/common";
import ListingPartsAdmin from "@/app/components/crossword/ListingPartsAdmin";
import { CategoryType } from "@/app/types";
import useAlertModal from "@/app/hooks/useAlert";
import AlertModal from "@/app/components/modal/AlertModal";

type Props = {
  category: CategoryType;
  crosswords: Array<any>
}

export default function CrosswordsClient({ category, crosswords }: Props) {
  const router = useRouter();
  const alertModal = useAlertModal();
  const [ alertInfo, setAlertInfo ] = useState<any>({ 
    title: "",
    onSubmit: () => {},
    onSubmitLabel: ""
  });
  const [ isLoading, setIsLoading ] = useState(false);

  const deleteSubmit = useCallback(async (id: number) => {
    try {
      setIsLoading(true);
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
  }, [router])

  //　クロスワード削除
  const handleDelete = useCallback(async (title: string, id: number) => {
    setAlertInfo((prev: any) => { 
      return { 
        ...prev,
        title: `「${title}」を削除します。`,
        onSubmitLabel: "確認",
        onSubmit: () => deleteSubmit(id),
        secondaryAction: () => alertModal.onClose,
        secondaryActionLabel: "取消"
      } 
    })
    alertModal.onOpen();
  }, [alertModal, deleteSubmit]);
  
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
        <AlertModal
          isOpen={alertModal.isOpen}
          onClose={alertModal.onClose}
          title={alertInfo.title}
          onSubmit={alertInfo.onSubmit}
          onSubmitLabel={alertInfo.onSubmitLabel}
          secondaryAction={alertInfo?.secondaryAction}
          secondaryActionLabel={alertInfo?.secondaryActionLabel}
          disabled={isLoading}
        />
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
