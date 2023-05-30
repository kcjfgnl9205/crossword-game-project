'use client';

import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";

import { Container, Heading, Timer } from "@/app/components/common";
import { CluesData, Direction, UsedCellData } from "@/app/components/cross/types";
import { Button } from "@/app/components/htmlTag";
import CrosswordGame from "@/app/components/crossword/CrosswordGame";
import { CrosswordType } from "@/app/types";
import { changeMinuteToSecond } from "@/app/utils/utils";


type Props = {
  id: string;
  crossword: CrosswordType;
}


export default function Quiz({ id, crossword }: Props) {
  const [ currentTime, setCurrentTime ] = useState<number>(0);
  const [ selectedClue, setSelectedClue ] = useState<Record<string, string> | null>(null);
  
  const router = useRouter();
  const [ onResult, setOnResult ] = useState<boolean>(false);
  
  const [ onHintShow, setOnHintShow ] = useState<boolean>(false);

  // 全ての回答をしたとき
  const onCrosswordComplete = (correct: boolean) => {
    console.log(correct)
    setOnResult(true);
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
  const onSubmit = useCallback(() => {
    if (!onResult) {
      if (confirm("解決していない問題が存在する、提出しますか？")) {
        router.push(`/crossword/${crossword.category.name_en}/${id}/result`);
        // router.push("/quiz/1/result");
      }
    } else {
      if (confirm("提出しますか？")) {
        router.push(`/crossword/${crossword.category.name_en}/${id}/result`);
        // router.push("/quiz/1/result");
      }
    }
  }, [router, crossword, onResult, id]);

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
        <Heading title={`${crossword.title} (${crossword.lang.name})`} subtitle={`${crossword.part.name} ${crossword.chapter.name}`} />

        <div>
          <div>
            所要時間：
            <Timer
              currentTime={currentTime}
              setCurrentTime={setCurrentTime}
              endTime={changeMinuteToSecond(crossword.minute, crossword.second)}
            />
          </div>
          <div>
            進行状況：0問/全20問、ヒント使用：2回
          </div>
        </div>

        <div>
          <CrosswordGame
            lang={crossword.lang.name_en}
            data={crossword.questions}
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
            onClick={onSubmit}
            primary
          />
        </div>
      </div>
    </Container>
  )
}

