import { twMerge } from "tailwind-merge";
export function Button({
  label,
  className,
}: {
  label: string;
  className: string;
}) {
  return (
    <button
      className={twMerge(
        "rounded-[10px] font-montserrat font-bold text-white text-lg md:text-[32px] leading-normal w-full p-2 md:p-4",
        className
      )}
    >
      {label}
    </button>
  );
}
