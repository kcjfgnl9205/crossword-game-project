import { ClientOnly } from "@/app/components/common";
import CrosswordClient from "./CrosswordClient";
import getCrosswordById from "@/app/actions/getCrosswordById";
import getCategories from "@/app/actions/getCategories";


type Props = {
  slug: string;
  id: string;
}

export default async function Quiz({ params }:  { params: Props }) {

  const crossword = await getCrosswordById(params);

  return (
    <ClientOnly>
      <CrosswordClient
        id={params.id}
        crossword={crossword}
      />
    </ClientOnly>
  )
}


export async function generateStaticParams() {
  const categories = await getCategories();
  return categories.map((category: any) => ({
    slug: category.name_en
  }));
}