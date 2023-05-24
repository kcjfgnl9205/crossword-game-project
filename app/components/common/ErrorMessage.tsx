'use client';


type Prop = {
  message: string;
  small?: boolean;
}

export default function ErrorMessage({ message, small }: Prop) {
  return (
    <p
      className={`
        font-semibold
        text-rose-500
      `}
    >
      {message}
    </p>
  )
};
