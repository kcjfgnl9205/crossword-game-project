
import ClientOnly from "@/app/components/common/ClientOnly";
import ResultClient from "./ResultClient";
import getCurrentUser from "@/app/actions/getCurrentUser";
import { redirect } from "next/navigation";



export default async function CrosswordResult() {
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
