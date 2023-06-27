'use client';


import { useCallback, useEffect } from 'react';
import { FieldValues, SubmitHandler, useFieldArray, useForm } from 'react-hook-form';

import Modal from './Modal';
import { Heading } from "@/app/components/common";
import { Button, Input, Checkbox } from "@/app/components/htmlTag";
import usePartCreateModal from '@/app/hooks/usePartCreate';



type Props = {
  item: any;
  handleAppendPart?: (data: any) => void;
}

export default function CrosswordCreateSubModal({ item, handleAppendPart }: Props) {
  const createModal = usePartCreateModal();
  const { control, register, handleSubmit, formState: { errors }, setValue, getValues } = useForm<FieldValues>({
    defaultValues: {
      id: undefined,
      name: "",
      sorted: 0,
      chapters: [{id: 0, name: "", flg: false}]
    }
  });

  const { fields, append, update } = useFieldArray({
    control,
    name: "chapters",
  });
  
  useEffect(() => {
    if (item) {
      setValue('id', item.id);
      setValue('name', item.name);
      setValue('sorted', item.sorted);
      setValue('chapters', item.chapters);
    } else {
      setValue('id', undefined);
      setValue('name', "");
      setValue('sorted', 99);
      setValue('chapters', [{name: "", flg: false}]);
    }
  }, [item, setValue, createModal.isOpen]);

  // 章を追加するボタンを押下した時
  const handleAddChapter = useCallback(() => {
    append(null);
  }, [append]);
  
  // 章を削除するボタンを押下した時
  const handleChapterRemove = (index: number) => {
    if (fields.filter((field: any) => !field.onDelete).length > 1) {
      const prevName = getValues(`chapters.${index}.name`);
      const prevId = getValues(`chapters.${index}.id`);
      update(index, { id: prevId, name: prevName, onDelete: true, flg: false });
    }
  };

  // 章の総合ボタンを押下した時
  const handleOnChange = useCallback((index: number) => {
      const prevName = getValues(`chapters.${index}.name`);
      const prevId = getValues(`chapters.${index}.id`);
      const prevFlg = getValues(`chapters.${index}.flg`);
      update(index, { id: prevId, name: prevName, flg: !prevFlg });
  }, [update, getValues]);

  // 章を追加する
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (handleAppendPart) {
      handleAppendPart(data);
    }
console.log(data)
    createModal.onClose();
  }

  // モーダルを閉じる
  const handleOnClose = () => {
    createModal.onClose();
  }

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="単元" />
      <Input
        id="name"
        label="単元"
        register={register}
        errors={errors}
        validate={{ 
          required: "単元名を入力してください。",
          maxLength: { value: 50, message: "単元名は最大50文字までです。" }
        }}
      />
      <hr className="py-2"/>

      <Heading title="章" />
      <Button label="章を追加する" onClick={handleAddChapter} primary />
      {
        fields.map((chapter, chapterIndex) => {
          const { id, chapter_id, flg, onDelete } = chapter as { id: string, chapter_id: number, flg: boolean, onDelete: boolean };
          
          if (!onDelete) {
            return (
              <div key={chapterIndex} className="flex flex-row gap-1 items-center">
                <Input
                  id={`chapters.${chapterIndex}.name`}
                  label="章"
                  register={register}
                  errors={errors}
                  validate={{ 
                    required: "章名を入力してください。",
                    maxLength: { value: 50, message: "章名は最大50文字までです。" }
                  }}
                />
                <div className="flex-none w-30">
                  <Checkbox
                    id={`chapters.${chapterIndex}.flg`}
                    name={`chapters.${chapterIndex}.flg`}
                    label="総合"
                    register={register}
                    defaultChecked={flg}
                    handleOnChange={() => handleOnChange(chapterIndex)}
                  />
                </div>
                <div className="flex-none w-14">
                  <Button
                    label="-"
                    onClick={() => handleChapterRemove(chapterIndex)}
                    error
                  />
                </div>
              </div>
            )
          }
        })
      }
    </div>
  )


  return (
    <Modal
      isOpen={createModal.isOpen}
      title={`${item?.name ? item.name : "単元の追加"}`}
      actionLabel='追加する'
      onClose={handleOnClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
    />
  )
}
