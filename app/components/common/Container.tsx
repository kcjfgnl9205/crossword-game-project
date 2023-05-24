'use client';

type Props = {
  children: React.ReactNode;
}

export default function Container({ children }: Props) {
  return (
    <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-4 px-2">
      {children}
    </div>
  )
}