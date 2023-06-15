'use client';


import { Container, EmptyState, Heading } from "@/app/components/common";
import Link from "next/link";
import ListingParts from "@/app/components/crossword/ListingParts";
import { CategoryType } from "@/app/types";


type Props = {
  category: CategoryType;
  crosswords: Array<any>
}


export default function CrosswordsClient({ category, crosswords }: Props) {
  return (
    <Container>
      <div className="mt-8">
        <Link href={`/`} className="text-sm text-neutral-500 hover:underline">&lt;&lt; 以前ページへ戻る</Link>
        <Heading title={category.name} />
      </div>

      {
        crosswords.length === 0
        ? <EmptyState title="クロスワードゲームが存在しません。" subtitle="" />
        : <div className="pt-2 flex flex-col gap-0.5 md:gap-1">
            {
              crosswords.map((part) => {
                return (
                  <ListingParts
                    key={part.id}
                    category={category}
                    item={part}
                  />
                )
              })
            }
          </div>
      }
    </Container>
  )
}

