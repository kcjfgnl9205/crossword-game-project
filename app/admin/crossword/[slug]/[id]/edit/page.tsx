import { notFound, redirect } from "next/navigation";
import { ClientOnly } from "@/app/components/common";
import getCurrentUser from "@/app/actions/getCurrentUser";
import getCrosswordById from "@/app/actions/getCrosswordById";
import CreateClient from "../../create/CreateClient";
import getCategories from "@/app/actions/getCategories";



type Props = {
  slug: string;
  id: string;
}

// クロスワードゲームを修正するページ
export default async function CrosswordCreate({ params }:  { params: Props }) {
  // 該当するカテゴリーデータを取得
  const category = await getCategories(params);
  if (!category && params.slug !== "create") {
    notFound();
  }
  
  // 管理者権限チェック
  const currentUser = await getCurrentUser();
  if (!currentUser?.authority) {
    redirect("/")
  }

  // クロスワードゲームデータ取得
  const crossword = await getCrosswordById(params)
  if (!crossword) {
    notFound();
  }

  return (
    <ClientOnly>
      <CreateClient
        category={category[0]}
        item={crossword}
      />
    </ClientOnly>
  )
}
