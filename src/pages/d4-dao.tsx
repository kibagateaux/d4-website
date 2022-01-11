import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import type { NextPageContext } from "next";
import Head from "next/head";

import { LandingD4DaoTemplate } from "components/templates";

const Page = () => {
  const { t } = useTranslation(["landing-d4-dao"]);
  return (
    <>
      <Head>
        <title>{t("landing-d4-dao.head")}</title>
      </Head>

      <LandingD4DaoTemplate t={t} />
    </>
  );
};

export default Page;

export const getServerSideProps = async ({
  locale = "es",
}: NextPageContext) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "landing-d4-dao"])),
  },
});

Page.layout = "Landing";
