import Head from "next/head";
import { RecoilRoot } from "recoil";
import { LandingLayout } from "./Landing/LandingLayout";

export enum LayoutTypes {
  Landing = "Landing",
}

interface LayoutProps {
  name?: string;
  children: React.ReactNode;
}

const renderWithLayout = ({ name, children }: LayoutProps) => {
  switch (name) {
    case LayoutTypes.Landing:
      return <LandingLayout>{children}</LandingLayout>;
    default:
      return <>{children}</>;
  }
};

export const Layout = ({ name, children }: LayoutProps) => (
  <RecoilRoot>
    <Head>
      <meta charSet="utf-8" />
      <meta content="text/html;charset=utf-8" httpEquiv="Content-Type" />
      <meta content="utf-8" httpEquiv="encoding" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
    </Head>
    <div data-theme="d4data">{renderWithLayout({ name, children })}</div>
  </RecoilRoot>
);
