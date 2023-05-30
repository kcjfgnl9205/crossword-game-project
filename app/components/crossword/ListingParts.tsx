'use client';


import { PartAccordion, PartAccordionCategory } from "@/app/components/Accordion";


type Props = {
  item: any;
  category: any;
}

export default function ListingParts({ item, category }: Props) {
  console.log(item)
  const header = (
    <div className="font-semibold text-lg md:text-xl">
      {item.name}
    </div>
  )

  const body = (
    <div className="text-md md:text-lg">
      {
        item.chapters?.map((chapter: any) => {
          return (
            <div
              key={chapter.id}
              className="flex flex-col px-2 py-4 gap-2 border rounded-lg md:border-none md:rounded-none my-1 md:flex-row md:justify-between md:px-10 hover:bg-neutral-100 cursor-pointer"
            >
              <div className="flex flex-col gap-2 md:flex-row md:gap-6">
                <div className="font-semibold">{chapter.name}</div>
                <div>{chapter.name}</div>
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
    />
  )
}
