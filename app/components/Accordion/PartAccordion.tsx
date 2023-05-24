'use client';

import { useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";
import AccordionItem from "./AccordionItem";


type Props ={
  header: React.ReactNode;
  body: React.ReactNode;
}

export default function PartAccordion({ header, body }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="py-0.5 my-4">
      <div className="flex flex-row justify-between border-b-4 border-neutral-800 hover:bg-neutral-100 cursor-pointer p-4 md:p-6" onClick={toggleAccordion}>
        {header}
        <div className="w-8 self-center">{isOpen ? <HiChevronUp /> : <HiChevronDown /> }</div>
      </div>
      { isOpen && <AccordionItem content={body} /> }
    </div>
  );
}
