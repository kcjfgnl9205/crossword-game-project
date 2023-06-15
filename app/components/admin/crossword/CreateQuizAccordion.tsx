'ues client';

import { useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";
import { Button } from "@/app/components/htmlTag";


type Props ={
  title: string;
  children: JSX.Element;
  remove: () => void;
  isNull: boolean;
}

export default function CreateQuizAccordion({ title, children, remove, isNull }: Props) {
  const [isOpen, setIsOpen] = useState(true);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="py-1">
      <div className="flex flex-row gap-2">
        <div className={`flex-auto flex flex-row justify-between p-3 border rounded-md md:p-4 ${isNull ? "bg-rose-200" : "white" }`} onClick={toggleAccordion}>
          <span>
            {title}
            {isNull && <span className="text-rose-500 ml-2 text-sm font-semibold">入力してないデータが存在します。</span>}
          </span>
          <div>{isOpen ? <HiChevronUp /> : <HiChevronDown /> }</div>
        </div>
        <div className="flex-none w-14 h-14">
          <Button label="-" onClick={remove} error />
        </div>
      </div>
      {isOpen && <>{children}</>}
    </div>
  );
}
