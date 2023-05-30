
import ClientOnly from "@/app/components/common/ClientOnly";
import ResultClient from "./ResultClient";
import getCurrentUser from "../../actions/getCurrentUser";
import { redirect } from "next/navigation";



type Props = {
  username: string;
}

export default async function CrosswordUserResult({ params }:  { params: Props }) {
  const currentUser = await getCurrentUser();
  if (!currentUser || params.username !== currentUser.username) {
    redirect("/");
  }
  
  return (
    <ClientOnly>
      <ResultClient
        username={params.username}
      />
    </ClientOnly>
  )
}


