'use client';

import { useEffect } from "react";
import { changeSecondToMinute } from "../../utils/utils";



type Props ={
  currentTime: number;
  setCurrentTime: React.Dispatch<React.SetStateAction<number>>;
  endTime: number;
}

export default function Timer({ currentTime, setCurrentTime, endTime }: Props) {
  const current = changeSecondToMinute(currentTime);
  const end = changeSecondToMinute(endTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [setCurrentTime]);


  return (
    <>
      <span className={`${currentTime > endTime ? "text-rose-500" : "text-neutral-500"}`}>{`${current.minute.toString().padStart(2, "0")}:${current.second.toString().padStart(2, "0")}`}</span> / {`${end.minute.toString().padStart(2, "0")}:${end.second.toString().padStart(2, "0")}`}
    </>
  )
}
