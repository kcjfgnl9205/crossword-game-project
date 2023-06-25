'use client';


import React from "react";
import CrosswordResultClueItem from "./CrosswordResultClueItem";


type Props ={
  times: number;
  items: Array<any>;
}

export default function CrosswordResultClueHeader({ times, items }: Props) {
  const isCorrectCnt = items.reduce((acc: any, cur: any) => {
    return [cur.isCorrect ? acc[0] + 1 : acc[0], acc[1] + 1];
  }, [0, 0]);

  return (
    <React.Fragment>
      <div className="flex flex-row justify-between px-2 py-2">
        <div className="font-semibold text-lg">{times}回目</div>
        <div className="font-semibold text-lg">{isCorrectCnt[0]}問題 / {isCorrectCnt[1]}問題</div>
      </div>
        {
          items.map((result: any, index: number) => (
            <CrosswordResultClueItem
              key={result.id}
              index={index}
              item={result}
            />
          ))
        }
    </React.Fragment>
  );
}
