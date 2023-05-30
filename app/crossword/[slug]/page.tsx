import { notFound, redirect } from "next/navigation";
import getCurrentUser from "@/app/actions/getCurrentUser";
import { ClientOnly } from "@/app/components/common";
import getCategoryBySlug from '@/app/actions/getCategoryBySlug';
import getCrosswordsByCategoryId from "@/app/actions/getCrosswordsByCategoryId";
import CrosswordsClient from "./CrosswordsClient";



type Props = {
  slug: string;
}

export default async function Crossword({ params }:  { params: Props }) {  
  const category = await getCategoryBySlug(params);
  if (!category) {
    notFound();
  }

  const currentUser = await getCurrentUser();
  const crosswords = await getCrosswordsByCategoryId(category.id);
  if (currentUser?.authority) {
    redirect("/admin");
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
