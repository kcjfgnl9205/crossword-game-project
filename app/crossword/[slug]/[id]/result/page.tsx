import { ClientOnly } from "@/app/components/common";
import ResultClient from "./ResultClient";
import { notFound } from 'next/navigation';
import getCrosswordById from "@/app/actions/getCrosswordById";


type Props = {
  id: string;
  slug: string;
}

export default async function Result({ params, searchParams }:  { params: Props, searchParams: { [key: string]: string | string[] | undefined }; }) {
  const crossword = await getCrosswordById(params);
  if (!crossword) {
    notFound();
  }

  if (Object.keys(searchParams).length === 0) {
    notFound();
  }

  return (
    <ClientOnly>
      <ResultClient
        params={params}
        searchParams={searchParams}
      />
    </ClientOnly>
  )
}
