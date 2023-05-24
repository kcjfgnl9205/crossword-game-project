import { ClientOnly } from "@/app/components/common";
import ResultClient from "./ResultClient";


type Props = {
  id: string;
}

export default async function Result({ params }:  { params: Props }) {

  return (
    <ClientOnly>
      <ResultClient
        id={params.id}
      />
    </ClientOnly>
  )
}
