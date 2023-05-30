import { notFound, redirect } from "next/navigation";
import CategoryEditClient from "./CategoryEditClient";
import ClientOnly from "@/app/components/common/ClientOnly";
import getCurrentUser from "@/app/actions/getCurrentUser";
import getCategoryBySlug from "@/app/actions/getCategoryBySlug";
import getPartsAndChapter from "@/app/actions/getPartsAndChapter";
import getLangsByCategoryName from "@/app/actions/getLangsByCategoryName";


type Props = {
  slug: string;
}

// 管理者カテゴリー設定ページ
export default async function Admin({ params }:  { params: Props }) {  
  const category = await getCategoryBySlug(params);
  if (!category && params.slug !== "create") {
    notFound();
  }

  const currentUser = await getCurrentUser();
  if (!currentUser?.authority) {
    redirect("/");
  }

  const [ parts, langs ] = await Promise.all([
    getPartsAndChapter(params),
    getLangsByCategoryName(params),
  ]);

  return (
    <ClientOnly>
      <CategoryEditClient
        category={category}
        parts={parts}
        langs={langs}
      />
    </ClientOnly>
  )
}
