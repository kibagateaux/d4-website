import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import type { NextPageContext } from "next";

import { LandingHomeTemplate } from "components/templates";
import { SEOTags } from "components/modules";

const Home = () => {
  const { t } = useTranslation(["landing-home"]);

  const seo = {
    title: t("landing-home.seo.title"),
    description: t("landing-home.seo.description"),
    keywords: t("landing-home.seo.keywords"),
    image: t("landing-home.seo.image"),
    author: t("landing-home.seo.author"),
    twitterSite: t("landing-home.seo.twitterSite"),
    twitterCreator: t("landing-home.seo.twitterCreator"),
  };

  return (
    <>
      <SEOTags {...seo} />
      <LandingHomeTemplate t={t} />
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

Home.layout = "Landing";
