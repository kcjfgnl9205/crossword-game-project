import { Direction } from "../components/cross/types";

type User = {
  username: string;
  email: string;
}
export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string;
  updatedAt: string;
  authority: boolean;
}

export type InputClueType = {
  id: number,
  clue: string,
  hint: string,
  answer: string,
}

export type InputClueTypeResult = InputClueType & {col: number, row: number, isHorizon: boolean, direction: Direction}



export type LangCategoryType = {
  id: number;
  name: string;
  name_en: string;
}

export type ChapterCategoryType = {
  id: number;
  name: string;
  disabled: boolean;
  flg?: number;  //総合かどうか
  onCreate?: boolean;
  onUpdate?: boolean;
  onDelete?: boolean;
  title?: string;
}

export type PartCategoryType = {
  id: number;
  name: string;
  disabled: boolean;
  sorted: number;
  onCreate?: boolean;
  onUpdate?: boolean;
  onDelete?: boolean;
  chapters: Array<ChapterCategoryType>
}


export type CrosswordQuestionType = {
  id: number;
  number: number;
  clue: string;
  hint: string;
  answer: string;
  col: number;
  row: number;
  direction: Direction;
}

export type CrosswordGameType = {
  id: number;
  title: string;
  time_limit: number;
  part_id: number;
  part_name: string;
  chapter_id: number;
  chapter_name: string;
  lang_id: number;
  lang_name: string;
  lang_name_en: string;
  questions: Record<Direction, Record<string, ClueType>>;
  questions_cnt?: number;
}

export type ClueType = {
  id: number,
  direction: Direction,
  clue: string,
  answer: string,
  hint: string,
  row: number,
  col: number,
  across?: string,
  down?: string,
  number?: string,
  guess?: string,
  score?: number,
}