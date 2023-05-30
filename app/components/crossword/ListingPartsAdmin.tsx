'use client';


import { PartAccordion } from "@/app/components/Accordion";
import { Button } from "../htmlTag";


type Props = {
  item: any;
  isLoading: boolean;
  handleDelete?: (title: string, id: number) => void;
  handleUpdateRouter?: (id: number) => void;
  handleResultRouter?: (id: number) => void;
}

export default function ListingPartsAdmin({ item, isLoading, handleDelete, handleUpdateRouter, handleResultRouter }: Props) {
  const header = (
    <div className="font-semibold text-lg md:text-xl">
      {item.name}
    </div>
  )

  const body = (
    <div className="text-md md:text-lg">
      {
        item.chapters.map((chapter: any) => {
          return (
            chapter.crosswords.length === 0 
            ? <div
                key={chapter.id}
                className="flex py-2 gap-2 md:pl-10"
              >
                <div className="font-semibold w-20">{chapter.name}</div>
                <div className="grow text-center">クロスワード問題が存在しません。</div>
              </div>
            : chapter.crosswords.map((crossword: any) => {
                return (
                  <div
                    key={crossword.id}
                    className="flex flex-col py-2 gap-2 md:flex-row md:justify-between md:pl-10 hover:bg-neutral-100 cursor-pointer"
                  >
                    <div className="flex flex-col md:flex-row">
                      <div className="font-semibold mr-8">
                        {chapter.name}、{crossword.lang_name}
                      </div>
                      <div>
                        {crossword.title ? `${crossword.title} (${crossword.cnt}問題)` : `${chapter.name}問題は存在しません。`}
                      </div>
                    </div>

                    <div className="flex flex-row items-center justify-between gap-1 w-full md:flex-row md:gap-4 md:w-60">
                      <Button label="修正" onClick={() => handleUpdateRouter?.(crossword.id)} small primary disabled={isLoading} />
                      <Button label="削除" onClick={() => handleDelete?.(`(${crossword.lang_name}) ${item.name} ${chapter.name} ${crossword.title}`, crossword.id)} small error disabled={isLoading} />
                      <Button label="結果" onClick={() => handleResultRouter?.(crossword.id)} small info disabled={isLoading} />
                    </div>
                  </div>
                )
              })
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
