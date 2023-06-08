import { ClientOnly } from "@/app/components/common";
import CrosswordClient from "./CrosswordClient";
import getCrosswordById from "@/app/actions/getCrosswordById";
import { notFound } from "next/navigation";
import getCurrentUser from "@/app/actions/getCurrentUser";


type Props = {
  slug: string;
  id: string;
}

export default async function Quiz({ params }:  { params: Props }) {
  const crossword = await getCrosswordById(params);
  if (!crossword) {
    notFound();
  }

  const currentUser = await getCurrentUser();

  return (
    <ClientOnly>
      <CrosswordClient
        currentUser={currentUser}
        crossword={crossword}
      />
    </ClientOnly>
  )
}
