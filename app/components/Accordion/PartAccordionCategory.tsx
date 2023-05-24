'use client';

import { useRouter } from "next/navigation";
import React from "react";


type Props ={
  items: Array<any>;
}

export default function PartAccordionCategory({ items }: Props) {
  const router = useRouter();
  return (
    <div className="flex flex-row">
      {
        items.map((item: any, index: number) => {
          return (
            <React.Fragment key={index}>
              <div
                onClick={() => router.push(`/crossword/${item.crossword_id}`)}
                className="text-neutral-500 font-semibold cursor-pointer hover:underline"
              >
                {item.crossword_lang_name} ({item.cnt}問題)
              </div>
              { items.length - 1 !== index && <hr className="border-r border-2 py-2 mx-4" /> } 
            </React.Fragment>
          )
        })
      }
    </div>
  );
}
