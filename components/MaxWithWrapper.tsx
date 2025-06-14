import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
export default function MaxWithWrapper({ children }: Props) {
  return (
    <div className="mx-auto h-full w-full max-w-[min(1571px,100%)]">
      {children}
    </div>
  );
}
