'use client';


import Link from "next/link";
import { useRouter } from "next/navigation";

import { CategoryType } from "@/app/types";
import { Container, Heading } from "@/app/components/common";

type Props = {
  categories?: Array<CategoryType>;
}

const users = [
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


export default function UsersClient({ categories }: Props) {
  const router = useRouter();
  
  return (
    <Container>
      <div className="mt-8">
        <Link href="/admin" className="text-sm text-neutral-500 hover:underline">&lt;&lt; 以前ページへ戻る</Link>
        <Heading title="受講生管理" />
      </div>

      <div className="flex flex-col gap-1">
      {
        users.map((user, index) => (
          <div key={index}>
            <div className={`flex flex-row border rounded-md hover:bg-neutral-100 cursor-pointer p-4`} onClick={() => router.push(`/admin/users/${user.username}`)}>
              {user.username}
            </div>
          </div>
        ))
      }
      </div>
    </Container>
  )
};
