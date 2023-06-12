import { notFound, redirect } from "next/navigation";
import getCurrentUser from "@/app/actions/getCurrentUser";
import { ClientOnly } from "@/app/components/common";
import UsersClient from "./UsersClient";
import getUserByUsername from "@/app/actions/getUserByUsername";
import getCrosswordMaxResults from "@/app/actions/getCrosswordMaxResults";


type Props = {
  username: string;
}

// 管理者メインページ
export default async function AdminUsers({ params }:  { params: Props }) {
  const currentUser = await getCurrentUser();
  if (!currentUser?.authority) {
    redirect("/");
  }

  const user = await getUserByUsername(params);
  if (!user) {
    notFound();
  }

  const results = await getCrosswordMaxResults(params);

  return (
    <ClientOnly>
      <UsersClient
        user={user}
        items={results}
      />
    </ClientOnly>
  )
}
