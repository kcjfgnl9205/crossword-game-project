import { redirect } from "next/navigation";
import CategoryClient from "./CategoryClient";
import ClientOnly from "@/app/components/common/ClientOnly";
import getCurrentUser from "@/app/actions/getCurrentUser";
import getCategories from "@/app/actions/getCategories";


// 管理者設定ページ
export default async function Admin() {
  const currentUser = await getCurrentUser();
  if (!currentUser?.authority) {
    redirect("/");
  }
  
  // カテゴリーリスト取得
  const categories = await getCategories();
  
  return (
    <ClientOnly>
      <CategoryClient categories={categories} />
    </ClientOnly>
  )
}
