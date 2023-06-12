
import ClientOnly from "@/app/components/common/ClientOnly";
import ResultClient from "./ResultClient";
import getCurrentUser from "../../actions/getCurrentUser";
import { redirect } from "next/navigation";
import getCrosswordMaxResults from "@/app/actions/getCrosswordMaxResults";



type Props = {
  username: string;
}

export default async function CrosswordUserResult({ params }:  { params: Props }) {
  const currentUser = await getCurrentUser();
  if (!currentUser || params.username !== currentUser.username) {
    redirect("/");
  }
  
  const items = await getCrosswordMaxResults(params);

  return (
    <ClientOnly>
      <ResultClient
        user={currentUser}
        items={items}
      />
    </ClientOnly>
  )
}


