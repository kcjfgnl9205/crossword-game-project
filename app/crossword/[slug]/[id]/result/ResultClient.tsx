'use client';


import Button from "@/app/components/htmlTag/Button";
import { changeSecondToMinute } from "@/app/utils/utils";
import { useRouter } from "next/navigation";

type Props = {
  params: any;
  searchParams: any;
}

export default function ResultClient({ params, searchParams }:  Props) {
  const time = changeSecondToMinute(searchParams.times);
  const router = useRouter();

  return (
    <div className="flex flex-col gap-4 mx-auto text-center my-40">
      <h2 className="font-semibold text-xl py-2">{searchParams.title}({searchParams.lang})</h2>
      <p>所要時間：{time.minute.toString().padStart(2, "0")}:{time.second.toString().padStart(2, "0")}</p>
      <p>正解：{searchParams.correctCnt}問、誤解：{searchParams.inCorrectCnt}問、ヒント使用：{searchParams.hintCount}回</p>

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