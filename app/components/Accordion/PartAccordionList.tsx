'use client';


import React, { useState } from "react";
import Accordion from "./Accordion";
import PartAccordion from "./PartAccordion";


type Props ={
  item: any;
}

export default function PartAccordionList({ item }: Props) {
  const [ open, setOpen ] = useState<boolean>(false);

  const header = <div className="font-semibold text-lg md:text-xl">{item.name}</div>;
  const body = (
    <>
      {
        item.chapters.map((chapter: any) => {
          return (
            <React.Fragment key={chapter.id}>
            {
              chapter.langs?.map((lang: any, i: number) => {
                return (
                  <Accordion
                    key={i}
                    header={
                      <div key={chapter.id} className="relative flex flex-col px-2 py-2 gap-1 md:flex-row md:gap-4 md:px-12">
                        <div className="font-semibold">{chapter.name}、{lang.name}</div>
                        <div className="font-semibold absolute right-10">{lang.answers.length}回目</div>
                        <div>{chapter.title}</div>
                      </div>
                    }
                    body={
                      <>
                        {
                          lang.answers.map((answer: any, ind: number) => {
                            // 正解問題数, 全体問題数を計算する
                            
                            const isCorrectCnt = answer.result?.reduce((acc: any, cur: any) => {
                              return [cur.isCorrect ? acc[0] + 1 : acc[0], acc[1] + 1];
                            }, [0, 0]);
                            return (
                              <div key={ind} className="px-2 py-2 md:px-20">
                                <div className="flex flex-row justify-between">
                                  <div className="font-semibold pb-2 text-lg">{answer.times}回目</div>
                                  <div className="font-semibold pb-2 text-lg">{isCorrectCnt[0]}問題 / {isCorrectCnt[1]}問題</div>
                                </div>
                                <div>
                                  {
                                    answer.result?.map((result: any, index: number) => {
                                      return (
                                        <div key={result.id} className="flex flex-col px-4 my-4 md:flex-row md:justify-between">
                                          <div className="flex flex-col gap-1 md:flex-row md:gap-4">
                                            <div className="flex-none font-semibold mr-4">
                                              問題{index + 1}
                                            </div>
                                            <div>{result.clue}</div>
                                          </div>
                                          <div className="flex-none md:ml-4">{result.answer} { result.isCorrect ? "⭕️" : "❌" }</div>
                                        </div>
                                      )
                                    })
                                  }
                                </div>
                              </div>
                            )
                          })
                        }
                      </>
                    }
                  />
                )
              })
            }
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
  );
}
