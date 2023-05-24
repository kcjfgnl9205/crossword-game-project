'ues client';

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";


type Props = {
  id: string;
  label: string;
  value: string;
  name: string;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>,
  errors?: FieldErrors;
  defaultChecked?: boolean;
  handleOnChange?: (e: React.ChangeEvent<HTMLInputElement>, name: string) => void;
}

export default function Radio ({
  id,
  label,
  value,
  name,
  disabled,
  register,
  errors,
  required,
  defaultChecked,
  handleOnChange
}: Props) {
  return (
    <div className="w-full relative">
      <input
        id={id}
        disabled={disabled}
        { ...register(name, { required }) }
        value={value}
        type="radio"
        className="hidden peer"
        defaultChecked={defaultChecked}
        onChange={(e) => handleOnChange?.(e, name)}
      />

      <label
        htmlFor={id}
        className={`
          inline-flex
          items-center
          justify-between
          w-full
          p-4
          border
          rounded-lg
          peer-checked:border-blue-600
          peer-checked:bg-blue-50 
          peer-checked:text-blue-600
          hover:text-gray-600
          hover: ${disabled ? "cursor-not-allowed" : "cursor-pointer"}
          hover: ${disabled ? "bg-gray-100" : "bg-gray-100"}
          hover: ${disabled ? "text-gray-900" : "text-gray-500"}
          hover: ${disabled ? "bg-gray-300" : "bg-white"}
          hover: ${disabled ? "border-gray-500" : "border-gray-200"}
        `}
      >
        {label}
      </label>
    </div> 
  )
}
