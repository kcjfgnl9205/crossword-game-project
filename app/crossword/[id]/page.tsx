import { ClientOnly } from "@/app/components/common";
import CrosswordClient from "./CrosswordClient";
import getCrosswordById from "@/app/actions/getCrosswordById";


type Props = {
  id: string;
}

export default async function Quiz({ params }:  { params: Props }) {
  const crossword = await getCrosswordById(params);

  return (
    <ClientOnly>
      <CrosswordClient
        id={params.id}
        item={crossword}
      />
    </ClientOnly>
  )
}
