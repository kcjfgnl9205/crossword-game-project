'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Container, Heading, Timer } from "@/app/components/common";
import { CluesData, Direction, UsedCellData } from "@/app/components/cross/types";
import { Button } from "@/app/components/htmlTag";
import CrosswordGame from "@/app/components/crossword/CrosswordGame";


type Props = {
  id: string;
  item: any;
}


export default function Quiz({ id, item }: Props) {
  const [ currentTime, setCurrentTime ] = useState<number>(0);
  const [ selectedClue, setSelectedClue ] = useState<Record<string, string> | null>(null);
  
  const router = useRouter();
  const [ onResult, setOnResult ] = useState<boolean>(false);
  
  const [ onHintShow, setOnHintShow ] = useState<boolean>(false);

  // 全ての回答をしたとき
  const onCrosswordComplete = (correct: boolean) => {
    setOnResult(correct);
  }
  // １つの問題に回答をした時
  const onAnswerCorrect = (direction: Direction, number: string, answer: string) => {
    // console.log("onAnswerComplete", correct)
    // setNumber(prev => correct ? ++prev : --prev);
    console.log("ok")
    // setNumber(prev => ++prev);
  }
  const onAnswerComplete = (direction: Direction, number: string, correct: boolean, answer: string, userAnswer: string) => {
    console.log(correct, answer, userAnswer)
  }
  // 提出ボタン押下する
  const onSubmit = () => {
    if (!onResult) {
      if (confirm("間違っている問題が存在する、このまま提出しますか？")) {
        // router.push("/quiz/1/result");
      }
    } else {
      if (confirm("提出しますか？")) {
        // router.push("/quiz/1/result");
      }
    }
  }

  //クロスワードinputタグクリック
  const onCellSelected = (cellData: UsedCellData, direction: Direction) => {
    
    // const filteredData = Object.fromEntries(
    //   Object.entries(data?[direction]).filter(
    //     ([key, value]) => key === cellData[direction]// && value.row === cellData.row && value.col === cellData.col
    //   )
    // );
    // const selectedData: any = Object.values(filteredData)?.[0];
    // setSelectedClue({ ...selectedData, direction, across: cellData["across"] || "", down: cellData["down"] || "" })

    // setOnHintShow(false);
  }

  // モバイル：問題を選択すると問題を表示する
  const onClueSelected = (direction: Direction, number: string) => {
    setSelectedClue({ [direction]: number });
  }

  const onCellChange = (row: number, col: number, char: string, currentDirection: Direction, currentNumber: string, clues: CluesData | undefined) => {
    // console.log(data[currentDirection][currentNumber].answer)
    // setData(prev => {
    //     const clueInfo = prev[currentDirection][currentNumber];
    //     if (clueInfo) {
    //       if (char === "") {
    //         clueInfo.userAnswer = clueInfo.userAnswer.slice(0, -1);
    //       } else {
    //         clueInfo.userAnswer = clueInfo.userAnswer + char;
    //       }
    //     }
    //     console.log(clueInfo)
    //     return prev;
    //   }
    // )
  }

  return (
    <Container>
      <div className="py-4">
        <Heading title={`${item.title} (${item.lang_name})`} subtitle={`${item.part_name} ${item.chapter_name}`} />

        <div>
          <div>
            所要時間：
            <Timer
              currentTime={currentTime}
              setCurrentTime={setCurrentTime}
              endTime={item.time_limit}
            />
          </div>
          <div>
            進行状況：0問/全{item.question_cnt}問、ヒント使用：2回
          </div>
        </div>

        <div>
          <CrosswordGame
            lang={item.lang_name_en}
            data={item.questions}
            onAnswerComplete={onAnswerComplete}
            onAnswerCorrect={onAnswerCorrect}
            onCrosswordComplete={onCrosswordComplete}
            onCellSelected={onCellSelected}
            onClueSelected={onClueSelected}
            onCellChange={onCellChange}

            onHintShow={onHintShow}
            setOnHintShow={setOnHintShow}
            selectedClue={selectedClue}
          />
        </div>

        <div className="py-4 md:w-40">
          <Button
            label="提出する"
            onClick={() => router.push(`/crossword/${id}/result`)}
            primary
          />
        </div>
      </div>
    </Container>
  )
}

