'use client';


import { changeSecondToMinute } from "../../utils/utils";


type Props ={
  currentTime: number;
  endTime: number;
}

export default function Timer({ currentTime , endTime }: Props) {
  const current = changeSecondToMinute(currentTime);
  const end = changeSecondToMinute(endTime);

  return (
    <>
      <span className={`${currentTime > endTime ? "text-rose-500" : "text-neutral-500"}`}>
        {`${current.minute.toString().padStart(2, "0")}:${current.second.toString().padStart(2, "0")}`}
      </span>
      <span>
        / {`${end.minute.toString().padStart(2, "0")}:${end.second.toString().padStart(2, "0")}`}
      </span>
    </>
  )
}
