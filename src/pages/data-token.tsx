import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import type { NextPageContext } from "next";

import { LandingDataTokenTemplate } from "components/templates";
import { SEOTags } from "components/modules";

const Page = () => {
  const { t } = useTranslation(["landing-data-token"]);

  const seo = {
    title: t("landing-data-token.seo.title"),
    description: t("landing-data-token.seo.description"),
    keywords: t("landing-data-token.seo.keywords"),
    image: t("landing-data-token.seo.image"),
    author: t("landing-data-token.seo.author"),
    twitterSite: t("landing-data-token.seo.twitterSite"),
    twitterCreator: t("landing-data-token.seo.twitterCreator"),
  };

  return (
    <>
      <SEOTags {...seo} />
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
