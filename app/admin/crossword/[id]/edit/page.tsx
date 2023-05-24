import { redirect } from "next/navigation";
import { ClientOnly } from "@/app/components/common";
import getCurrentUser from "@/app/actions/getCurrentUser";
import getCrosswordById from "@/app/actions/getCrosswordById";
import getPartsAndChapter from "@/app/actions/getPartsAndChapter";
import getLangCategories from "@/app/actions/getLangCategories";
import CreateClient from "../../create/CreateClient";



type Props = {
  id: string;
}

export default async function CrosswordCreate({ params }:  { params: Props }) {
  const currentUser = await getCurrentUser();
  const partCategories = await getPartsAndChapter();
  const langCategories = await getLangCategories();
  const crossword = await getCrosswordById(params);
  if (!currentUser?.authority) {
    redirect("/")
  }
  
  return (
    <ClientOnly>
      <CreateClient
        partCategories={partCategories}
        langCategories={langCategories}
        item={crossword}
      />
    </ClientOnly>
  )
}
