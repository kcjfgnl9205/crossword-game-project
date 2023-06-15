import { notFound, redirect } from "next/navigation";
import CategoryEditClient from "./CategoryEditClient";
import ClientOnly from "@/app/components/common/ClientOnly";
import getCurrentUser from "@/app/actions/getCurrentUser";
import getCategories from "@/app/actions/getCategories";
import getLangs from "@/app/actions/getLangs";


type Props = {
  slug: string;
}

// 管理者カテゴリー設定ページ
export default async function Admin({ params }:  { params: Props }) {  
  // 該当するカテゴリーデータを取得
  const category = await getCategories(params);
  if (!category && params.slug !== "create") {
    notFound();
  }

  // 管理者権限チェック
  const currentUser = await getCurrentUser();
  if (!currentUser?.authority) {
    redirect("/");
  }

  // 言語データを取得する
  const langs = await getLangs();

  return (
    <ClientOnly>
      <CategoryEditClient
        category={category[0]}
        langs={langs}
      />
    </ClientOnly>
  )
}
