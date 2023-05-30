import { redirect } from "next/navigation";
import getCurrentUser from "@/app/actions/getCurrentUser";
import { Container, EmptyState, Heading } from "@/app/components/common";
import ListingCard from "./components/listing/ListingCard";
import getCategories from "./actions/getCategories";


export default async function Home() {
  const currentUser = await getCurrentUser();
  const categories = await getCategories();
  if (currentUser?.authority) {
    redirect("/admin");
  }

  if (categories?.length === 0) {
    return (
      <EmptyState showReset />
    );
  }

  return (
    <Container>
      <div className="pt-8 pb-1">
        <Heading title="目次" />
      </div>

      <div className="pt-2 flex flex-col gap-0.5 md:gap-1">
        {
          categories?.map((category: any, index: number) => {
            return (
              <ListingCard key={index} label={category.name} href={`/crossword/${category.name_en}`} />
            )
          })
        }
      </div>
    </Container>
  )
}
