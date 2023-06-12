'use client';


import Link from "next/link";
import { useRouter } from "next/navigation";
import { Container, Heading } from "@/app/components/common";
import { SafeUser } from "@/app/types";


type Props = {
  users: Array<SafeUser>;
}

export default function UsersClient({ users }: Props) {
  const router = useRouter();
  
  return (
    <Container>
      <div className="mt-8">
        <Link href="/admin" className="text-sm text-neutral-500 hover:underline">&lt;&lt; 以前ページへ戻る</Link>
        <Heading title="受講生管理" />
      </div>

      <div className="flex flex-col gap-1">
      {
        users.map((user: SafeUser) => (
          <div key={user.id}>
            <div className="flex flex-row border rounded-md hover:bg-neutral-100 font-semibold cursor-pointer p-4" onClick={() => router.push(`/admin/users/${user.username}`)}>
              {user.username}
            </div>
          </div>
        ))
      }
      </div>
    </Container>
  )
};
