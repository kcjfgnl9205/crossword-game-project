import { Container, Heading } from "@/app/components/common";


export default async function NotFound() {
  return (
    <Container>
      <div 
        className="
          h-[60vh]
          flex 
          flex-col 
          gap-2 
          justify-center 
          items-center
        "
      >
      <Heading
        center
        title="404 Not Found"
        subtitle="ページが存在しません。"
      />
    </div>
    </Container>
  )
}

