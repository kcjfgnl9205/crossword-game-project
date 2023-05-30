
import ClientOnly from "@/app/components/common/ClientOnly";
import ResultClientByCategory from "./ResultClientByCategory";

import { sampleResultArr } from "@/app/data/resultSample";
import getCurrentUser from "@/app/actions/getCurrentUser";
import { redirect } from "next/navigation";


type Props = {
  username: string;
  slug: string;
}

export default async function CrosswordUserResultByCategory({ params }:  { params: Props }) {
  const currentUser = await getCurrentUser();
  if (!currentUser || params.username !== currentUser.username) {
    redirect("/");
  }
  
  const category = sampleResultArr.filter((data) => data.name_en === params.slug)[0];
  return (
    <ClientOnly>
      <ResultClientByCategory
        username={params.username}
        category={category}
      />
    </ClientOnly>
  )
}


