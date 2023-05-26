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
      {item.part_name}
    </div>
  )

  const body = (
    <div className="text-md md:text-lg">
      {
        item.chapters[0].crossword_name === null
        ? <div className="text-center py-4 font-semibold md:py-8">{item.part_name}問題は存在しません。</div>
        : item.chapters?.map((chapter: any) => {
            return (
              chapter.questions.map((question: any) => {
                  return (
                    <div
                      key={question.crossword_id}
                      className="flex flex-col py-2 gap-2 md:flex-row md:justify-between md:pl-10 hover:bg-neutral-100 cursor-pointer"
                    >
                      <div className="flex flex-row">
                        <div className="font-semibold mr-8" >
                          {chapter.chapter_name}
                        </div>
                        <div>
                          {chapter.crossword_name ? chapter.crossword_name : `${chapter.chapter_name}問題は存在しません。`}
                        </div>
                      </div>

                      <div className="flex flex-row items-center justify-between gap-2 md:flex-row md:gap-4">
                        <div>
                          {question.crossword_lang_name} ({question.cnt}問題)
                        </div>
                        <div>
                          <div className={`flex flex-row gap-2 py-4 md:gap-4 w-60`}>
                            <Button label="修正" onClick={() => handleUpdateRouter?.(question.crossword_id)} small primary disabled={isLoading} />
                            <Button label="削除" onClick={() => handleDelete?.(`${item.part_name} ${chapter.chapter_name} ${chapter.crossword_name}`, question.crossword_id)} small error disabled={isLoading} />
                            <Button label="結果" onClick={() => handleResultRouter?.(question.crossword_id)} small info disabled={isLoading} />
                          </div>
                        </div>
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
