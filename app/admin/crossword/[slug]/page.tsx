import { notFound, redirect } from "next/navigation";
import getCurrentUser from "@/app/actions/getCurrentUser";
import { ClientOnly } from "@/app/components/common";
import CrosswordsClient from "./CrosswordsClient";
import getCategoryBySlug from "@/app/actions/getCategoryBySlug";
import getCrosswordsByCategoryId from "@/app/actions/getCrosswordsByCategoryId";


type Props = {
  slug: string;
}

// 管理者クロスワードリストページ
export default async function Crossword({ params }:  { params: Props }) {
  const category = await getCategoryBySlug(params);
  if (!category) {
    notFound();
  }

  const currentUser = await getCurrentUser();
  const crosswords = await getCrosswordsByCategoryId(category.id);
  if (!currentUser?.authority) {
    redirect("/");
  }

  return (
    <ClientOnly>
      <CrosswordsClient
        category={category}
        crosswords={crosswords}
      />
    </ClientOnly>
  )
}
