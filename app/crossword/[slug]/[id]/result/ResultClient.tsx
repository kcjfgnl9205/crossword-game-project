'use client';

import Button from "@/app/components/htmlTag/Button";
import { useRouter } from "next/navigation";

type Props = {
  id?: string;
}

export default function ResultClient({ id }:  Props) {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-4 mx-auto text-center my-40">
      <h2 className="font-semibold text-xl py-2">JAVA基礎（英語版）</h2>
      <p>所要時間：03:12</p>
      <p>正解：16問、誤解：4問、ヒント使用：3回</p>
      <p>ランキング：12名 / 27名</p>

      <div className="w-40 mx-auto py-8">
        <Button
          label="他の問題解決"
          onClick={() => router.push("/")}
          outline
        />
      </div>
    </div>
  )
}