'use client';


import { useRouter } from "next/navigation";
import Container from "@/app/components/common/Container";
import Heading from "@/app/components/common/Heading";
import { SafeUser } from "@/app/types";



type Props = {
  user: SafeUser;
  items: Array<any>;
}

export default function ResultClient({ user, items }: Props) { 
  const router = useRouter();

  return (
    <Container>
      <div className="py-4">
        <Heading title={`${user.username}様`} />
      </div>

      <div className="pt-2 flex flex-col gap-0.5 md:gap-1">
        {
          items.map((item: any) => {
            return (
              <div key={item.id} className="flex flex-row gap-1 items-center md:gap-2">
                <div
                  onClick={() =>  {router.push(`/user/${user.username}/${item.name_en}`)}}
                  className="p-4 border rounded-lg transition w-full text-center hover:opacity-80 hover:bg-neutral-100 cursor-pointer"
                >
                  {item.name}
                </div>
              </div>
            )
          })
        }
      </div>
    </Container>
  )
}
