import { redirect } from "next/navigation";
import getCurrentUser from "@/app/actions/getCurrentUser";
import { ClientOnly } from "@/app/components/common";
import UsersClient from "./UsersClient";




// 管理者メインページ
export default async function Admin() {
  const currentUser = await getCurrentUser();
  if (!currentUser?.authority) {
    redirect("/");
  }

  return (
    <ClientOnly>
      <UsersClient />
    </ClientOnly>
  )
}
