
import ClientOnly from "@/app/components/common/ClientOnly";
import ResultClient from "./ResultClient";
import getCurrentUser from "@/app/actions/getCurrentUser";
import { notFound, redirect } from "next/navigation";
import getCrosswordResultsByCrosswordId from "@/app/actions/getCrosswordResultsByCrosswordId";


type Props = {
  slug: string;
  id: string;
}

export default async function CrosswordResult({ params }:  { params: Props }) {  
  const currentUser = await getCurrentUser();
  if (!currentUser?.authority) {
    redirect("/")
  }

  const item = await getCrosswordResultsByCrosswordId(params);
  
  return (
    <ClientOnly>
      <ResultClient
        item={item}
      />
    </ClientOnly>
  )
}
