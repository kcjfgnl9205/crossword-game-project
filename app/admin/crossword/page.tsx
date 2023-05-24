import { redirect } from "next/navigation";
import getCurrentUser from "@/app/actions/getCurrentUser";
import { ClientOnly } from "@/app/components/common";
import CrosswordClient from "./CrosswordClient";
import getCrosswords from "@/app/actions/getCrosswords";


// 管理者クロスワードリストページ
export default async function Crossword() {
  const currentUser = await getCurrentUser();
  const crosswordParts = await getCrosswords();
  if (!currentUser?.authority) {
    redirect("/");
  }

  return (
    <ClientOnly>
      <CrosswordClient
        currentUser={currentUser}
        listings={crosswordParts}
      />
    </ClientOnly>
  )
}
