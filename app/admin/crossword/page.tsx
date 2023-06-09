import { redirect } from "next/navigation";
import CategoryClient from "./CategoryClient";
import ClientOnly from "@/app/components/common/ClientOnly";
import getCurrentUser from "@/app/actions/getCurrentUser";
import getCategories from "@/app/actions/getCategories";


// 管理者カテゴリー設定ページ
export default async function Admin() {
  // 管理者権限チェック
  const currentUser = await getCurrentUser();
  if (!currentUser?.authority) {
    redirect("/");
  }
  
  // カテゴリーリスト取得
  const categories = await getCategories();
  
  return (
    <ClientOnly>
      <CategoryClient items={categories} />
    </ClientOnly>
  )
}
