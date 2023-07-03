'use client';

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { Container, Heading, Timer } from "@/app/components/common";
import { ClueTypeOriginal, CluesData, Direction, UsedCellData } from "@/app/components/cross/types";
import { Button } from "@/app/components/htmlTag";
import CrosswordGame from "@/app/components/crossword/CrosswordGame";
import { SafeUser } from "@/app/types";
import { calculateScore, changeMinuteToSecond } from "@/app/utils/utils";
import { CrosswordProviderImperative } from "@/app/components/cross/CrosswordProvider";
import axios from "axios";
import qs from "query-string";
import { CrosswordBoardCreate, convertToResultArray } from "@/app/utils/crosswordutil";
import useAlertModal from "@/app/hooks/useAlert";
import AlertModal from "@/app/components/modal/AlertModal";

type Props = {
  currentUser?: SafeUser;
  crossword: any;
}


export default function Quiz({ currentUser, crossword }: Props) {
  // クロスワード問題数
  const totalCount = crossword.questions.length;
  // 進行状況の問題数
  const [ progressCount, setProgressCount ] = useState<number>(0);
  // ヒント使用状況
  const [ hintCount, setHintCount ] = useState<number>(0);

  const router = useRouter();
  const params = useSearchParams();
  const alertModal = useAlertModal();
  const [ alertInfo, setAlertInfo ] = useState<any>({ 
    title: "",
    onSubmit: () => {},
    onSubmitLabel: ""
  });
  const crosswordRef = useRef<CrosswordProviderImperative>(null);
  const [ currentTime, setCurrentTime ] = useState<number>(0);
  const [ selectedClue, setSelectedClue ] = useState<Record<string, string | ClueTypeOriginal> | null>(null);
  
  const [ onHintShow, setOnHintShow ] = useState<boolean>(false);
  const [ data, setData ] = useState(null);
  const [ isSubmitted, setIsSubmitted ] = useState<boolean>(false);

  // Timer
  const [ isRunning, setIsRunning ] = useState(true);

  useEffect(() => {
    const result = CrosswordBoardCreate(crossword.questions)
    if (!result) {
      alert("クロスワードゲーム生成に失敗しました。");
      return;
    }

    const newData = convertToResultArray(result);
    setData(newData);
  }, [crossword]);

  useEffect(() => {
    let intervalId: any;

    if (isRunning) {
      intervalId = setInterval(() => {
        setCurrentTime((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);
  
  const handlePause = useCallback(() => { setIsRunning(false); }, []);
  const handleResume = useCallback(() => { setIsRunning(true); }, []);

  const moveToPath = useCallback(() => {
    if (crosswordRef.current) {
      let currentQuery = {};
      if (params) {
        currentQuery = qs.parse(params.toString());
      }

      let correctCnt = 0;
      let inCorrectCnt = 0;
      const obj = crosswordRef.current.isResultClues();
      for (const key of Object.keys(obj)) {
        const items = obj[key];
        for (const itemKey of Object.keys(items)) {
          const item = items[itemKey];
          if (item.correct) {
            correctCnt++;
          } else {
            inCorrectCnt++;
          }
        }
      }

      const updatedQuery: any = {
        ...currentQuery,
        times: currentTime,
        correctCnt: correctCnt,
        inCorrectCnt: inCorrectCnt,
        hintCount: hintCount,
        title: crossword.title,
        lang: crossword.category.langs[0].name
      }

      const url = qs.stringifyUrl({
        url: `/crossword/${crossword.category.name_en}/${crossword.id}/result`,
        query: updatedQuery
      }, { skipNull: true });

      router.push(url);
    }
  }, [crossword, router, currentTime, hintCount, params]);


  const onSubmitResult = useCallback(async () => {

    try {
      if (currentUser && crosswordRef.current) {
        let correctCnt = 0;
        const obj = crosswordRef.current.isResultClues();
        for (const key of Object.keys(obj)) {
          const items = obj[key];
          for (const itemKey of Object.keys(items)) {
            const item = items[itemKey];
            if (item.correct) {
              correctCnt++;
            }
          }
        }

        const response = await axios.post(`/api/crossword/${crossword.id}`, {
          crossword: {
            crossword_id: crossword.id,
            title: crossword.title,
            time_limit: changeMinuteToSecond(crossword.minute, crossword.second),
            u_time_limit: currentTime,
            u_score: correctCnt * calculateScore(totalCount),
            category_id: crossword.category.id,
            part_id: crossword.category.parts[0].id,
            chapter_id: crossword.category.parts[0].chapters[0].id,
            lang_id: crossword.category.langs[0].id,
            answers: crosswordRef.current.isResultClues(),
            user_id: currentUser.id
          },
          withCredentials: true,
        });

        if (response.status === 200) {
          return true;
        }
      }
    } catch(error: any) {
      throw error;
    }
  }, [currentUser, crossword, currentTime, totalCount])

  const submitResult = useCallback(async () => {
    try {
      if (currentUser) {
        await onSubmitResult();
      }
      moveToPath();
    } catch (error: any) {
      alert("error: " + error);
    }
  }, [currentUser, moveToPath, onSubmitResult]);

  useEffect(() => {
    if (!isRunning && !alertModal.isOpen) {
      alertModal.onOpen();
    }
  }, [alertModal, isRunning])
  
  // 提出ボタン押下する
  const onSubmit = useCallback(async () => {
    handlePause();
    if (crosswordRef.current) {
      const msg = crosswordRef.current.isCrosswordCorrect() ? "提出しますか？" : "解決していない問題が存在します。\n提出しますか？";
      setAlertInfo((prev: any) => { 
        return { 
          ...prev,
          title: msg,
          onSubmitLabel: "提出",
          onSubmit: () => {
            submitResult();
            handleResume();
          },
          secondaryAction: () => handleResume(),
          secondaryActionLabel: "取消"
        } 
      })
    }
  }, [handlePause, handleResume, crosswordRef, submitResult, setAlertInfo]);

  // 全ての回答をしたとき
  const onCrosswordComplete = useCallback(async (correct: boolean) => {
    if (isSubmitted) {
      return;
    }
    
    if (correct) {
      setIsSubmitted(true);
      onSubmit();
    }
  }, [onSubmit, isSubmitted, setIsSubmitted]);

  
  // １つの問題に回答をした時(正解の場合)
  const onAnswerCorrect = useCallback((direction: Direction, number: string, answer: string) => {
    console.log("정답", direction, number, answer);
  }, []);
  
  
  // １つの問題に回答をした時(誤解の場合)
  const onAnswerIncorrect = useCallback((direction: Direction, number: string, answer: string) => {
    console.log("오답", direction, number, answer);
  }, []);

  // 回答を入力したとき
  const onAnswerComplete = useCallback((direction: Direction, number: string, correct: boolean, answer: string) => {
    console.log(correct, answer)
  }, []);

  // ヒントを選択したとき
  const onHintSelected = useCallback((direction: Direction, number: string, onHint: boolean) => { 
    if (!onHint) {
      setHintCount((prev: number) => ++prev)
    }
  }, []);

  // モバイル：問題を選択すると問題を表示する
  const onClueSelected = useCallback((direction: Direction, info: ClueTypeOriginal) => {
    setIsSubmitted(false);
    setSelectedClue({direction, info});
  }, [setIsSubmitted]);

  const onCellSelected = useCallback((cellData: UsedCellData, direction: Direction, info: ClueTypeOriginal) => {
    setSelectedClue({direction, info});
  }, [])

  const onCellChange = useCallback((row: number, col: number, char: string, currentDirection: Direction, currentNumber: string, clues: CluesData | undefined) => {
    setProgressCount((prev: number) => {
      prev = 0;
      for (const clue in clues) {
        const directionKey = clue as Direction;
        const direction = clues[directionKey];
        prev += direction.filter(el => {
          if (el.userAnswer && el.userAnswer !== "")
          return el;
        }).length;
      }
      return prev;
    })
  }, []);



  return (
    <Container>
      <AlertModal
        isOpen={alertModal.isOpen}
        onClose={alertModal.onClose}
        title={alertInfo.title}
        onSubmit={alertInfo.onSubmit}
        onSubmitLabel={alertInfo.onSubmitLabel}
        secondaryAction={alertInfo?.secondaryAction}
        secondaryActionLabel={alertInfo?.secondaryActionLabel}
        primary
      />
      
      <div className="py-4">
        <Heading title={`${crossword.title} (${crossword.category.langs[0].name})`} subtitle={`${crossword.category.parts[0].name} ${crossword.category.parts[0].chapters[0].name}`} />

        <div>
          <div>
            所要時間：
            <Timer
              currentTime={currentTime}
              endTime={changeMinuteToSecond(crossword.minute, crossword.second)}
            />
          </div>
          <div>
            進行状況：{progressCount}問 / 全{totalCount}問、ヒント使用：{hintCount}回
          </div>
        </div>

        <div>
          {
            data &&
            <CrosswordGame
              ref1={crosswordRef}
              lang={crossword.category.langs[0].name_en}
              data={data}
              onAnswerComplete={onAnswerComplete}
              onAnswerCorrect={onAnswerCorrect}
              onCrosswordComplete={onCrosswordComplete}
              onClueSelected={onClueSelected}
              onCellSelected={onCellSelected}
              onHintSelected={onHintSelected}
              onCellChange={onCellChange}
              onAnswerIncorrect={onAnswerIncorrect}

              onHintShow={onHintShow}
              setOnHintShow={setOnHintShow}
              selectedClue={selectedClue}
            />
          }
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

