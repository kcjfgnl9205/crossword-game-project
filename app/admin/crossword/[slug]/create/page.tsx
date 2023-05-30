
import { notFound, redirect } from "next/navigation";
import { ClientOnly } from "@/app/components/common";
import CreateClient from "./CreateClient";
import getCurrentUser from "@/app/actions/getCurrentUser";
import getPartsAndChapter from "@/app/actions/getPartsAndChapter";
import getLangsByCategoryName from "@/app/actions/getLangsByCategoryName";
import getCategoryBySlug from "@/app/actions/getCategoryBySlug";


type Props = {
  slug: string;
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

  const [parts, langs] = await Promise.all([
    getPartsAndChapter(params),
    getLangsByCategoryName(params)
  ]);
  
  return (
    <ClientOnly>
      <CreateClient
        partsCategories={parts}
        langsCategories={langs}
        category={category}
      />
    </ClientOnly>
  )
}
