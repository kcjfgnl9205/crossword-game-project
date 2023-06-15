import { notFound, redirect } from "next/navigation";
import getCurrentUser from "@/app/actions/getCurrentUser";
import { ClientOnly } from "@/app/components/common";
import getCrosswordsByCategory from "@/app/actions/getCrosswordsByCategory";
import CrosswordsClient from "./CrosswordsClient";
import getCategories from "@/app/actions/getCategories";



type Props = {
  slug: string;
}

export default async function Crossword({ params }:  { params: Props }) {  
  // カテゴリー取得
  const category = await getCategories(params);
  if (!category) {
    notFound();
  }

  const currentUser = await getCurrentUser();
  if (currentUser?.authority) {
    redirect("/admin");
  }

  // クロスワード取得
  const crosswords = await getCrosswordsByCategory(params);

  return (
    <ClientOnly>
      <CrosswordsClient
        category={category[0]}
        crosswords={crosswords}
      />
    </ClientOnly>
  )
}
