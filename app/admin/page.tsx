import { redirect } from "next/navigation";
import getCurrentUser from "@/app/actions/getCurrentUser";
import { ClientOnly, Container } from "@/app/components/common";
import { ListingCard } from "@/app/components/admin";


// 管理者メインページ
export default async function Admin() {
  const currentUser = await getCurrentUser();
  if (!currentUser?.authority) {
    redirect("/");
  }

  return (
    <ClientOnly>
      <Container>
        <div className="flex flex-col gap-2 py-4">
          <ListingCard label="アプリ設定" href="/admin/settings" />
          <ListingCard label="クロスワードプロジェクト管理" href="/admin/crossword" />
        </div>
      </Container>
    </ClientOnly>
  )
}
