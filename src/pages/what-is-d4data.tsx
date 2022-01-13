import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import type { NextPageContext } from "next";
import Head from "next/head";

import { LandingWhatIsD4DataTemplate } from "components/templates";

const Page = () => {
  const { t } = useTranslation(["landing-what-is-d4data"]);
  return (
    <>
      <Head>
        <title>{t("landing-what-is-d4data.head")}</title>
      </Head>

      <LandingWhatIsD4DataTemplate t={t} />
    </>
  );
};

export default Page;

export const getServerSideProps = async ({
  locale = "es",
}: NextPageContext) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "landing-what-is-d4data"])),
  },
});

Page.layout = "Landing";
Page.bgColor = 'bg-theme-base-content';
Page.textColor = 'text-theme-base-100';
