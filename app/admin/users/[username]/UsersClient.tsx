'use client';


import Link from "next/link";
import { useRouter } from "next/navigation";

import { Container, Heading } from "@/app/components/common";
import React, { useCallback } from "react";
import UserResultTable from "@/app/components/admin/result/UserResultTable";
import { SafeUser } from "@/app/types";
import { downloadCSV } from "@/app/utils/utils";

type Props = {
  user: SafeUser;
  items: Array<any>;
}

export default function UsersClient({ user, items }: Props) {
  const router = useRouter();

  const handleCsvPrint = useCallback(async (e:React.MouseEvent<HTMLButtonElement>, item: any) => {
    await downloadCSV(item, `${item.name}_${user.username}.csv`);
  }, [user]);

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
                  user={user}
                  onCsvClick={(e) => handleCsvPrint(e, item)}
                  onHref={(e) => moveDetailPage(e, item.name_en)}
                />
              )
            })
        }
      </div>
    </Container>
  )
};
