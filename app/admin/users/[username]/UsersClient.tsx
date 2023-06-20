'use client';


import Link from "next/link";
import { useRouter } from "next/navigation";

import { Container, Heading } from "@/app/components/common";
import React, { useCallback } from "react";
import UserResultTable from "@/app/components/admin/result/UserResultTable";
import { SafeUser } from "@/app/types";

type Props = {
  user: SafeUser;
  items: Array<any>;
}

export default function UsersClient({ user, items }: Props) {
  const router = useRouter();
  
  const handlePdfPrint = useCallback((e:React.MouseEvent<HTMLButtonElement>, name: string) => {
    alert(`${name}のデータをPDF出力しました。`);
  }, []);

  const handleCsvPrint = useCallback((e:React.MouseEvent<HTMLButtonElement>, name: string) => {
    alert(`${name}のデータをCSV出力しました。`);
  }, []);

  const moveDetailPage = useCallback((e:React.MouseEvent<HTMLButtonElement>, name: string) => {
    router.push(`/admin/users/${user.username}/${name}`)
  }, [router, user]);


  return (
    <Container>
      <div className="mt-8">
        <Link href="/admin/users" className="text-sm text-neutral-500 hover:underline">&lt;&lt; 以前ページへ戻る</Link>
        <Heading title={`受講生管理、${user.username}`} />
      </div>

      <div className="flex flex-col gap-1">
        {
          items.length === 0
          ? <Heading title="データが存在しません。" center />
          : items.map((item) => {
              return (
                <UserResultTable
                  key={item.id}
                  item={item}
                  onPdfClick={(e) => handlePdfPrint(e, item.name)}
                  onCsvClick={(e) => handleCsvPrint(e, item.name)}
                  onHref={(e) => moveDetailPage(e, item.name_en)}
                />
              )
            })
        }
      </div>
    </Container>
  )
};
