'use client';


import React from "react";
import Accordion from "./Accordion";
import PartAccordion from "./PartAccordion";


type Props ={
  item: any;
}

export default function PartAccordionList({ item }: Props) {
  const header = <div className="font-semibold text-lg md:text-xl">{item.name}</div>;
  const body = (
    <>
      {
        item.chapters.map((chapter: any) => {
          return (
            <React.Fragment key={chapter.id}>
            {
              chapter.lang?.filter((lang: any) => lang.score !== null)
                            .map((lang: any, i: number) => {
                return (
                  <Accordion
                    key={i}
                    header={
                      <div key={chapter.id} className="flex flex-col px-2 py-2 gap-1 md:flex-row md:gap-4 md:px-12">
                        <div>{chapter.name}</div>
                        <div>{chapter.title} ({lang.name})</div>
                      </div>
                    }
                    body={
                      <>
                        {
                          lang.answers.map((answer: any, ind: number) => {
                            return (
                              <div key={ind} className="px-2 py-2 md:px-20">
                                <div className="flex flex-row justify-between">
                                  <div className="font-semibold pb-2 text-lg">{answer.times}回目</div>
                                  <div className="font-semibold pb-2 text-lg">{answer.score}点 ({answer.correctCnt}問題 / {answer.totalCnt}問題)</div>
                                </div>
                                <div>
                                  {
                                    answer.result?.map((result: any) => {
                                      return (
                                        <div key={result.id} className="flex flex-col px-4 my-4 md:flex-row md:justify-between">
                                          <div className="flex flex-col gap-1 md:flex-row md:gap-4">
                                            <div className="font-semibold">
                                              {result.direction === "across" ? "よこ" : "たて"}問題{result.number}
                                            </div>
                                            <div>{result.clue}</div>
                                          </div>
                                          <div>{result.answer} { result.isCorrect ? "⭕️" : "❌" }</div>
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
    />
  );
}
