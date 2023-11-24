import { useState } from "react";
import { twMerge } from "tailwind-merge";

export function Radio({ options }: { options: string[] }) {
  const [selectedOption, setSelectedOption] = useState<string>(""); // Initially, no option is selected

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };

  return options.map((option, i) => (
    <RadioItem
      key={i}
      option={option}
      onChange={handleOptionChange}
      selectedOption={selectedOption}
    />
  ));
}

function RadioItem({
  option,
  selectedOption,
  onChange,
}: {
  option: string;
  selectedOption: string;
  onChange: (option: string) => void;
}) {
  const isSelected = option === selectedOption;

  return (
    <div className="flex items-center" onClick={() => onChange(option)}>
      <span
        className={twMerge(
          "rounded-full p-[8px] border-2 border-white",
          isSelected && "bg-red-600"
        )}
      />
      <span className="ml-2 text-white font-montserrat text-base whitespace-nowrap font-semibold">
        {option}
      </span>
    </div>
  );
}
