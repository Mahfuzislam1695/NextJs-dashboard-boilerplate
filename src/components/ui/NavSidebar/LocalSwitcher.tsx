"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { ChangeEvent, useTransition } from "react";
import { IoGlobeOutline } from "react-icons/io5";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();
  const pathname = usePathname();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement> | string) => {
    const nextLocale = typeof e === "string" ? e : e.target.value;
    startTransition(() => {
      // Extract base path
      const basePath = pathname.replace(/^\/(en|bn)/, "");
      router.replace(`/${nextLocale}${basePath}`);
    });
  };

  const pathName = usePathname().toString();

  return (
    <div>
      <div
        className={
          "inline-flex items-center h-fit gap-2 max-lg:hidden mt-0  px-2 py-1 rounded-md"
        }
      >
        <IoGlobeOutline size={24} color="#2D0C3E" />

        <Select onValueChange={onSelectChange} defaultValue={localActive}>
          <SelectTrigger>
            <SelectValue placeholder={localActive} />
          </SelectTrigger>
          <SelectContent className="z-">
            <SelectItem
              value="en"
              className="text-brandPrimary hover:bg-brandPrimary rounded-md hover:text-sky-700 cursor-pointer"
            >
              English
            </SelectItem>
            <SelectItem
              value="bn"
              className="text-brandPrimary hover:bg-brandPrimary rounded-md hover:text-sky-700 cursor-pointer"
            >
              বাংলা
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex justify-between lg:hidden">
        <button
          className="flex justify-center items-center  w-full bg-[#421957] text-base font-bold text-white p-2"
          onClick={() => onSelectChange("en")}
          disabled={isPending}
        >
          English
        </button>
        <button
          className="flex justify-center items-center  w-full bg-[#EEDDF5] text-base font-bold text-[#421957] p-2"
          onClick={() => onSelectChange("bn")}
          disabled={isPending}
        >
          Bangla
        </button>
      </div>
    </div>
  );
}
