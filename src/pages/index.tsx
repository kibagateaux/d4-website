import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import type { NextPage, NextPageContext } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  const { t } = useTranslation(["landing-home"]);
  return (
    <>
      <Head>
        <title>{t("landing-home.head")}</title>
      </Head>

      <p className="bg-red-500">Home</p>
    </>
  );
};

export default Home;

export const getServerSideProps = async ({
  locale = "es",
}: NextPageContext) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "landing-home"])),
  },
});
