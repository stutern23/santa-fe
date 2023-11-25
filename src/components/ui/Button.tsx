import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

export function Button({ className, children, ...props }: Props) {
  return (
    <button
      className={twMerge(
        "rounded-[10px] font-montserrat font-bold text-white text-lg md:text-[32px] leading-normal w-full p-2 md:p-4",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
