"use client";

import { UseFormRegister } from "react-hook-form";

interface FieldInfo {
  inputType: string;
  placeholderText: string;
  name: string;
  errors: any;
  register: UseFormRegister<any>;
}

const InputField: React.FC<FieldInfo> = ({
  inputType,
  placeholderText,
  name,
  errors,
  register,
}) => {
  return (
    <div className="mb-5">
      <label className="text-brandPrimary text-sm pl-6">{name}</label>
      <input
        className="mt-1 block outline-none placeholder:text-[#cacaca] text-base py-2 pl-6 border border-brandLsPrimary rounded-3xl w-full"
        type={inputType}
        placeholder={placeholderText}
        {...register(name)}
      />
      {errors[name] && (
        <p className="text-red-500 text-sm mt-1">{errors[name]?.message}</p>
      )}
    </div>
  );
};

export default InputField;
