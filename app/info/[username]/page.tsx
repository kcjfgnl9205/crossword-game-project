
import ClientOnly from "@/app/components/common/ClientOnly";
import ResultClient from "./ResultClient";
import getCurrentUser from "../../actions/getCurrentUser";
import { redirect } from "next/navigation";
import getParts from "../../actions/getPartsAndChapter";
import { EmptyState } from "../../components/common";



export default async function CrosswordUserResult() {
  const currentUser = await getCurrentUser();
  const parts = await getParts();
  if (!currentUser) {
    redirect("/")
  }

  if (parts?.length === 0) {
    return (
      <EmptyState showReset />
    );
  }
  
  return (
    <ClientOnly>
      <ResultClient
        currentUser={currentUser}
        crosswordParts={parts}
      />
    </ClientOnly>
  )
}


