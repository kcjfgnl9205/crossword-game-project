import { redirect } from "next/navigation";
import getCurrentUser from "@/app/actions/getCurrentUser";
import { Container, EmptyState } from "@/app/components/common";
import getCrosswords from "@/app/actions/getCrosswords";
import ListingParts from "./components/crossword/ListingParts";


export default async function Home() {
  const currentUser = await getCurrentUser();
  const crosswordParts = await getCrosswords();
  if (currentUser?.authority) {
    redirect("/admin");
  }

  if (crosswordParts.length === 0) {
    return (
      <EmptyState showReset />
    );
  }

  return (
    <Container>
      <div className="pt-2 flex flex-col gap-0.5 md:gap-1">
        {
          crosswordParts.map((parts: any, index: number) => {
            return (
              <ListingParts
                key={parts.id}
                currentUser={currentUser}
                item={parts}
              />
            )
          })
        }
      </div>
    </Container>
  )
}
