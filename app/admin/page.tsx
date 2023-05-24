import { redirect } from "next/navigation";
import getCurrentUser from "@/app/actions/getCurrentUser";
import ClientOnly from "@/app/components/common/ClientOnly";
import AdminClient from "./AdminClient";


// 管理者メインページ
export default async function Admin() {
  const currentUser = await getCurrentUser();
  if (!currentUser?.authority) {
    redirect("/");
  }

  return (
    <ClientOnly>
      <AdminClient />
    </ClientOnly>
  )
}
