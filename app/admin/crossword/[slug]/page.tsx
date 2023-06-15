import { notFound, redirect } from "next/navigation";
import { ClientOnly } from "@/app/components/common";
import CrosswordsClient from "./CrosswordsClient";
import getCurrentUser from "@/app/actions/getCurrentUser";
import getCrosswordsByCategoryId from "@/app/actions/getCrosswordsByCategory";
import getCategories from "@/app/actions/getCategories";


type Props = {
  slug: string;
}

// 管理者クロスワードリストページ
export default async function Crossword({ params }:  { params: Props }) {
  // URLに該当するカテゴリーデータ
  const category = await getCategories(params);
  if (!category) {
    notFound();
  }

  // 管理者権限チェック
  const currentUser = await getCurrentUser();
  if (!currentUser?.authority) {
    redirect("/");
  }
  
  // クロスワードリストを取得する
  const crosswords = await getCrosswordsByCategoryId(params);


  return (
    <ClientOnly>
      <CrosswordsClient
        category={category[0]}
        crosswords={crosswords}
      />
    </ClientOnly>
  )
}
