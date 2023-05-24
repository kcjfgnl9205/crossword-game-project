
import ClientOnly from "@/app/components/common/ClientOnly";
import CreateClient from "./CreateClient";
import getCurrentUser from "@/app/actions/getCurrentUser";
import { redirect } from "next/navigation";
import CrosswordCreateSubModal from "@/app/components/modal/CrosswordCreateSubModal";
import getPartsAndChapter from "@/app/actions/getPartsAndChapter";
import getLangCategories from "@/app/actions/getLangCategories";



export default async function CrosswordCreate() {
  const currentUser = await getCurrentUser();
  const partCategories = await getPartsAndChapter();
  const langCategories = await getLangCategories();
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
