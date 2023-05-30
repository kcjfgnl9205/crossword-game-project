
import ClientOnly from "@/app/components/common/ClientOnly";
import ResultClient from "./ResultClient";
import getCurrentUser from "@/app/actions/getCurrentUser";
import { redirect } from "next/navigation";


type Props = {
  slug: string;
  id: string;
}

export default async function CrosswordResult({ params }:  { params: Props }) {
  const currentUser = await getCurrentUser();
  if (!currentUser?.authority) {
    redirect("/")
  }
  
  return (
    <ClientOnly>
      <ResultClient />
    </ClientOnly>
  )
}
