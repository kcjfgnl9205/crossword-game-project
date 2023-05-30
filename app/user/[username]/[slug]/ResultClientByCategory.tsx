'use client';


import Container from "@/app/components/common/Container";
import Heading from "@/app/components/common/Heading";
import PartAccordionList from "@/app/components/Accordion/PartAccordionList";
import Link from "next/link";
import { useRouter } from "next/navigation";


type Props = {
  username: string;
  category: any;
}

export default function ResultClient({ username, category }: Props) { 
  const router = useRouter();

  return (
    <Container>
      <div className="py-4">
        <Link href="#" legacyBehavior>
          <a onClick={() => router.back()} className="text-sm text-neutral-500 hover:underline">&lt;&lt; 以前ページへ戻る</a>
        </Link>
        <Heading title={`${username}様、${category.name}`} />
      </div>

      {
       category.parts.map((part: any) => {
        return (
          <PartAccordionList
            key={part.id}
            item={part}
          />    
        )
       }) 
      }
    </Container>
  )
}
