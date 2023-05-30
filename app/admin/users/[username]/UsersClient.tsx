'use client';


import Link from "next/link";
import { useRouter } from "next/navigation";

import { Container, Heading } from "@/app/components/common";
import React, { useCallback } from "react";
import UserResultTable from "@/app/components/admin/result/UserResultTable";
import { sampleResultArr } from "@/app/data/resultSample";

type Props = {
  username: string;
}

export default function UsersClient({ username }: Props) {
  const router = useRouter();
  
  const handlePdfPrint = useCallback((e:React.MouseEvent<HTMLButtonElement>, name: string) => {
    alert(`${name}のデータをPDF出力しました。`);
  }, []);

  const moveDetailPage = useCallback((e:React.MouseEvent<HTMLButtonElement>, name: string) => {
    router.push(`/admin/users/${username}/${name}`)
  }, [router, username]);


  return (
    <Container>
      <div className="mt-8">
        <Link href="/admin/users" className="text-sm text-neutral-500 hover:underline">&lt;&lt; 以前ページへ戻る</Link>
        <Heading title={`受講生管理、${username}`} />
      </div>

      <div className="flex flex-col gap-1">
        {
          sampleResultArr.map((el, index) => {
            return (
              <UserResultTable
                key={index}
                item={el}
                onClick={(e) => handlePdfPrint(e, el.name)}
                onHref={(e) => moveDetailPage(e, el.name_en)}
              />
            )
          })
        }
      </div>
    </Container>
  )
};
