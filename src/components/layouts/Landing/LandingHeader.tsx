import { FingerPrintIcon, MenuAlt4Icon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";

import { Container, DiscordIcon, Logo, TwitterIcon } from "components/elements";
import { LandingHeaderMobileMenu } from "./LandingHeaderMobileMenu";

const LogoLink = () => (
  <Link href="/">
    <a>
      <Logo className="h-12" />
    </a>
  </Link>
);

const MenuLink = ({
  selected,
  children,
}: {
  selected: boolean;
  children: React.ReactNode;
}) => (
  <div
    className={`cursor-pointer hover:opacity-80 flex h-full items-center font-alt p-4 md:px-8 ${
      selected && "bg-theme-primary text-white"
    }`}
  >
    {children}
  </div>
);

const MenuLinks = ({ ...props }: any) => {
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
            <MenuLink selected={currentRoute.indexOf(hrefRx) >= 0}>
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

const LandingHeader = () => {
  const [leftMenuOpen, setLeftMenuOpen] = useState(false);
  const [rightMenuOpen, setRightMenuOpen] = useState(false);

  const handleMobileLeftMenu = () => {
    setLeftMenuOpen(!leftMenuOpen);
  };

  const handleMobileRightMenu = () => {
    setRightMenuOpen(!rightMenuOpen);
  };

  return (
    <>
      <Container>
        {/* Desktop header */}
        <div className="hidden md:flex items-center justify-between border-b border-opacity-40">
          <LogoLink />
          <MenuLinks className="flex items-center h-16" />
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
      <LandingHeaderMobileMenu
        onLeft={true}
        open={leftMenuOpen}
        onClose={handleMobileLeftMenu}
      >
        <div className="mt-5 flex-1 h-0 overflow-y-auto">
          <nav className="px-4">
            <LogoLink />
            <MenuLinks
              className="flex flex-col space-y-4 mt-8"
              onClick={handleMobileLeftMenu}
            />
          </nav>
        </div>
        <div className="px-4">{/* menuBottom */}</div>
      </LandingHeaderMobileMenu>

      {/* Mobile Right Menu */}
      <LandingHeaderMobileMenu
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
      </LandingHeaderMobileMenu>
    </>
  );
};

export default LandingHeader;
