import { redirect } from "next/navigation";
import getCurrentUser from "@/app/actions/getCurrentUser";
import { ClientOnly } from "@/app/components/common";
import UsersClient from "./UsersClient";


type Props = {
  username: string;
}

// 管理者メインページ
export default async function AdminUsers({ params }:  { params: Props }) {
  const currentUser = await getCurrentUser();
  if (!currentUser?.authority) {
    redirect("/");
  }

  return (
    <ClientOnly>
      <UsersClient
        username={params.username}
      />
    </ClientOnly>
  )
}
