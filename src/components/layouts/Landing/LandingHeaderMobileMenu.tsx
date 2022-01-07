import { XIcon } from "@heroicons/react/outline";

interface LandingHeaderMobileMenuProps {
  children: React.ReactNode;
  onLeft?: boolean;
  open?: boolean;
  onClose?: () => void;
}

export const LandingHeaderMobileMenu = ({
  children,
  onLeft = true,
  open = false,
  onClose = () => {},
}: LandingHeaderMobileMenuProps) =>
  open ? (
    <div
      className={`fixed inset-0 flex ${
        onLeft ? "flex-row" : "flex-row-reverse"
      } z-50 md:hidden transform md:translate-x-0 transition duration-75 ease-linear ${
        !open && (onLeft ? "-translate-x-full" : "translate-x-full")
      }`}
    >
      <div
        className="fixed inset-0 bg-gray-900 bg-opacity-50"
        onClick={onClose}
      ></div>

      <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-theme-base-100 text-theme-base-content">
        <div
          className={`absolute top-0 ${
            onLeft ? "right-0 -mr-12" : "left-0 -ml-12"
          } pt-2`}
        >
          <button
            type="button"
            className="flex items-center justify-center h-10 w-10 rounded-full focus:outline-none"
            onClick={onClose}
          >
            <span className="sr-only"></span>
            <XIcon width={30} height={30} className="text-white" />
          </button>
        </div>
        <>{children}</>
      </div>
    </div>
  ) : null;
