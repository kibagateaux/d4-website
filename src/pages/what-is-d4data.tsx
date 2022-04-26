import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import type { NextPageContext } from "next";

import { LandingWhatIsD4DataTemplate } from "components/templates";
import { SEOTags } from "components/modules";

const Page = () => {
  const { t } = useTranslation(["landing-what-is-d4data"]);

  const seo = {
    title: t("landing-what-is-d4data.seo.title"),
    description: t("landing-what-is-d4data.seo.description"),
    keywords: t("landing-what-is-d4data.seo.keywords"),
    image: t("landing-what-is-d4data.seo.image"),
    author: t("landing-what-is-d4data.seo.author"),
    twitterSite: t("landing-what-is-d4data.seo.twitterSite"),
    twitterCreator: t("landing-what-is-d4data.seo.twitterCreator"),
  };

  return (
    <>
      <SEOTags {...seo} />
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
