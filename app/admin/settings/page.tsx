import { redirect } from "next/navigation";
import getCurrentUser from "@/app/actions/getCurrentUser";
import ClientOnly from "@/app/components/common/ClientOnly";
import SettingsClient from "./SettingsClient";
import getPartsAndChapter from "@/app/actions/getPartsAndChapter";


// 管理者メインページ
export default async function Admin() {
  const currentUser = await getCurrentUser();
  const parts = await getPartsAndChapter() as [];
  if (!currentUser?.authority) {
    redirect("/");
  }

  return (
    <ClientOnly>
      <SettingsClient
        parts={parts}
      />
    </ClientOnly>
  )
}
