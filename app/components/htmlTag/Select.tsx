'ues client';

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";


type Props = {
  id: string;
  label: string;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>,
  errors?: FieldErrors,
  options?: Array<any>;
  handleOnChange?: (e: React.ChangeEvent<HTMLSelectElement>, name: string) => void;
  value: string;
}

export default function Input ({
  id,
  label,
  disabled,
  register,
  required,
  errors,
  options,
  handleOnChange,
  value,
}: Props) {
  return (
    <div className="w-full relative">
      <select
        id={id}
        disabled={disabled}
        { ...register(id, { required }) }
        className={`
          peer
          w-full
          p-2
          pt-6
          font-light
          bg-white
          border-2
          rounded-md
          outline-none
          transition
          disabled:opacity-70
          disabled:cursor-not-allowed
          pl-4
          ${errors?.[id] ? "border-rose-500" : "border-neutral-300"}
          ${errors?.[id] ? "focus:border-rose-500" : "focus:border-black"}
        `}
          onChange={(e) => handleOnChange?.(e, id)}
          value={value}
      >
        {
        options?.map((option: any, index: number) => (
          <option key={index} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>

      <label
        className={`
          absolute
          text-md
          duration-150
          transform
          -translate-y-3
          top-5
          z-10
          origin-[0]
          left-4
          peer-placeholder-shown:scale-100
          peer-placeholder-shown:translate-y-0
          peer-focus:scale-75
          peer-focus:-translate-y-4
          ${errors?.[id] ? "text-rose-500" : "text-zinc-400"}
        `}
      >
        {label}
      </label>
    </div> 
  )
}
