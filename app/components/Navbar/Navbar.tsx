'use client';


import { SafeUser } from "@/app/types";
import { Container } from "@/app/components/common";
import { Logo, UserMenu } from "@/app/components/Navbar";


type Props = {
  currentUser?: SafeUser | null
}

export default function Navbar({ currentUser }: Props) {
  return (
    <div className="w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
    </div>
  )
};
