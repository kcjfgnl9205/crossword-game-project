'use client';


import { useRouter } from "next/navigation";
import Container from "@/app/components/common/Container";
import Heading from "@/app/components/common/Heading";
import { sampleResultArr } from "@/app/data/resultSample";



type Props = {
  username: string;
}

export default function ResultClient({ username }: Props) { 
  const router = useRouter();
  const category = sampleResultArr;

  return (
    <Container>
      <div className="py-4">
        <Heading title={`${username}様`} />
      </div>

      <div className="pt-2 flex flex-col gap-0.5 md:gap-1">
        {
          category.map((category: any, index: number) => {
            return (
              <div key={index} className="flex flex-row gap-1 items-center md:gap-2">
                <div
                  onClick={() =>  {router.push(`/user/${username}/${category.name_en}`)}}
                  className="p-4 border rounded-lg transition w-full text-center hover:opacity-80 hover:bg-neutral-100 cursor-pointer"
                >
                  {category.name}
                </div>
              </div>
            )
          })
        }
      </div>
    </Container>
  )
}
