import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import type { NextPageContext } from "next";

import { LandingD4DaoTemplate } from "components/templates";
import { SEOTags } from "components/modules";

const Page = () => {
  const { t } = useTranslation(["landing-d4-dao"]);

  const seo = {
    title: t("landing-d4-dao.seo.title"),
    description: t("landing-d4-dao.seo.description"),
    keywords: t("landing-d4-dao.seo.keywords"),
    image: t("landing-d4-dao.seo.image"),
    author: t("landing-d4-dao.seo.author"),
    twitterSite: t("landing-d4-dao.seo.twitterSite"),
    twitterCreator: t("landing-d4-dao.seo.twitterCreator"),
  };

  return (
    <>
      <SEOTags {...seo} />
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
