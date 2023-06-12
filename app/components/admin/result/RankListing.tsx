'use client';


import Accordion from "../../Accordion/Accordion";


type Props = {
  username: string;
  items: Array<any>;
}


export default function CrosswordResult({username, items}: Props) {
  const maxObjArr = items.reduce( (prev, value) => {
    return prev.times >= value.times ? prev : value
  });

  const header = (
    <div className="flex flex-row justify-between py-1 px-2 gap-1 hover:bg-neutral-100 cursor-pointer text-sm md:text-xl">
      <div className="flex-auto">{username}</div>
      <div className="w-30 text-center">{maxObjArr.times}回目</div>
    </div>
  )

  const body = (
    <>
      {
        items.map((item, index) => {
          return (
            <div key={item.id} className="text-sm md:text-lg">
              <div className="font-semibold p-1 md:p-2">{item.times}回目</div>
              {
                item.result.map((answer: any, index: number) => {
                  return (
                    <div key={answer.id} className="flex flex-col px-4 my-4 md:flex-row md:justify-between">
                      <div className="flex flex-col gap-1 md:flex-row md:gap-4">
                        <div className="flex-none font-semibold mr-4">
                          問題{index + 1}
                        </div>
                        <div>{answer.clue}</div>
                      </div>
                      <div className="flex-none md:ml-4">{answer.answer} { answer.isCorrect ? "⭕️" : "❌" }</div>
                    </div>
                  )
                })
              }
            </div>
          )
        })
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