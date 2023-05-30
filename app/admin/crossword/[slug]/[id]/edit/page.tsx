import { notFound, redirect } from "next/navigation";
import { ClientOnly } from "@/app/components/common";
import getCurrentUser from "@/app/actions/getCurrentUser";
import getCrosswordById from "@/app/actions/getCrosswordById";
import getPartsAndChapter from "@/app/actions/getPartsAndChapter";
import getCategoryBySlug from "@/app/actions/getCategoryBySlug";
import getLangsByCategoryName from "@/app/actions/getLangsByCategoryName";
import CreateClient from "../../create/CreateClient";



type Props = {
  slug: string;
  id: string;
}

export default async function CrosswordCreate({ params }:  { params: Props }) {
  const category = await getCategoryBySlug(params);
  if (!category && params.slug !== "create") {
    notFound();
  }
  
  const currentUser = await getCurrentUser();
  if (!currentUser?.authority) {
    redirect("/")
  }

  const [parts, langs, crossword] = await Promise.all([
    getPartsAndChapter(params),
    getLangsByCategoryName(params),
    getCrosswordById(params)
  ]);

  if (!crossword) {
    notFound();
  }

  return (
    <ClientOnly>
      <CreateClient
        partsCategories={parts}
        langsCategories={langs}
        category={category}
        item={crossword}
      />
    </ClientOnly>
  )
}
