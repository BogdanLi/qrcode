import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Container({ children }: Props) {
  return (
    <div className="mx-4 sm:mx-auto max-w-2xl md:max-w-3xl lg:max-w-7xl space-y-4">
      {children}
    </div>
  );
}
