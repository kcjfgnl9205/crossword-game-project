'ues client';

import { FieldValues, UseFormRegister } from "react-hook-form";


type Props = {
  id: string;
  label: string;
  name: string;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  defaultChecked?: boolean;
  handleOnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Checkbox ({
  id,
  label,
  name,
  disabled,
  register,
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
        type="checkbox"
        className="hidden peer"
        defaultChecked={defaultChecked}
        onChange={handleOnChange}
      />

      <label
        htmlFor={id}
        className="
          inline-flex
          items-center
          justify-between
          w-full
          p-4
        text-gray-500
        bg-white border
        border-gray-200
          rounded-lg
          cursor-pointer
        peer-checked:border-blue-600
        peer-checked:bg-blue-50 
        peer-checked:text-blue-600
        hover:text-gray-600
        hover:bg-gray-100"
      >
        {label}
      </label>
    </div> 
  )
}
