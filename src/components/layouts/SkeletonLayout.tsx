import { XIcon } from "@heroicons/react/outline";
import { useState } from "react";

interface SkeletonLayoutProps {
  children: React.ReactNode;
  footer: React.ReactNode;
  header: React.ReactNode;
  menu: boolean;
  menuBottom?: React.ReactNode;
  menuTop?: React.ReactNode;
  bgColor?: string;
  textColor?: string;
}

export const SkeletonLayout = ({
  children,
  footer,
  header,
  menu = true,
  menuBottom,
  menuTop,
  bgColor = "bg-theme-base-100",
  textColor = "text-theme-base-content",
}: SkeletonLayoutProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <div className={`h-screen flex overflow-hidden ${bgColor} ${textColor}`}>
      {/* Menu */}
      {menu && (
        <>
          {/* Menu mobile */}
          <div
            className={`fixed inset-0 flex z-50 md:hidden transform md:translate-x-0 transition duration-100 ease-linear ${
              !menuOpen && "-translate-x-full"
            }`}
            role="dialog"
            aria-modal="true"
          >
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-gray-600 bg-opacity-75"
              aria-hidden="true"
              onClick={handleMenuClose}
            ></div>

            <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-theme-base-200 text-theme-base-content">
              <div className="absolute top-0 right-0 -mr-12 pt-2">
                <button
                  type="button"
                  className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  onClick={handleMenuClose}
                >
                  <span className="sr-only"></span>
                  <XIcon width={30} height={30} className="text-white" />
                </button>
              </div>

              {menuTop && (
                <div className="mt-5 flex-1 h-0 overflow-y-auto">
                  <nav className="px-2 space-y-1">{menuTop}</nav>
                </div>
              )}
              {menuBottom && <div className="px-4">{menuBottom}</div>}
            </div>
          </div>

          {/* Menu desktop */}
          <div className="hidden md:flex md:flex-shrink-0">
            <div className="flex flex-col w-64">
              <div className="flex-1 flex flex-col min-h-0 bg-theme-base-content">
                {menuTop && (
                  <div className="flex-1 flex flex-col overflow-y-auto">
                    <nav className="flex-1 px-2 py-4 space-y-1">{menuTop}</nav>
                  </div>
                )}
                {menuBottom && <div className="p-4">{menuBottom}</div>}
              </div>
            </div>
          </div>
        </>
      )}

      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <>{header}</>
        <main className="flex-1 relative overflow-y-auto focus:outline-none">
          {children}
        </main>
        <>{footer}</>
      </div>
    </div>
  );
};
