'use client';


import React from "react";


type Props ={
  chapterName: string;
  langName: string;
  times: number;
  title: string
}

export default function CrosswordResultTitle({ chapterName, langName, times, title }: Props) {
  return (
    <div className="relative flex flex-col px-2 py-2 gap-1 md:flex-row md:gap-4 md:px-12">
      <div className="font-semibold">{chapterName}、{langName}</div>
      <div className="font-semibold absolute right-10">{times}回目</div>
      <div>{title}</div>
    </div>
  );
}
