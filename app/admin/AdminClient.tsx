'use client';


import { Container } from "@/app/components/common";
import { ListingCard } from "@/app/components/admin";


export default function AdminClient() {
  return (
    <Container>
      <div className="flex flex-col gap-2 py-4">
        <ListingCard label="アプリ設定" href="/admin/settings" />
        <ListingCard label="クロスワードプロジェクト管理" href="/admin/crossword" />
      </div>
    </Container>
  )
};
