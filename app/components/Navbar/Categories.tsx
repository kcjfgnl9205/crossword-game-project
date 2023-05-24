'use client';


import { usePathname, useSearchParams } from "next/navigation";
import { Container, CategoryBox } from "@/app/components/common";


export const categories = [
  {
    label: 'all',
    // icon: RiEnglishInput,
    description: '全て表示',
  },
  {
    label: 'english',
    // icon: RiEnglishInput,
    description: '英語版',
  },
  {
    label: 'hiragana',
    // icon: TbLanguageHiragana,
    description: 'ひらがな版',
  },
  {
    label: 'katakana',
    // icon: TbLanguageKatakana,
    description: 'カタカナ版'
  }
]


export default function Categories () {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();

  const isMainPage = pathname === "/";
  if (!isMainPage) {
    return null;
  }
  return (
    <Container>
      <div
        className="
          pt-2
          flex
          flex-row
          items-center
          justify-between
          overflow-x-auto
        "
      >
        {
          categories.map((item) => (
            <CategoryBox
              key={item.label}
              label={item.label}
              selected={category === item.label}
              // icon={item.icon}
              description={item.description}
            />
          ))
        }
      </div>
    </Container>
  )
}