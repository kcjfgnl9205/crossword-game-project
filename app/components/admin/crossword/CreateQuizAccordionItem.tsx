'ues client';


import { Control, FieldErrors, FieldValues } from "react-hook-form";
import { Input, Textarea } from "@/app/components/htmlTag";


type Props = {
  isLoading: boolean;
  control: Control<FieldValues, any>;
  errors: FieldErrors<FieldValues>;
  index: number;
  handleOnChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, name: string) => void;
}

export default function CreateQuizAccordionItem({isLoading, control, errors, index, handleOnChange}: Props) {

  return (
    <div className="flex flex-col gap-1">
      <Textarea
        id={`questions.${index}.clue`}
        label="質問"
        disabled={isLoading}
        register={control.register}
        errors={errors}
        validate={{
          required: "質問を入力してください。",
        }}
      />
      <Input
        id={`questions.${index}.hint`}
        label="ヒント"
        disabled={isLoading}
        register={control.register}
        errors={errors}
      />
      <Input
        id={`questions.${index}.answer`}
        label="正解"
        disabled={isLoading}
        register={control.register}
        errors={errors}
        handleOnChange={handleOnChange}
        validate={{
          required: "正解を入力してください。",
        }}
      />
    </div>
  );
}
