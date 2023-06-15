'ues client';

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { ErrorMessage } from "@/app/components/common";


type Props = {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  subFormat?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  validate?: any;
  defaultValue?: string | number;
  value?: string;
  handleOnChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, name: string) => void;
}

export default function Input ({
  id,
  label,
  type = "text",
  disabled,
  subFormat,
  register,
  errors,
  validate,
  handleOnChange,
  value,
  defaultValue
}: Props) {
  return (
    <div className="w-full relative">
      <input
        id={id}
        disabled={disabled}
        { ...register(id, validate) }
        value={value}
        placeholder="  "
        type={type}
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
          ${errors[id] ? "border-rose-500" : "border-neutral-300"}
          ${errors[id] ? "focus:border-rose-500" : "focus:border-black"}
        `}
        autoComplete={ type === "password" ? "off" : "on" }
        onChange={(e) => handleOnChange?.(e, id)}
      />
      { subFormat && <span className="text-neutral-500 absolute top-5 right-2">{subFormat}</span> }

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
          ${errors[id] ? "text-rose-500" : "text-zinc-400"}
        `}
      >
        {label}
      </label>
      { errors[id] && <ErrorMessage message={`${errors[id]?.message}`} /> }
    </div>
  )
}
