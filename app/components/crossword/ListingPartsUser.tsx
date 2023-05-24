'use client';


import { SafeUser } from "@/app/types";
import { PartAccordion, PartAccordionCategory } from "@/app/components/Accordion";


type Props = {
  currentUser?: SafeUser | null
  item: any;
}

export default function ListingPartsUser({ item }: Props) {
  const header = (
    <div className="font-semibold text-lg md:text-xl">
      {item.part_name}
    </div>
  )

  const body = (
    <div className="text-md md:text-lg">
      {
        item.chapters[0].chapter_id === null
        ? <div className="text-center py-4 font-semibold md:py-8">{item.part_name}問題は存在しません。</div>
        : item.chapters?.map((chapter: any) => {
            return (
              <div
                key={chapter.chapter_id}
                className="flex flex-col py-2 gap-2 md:flex-row md:justify-between md:pl-10 hover:bg-neutral-100 cursor-pointer"
              >
                <div className="flex flex-row">
                  <div className="font-semibold mr-8">
                    {chapter.chapter_name}
                  </div>
                  <div>
                    {chapter.crossword_name ? chapter.crossword_name : `${chapter.chapter_name}問題は存在しません。`}
                  </div>
                </div>
                <div>
                  10問題 / 20問題
                </div>
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
