'use client';

import React, { useState } from "react";
import { PartAccordion } from "@/app/components/Accordion";
import { Button, ButtonPDF } from "@/app/components/htmlTag";
import PdfComponent from "@/app/pdf/PdfComponent";
import { SafeUser } from "@/app/types";


type Props = {
  item: any;
  user: SafeUser;
  onCsvClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onHref: (e: React.MouseEvent<HTMLButtonElement>) => void;
}


export default function UserResultTable({ item, user, onCsvClick, onHref }: Props) {
  const [ open, setOpen ] = useState<boolean>(false);
  const header = (
    <div className="font-semibold text-lg md:text-xl">
      {item.name}
    </div>
  )

  const body = (
    <>
      <div className="flex flex-col gap-1 py-1 md:flex-row">
        <ButtonPDF label={`${item.name}の結果PDF出力`} document={<PdfComponent username={user.username} item={item} />} filename={`${item.name}_${user.username}.pdf`} primary />
        <Button label={`${item.name}の結果CSV出力`} onClick={onCsvClick} primary />
        <Button label={`結果詳細(受講生のマイページ画面と同様)`} onClick={onHref} info />
      </div>
      {
        item.parts?.map((part: any) => {
          return (
            <React.Fragment key={part.id}>
              <div className="font-semibold mt-2 md:text-xl">
                {part.name}
              </div>
              <div className="flex flex-col mb-4 md:flex-row">
                <div className="grow flex flex-col md:flex-row">
                  {
                    part.chapters?.map((chapter: any) => {
                      return (
                        <div className="grow flex flex-row text-center md:flex-col" key={chapter.id}>
                          <div className="px-4 py-2 border bg-cyan-50 w-20 md:w-full">{chapter.name}</div>
                          <div className="flex grow flex-col text-center md:flex-row">
                          {
                            chapter.langs?.map((lang: any) => {
                              return (
                                <div key={lang.id} className="grow flex flex-row md:flex-col">
                                  <div className="px-4 py-2 border bg-cyan-50">{lang.name}</div>
                                  <div className="px-4 py-2 border grow">
                                    {
                                      lang.total_correct_answers
                                      ? <span>{lang.total_correct_answers}問 / {lang.total_questions}問</span>
                                      : <span className="text-rose-500">未実施</span>
                                    }
                                  </div>
                                </div>
                              )
                            })
                          }
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </React.Fragment>
          )
        })
      }
    </>
  )

  return (
    <PartAccordion
      header={header}
      body={body}
      open={open}
      setOpen={() => setOpen((prev: boolean) => !prev)}
    />
  )
}