'use client';


import { useCallback, useEffect, useRef, useState } from "react";
import { FieldValues, SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import axios from "axios";

import { convertAnswerObjectToAnswerArray, convertToResultArray, crosswordGenerator } from "@/app/utils/utils";
import { ChapterCategoryType, InputClueType, CategoryType, CategoryChapterType, LangType } from "@/app/types";
import { Direction } from "@/app/components/cross/types";
import { Container, ErrorMessage, Heading } from "@/app/components/common";
import { CrosswordProviderImperative } from "@/app/components/cross/CrosswordProvider";
import CrosswordGame from "@/app/components/crossword/CrosswordGame";
import CreateQuizAccordion from "@/app/components/admin/crossword/CreateQuizAccordion";
import CreateQuizAccordionItem from "@/app/components/admin/crossword/CreateQuizAccordionItem";
import { Input, Button, Hr, RadioGroupAndSelect } from "@/app/components/htmlTag";
import Link from "next/link";



const defaultQuestion = { clue: "", answer: "", hint: "" };

type Props = {
  partsCategories: Array<CategoryChapterType>;
  langsCategories: Array<LangType>;
  item?: any
  category: any;
}

export default function CrosswordCreateClient({ partsCategories, langsCategories, item, category }: Props) {
  const router = useRouter();

  const crosswordRef = useRef<CrosswordProviderImperative>(null);
  const parts = partsCategories;
  const [ chapters, setChapters ] = useState<Array<ChapterCategoryType>>(item ? parts.filter((part: any) => part.id === item.part_id)[0].chapters : parts[0]?.chapters || []);
  const langs: Array<LangType> = langsCategories.filter((lang: LangType) => lang.cnt > 0);

  const [ isCombined, setIsCombined ] = useState<boolean>(false); //総合問題なのか
  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const [ isChecked, setIsChecked ] = useState<boolean>(false);
  const [ questionErrIndex, setQuestionErrIndex ] = useState<number>(-1);

  
  // 章のカテゴリー
  const [ crosswordData, setCrosswordData ] = useState<Record<Direction, Record<string, any>> | null>(null);
  const { control, register, handleSubmit, formState: { errors }, setValue, watch, getValues } = useForm<FieldValues>({
    defaultValues: {
      category_id: category.id.toString(),
      part_id: item ? item.part_id.toString() : parts[0]?.id.toString(),
      chapter_id: item ? item.chapter_id.toString() : chapters[0]?.id.toString(),
      lang_id: item ? item.lang_id.toString() : langs[0]?.id.toString(),
      
      title: item ? item.title : "",
      minute: item ? item.minute.toString() : "5",
      second: item ? item.second.toString() : "0",
      questions: []
    }
  });
  
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'questions',
  });

  // 質問リスト
  useEffect(() => {
    const questionArray = convertAnswerObjectToAnswerArray(item?.questions);
    if (questionArray.length === 0) {
      append([defaultQuestion, defaultQuestion, defaultQuestion]);
    } else {
      questionArray.forEach((question: any) => {
        append([question]);
      })
    }
  }, [item, append, setValue])

  useEffect(() => {
    if (!item) {
      setValue("chapter_id", chapters[0]?.id.toString());
    }
  }, [item, chapters, setValue, watch])

  const handleOnChange = useCallback((e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setCrosswordData(null);
    
    const { name, value } = e.target;
    setValue(name, value);
    if (name.startsWith("questions")) {
      setValue(name, value.toUpperCase());
    }
    
    if (name === "part_id") {
      const part = parts.filter((part: CategoryChapterType) => part.id.toString() === watch("part_id"))[0];
      
      // setValue("chapter_id", part.chapters[0]?.id.toString());
      setChapters(part.chapters);
      setIsCombined(false);
    } 
    else if (name === "chapter_id") {
      const chapterFlg = chapters.find((chapter) => chapter.id?.toString() === watch("chapter_id"))?.flg;
      const flg = chapterFlg === 1;
      setIsCombined(flg);
    }
  }, [parts, setValue, watch, chapters, setChapters]);
  
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

    const newData = convertToResultArray(result.positionObjArr);


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
      const params = {
        crossword: data,
        crosswordQuestions: crosswordData,
        withCredentials: true,
      }
      if (item) {
        console.log(data)
        //修正
        const response = await axios.put(`/api/crossword/${item.id}`, params);
console.log(response)
        if (response.status === 200) {
          alert("クロスワードゲームを修正しました。");
          router.push(`/admin/crossword/${category.name_en}`);
          router.refresh();
        }
      } else {
        //登録
        const response = await axios.post(`/api/crossword`, params);

        if (response.status === 200) {
          alert("クロスワードゲームを登録しました。");
          router.push(`/admin/crossword/${category.name_en}`);
          router.refresh();
        }
      }  
    } catch(error: any) {
      alert("error: " + error);
    } finally {
      setIsLoading(false);
    }    
  }

  const handleSetRandomQuestions = useCallback(() => {
    console.log("ランダム生成");
  }, []);
  return (
    <Container>
      <div className="mt-8">
        <Link href={`/admin/crossword/${category.name_en}`} className="text-sm text-neutral-500 hover:underline">&lt;&lt; 以前ページへ戻る</Link>
        <Heading title="クロスワードゲーム生成" />
      </div>
      
      {/* カテゴリー、単元、章、言語 */}
      <div className="flex flex-col gap-1 py-2">
        <RadioGroupAndSelect
          name="part_id"
          value={watch("part_id")}
          disabled={isLoading || item}
          register={register}
          errors={errors}
          items={parts}
          handleOnChange={handleOnChange}
        />
        <RadioGroupAndSelect
          name="chapter_id"
          value={watch("chapter_id")}
          disabled={isLoading || item}
          register={register}
          errors={errors}
          items={chapters}
          handleOnChange={handleOnChange}
        />
        <RadioGroupAndSelect
          name="lang_id"
          value={watch("lang_id")}
          disabled={isLoading || item}
          register={register}
          errors={errors}
          items={langs}
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
          />
        </div>
      </div>

      <Hr />

      <div className="flex flex-col gap-1 md:flex-row">
        <Button label="問題追加" onClick={() => handleAppend()} primary/>
        { isCombined && <Button label="問題ランダム追加" onClick={handleSetRandomQuestions} info/> }
      </div>
      
      <div className="flex flex-col">
        <ErrorMessage message="※問題は最低3問以上登録すべきです。" />
        <ErrorMessage message="※正解の文字は他の正解の文字に１文字以上含まれないといけない" />
      </div>
      {
       fields.map((field, index) => (
        <CreateQuizAccordion
          key={field.id}
          title={`問題${index + 1}`}
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
        isChecked && crosswordData !== null &&
        <div className="flex flex-col gap-1 pb-4 md:flex-row md:w-48 md:gap-2">
          <Button label={`${item ? "修正する" : "新規登録"}`} onClick={handleSubmit(onSubmit)} primary />
          <Button label="取消" onClick={() => router.push("/admin/crossword")} error />
        </div>
      }
    </Container>
  )
}
