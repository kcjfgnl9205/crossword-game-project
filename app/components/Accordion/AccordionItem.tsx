'use client';

import { Control, FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import Input from "../htmlTag/Input";

type Props = {
  content: React.ReactNode;
}

export default function CreateQuizAccordionItem({content}: Props) {

  return (
    <div className="flex flex-col gap-1">
      {content}
    </div>
  );
}
