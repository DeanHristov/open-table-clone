import { FC, InputHTMLAttributes } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input: FC<IInputProps> = (props) => {
  return (
    <div className="min-w-[290px] px-2 md:px-0 w-full relative">
      <input
        className="border border-gray-200 rounded md:mr-3 pl-10 py-2 h-12 w-full"
        {...props}
      />
      <MagnifyingGlassIcon
        width={24}
        className="absolute top-1/4 left-4 text-black"
      />
    </div>
  );
};

export default Input;
