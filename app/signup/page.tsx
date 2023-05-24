'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";

import { Heading } from "@/app/components/common";
import { Input, Button } from "../components/htmlTag";


export default function Signup() {
  const router = useRouter();
  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
    defaultValues: {
      username: "",
      email: "",
      password: ""
    }
  })
  
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);
    try {
      const res = await axios.post("/api/register", data);
      if (res.status === 200) {
        alert("会員登録しました。\nログインしてください。");
        router.push("/login");
        router.refresh();
      }
    } catch (error: any) {
      alert(`${error.response.status}: ${error.response.statusText}`);
    } finally {
      setIsLoading(false);
    }
  }
  
  return (
    <div className="w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto">
      {/* content */}
      <div className="translate duration-300 h-full">
        <div className=" translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          {/* header */}
          <div className="flex items-center py-6 rounded-t justify-center relative">
            <Heading title="Signup" />
          </div>
          
          {/* body */}
          <div className="relative p-6">
            <form>
              <div className="flex flex-col gap-4">
                <Input
                  id="username"
                  type="text"
                  label="username"
                  disabled={isLoading}
                  register={register}
                  errors={errors}
                  required
                />
                <Input
                  id="password"
                  type="password"
                  label="password"
                  disabled={isLoading}
                  register={register}
                  errors={errors}
                  required
                />
              </div>
            </form>
          </div>

          {/* footer */}
          <div className="flex flex-col gap-2 p-6">
            <div className="flex flex-row items-conter gap-4 w-full"> 
              <Button disabled={isLoading} label="Sign Up" onClick={handleSubmit(onSubmit)} primary />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
