import { InputClueType, InputClueTypeResult } from "../types";


// 秒を分, 秒に変更する
export const changeSecondToMinute = (seconds: number): any => {
  let m = Math.floor(seconds / 60);
  let s = seconds % 60;
  
  return { minute: m, second: s }
}

// 分：秒を秒をに変更する
export const changeMinuteToSecond = (minute: number, seconds: number): number => {
  return (minute * 60 ) + seconds;
}


export function calculateScore(numQuestions: number): number {
  const maxScore = 100; // 満点
  let scorePerQuestion: number = 0;

  if (numQuestions === 0) {
    scorePerQuestion = 0; // 問題がない場合
  } else {
    scorePerQuestion = Math.floor(maxScore / numQuestions); // 点数計算
  }

  return scorePerQuestion;
}