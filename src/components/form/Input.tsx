import { InputHTMLAttributes, DetailedHTMLProps } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  label: string;
  inputProps: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
}

export function Input({
  label,
  inputProps: { className, ...inputProps },
}: Props) {
  return (
    <div>
      <label className="block mb-2 text-white text-base md:text-xl">
        {label}
      </label>
      <input
        className={twMerge(
          "block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-transparent border-2 font-montserrat border-white   rounded-[10px]  focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40",
          className
        )}
        {...inputProps}
      />
    </div>
  );
}
