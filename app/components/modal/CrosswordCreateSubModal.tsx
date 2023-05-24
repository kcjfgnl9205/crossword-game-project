'use client';


import { useCallback, useState } from 'react';
import {
  FieldValues,
  SubmitHandler,
  useForm
} from 'react-hook-form';

import useCrosswordCreate from '@/app/hooks/useCrosswordCreate';
import Modal from './Modal';
import { Heading } from "@/app/components/common";
import { Input, Radio, Select, Checkbox } from "@/app/components/htmlTag";

const OPTIONS = [
	{ value: "1", name: "1章" },
	{ value: "2", name: "2章" },
	{ value: "3", name: "3章" },
  { value: "4", name: "総合" },
];

export default function CrosswordCreateSubModal() {
  const crosswordCreateSubModal = useCrosswordCreate();
  const [ isLoading, setIsLoading ] = useState<boolean>(false);

  const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: ""
    }
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    crosswordCreateSubModal.onClose();
  }

  const bodyContent = (
    <form>
      <div className="flex flex-col gap-4">
        <Heading title={`問題を選択てください。(超入門)`} />
        <div className="flex flex-row gap-1 md:hidden">
          <Select
            label="章を選択してください。"
            id="sample-t1"
            value="sample-t1"
            options={OPTIONS}
            disabled={isLoading}
            register={register}
            errors={errors}
          />
        </div>
        <div className="hidden md:flex md:flex-row md:gap-1">
          <Radio
            id="sample-t1"
            label="1章"
            value="sample-t1"
            name="sample2"
            disabled={isLoading}
            register={register}
            required
            defaultChecked
          />
          <Radio
            id="sample-t2"
            label="2章"
            value="sample-t2"
            name="sample2"
            disabled={isLoading}
            register={register}
            required
          />
          <Radio
            id="sample-t3"
            label="3章"
            value="sample-t3"
            name="sample2"
            disabled={isLoading}
            register={register}
            required
          />
          <Radio
            id="sample-t4"
            label="総合"
            value="sample-t4"
            name="sample2"
            disabled={isLoading}
            register={register}
            required
          />
        </div>

        <p className="text-rose-500 font-semibold text-md">※複数選択できます。</p>
      
        <Checkbox
          id="abcd"
          label="Javaはランタイムエラーを処理するための_______というメカニズムを提供しています。"
          // value="abcd"
          name="samplecheck"
          disabled={isLoading}
          register={register}
          required
        />
        <Checkbox
          id="abcd2"
          label="_______は、サブクラスがスーパークラスから継承したフィールドとメソッドに加えて独自のフィールドとメソッドを持つことができる機能です。"
          // value="abcd2"
          name="samplecheck"
          disabled={isLoading}
          register={register}
          required
        />
      </div>
    </form>
  )


  return (
    <Modal
      disabled={isLoading}
      isOpen={crosswordCreateSubModal.isOpen}
      title="問題選択"
      actionLabel='追加する'
      onClose={crosswordCreateSubModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
    />
  )
}