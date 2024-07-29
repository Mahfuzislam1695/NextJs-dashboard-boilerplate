"use client";

import { useLocale, useTranslations } from "next-intl";


const MobileNavbar = () => {
  const t = useTranslations("Navbar");
  const locale = useLocale();
  return (
    <div className="flex justify-center items-center h-full -mt-0.5">
  this is mobile nav
    </div>
  );
};

export default MobileNavbar;

// h-[calc(screen-100px)]
