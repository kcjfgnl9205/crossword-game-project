'use client';


import { PartAccordion, PartAccordionCategory } from "@/app/components/Accordion";
import { CategoryType } from "@/app/types";
import { useState } from "react";


type Props = {
  item: any;
  category: CategoryType;
}

export default function ListingParts({ item, category }: Props) {
  const [ open, setOpen ] = useState<boolean>(false);

  const header = (
    <div className="font-semibold text-lg md:text-xl">
      {item.name}
    </div>
  )

  const body = (
    <div className="text-md md:text-lg">
      {
        item.chapters?.map((chapter: any) => {
          console.log(chapter)
          return (
            <div
              key={chapter.id}
              className="flex flex-col px-2 py-4 gap-2 border rounded-lg md:border-none md:rounded-none my-1 md:flex-row md:justify-between md:px-10 hover:bg-neutral-100 cursor-pointer"
            >
              <div className="flex flex-col gap-2 md:flex-row md:gap-6">
                <div className="font-semibold">{chapter.name}</div>
                <div>{chapter.crosswords[0].title}</div>
              </div>
              <PartAccordionCategory items={chapter.crosswords} category={category} />
            </div>
          )
        })
      }
    </div>
  )

  return (
    <PartAccordion
      header={header}
      body={body}
      open={open}
      setOpen={() => { setOpen((prev: boolean) => !prev) }}
    />
  )
}
