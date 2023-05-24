'use client';


import { useCallback, useEffect, useRef, useState } from "react";
import { FieldValues, SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import axios from "axios";

import { changeSecondToMinute, convertAnswerObjectToAnswerArray, convertToResultArray, crosswordGenerator } from "@/app/utils/utils";
import { ChapterCategoryType, InputClueType, LangCategoryType, PartCategoriesType, PartCategoryType } from "@/app/types";
import { Direction } from "@/app/components/cross/types";
import { Container, ErrorMessage } from "@/app/components/common";
import { CrosswordProviderImperative } from "@/app/components/cross/CrosswordProvider";
import CrosswordGame from "@/app/components/crossword/CrosswordGame";
import CreateQuizAccordion from "@/app/components/admin/crossword/CreateQuizAccordion";
import CreateQuizAccordionItem from "@/app/components/admin/crossword/CreateQuizAccordionItem";
import useCrosswordCreateModal from "@/app/hooks/useCrosswordCreate";
import { Input, Button, Hr, RadioGroupAndSelect } from "@/app/components/htmlTag";
import CrosswordCreateSubModal from "@/app/components/modal/CrosswordCreateSubModal";



const defaultQuestion = { clue: "", answer: "", hint: "" };

type Props = {
  partCategories: PartCategoriesType;
  langCategories: Array<LangCategoryType>;
  item?: any
}

export default function CrosswordCreateClient({ partCategories, langCategories, item }: Props) {
  const router = useRouter();
  // 過去のデータからimportできるように表示するモダール
  const subModal = useCrosswordCreateModal();

  const crosswordRef = useRef<CrosswordProviderImperative>(null);
  const [ isCombined, setIsCombined ] = useState<boolean>(false);
  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const [ isChecked, setIsChecked ] = useState<boolean>(false);
  const [ questionErrIndex, setQuestionErrIndex ] = useState<number>(-1);

  // 章のカテゴリー
  const [ chapterCategories, setChapterCategories ] = useState<Array<ChapterCategoryType>>([]);
  const [ crosswordData, setCrosswordData ] = useState<Record<Direction, Record<string, any>> | null>(null);
  const { control, register, handleSubmit, formState: { errors }, setValue, watch } = useForm<FieldValues>({
    defaultValues: {
      part: "",
      chapter: "",
      lang: "",
      title: "",
      minute: "5",
      second: "0",
      questions: []
    }
  })
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'questions',
  });


  useEffect(() => {
    setValue("part", item ? item.part_id.toString() : watch("part"));
    setValue("lang", item ? item.lang_id.toString() : watch("lang"));
    setValue("title", item ? item.title : watch("title"));

    const { minute, second } = changeSecondToMinute(item?.time_limit);
    setValue("minute", item ? minute.toString() : watch("minute"));
    setValue("second", item ? second.toString() : watch("second"));

    const questionArray = convertAnswerObjectToAnswerArray(item?.question);
    if (questionArray.length === 0) {
      append([defaultQuestion, defaultQuestion, defaultQuestion]);
    } else {
      questionArray.forEach((question: any) => {
        append([question]);
      })
    }
  }, []);

  useEffect(() => {
    const partId = Number(watch("part"));
    const chapters = partCategories.filter((part) => part.id === partId)[0].chapters;
    setChapterCategories(chapters);
    setValue("part", watch("part"));
    setValue("chapter", item ? item.chapter_id.toString() : watch("chapter"));
  
  }, [watch("part"), watch("chapter")]);


  const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>, name: string) => {
    setCrosswordData(null);
    let value: string = e.target.value;
    if (name.startsWith("questions")) {
      value = e.target.value.toUpperCase();
    }
    setValue(name, value);

    const partId = Number(watch("part"));
    const chapters = partCategories.filter((part) => part.id === partId)[0].chapters;
    if (name === "part") {
      setValue("chapter", chapters[0]?.id.toString());
      setChapterCategories(chapters);
    } else if (name === "chapter") {
      const chapterFlg = chapters.find((chapter) => chapter.id.toString() === watch("chapter"))?.flg;
      if (chapterFlg === 1) {
        setIsCombined(true);
      } else {
        setIsCombined(false);
      }
    }
  };
  

  // 問題を追加する
  const handleAppend = () => {
    append(defaultQuestion);
    setCrosswordData(null);
  }

  // 問題を削除する
  const handleRemove = (index: number) => {
    if (fields.length > 3) {
      setCrosswordData(null);
      remove(index);
    }
  };
  
  
  const handleFillAllAnswers = () => {
    if (crosswordRef.current) {
      crosswordRef.current.fillAllAnswers();
    }
  }

  const handleCrosswordCreate: SubmitHandler<FieldValues> = (data) => {
    setIsChecked(false);
    let errorData: any = {};
    data.questions.forEach((el: any, index: number) => {
      if (el.question === "" || el.answer == "") {
        errorData = { ...el, index: index };
        return;
      }
    })

    if (Object.keys(errorData).length !== 0) {
      setQuestionErrIndex(errorData.index);
      return;
    }

    setQuestionErrIndex(-1);

    let words: Array<InputClueType> = data.questions;
    
    const result = crosswordGenerator(words);
    if (!result) {
      alert("error");
      return;
    }
console.log(result)
    const newData = convertToResultArray(result.positionObjArr);

console.log(newData)
    setCrosswordData(newData);

    setIsChecked(true);

    setTimeout(() => {
      handleFillAllAnswers();
    }, 200)
  }

  
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);
    if (!isChecked) {
      alert("クロスワードゲームを生成してください。");
      return;
    }
    try {
      const response = await axios.post(`/api/crossword`, {
        crossword: data,
        crosswordQuestions: crosswordData,
        withCredentials: true,
      });
  
      if (response.status === 200) {
        router.push("/admin/crossword");
        router.refresh();
      }
    } catch(error: any) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }    
  }

  const handleSetRandomQuestions = useCallback(() => {
    console.log("zz");
  }, []);
  return (
    <Container>
      <CrosswordCreateSubModal />
      
      {/* カテゴリー、単元、章、言語 */}
      <div className="flex flex-col gap-1 py-2">
        <RadioGroupAndSelect
          name="part"
          value={watch("part")}
          disabled={isLoading || item}
          register={register}
          errors={errors}
          items={partCategories}
          handleOnChange={handleOnChange}
        />
        <RadioGroupAndSelect
          name="chapter"
          value={watch("chapter")}
          disabled={isLoading || item}
          register={register}
          errors={errors}
          items={chapterCategories}
          handleOnChange={handleOnChange}
        />
        <RadioGroupAndSelect
          name="lang"
          value={watch("lang")}
          disabled={isLoading || item}
          register={register}
          errors={errors}
          items={langCategories}
          handleOnChange={handleOnChange}
        />
      </div>

      {/* ゲームタイトル */}
      <div className="flex flex-col gap-1 py-4">
        <Input
          id="title"
          label="プロジェット名"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
          value={watch("title")}
          handleOnChange={handleOnChange}
        />
        
        {/* 所要時間 */}
        <div className="flex flex-col gap-1 md:flex-row">
          <Input
            type="number"
            id="minute"
            label="所要時間(分)"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
            subFormat="分"
            handleOnChange={handleOnChange}
          />
          <Input
            type="number"
            id="second"
            label="所要時間(秒)"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
            subFormat="秒"
            handleOnChange={handleOnChange}
          />
        </div>
      </div>

      <Hr />

      <div className="flex flex-col gap-1 md:flex-row">
        <Button label="問題追加" onClick={() => handleAppend()} primary/>
        { isCombined && <Button label="問題ランダム追加" onClick={handleSetRandomQuestions} info/> }
        {/* <div className="flex flex-row w-full gap-1"> */}
          {/* <Button label="問題インポート" onClick={subModal.onOpen} info/> */}
        {/* </div> */}
      </div>
      
      <div className="flex flex-col">
        <ErrorMessage message="※問題は最低3問以上登録すべきです。" />
        <ErrorMessage message="※正解の文字は他の正解の文字に１文字以上含まれないといけない" />
      </div>
      {
       fields.map((field, index) => (
        <CreateQuizAccordion
          key={field.id}
          title={`問題${index+1}`}
          remove={() => handleRemove(index)}
          isNull={index===questionErrIndex}
        >
          <CreateQuizAccordionItem
            isLoading={isLoading}
            control={control}
            errors={errors}
            index={index}
            handleOnChange={handleOnChange}
          />
        </CreateQuizAccordion>
       ))
      }

      <Hr />

      <div className="flex flex-col gap-1 md:gap-2">
        <Button label="クロスワード生成" onClick={handleSubmit(handleCrosswordCreate)} primary />
        { isChecked && crosswordData !== null && <CrosswordGame lang="en" data={crosswordData} ref1={crosswordRef} /> }
      </div>

      <Hr />

      {
        isChecked &&
        <div className="flex flex-col gap-1 pb-4 md:flex-row md:w-48 md:gap-2">
          <Button label={`${item ? "修正する" : "新規登録"}`} onClick={handleSubmit(onSubmit)} primary />
          <Button label="取消" onClick={() => router.push("/admin/crossword")} error />
        </div>
      }
    </Container>
  )
}
