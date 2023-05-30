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



export type CategoryType = {
  id: number;
  name: string;
  name_en?: string;
  sorted: number;

  min_cnt?: number;
  cnt?: number;
  disabled?: boolean;
  
  onCreate?: boolean;
  onUpdate?: boolean;
  onDelete?: boolean;
}

export type CategoryChapterType = CategoryType & {
  chapters: Array<ChapterCategoryType>;
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
  minute: number;
  second: number;
  category_id: number;
  category_name: string;
  category_name_en: string;
  part_id: number;
  part_name: string;
  chapter_id: number;
  chapter_name: string;
  lang_id: number;
  lang_name: string;
  lang_name_en: string;
  questions: Record<Direction, Record<string, ClueType>>;
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









export type LangType = {
  id: number;
  name: string;
  name_en: string;
  cnt: number;
}