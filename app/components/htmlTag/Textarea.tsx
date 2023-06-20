'ues client';

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { ErrorMessage } from "@/app/components/common";
import { useState } from "react";


type Props = {
  id: string;
  label: string;
  disabled?: boolean;
  subFormat?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  validate?: any;
  value?: string;
}

export default function Textarea ({
  id,
  label,
  disabled,
  subFormat,
  register,
  errors,
  validate,
  value,
}: Props) {
  const [rows, setRows] = useState(1);
  const maxRows = 4;

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textareaLineHeight = 20;
    const previousRows = event.target.rows;
    event.target.rows = 1;

    const currentRows = Math.floor(event.target.scrollHeight / textareaLineHeight);

    if (currentRows === previousRows) {
      event.target.rows = currentRows;
    }

    if (currentRows > maxRows) {
      event.target.rows = maxRows;
    }

    setRows(currentRows < maxRows ? currentRows : maxRows);
  };

  
  return (
    <div className="w-full relative">
      <textarea
        rows={rows}
        id={id}
        disabled={disabled}
        { ...register(id, validate) }
        value={value}
        placeholder="  "
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
          resize-none
        `}
        onChange={handleChange}
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
