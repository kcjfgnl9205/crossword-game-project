import { ClientOnly } from "@/app/components/common";
import ResultClient from "./ResultClient";
import { notFound } from 'next/navigation';
import getCrosswordById from "@/app/actions/getCrosswordById";


type Props = {
  id: string;
  slug: string;
}

export default async function Result({ params }:  { params: Props }) {
  const crossword = await getCrosswordById(params);
  if (!crossword) {
    notFound();
  }

  return (
    <ClientOnly>
      <ResultClient
        params={params}
      />
    </ClientOnly>
  )
}
