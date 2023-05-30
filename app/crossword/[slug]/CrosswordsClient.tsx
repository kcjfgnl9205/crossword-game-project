'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Container, EmptyState, Heading, Timer } from "@/app/components/common";
import { CluesData, Direction, UsedCellData } from "@/app/components/cross/types";
import { Button } from "@/app/components/htmlTag";
import CrosswordGame from "@/app/components/crossword/CrosswordGame";
import Link from "next/link";
import ListingParts from "@/app/components/crossword/ListingParts";


type Props = {
  category: any;
  crosswords: Array<any>
}


export default function CrosswordsClient({ category, crosswords }: Props) {
 console.log(crosswords)
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
              crosswords.map((part: any) => {
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

