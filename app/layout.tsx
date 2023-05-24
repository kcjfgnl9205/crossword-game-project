import { Nunito } from "next/font/google";
import './globals.css'
import Navbar from "./components/Navbar/Navbar";
import getCurrentUser from "./actions/getCurrentUser";


export const metadata = {
  title: 'Crossword Game',
  description: 'Crossword Game',
}

const font = Nunito({
  subsets: ["latin"]
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar currentUser={currentUser} />
        {children}
      </body>
    </html>
  )
}
