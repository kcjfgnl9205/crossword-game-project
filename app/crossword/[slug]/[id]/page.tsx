import { ClientOnly } from "@/app/components/common";
import CrosswordClient from "./CrosswordClient";
import getCrosswordById from "@/app/actions/getCrosswordById";
import { notFound } from "next/navigation";


type Props = {
  slug: string;
  id: string;
}

export default async function Quiz({ params }:  { params: Props }) {
  const crossword = await getCrosswordById(params);
  if (!crossword) {
    notFound();
  }

  return (
    <ClientOnly>
      <CrosswordClient
        id={params.id}
        crossword={crossword}
      />
    </ClientOnly>
  )
}
