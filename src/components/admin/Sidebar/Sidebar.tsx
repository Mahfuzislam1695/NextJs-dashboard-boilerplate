import { RiDashboardFill, RiClipboardFill } from "react-icons/ri";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { CgListTree } from "react-icons/cg";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { useState } from "react";
import "./sidebar.css";
import Link from "next/link";
import { useLocale } from "next-intl";

const Sidebar = () => {
  const locale = useLocale();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <section
        className={`print:hidden bg-white h-screen fixed w-72 z-10 overflow-auto  border-r border-[#D4D4D4] scrollbar`}
      >
        {/* <section className="border border-red-400 h-screen overflow-auto scrollbar bg-black"> */}

        <aside className="mt-16">
          {/* =========================================== ADMIN PANEL ==================================== */}
          <div className="border-b border-[#d4d4d4]">
            <h1 className="px-4 py-6 font-bold text-brandPrimary text-xl">
              Admin Panel
            </h1>
          </div>
          {/* ============================================================================================ */}

          <main className="my-6 mx-4">
            {/* ============================================= DASHBOARD OVERVIEW =============================== */}
            <div className="flex items-center gap-3">
              <RiDashboardFill className="text-brandDs w-6 h-6" />
              <Link href={`/${locale}/admin/dashboard`}>
                <h1 className="text-[#1C1C1C] text-base font-normal">
                  Dashboard
                </h1>
              </Link>
            </div>

            {/* =========================================== HER POWER MODULES ===================================================== */}
            <div className="mt-12 flex flex-col gap-8 text-base text-[#1C1C1C]">
              {/* ***************************************************************************************************** */}
              <h6 className="text-[#646464] text-sm">Her Power Modules</h6>
              {/* ***************************************************************************************************** */}

              {/* =============================================== DASHBOARD MENUS ================================= */}

              <div>
                <div
                  onClick={() => handleToggle(0)}
                  className={`flex justify-between items-center gap-3 hover:font-bold hover:cursor-pointer ${
                    openIndex === 0 && "font-bold"
                  } group`}
                >
                  <div className="flex items-center gap-3">
                    <SiHomeassistantcommunitystore className="text-brandDs w-5 h-5" />
                    <h1>Category</h1>
                  </div>
                  {openIndex === 0 ? (
                    <IoIosArrowDown className="text-brandDs" />
                  ) : (
                    <IoIosArrowForward className="group-hover:text-brandDs" />
                  )}
                </div>
                {openIndex === 0 ? (
                  <div className="ml-6 mt-4 flex flex-col gap-3 text-sm text-[#444444] animation">
                    <Link href={`/${locale}/admin/category/subcategory`}>
                      <div className="flex items-center gap-3 hover:bg-[#F2F2F2] hover:cursor-pointer">
                        <CgListTree className="text-brandDs w-5 h-5" />{" "}
                        <h1>Subcategory</h1>
                      </div>
                    </Link>
                    <div className="flex items-center gap-3 hover:bg-[#F2F2F2] hover:cursor-pointer">
                      <MdOutlineDashboardCustomize className="text-brandDs w-5 h-5" />{" "}
                      <h1>Subcategory 1</h1>
                    </div>
                  </div>
                ) : null}
              </div>
              {/* ------------------------------------------------------------------------------------------------------------------------------------ */}
            </div>
          </main>
        </aside>
      </section>
    </>
  );
};

export default Sidebar;
