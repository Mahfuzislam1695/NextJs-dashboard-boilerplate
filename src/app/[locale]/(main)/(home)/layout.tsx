import Navbar from "@/components/ui/NavSidebar/Navbar/Navbar";
import { ReactNode } from "react";

function layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Navbar />
      <div className="mt-[60px]">{children}</div>
    </div>
  );
}

export default layout;
