'use client';


import Button from "@/app/components/htmlTag/Button";
import { changeSecondToMinute } from "@/app/utils/utils";
import { useRouter, useSearchParams } from "next/navigation";

type Props = {
  params: any;
}

export default function ResultClient({ params }:  Props) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const time = changeSecondToMinute(Number(searchParams?.get("times") || 0));
  const title = searchParams?.get("title");
  const lang = searchParams?.get("lang");
  const correctCnt = searchParams?.get("correctCnt");
  const inCorrectCnt = searchParams?.get("inCorrectCnt");
  const hintCount = searchParams?.get("hintCount");

  return (
    <div className="flex flex-col gap-4 mx-auto text-center my-40">
      <h2 className="font-semibold text-xl py-2">{title}({lang})</h2>
      <p>所要時間：{time.minute.toString().padStart(2, "0")}:{time.second.toString().padStart(2, "0")}</p>
      <p>正解：{correctCnt}問、誤解：{inCorrectCnt}問、ヒント使用：{hintCount}回</p>

      <div className="w-40 mx-auto py-8">
        <Button
          label="他の問題解決"
          onClick={() => router.push(`/crossword/${params.slug}`)}
          outline
        />
      </div>
    </div>
  )
}