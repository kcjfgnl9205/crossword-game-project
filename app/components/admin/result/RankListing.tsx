'use client';

import { changeSecondToMinute } from "@/app/utils/utils";
import Accordion from "../../Accordion/Accordion";


type Props = {
  rank: number;
  username: string;
  score: number;
  timer: number;
  subItems: Array<any>;
}


export default function CrosswordResult({rank, username, score, timer, subItems}: Props) {

  const header = (
    <div className="flex flex-row justify-between py-1 px-2 gap-1 hover:bg-neutral-100 cursor-pointer text-sm md:text-xl">
      <div className="w-12">{rank}等</div>
      <div className="flex-auto">{username}</div>
      <div className="w-20 text-center">{score}点</div>
      <div className="w-20 text-center">{}</div>
    </div>
  )

  const body = (
    <>
      {
        ["across", "down"].map((direction, index) => (
          <div key={index} className="text-sm md:text-lg">
            <div className="font-semibold p-1 md:p-2">{direction === "across" ? "よこ" : "たて"}問題</div>
            {
              subItems.filter((el2, x) => el2.direction === direction)
                      .map((el, i) => {
                        return (
                          <div className="flex flex-col justify-between py-2 px-4 gap-2 md:flex-row" key={i}>
                            <div className="flex-auto">{el.questionNo}. {el.question}</div>
                            <div className="flex flex-row gap-2 text-left md:text-center md:flex-row-reverse">
                              <div>{el.userAnswer === el.answer ? "⭕️" : "❌"}</div>
                              <div>{el.userAnswer}</div>
                              <div>（{el.answer}）</div>
                            </div>
                          </div>
                          )
                        })
            }
          </div>
        ))
      }
    </>
  )

  return (
    <Accordion
      header={header}
      body={body}
    />
  )
}