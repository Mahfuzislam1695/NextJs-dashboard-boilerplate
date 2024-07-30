"use client";

import Sidebar from "@/components/admin/Sidebar/Sidebar";
import Navbar from "@/components/ui/NavSidebar/Navbar/Navbar";
import store from "@/redux/Store/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useEffect, useState } from "react";
import { Provider } from "react-redux";

function Layout({ children }: { children: ReactNode }) {
  const [isSidebarVisible, setSidebarVisible] = useState(
    window.innerWidth > 767
  );

  const queryClient = new QueryClient();

  useEffect(() => {
    const handleResize = () => {
      setSidebarVisible(window.innerWidth > 767);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <div className="flex relative overflow-x-hidden ">
          <Sidebar />

          <div
            className={`ease-in-out duration-500 max-md:pl-0  pl-0
            } h-screen w-full relative`}
          >
            <Navbar />

            <div className="ml-72 mt-14 p-8">{children}</div>
          </div>
        </div>
      </QueryClientProvider>
    </Provider>
  );
}

export default Layout;
