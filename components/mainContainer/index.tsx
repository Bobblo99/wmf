import { ReactNode } from "react";
interface MainProps {
    children: ReactNode;
  }
export default function Main({children}: MainProps) {
  return (
    <main className="bg-backgroundColor flex min-h-screen flex-col items-center justify-between p-16 dark:bg-bgDark">{children}</main>
  )
}
