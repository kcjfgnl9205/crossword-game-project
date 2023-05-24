'use client';


import { useCallback, useEffect } from 'react';
import {
  FieldValues,
  SubmitHandler,
  useFieldArray,
  useForm
} from 'react-hook-form';

import Modal from './Modal';
import { Heading } from "@/app/components/common";
import { Button, Input, Checkbox } from "@/app/components/htmlTag";
import usePartCreateModal from '@/app/hooks/usePartCreate';
import { PartCategoryType } from '@/app/types';



type Props = {
  item: PartCategoryType | null;
  handleAppendPart?: (data: any) => void;
}

export default function CrosswordCreateSubModal({ item, handleAppendPart }: Props) {
  const createModal = usePartCreateModal();
  const { control, register, handleSubmit, formState: { errors }, setValue, getValues } = useForm<FieldValues>({
    defaultValues: {
      id: 0,
      name: "",
      chapters: [{chapter_id: 0, name: "", flg: false, disabled: false}]
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
      setValue('chapters', item.chapters);
    } else {
      setValue('id', 0);
      setValue('name', "");
      setValue('chapters', [{chapter_id: 0, name: "", flg: false, disabled: false}]);
    }
  }, [item, setValue]);

  const handleAddChapter = useCallback(() => {
    append(null);
  }, [append]);
  
  const handleChapterRemove = (id: number, index: number) => {
    const prevName = getValues(`chapters.${index}.name`);
    update(index, { chapter_id: id, name: prevName, onDelete: true, flg: false});
  };

  
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (handleAppendPart) {
      handleAppendPart?.(data);
    }

    createModal.onClose();
  }

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
        required
      />
      <hr className="py-2"/>

      <Heading title="章" />
      <Button label="章を追加する" onClick={handleAddChapter} primary />
      {
        fields.map((chapter, chapterIndex) => {
          const { id, chapter_id, disabled, onDelete } = chapter as { id: string, chapter_id: number, disabled: boolean, onDelete: boolean };
          if (!onDelete) {
            return (
              <div key={chapterIndex} className="flex flex-row gap-1 items-center">
                <Input
                  id={`chapters.${chapterIndex}.name`}
                  label="章"
                  register={register}
                  errors={errors}
                  required
                />
                <div className="flex-none w-30">
                  <Checkbox
                    id={`chapters.${chapterIndex}.flg`}
                    name={`chapters.${chapterIndex}.flg`}
                    label="総合"
                    register={register}
                    disabled={disabled}
                  />
                </div>
                <div className="flex-none w-14">
                  <Button
                    label="-"
                    onClick={() => handleChapterRemove(chapter_id, chapterIndex)}
                    error
                    disabled={disabled}
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
