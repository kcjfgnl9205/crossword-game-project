import { redirect } from "next/navigation";
import getCurrentUser from "@/app/actions/getCurrentUser";
import { ClientOnly, Container } from "@/app/components/common";
import ListingCard from "../components/listing/ListingCard";



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
          <ListingCard label="クロスワードプロジェクト管理" href="/admin/crossword" />
          <ListingCard label="受講生管理" href="/admin/users" />
        </div>
      </Container>
    </ClientOnly>
  )
}
