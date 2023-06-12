import { notFound, redirect } from "next/navigation";
import getCurrentUser from "@/app/actions/getCurrentUser";
import { ClientOnly } from "@/app/components/common";
import ResultClientByCategory from "@/app/user/[username]/[slug]/ResultClientByCategory";
import getCrosswordAllResults from "@/app/actions/getCrosswordAllResults";
import getUserByUsername from "@/app/actions/getUserByUsername";


type Props = {
  username: string;
  slug: string;
}

// 管理者メインページ
export default async function AdminUsersDetail({ params }:  { params: Props }) {
  const currentUser = await getCurrentUser();
  if (!currentUser?.authority) {
    redirect("/");
  }
  
  const user = await getUserByUsername(params);
  
  const items = await getCrosswordAllResults(params);
  if (!items) {
    notFound();
  }
  
  return (
    <ClientOnly>
      <ResultClientByCategory
        user={user}
        items={items}
      />
    </ClientOnly>
  )
}
