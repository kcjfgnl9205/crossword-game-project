import { redirect } from "next/navigation";
import getCurrentUser from "@/app/actions/getCurrentUser";
import { ClientOnly } from "@/app/components/common";
import ResultClientByCategory from "@/app/user/[username]/[slug]/ResultClientByCategory";
import { sampleResultArr } from "@/app/data/resultSample";


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
