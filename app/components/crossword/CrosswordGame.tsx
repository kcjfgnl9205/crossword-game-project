'use client';

import CrosswordGrid from "../cross/CrosswordGrid";
import CrosswordProvider, { CrosswordProviderImperative } from "../cross/CrosswordProvider";
import DirectionClues from "../cross/DirectionClues";
import MobileOption from "../cross/MobileOption";
import { CluesData, Direction, UsedCellData } from "../cross/types";


type Props = {
  ref1?:React.ForwardedRef<CrosswordProviderImperative>;
  lang: any;
  data: any;
  onAnswerComplete?: (direction: Direction, number: string, correct: boolean, answer: string) => void;
  onAnswerCorrect?: (direction: Direction, number: string, answer: string) => void;
  onAnswerIncorrect?: (direction: Direction, number: string, answer: string) => void;
  onCrosswordComplete?: (correct: boolean) => void;
  onCellSelected?: (cellData: UsedCellData, direction: Direction) => void;
  onClueSelected?: (direction: Direction, number: string) => void;
  onHintSelected?: (direction: Direction, number: string, onHint: boolean) => void;
  onCellChange?: (row: number, col: number, char: string, currentDirection: Direction, currentNumber: string, clues: CluesData | undefined) => void;

  onHintShow?: boolean;
  setOnHintShow?: React.Dispatch<React.SetStateAction<boolean>>;
  selectedClue?: any;
}

export default function CrosswordGame({
  ref1,
  lang,
  data,
  onAnswerComplete,
  onAnswerCorrect,
  onAnswerIncorrect,
  onCrosswordComplete,
  onCellSelected,
  onClueSelected,
  onHintSelected,
  onCellChange,

  onHintShow,
  setOnHintShow,
  selectedClue
}: Props) {
  const selectedDirection = selectedClue && Object.keys(selectedClue)[0] as string;
  const selectedNumber = selectedClue && Object.values(selectedClue)[0] as string;
  return (
    <CrosswordProvider
      ref={ref1}
      useStorage={false}
      lang={lang}
      data={data}
      onAnswerComplete={onAnswerComplete}
      onAnswerCorrect={onAnswerCorrect}
      onAnswerIncorrect={onAnswerIncorrect}
      onCrosswordComplete={onCrosswordComplete}
      onCellSelected={onCellSelected}
      onClueSelected={onClueSelected}
      onHintSelected={onHintSelected}
      onCellChange={onCellChange}
    >
      <div className="flex flex-col gap-2 md:grid md:grid-flow-row-dense md:grid-cols-2 md:gap-4">
        <CrosswordGrid />
        <div className="flex flex-col gap-2 md:gap-4">
          {/* モバイルオプション */}
          {
            selectedClue &&
            <MobileOption
              onHintShow={onHintShow}
              setOnHintShow={setOnHintShow}
              item={data[selectedDirection][selectedNumber]}
            />
          }

          {/* PC、モバイルオプション */}
          <div className="flex-none">
            <DirectionClues direction="across" label="よこ問題" />
            <DirectionClues direction="down" label="たて問題" />
          </div>
        </div>
      </div>
    </CrosswordProvider>
  )
}