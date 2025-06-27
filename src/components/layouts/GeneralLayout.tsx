import React, { useState } from "react";
import Sidebar from "../Sidebar";
import AnimatedBurgerIcon from "../common/AnimatedBurgerIcon";

interface GeneralLayoutProps {
  children?: React.ReactNode;
  rightAside?: React.ReactNode;
  title?: string;
}

const GeneralLayout: React.FC<GeneralLayoutProps> = ({
  children,
  rightAside,
  title,
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen pt-[47px] flex flex-col lg:flex-row relative bg-white  px-4 md:px-6">
      <button
        className="fixed top-5 right-5 z-50 hidden bg-white border border-light-silver rounded-lg p-2"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
      >
        <AnimatedBurgerIcon open={sidebarOpen} />
      </button>

      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-label="Close sidebar"
        />
      )}

      <div
        className={`
          fixed top-8 left-1 z-50 h-fit w-fit bg-transparent transition-transform duration-200
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0  lg:h-auto
          pl-0  lg:left-0
          lg:sticky lg:top-[47px] lg:self-start
        `}
      >
        <Sidebar />
      </div>

      {rightAside && (
        <aside
          className="
            order-1 lg:order-3
            w-full lg:min-w-[25vw] lg:max-w-[25vw]
            px-0 lg:px-6
            border-l-0 lg:border-l border-[var(--color-light-silver)]
            lg:sticky lg:top-[47px] self-start
            min-h-0 h-auto lg:h-[calc(100vh-94px)]
          "
        >
          {rightAside}
        </aside>
      )}

      {/* Main content */}
      <main
        className={`
          order-2 lg:order-2
          w-full
          lg:px-[2vw]
          space-y-8 lg:space-y-12
          overflow-x-hidden
        `}
      >
        {title && (
          <div className="flex-1 flex flex-col">
            <div className="relative">
              <div className="" aria-hidden="true" />
              <div className="fixed md:sticky top-0 pt-6 md:pt-0 z-30 bg-white w-[92vw] md:w-full">
                <h4 className="font-bold mb-3 lg:mb-6 border-b-[4px] border-brand w-fit">
                  {title}
                </h4>
                <div className="w-full " />
              </div>
            </div>
            <div className="">{children}</div>
          </div>
        )}

        {!title && <div> {children} </div>}
      </main>
    </div>
  );
};

export default GeneralLayout;
