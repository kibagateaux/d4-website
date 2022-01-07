import { FingerPrintIcon, MenuAlt4Icon } from "@heroicons/react/outline";
import { useState } from "react";
import Link from "next/link";

import { Container, DiscordIcon, TwitterIcon } from "components/elements";
import { LandingHeaderMobileMenu } from "./LandingHeaderMobileMenu";

const LogoLink = () => (
  <Link href="#">
    <a>
      <img src="/images/logo.png" alt="" />
    </a>
  </Link>
);

const MenuLinks = (props: any) => (
  <div {...props}>
    <Link href="#what-is-d4data">
      <a>What is D4DATA</a>
    </Link>
    <Link href="#d4-dao">
      <a>D4 DAO</a>
    </Link>
    <Link href="#data-token">
      <a>$DATA Token</a>
    </Link>
    <Link href="#news">
      <a>News</a>
    </Link>
  </div>
);

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
        <div className="hidden md:flex items-center justify-between border-b py-2 font-alt">
          <LogoLink />
          <MenuLinks className="flex items-center space-x-12" />
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
