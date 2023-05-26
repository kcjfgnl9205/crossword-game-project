'use client';


import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import { useCallback, useState } from "react";

import { SafeUser } from "@/app/types";
import { MenuItem } from "@/app/components/Navbar";


type Props = {
  currentUser?: SafeUser | null
}

export default function UserMenu({ currentUser }: Props) {
  const router = useRouter();
  const [ isOpen, setIsOpen ] = useState<boolean>(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((prev: boolean) => !prev);
  }, [])

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={currentUser ? toggleOpen : () => router.push("/login")}
          className="text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer">
          { currentUser ? `${currentUser.username}様` : "Login" }
        </div>
      </div>

      {
        isOpen && 
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm z-10">
          <div className="flex flex-col cursor-pointer">
            {
              currentUser && (
                <>
                  {
                    currentUser.authority
                    ? <>
                        <MenuItem label="CrosswordGame" onClick={() => { toggleOpen(); router.push(`/admin/crossword`); }} />
                        <MenuItem label="Settings" onClick={() => { toggleOpen(); router.push(`/admin/settings`); }} />
                      </>
                    : <>
                        <MenuItem label={currentUser.authority ? "Settings" : "My Page"} onClick={() => { toggleOpen(); router.push(`/info/${currentUser?.username}`); }} />
                      </>
                  }
                  <hr />
                  <MenuItem label="Logout" onClick={() => signOut()} />
                </>
              )
            }
          </div>
        </div>
      }
    </div>
  )
}