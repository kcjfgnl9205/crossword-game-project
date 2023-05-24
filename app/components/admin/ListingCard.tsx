'use client';


import { useRouter } from "next/navigation";


type Props = {
  label: string;
  href: string;
}

export default function ListingCard({ label, href }: Props) {
  const router = useRouter();
  return (
    <div 
      onClick={() => router.push(href)} 
      className="col-span-1 cursor-pointer group py-6 px-4 border rounded-md hover:bg-neutral-100"
    >
      <div className="flex flex-row justify-between gap-1 w-full">
        <div className="text-md font-semibold">
          {label}
        </div>
        <div className="text-sm text-neutral-500 font-semibold">
          ページへ移動する	&#187;
        </div>
      </div>
    </div>
  )
}