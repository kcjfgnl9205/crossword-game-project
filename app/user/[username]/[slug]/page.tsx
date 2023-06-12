
import ClientOnly from "@/app/components/common/ClientOnly";
import ResultClientByCategory from "./ResultClientByCategory";

import getCurrentUser from "@/app/actions/getCurrentUser";
import { redirect } from "next/navigation";
import getCrosswordAllResults from "@/app/actions/getCrosswordAllResults";


type Props = {
  username: string;
  slug: string;
}

export default async function CrosswordUserResultByCategory({ params }:  { params: Props }) {
  const currentUser = await getCurrentUser();
  if (!currentUser || params.username !== currentUser.username) {
    redirect("/");
  }
  const items = await getCrosswordAllResults(params);

  return (
    <ClientOnly>
      <ResultClientByCategory
        user={currentUser}
        items={items}
      />
    </ClientOnly>
  )
}


