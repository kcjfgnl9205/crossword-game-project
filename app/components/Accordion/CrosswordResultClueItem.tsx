'use client';


import { useEffect, useState } from "react";


type Props ={
  index: number;
  item: any
}

export default function CrosswordResultClueItem({ index, item }: Props) {
  const [ clue, setClue ] = useState("");
  useEffect(() => {
    const fetchDataFromDB = () => {
      const fetchedData = item.clue as string;
      const replacedData = fetchedData.replace(/\n/g, '<br>');
      setClue(replacedData);
    };

    fetchDataFromDB();
  }, [item]);

  return (
    <div className="flex flex-col px-4 my-2 md:flex-row md:justify-between">
      <div className="flex flex-col gap-2 md:flex-row md:gap-4">
        <div className="flex-none font-semibold mr-4">
          問題{index + 1}
        </div>
        <div dangerouslySetInnerHTML={{ __html: clue }} />
      </div>
      <div className="flex-none md:ml-4">{item.answer} { item.isCorrect ? "⭕️" : "❌" }</div>
    </div>
  );
}
