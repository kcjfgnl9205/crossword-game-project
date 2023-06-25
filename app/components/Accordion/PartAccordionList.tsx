'use client';


import React, { useState } from "react";
import Accordion from "./Accordion";
import PartAccordion from "./PartAccordion";
import CrosswordResultClue from "./CrosswordResultClue";
import CrosswordResultTitle from "./CrosswordResultTitle";


type Props ={
  item: any;
}

export default function PartAccordionList({ item }: Props) {
  const [ open, setOpen ] = useState<boolean>(true);
  
  const header = <div className="font-semibold text-lg md:text-xl">{item.name}</div>;
  const body = (
    <>
      {
        item.chapters.map((chapter: any) => {
          return (
            <React.Fragment key={chapter.id}>
            {
              chapter.langs?.map((lang: any, index: number) => {
                return (
                  <Accordion
                    key={index}
                    header={
                      <CrosswordResultTitle
                        key={chapter.id}
                        chapterName={chapter.name}
                        langName={lang.name}
                        times={lang.answers.length}
                        title={chapter.title}
                      />
                    }
                    body={
                      <>
                        {
                          lang.answers.map((answer: any) => (
                            <CrosswordResultClue
                              key={answer.id}
                              times={answer.times}
                              items={answer.result}
                            />
                          ))
                        }
                      </>
                    }
                  />
                )
              })
            }
            </React.Fragment>
          )
        })
      }
    </>
  )

  return (
    <PartAccordion
      header={header}
      body={body}
      open={open}
      setOpen={() => setOpen((prev: boolean) => !prev)}
    />
  );
}
