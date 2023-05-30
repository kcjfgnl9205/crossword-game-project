
import ClientOnly from "@/app/components/common/ClientOnly";
import ResultClient from "./ResultClient";
import getCurrentUser from "@/app/actions/getCurrentUser";
import { notFound, redirect } from "next/navigation";
import getCategoryBySlug from "@/app/actions/getCategoryBySlug";


type Props = {
  slug: string;
  id: string;
}

export default async function CrosswordResult({ params }:  { params: Props }) {
  const category = await getCategoryBySlug(params);
  if (!category) {
    notFound();
  }
  
  const currentUser = await getCurrentUser();
  if (!currentUser?.authority) {
    redirect("/")
  }
  
  return (
    <ClientOnly>
      <ResultClient
        category={category}
      />
    </ClientOnly>
  )
}
