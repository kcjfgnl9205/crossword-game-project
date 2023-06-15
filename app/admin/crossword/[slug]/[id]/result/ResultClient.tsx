'use client';


import Container from "@/app/components/common/Container";
import Heading from "@/app/components/common/Heading";
import RankListing from "@/app/components/admin/result/RankListing";
import Link from "next/link";


type Props = {
  item: any;
}

export default function ResultClient({ item }: Props) { 
  return (
    <Container>
      <div className="py-4">
        <Link href={`/admin/crossword/${item.category_name_en}`} className="text-sm text-neutral-500 hover:underline">&lt;&lt; 以前ページへ戻る</Link>
        <Heading title={`${item.title}(${item.lang.name})`} />

        <div className="flex flex-col gap-0.5">
        {
          item.users.length === 0
          ? <div className="text-center font-semibold py-4">結果データが存在しません。</div>
          : item.users.map((user: any) => (
              <RankListing
                key={user.id}
                username={user.username}
                items={user.answers}
              />
            ))
        }
        </div>
      </div>
    </Container>
  )
}
