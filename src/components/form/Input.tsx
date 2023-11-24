import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  label: string;
  inputProps: HTMLAttributes<HTMLInputElement>;
}

export function Input({
  label,
  inputProps: { className, ...inputProps },
}: Props) {
  return (
    <div>
      <label className="block mb-2 text-sm text-gray-600">{label}</label>
      <input
        className={twMerge(
          "block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg  focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40",
          className
        )}
        {...inputProps}
      />
    </div>
  );
}
