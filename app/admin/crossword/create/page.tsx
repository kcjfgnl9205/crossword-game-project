
import { redirect } from "next/navigation";
import { ClientOnly } from "@/app/components/common";
import CreateClient from "./CreateClient";
import getCurrentUser from "@/app/actions/getCurrentUser";
import getPartsAndChapter from "@/app/actions/getPartsAndChapter";
import getLangCategories from "@/app/actions/getLangCategories";



export default async function CrosswordCreate() {
  const currentUser = await getCurrentUser();
  if (!currentUser?.authority) {
    redirect("/")
  }

  const [partCategories, langCategories] = await Promise.all([
    getPartsAndChapter(),
    getLangCategories()
  ]);
  
  return (
    <ClientOnly>
      <CreateClient
        partCategories={partCategories}
        langCategories={langCategories}
      />
    </ClientOnly>
  )
}
