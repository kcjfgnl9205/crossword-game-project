'ues client';

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { Radio, Select } from "@/app/components/htmlTag";


type Props = {
  value: string;
  name: string;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>,
  errors?: FieldErrors;
  handleOnChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, name: string) => void;
  items: Array<any>;
}

export default function RadioGroupAndSelect ({
  value,
  name,
  disabled,
  register,
  required,
  errors,
  handleOnChange,
  items,
}: Props) {
  if (items.length === 0) {
    return <div className="text-center font-semibold py-4">データが存在しません。</div>;
  }
  return (
    <>
      <div className="hidden md:flex md:flex-row md:gap-1">
      {
        items.map((item: any, index: number) => {
          return (
            <Radio
              key={index}
              id={`${name}-${item.id}`}
              name={name}
              label={item.name}
              disabled={disabled}
              register={register}
              errors={errors}
              required={required}
              value={item.id}
              handleOnChange={handleOnChange}
              defaultChecked={index === 0}
            />
          )
        })
      }
      </div>
      <div className="flex flex-row gap-1 md:hidden">
        <Select
          label="単元を選択してください。"
          id={name}
          options={items}
          disabled={disabled}
          register={register}
          errors={errors}
          value={value}
          handleOnChange={handleOnChange}
        />
      </div>
    </>
  )
}
