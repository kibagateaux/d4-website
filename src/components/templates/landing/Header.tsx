import { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";
import { XIcon } from "@heroicons/react/outline";
import Link from "next/link";

import { Container } from "components/elements";
import { ElementBounds } from "models";
import { selectedItemHeaderAtom } from "./header-element.state";
import HeaderMobileMenu from "./HeaderMobileMenu";

const LogoLink = ({ src }: { src: string }) => (
  <Link href="/">
    <a className="w-12">
      <img src={src} alt="" className="h-12" />
    </a>
  </Link>
);

const MenuLink = ({
  selected,
  children,
  textColor,
  bgSelectedColor,
  textSelectedColor,
}: {
  selected: boolean;
  children: React.ReactNode;
  textColor: string;
  bgSelectedColor: string;
  textSelectedColor: string;
}) => {
  const linkRef = useRef<any>();
  const [selectedItem, setSelectedItem] = useRecoilState<ElementBounds | null>(
    selectedItemHeaderAtom
  );

  const getSelectedLinkSize = () => {
    if (selected) {
      const bounds: ElementBounds = {
        left: linkRef.current?.offsetLeft || selectedItem?.left,
        width: linkRef.current?.offsetWidth || selectedItem?.width,
      };
      setSelectedItem(bounds);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", getSelectedLinkSize);
    setTimeout(() => getSelectedLinkSize(), 0);
  }, [linkRef.current]);

  return (
    <div
      ref={linkRef}
      className={`cursor-pointer hover:opacity-80 flex h-full items-center font-bold md:font-normal font-alt p-4 md:px-7 ${
        selected
          ? `${bgSelectedColor} ${textSelectedColor} selected-option-header`
          : textColor
      }`}
    >
      {children}
    </div>
  );
};

const MenuLinks = ({
  textColor,
  bgSelectedColor,
  textSelectedColor,
  ...props
}: any) => {
  const router = useRouter();
  const currentRoute = router?.route;

  const links: any[] = [
    {
      name: "What is D4DATA",
      href: "/what-is-d4data",
      hrefRx: "/what-is-d4data",
    },
    {
      name: "D4 DAO",
      href: "/d4-dao",
      hrefRx: "/d4-dao",
    },
    {
      name: "$DATA Token",
      href: "/data-token",
      hrefRx: "/data-token",
    },
    {
      name: "News",
      href: "/news",
      hrefRx: "/news",
    },
  ];

  return (
    <div {...props}>
      {links.map(({ name, href, hrefRx }, index) => (
        <Link href={href} key={index}>
          <a className="h-full">
            <MenuLink
              selected={currentRoute.indexOf(hrefRx) >= 0}
              textColor={textColor}
              bgSelectedColor={bgSelectedColor}
              textSelectedColor={textSelectedColor}
            >
              {name}
            </MenuLink>
          </a>
        </Link>
      ))}
    </div>
  );
};

const RRSSLinks = (props: any) => (
  <div {...props}>
    <Link href="#">
      <a>
        <img src="/images/twitter.svg" alt="Twitter" className="h-6" />
      </a>
    </Link>
    <Link href="#">
      <a>
        <img src="/images/discord.svg" alt="Twitter" className="h-6" />
      </a>
    </Link>
  </div>
);

interface LandingHeaderProps {
  logo?: string;
  bgColor?: string;
  textColor?: string;
  bgSelectedColor?: string;
  textSelectedColor?: string;
}

const LandingHeader = ({
  logo = "/images/logo.svg",
  bgColor = "bg-white",
  textColor = "text-theme-base-content",
  bgSelectedColor = "bg-theme-primary",
  textSelectedColor = "text-theme-base-100",
}: LandingHeaderProps) => {
  const [leftMenuOpen, setLeftMenuOpen] = useState(false);
  const [rightMenuOpen, setRightMenuOpen] = useState(false);

  const handleMobileLeftMenu = () => {
    setLeftMenuOpen(!leftMenuOpen);
  };

  const handleMobileRightMenu = () => {
    setRightMenuOpen(!rightMenuOpen);
  };

  return (
    <header
      className={`sticky top-0 z-50 ${bgColor} ${textColor} bg-opacity-50`}
    >
      <Container>
        {/* Desktop header */}
        <div className="hidden md:flex items-center justify-between border-b border-opacity-40 px-4">
          <LogoLink src={logo} />
          <MenuLinks
            className="flex items-center h-16"
            textColor={textColor}
            bgSelectedColor={bgSelectedColor}
            textSelectedColor={textSelectedColor}
          />
          <RRSSLinks className="flex items-center space-x-4" />
        </div>
      </Container>

      {/* Mobile header */}
      <div className="flex items-center justify-between bg-transparent md:hidden top-0 w-full py-4">
        <Link href="/">
          <a className="bg-theme-primary text-theme-primary-content px-4 py-2 hover:opacity-80 z-50 cursor-pointer">
            <img src="/images/logo-symbol.svg" alt="" className="w-6" />
          </a>
        </Link>
        <div
          className="bg-theme-base-content text-theme-base-100 px-4 py-2 hover:opacity-80 z-50 cursor-pointer"
          onClick={handleMobileRightMenu}
        >
          {rightMenuOpen ? (
            <XIcon width={25} />
          ) : (
            <img src="/images/menu.svg" alt="" className="w-6 py-2" />
          )}
        </div>
      </div>

      {/* Mobile Right Menu */}
      <HeaderMobileMenu
        onLeft={false}
        open={rightMenuOpen}
        onClose={handleMobileRightMenu}
      >
        <div className="flex h-full flex-col items-start justify-between px-4">
          <nav className="mt-20 text-2xl">
            <MenuLinks
              className="flex flex-col space-y-4 mt-8"
              onClick={handleMobileLeftMenu}
              textColor="text-theme-base-content"
              bgSelectedColor="bg-theme-primary"
              textSelectedColor="text-theme-primary-content"
            />
          </nav>
          <div className="pl-10 pb-20 flex w-full">
            <RRSSLinks
              className="grow flex justify-start space-x-8 py-8 border-t border-theme-primary"
              onClick={handleMobileRightMenu}
            />
          </div>
        </div>
      </HeaderMobileMenu>
    </header>
  );
};

export default LandingHeader;
