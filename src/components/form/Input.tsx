import { InputHTMLAttributes, DetailedHTMLProps } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  label: string;
  inputProps: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  error?: string;
  containerClass?: string;
}

export function Input({
  label,
  inputProps: { className, ...inputProps },
  error,
  containerClass,
}: Props) {
  return (
    <div className={twMerge(containerClass)}>
      <label className="block mb-2 text-white text-base md:text-xl">
        {label}
      </label>
      <input
        className={twMerge(
          "block w-full px-5 py-3 mt-2 text-white placeholder-gray-400 bg-transparent border-2 font-montserrat border-white   rounded-[10px]  ",
          className
        )}
        {...inputProps}
      />
      {error && <p className="my-1 text-red-500"> {error}</p>}
    </div>
  );
}
