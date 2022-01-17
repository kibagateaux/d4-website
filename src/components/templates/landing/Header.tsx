import { FingerPrintIcon, MenuAlt4Icon } from "@heroicons/react/outline";
import { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";
import Link from "next/link";

import { Container, DiscordIcon, TwitterIcon } from "components/elements";
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
      className={`cursor-pointer hover:opacity-80 flex h-full items-center font-alt p-4 md:px-8 ${textColor} ${
        selected &&
        `${bgSelectedColor} ${textSelectedColor} selected-option-header`
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
        <TwitterIcon className="h-6" />
      </a>
    </Link>
    <Link href="#">
      <a>
        <DiscordIcon className="h-6" />
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
  logo = "/images/logo.png",
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
      className={`sticky top-0 z-50 ${bgColor} ${textColor} bg-opacity-50 backdrop-blur-sm`}
    >
      <Container>
        {/* Desktop header */}
        <div className="hidden md:flex items-center justify-between border-b border-opacity-40">
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
      <div className="flex items-center justify-between bg-transparent fixed md:hidden top-0 w-full z-50 py-4">
        <div
          className="bg-theme-primary text-theme-primary-content px-4 py-2 hover:opacity-80 cursor-pointer"
          onClick={handleMobileLeftMenu}
        >
          <FingerPrintIcon width={30} />
        </div>
        <div
          className="bg-theme-base-content text-theme-base-100 px-4 py-2 hover:opacity-80 cursor-pointer"
          onClick={handleMobileRightMenu}
        >
          <MenuAlt4Icon width={20} />
        </div>
      </div>

      {/* Mobile Left Menu */}
      <HeaderMobileMenu
        onLeft={true}
        open={leftMenuOpen}
        onClose={handleMobileLeftMenu}
      >
        <div className="mt-5 flex-1 h-0 overflow-y-auto">
          <nav className="px-4">
            <LogoLink src={logo} />
            <MenuLinks
              className="flex flex-col space-y-4 mt-8"
              onClick={handleMobileLeftMenu}
            />
          </nav>
        </div>
        <div className="px-4">{/* menuBottom */}</div>
      </HeaderMobileMenu>

      {/* Mobile Right Menu */}
      <HeaderMobileMenu
        onLeft={false}
        open={rightMenuOpen}
        onClose={handleMobileRightMenu}
      >
        <div className="px-4 space-y-4">
          <p className="text-4xl">RRSS</p>
          <RRSSLinks
            className="flex space-x-4"
            onClick={handleMobileRightMenu}
          />
        </div>
      </HeaderMobileMenu>
    </header>
  );
};

export default LandingHeader;
