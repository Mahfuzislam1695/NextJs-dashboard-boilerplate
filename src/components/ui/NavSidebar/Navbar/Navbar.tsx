"use client";

import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import LocalSwitcher from "../LocalSwitcher";
import styles from "@/styles/NavSidebar.module.css";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState<boolean>(false);
  const t = useTranslations("Navbar");
  const locale = useLocale();
  const pathName = usePathname().toString();

  const handleMobileSidebar = () => {
    setMobileNav(!mobileNav);
  };

  useEffect(() => {
    setMobileNav(false);
  }, [pathName]);

  return (
    <div className="">
      <nav
        className={`top-0 fixed w-full bg-sky-100 z-20 ${styles.navShadow} `}
      >
        <div className="container  w-full py-2 px-4">
          <div className="flex justify-between items-start max-lg:items-center">
            <div className="flex gap-8 max-lg:hidden">
              <LocalSwitcher />
            </div>
            <div className="flex justify-center gap-8  text-[#5954CC] text-lg font-medium py-1.5 max-lg:hidden">
              <Link
                href={`/${locale}/admin/dashboard`}
                className="text-center hover:underline underline-offset-8 decoration-black decoration-2 transition-all"
              >
                {t("dashboard")}
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
