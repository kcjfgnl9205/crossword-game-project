
import ClientOnly from "@/app/components/common/ClientOnly";
import CreateClient from "./CreateClient";
import getCurrentUser from "@/app/actions/getCurrentUser";
import { redirect } from "next/navigation";
import getPartsAndChapter from "@/app/actions/getPartsAndChapter";
import getLangCategories from "@/app/actions/getLangCategories";



export default async function CrosswordCreate() {
  const [currentUser, partCategories = [], langCategories] = await Promise.all([
    await getCurrentUser(),
    await getPartsAndChapter(),
    await getLangCategories()
  ]);
  
  if (!currentUser?.authority) {
    redirect("/")
  }
  return (
    <ClientOnly>
      <CreateClient
        partCategories={partCategories}
        langCategories={langCategories}
      />
    </ClientOnly>
  )
}
