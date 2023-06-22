'use client';


import { PDFDownloadLink } from "@react-pdf/renderer";

type Props = {
  label: string;
  document: React.ReactElement;
  filename: string;

  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  primary?: boolean;
  error?: boolean;
  info?: boolean;  
}

export default function ButtonPDF({
  label,
  disabled,
  outline,
  small,
  primary,
  error,
  info,
  document,
  filename,
}: Props) {
  return (
    <PDFDownloadLink
      document={document}
      fileName={filename}
      className={`
        relative
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-lg
        hover:opacity-80
        transition
        w-full
        text-center
        ${ primary && "bg-blue-500" }
        ${ primary && "border-blue-500" }
        ${ primary && "text-white" }
        ${ info && "bg-lime-500 " }
        ${ info && "border-lime-500" }
        ${ info && "text-white" }
        ${ error && "bg-rose-500 " }
        ${ error && "border-rose-500" }
        ${ error && "text-white" }
        ${ small ? "py-1.5" : "py-3"}
        ${ small ? "text-sm" : "text-md"}
        ${ small ? "font-light" : "font-semibold"}
        ${ small ? "border-[1px]" : "border-2"}
      `}
    >
      {({loading}) => (loading ? <button>Loading...</button> : <button>{label}</button> )}
    </PDFDownloadLink>
  )
};