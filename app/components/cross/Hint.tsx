type Props ={
  onShow?: boolean;
  children: React.ReactNode;
}

export default function Hint({ onShow = false, children }: Props) {
  return (
    <>
      { onShow && <p className="font-sm text-rose-700">{children}</p> }
    </>
  )
}
