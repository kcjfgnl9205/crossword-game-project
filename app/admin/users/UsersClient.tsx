'use client';


import Link from "next/link";
import { useRouter } from "next/navigation";
import { Container, Heading } from "@/app/components/common";


const users = [
  {rank: 1, username: "user1", score: 300, timer: 200},
  {rank: 2, username: "user2", score: 298, timer: 200},
  {rank: 3, username: "user3", score: 297, timer: 300},
  {rank: 4, username: "user4", score: 295, timer: 300},
  {rank: 5, username: "user5", score: 294, timer: 300},
  {rank: 6, username: "user6", score: 291, timer: 312},
  {rank: 7, username: "user7", score: 283, timer: 333},
  {rank: 8, username: "user8", score: 283, timer: 384},
  {rank: 9, username: "user9", score: 282, timer: 400},
  {rank: 10, username: "user10", score: 260, timer: 411},
]


export default function UsersClient() {
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
