import { XIcon } from "@heroicons/react/outline";

interface LandingHeaderMobileMenuProps {
  children: React.ReactNode;
  onLeft?: boolean;
  open?: boolean;
  onClose?: () => void;
}

const HeaderMobileMenu = ({
  children,
  onLeft = true,
  open = false,
  onClose = () => {},
}: LandingHeaderMobileMenuProps) =>
  open ? (
    <div
      className={`fixed inset-0 flex h-screen ${
        onLeft ? "flex-row" : "flex-row-reverse"
      } z-40 md:hidden transform md:translate-x-0 transition duration-75 ease-linear ${
        !open && (onLeft ? "-translate-x-full" : "translate-x-full")
      }`}
    >
      <div
        className="fixed inset-0 bg-black bg-opacity-80"
        onClick={onClose}
      ></div>

      <div className="relative flex-1 flex flex-col max-w-lg ml-10 w-full h-screen pt-5 pb-4 bg-theme-base-100 text-theme-base-content">
        <div
          className={`absolute top-0 ${
            onLeft ? "right-0 -mr-12" : "left-0 -ml-12"
          } pt-2`}
        >
        </div>
        <>{children}</>
      </div>
    </div>
  ) : null;

export default HeaderMobileMenu;
