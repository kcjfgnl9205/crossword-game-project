'use client';

import Accordion from "../../Accordion/Accordion";
import CrosswordResultClue from "../../Accordion/CrosswordResultClue";


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
        items.map((item) => (
          <CrosswordResultClue
            key={item.id}
            times={item.times}
            items={item.result}
          />
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