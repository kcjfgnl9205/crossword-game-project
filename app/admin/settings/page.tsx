import { redirect } from "next/navigation";
import SettingsClient from "./SettingsClient";
import ClientOnly from "@/app/components/common/ClientOnly";
import getCurrentUser from "@/app/actions/getCurrentUser";
import getPartsAndChapter from "@/app/actions/getPartsAndChapter";
import getLangCategories from "@/app/actions/getLangCategories";
import getCrosswordGameMincnt from "@/app/actions/getCrosswordGameMincnt";


// 管理者設定ページ
export default async function Admin() {
  const currentUser = await getCurrentUser();
  if (!currentUser?.authority) {
    redirect("/");
  }

  const [partCategories, langCategories, minCnt] = await Promise.all([
    getPartsAndChapter(),
    getLangCategories(),
    getCrosswordGameMincnt()
  ]);

  
  return (
    <ClientOnly>
      <SettingsClient
        parts={partCategories}
        langs={langCategories}
        minCnt={minCnt}
      />
    </ClientOnly>
  )
}
