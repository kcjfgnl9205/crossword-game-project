'ues client';

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { Radio } from "@/app/components/htmlTag";


type Props = {
  value: string;
  name: string;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>,
  errors?: FieldErrors;
  handleOnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  items?: Array<any>;
}

export default function RadioGroup ({
  value,
  name,
  disabled,
  register,
  required,
  errors,
  handleOnChange,
  items,
}: Props) {
  return (
    <div className="flex flex-row w-full gap-2">
      {
        items?.map((item: any, index: number) => {
          return (
            <Radio
              key={index}
              id={`${name}-${index}`}
              name={name}
              label={item.name}
              disabled={disabled}
              register={register}
              errors={errors}
              required={required}
              value={value}
              handleOnChange={handleOnChange}
              defaultChecked={index === 0 && true}
            />
          )
        })
      }
    </div>
  )
}
