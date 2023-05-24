'use client';

import { useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";
import AccordionItem from "./AccordionItem";


type Props ={
  header: React.ReactNode;
  body: React.ReactNode;
  isNull?: boolean;
}

export default function Accordion({ header, body, isNull = false }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="py-0.5">
      <div className={`flex flex-row justify-between border rounded-md hover:bg-neutral-100 cursor-pointer p-1 md:p-3 ${isNull ? "bg-rose-200" : "white" }`} onClick={toggleAccordion}>
        <div className="flex-auto">
          {header}
        </div>
        <div className="w-8 self-center">{isOpen ? <HiChevronUp /> : <HiChevronDown /> }</div>
      </div>
      { isOpen && <AccordionItem content={body} /> }
    </div>
  );
}
