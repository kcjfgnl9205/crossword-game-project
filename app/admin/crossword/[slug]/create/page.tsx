
import { notFound, redirect } from "next/navigation";
import { ClientOnly } from "@/app/components/common";
import CreateClient from "./CreateClient";
import getCurrentUser from "@/app/actions/getCurrentUser";
import getCategories from "@/app/actions/getCategories";


type Props = {
  slug: string;
}

// クロスワードゲームを生成するページ
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

  return (
    <ClientOnly>
      <CreateClient
        category={category[0]}
      />
    </ClientOnly>
  )
}
