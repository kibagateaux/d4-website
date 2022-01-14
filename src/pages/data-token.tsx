import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import type { NextPageContext } from "next";
import Head from "next/head";

import { LandingDataTokenTemplate } from "components/templates";

const Page = () => {
  const { t } = useTranslation(["landing-data-token"]);
  return (
    <>
      <Head>
        <title>{t("landing-data-token.head")}</title>
      </Head>

      <LandingDataTokenTemplate t={t} />
    </>
  );
};

export default Page;

export const getServerSideProps = async ({
  locale = "es",
}: NextPageContext) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "landing-data-token"])),
  },
});

Page.layout = "Landing";
Page.bgColor = "bg-theme-primary";
Page.textColor = "text-theme-primary-content";
