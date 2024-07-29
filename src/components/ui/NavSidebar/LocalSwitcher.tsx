"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { ChangeEvent, useTransition } from "react";
import { IoGlobeOutline } from "react-icons/io5";

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
        className={`inline-flex items-center h-fit gap-2 max-lg:hidden ${
          !pathName.includes("shop-now")
            ? "mt-0 border border-brandLsPrimary px-2 py-1 rounded-md"
            : "mt-2"
        }`}
      >
        {pathName.includes("shop-now") ? (
          <></>
        ) : (
          <IoGlobeOutline size={24} color="#2D0C3E" />
        )}
        <select
          className="select-sm select-primary bg-transparent cursor-pointer border-none outline-none text-base font-semibold"
          defaultValue={localActive}
          onChange={onSelectChange}
          disabled={isPending}
        >
          <option value="en">EN</option>
          <option value="bn">BN</option>
        </select>
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
