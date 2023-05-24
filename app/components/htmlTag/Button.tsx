'use client';


import { IconType } from "react-icons";

type Props = {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
  primary?: boolean;
  error?: boolean;
  info?: boolean;

  onDelete?: boolean;
  onDeleteClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
  primary,
  error,
  info,
  onDelete,
  onDeleteClick
}: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`
        relative
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-lg
        hover:opacity-80
        transition
        w-full
        ${ primary && "bg-blue-500" }
        ${ primary && "border-blue-500" }
        ${ primary && "text-white" }
        ${ info && "bg-lime-500 " }
        ${ info && "border-lime-500" }
        ${ info && "text-white" }
        ${ error && "bg-rose-500 " }
        ${ error && "border-rose-500" }
        ${ error && "text-white" }
        ${ small ? "py-1.5" : "py-3"}
        ${ small ? "text-sm" : "text-md"}
        ${ small ? "font-light" : "font-semibold"}
        ${ small ? "border-[1px]" : "border-2"}
      `}
    >
      { Icon &&  <Icon size={24} className="absolute left-4 top-3" /> }
      {label}
    </button>
  )
};