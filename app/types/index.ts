import { Direction } from "../components/cross/types";

type User = {
  id: number;
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

export type CategoryType = {
  id: number;
  name: string;
  name_en: string;
  sorted: number;
  min_cnt: number;
}

export type PartType = {
  id: number;
  name: string;
  sorted: number;
}

export type ChapterType = {
  id: number;
  name: string;
  sorted: number;
  flg: number;
}

export type LangType = {
  id: number;
  name: string;
  name_en: string;
  cnt?: number;
}

export type CrosswordType = {
  id: number;
  title: string;
  minute: number;
  second: number;
  category: CategoryType;
  part: PartType;
  chapter: ChapterType;
  lang: LangType;
  questions: Record<Direction, Record<string, ClueType>>;
}

export type InputClueType = {
  id: number,
  clue: string,
  hint: string,
  answer: string,
}

export type InputClueTypeResult = InputClueType & {
  col: number,
  row: number,
  isHorizon: boolean,
  direction: Direction
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