'use client';


import Container from "@/app/components/common/Container";
import Heading from "@/app/components/common/Heading";
import { SafeUser } from "../types";
import ListingPartsUser from "../components/crossword/ListingPartsUser";




type Props = {
  currentUser?: SafeUser | null
  crosswordParts?: Array<any>
}

export default function ResultClient({ currentUser, crosswordParts }: Props) { 
  console.log(crosswordParts)

  const header = (
    <div>header</div>
  )

  const body = (
    <div>body</div>
  )
  
  return (
    <Container>
      <Heading title="username様が解決した問題リスト" />
      
      <div className="pt-2 flex flex-col gap-0.5 md:gap-1">
        {
          crosswordParts?.map((parts: any, index: number) => {
            return (
              <ListingPartsUser
                key={index}
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
