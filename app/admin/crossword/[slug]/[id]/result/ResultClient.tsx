'use client';


import Container from "@/app/components/common/Container";
import Heading from "@/app/components/common/Heading";
import RankListing from "@/app/components/admin/result/RankListing";
import Link from "next/link";
import { CategoryType } from "@/app/types";


const rankData = [
  {rank: 1, username: "admin1", score: 300, timer: 200},
  {rank: 2, username: "admin2", score: 298, timer: 200},
  {rank: 3, username: "admin3", score: 297, timer: 300},
  {rank: 4, username: "admin4", score: 295, timer: 300},
  {rank: 5, username: "admin5", score: 294, timer: 300},
  {rank: 6, username: "admin6", score: 291, timer: 312},
  {rank: 7, username: "admin7", score: 283, timer: 333},
  {rank: 8, username: "admin8", score: 283, timer: 384},
  {rank: 9, username: "admin9", score: 282, timer: 400},
  {rank: 10, username: "admin10", score: 260, timer: 411},
]

const subItems: Array<any> = [
  {questionNo: 1, direction: "across", question: "JavaのコンパイラはJavaソースコードを_______コードに変換します。", answer: "bytecode", userAnswer: "bytecode"},
  {questionNo: 2, direction: "down", question: "Javaでは、オブジェクトを作成するための特別なキーワードがあります。_______。", answer: "new", userAnswer: "new"},
  {questionNo: 3, direction: "down", question: "Javaのクラスはオブジェクトを作成するための_______です。", answer: "blueprint", userAnswer: "blueprint"},
  {questionNo: 4, direction: "across", question: "Javaは_______メモリ管理を使用して、メモリを自動的に解放します。", answer: "garbage", userAnswer: "garbage"},
  {questionNo: 5, direction: "down", question: "Javaプログラムは_______によって実行されます。これはバイトコードを解釈します。", answer: "jvm", userAnswer: "jvn"},
]

type Props = {
  category: CategoryType;
}

export default function ResultClient({ category }: Props) { 
  return (
    <Container>
      <div className="py-4">
        <Link href={`/admin/crossword/${category.name_en}`} className="text-sm text-neutral-500 hover:underline">&lt;&lt; 以前ページへ戻る</Link>
        <Heading title="JAVA基礎（英語版）" />

        <div className="flex flex-col gap-0.5">
        {
          rankData.map((data, index) => (
            <RankListing
              key={index}
              rank={data.rank}
              username={data.username}
              score={data.score}
              timer={data.timer}
              subItems={subItems}
            />
          ))
        }
        </div>
      </div>
    </Container>
  )
}
