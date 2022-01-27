import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Head from "next/head";

interface SEOTagsProps {
  title?: string | null;
  description?: string | null;
  keywords?: string | null;
  image?: string | null;
  author?: string | null;
  twitterSite?: string | null;
  twitterCreator?: string | null;
}

export const SEOTags = (props: SEOTagsProps) => {
  const { t } = useTranslation(["common"]);
  const defaultProps = {
    title: t("seo.title"),
    description: t("seo.description"),
    keywords: t("seo.keywords"),
    image: t("seo.image"),
    author: t("seo.author"),
    twitterSite: t("seo.twitterSite"),
    twitterCreator: t("seo.twitterCreator"),
  };
  const specificProps = { ...props };
  const omitEmpty = (obj: any) => {
    Object.keys(obj)
      .filter((k) => !obj[k])
      .forEach((k) => delete obj[k]);
    return obj;
  };

  const mergeObj = { ...omitEmpty(defaultProps), ...omitEmpty(specificProps) };
  const {
    title,
    description,
    keywords,
    image,
    author,
    twitterSite,
    twitterCreator,
  } = mergeObj;

  const router = useRouter();
  const locales = router.locales;
  const defaultLocale = router.defaultLocale || "en";

  const baseUri = process.env.NEXT_PUBLIC_BASE_URI || "";
  const path = router.asPath;

  const uri = `${baseUri}${path}`;

  return (
    <Head>
      <title>{title}</title>

      <link rel="canonical" href={uri} />

      {Array.isArray(locales) &&
        locales.length > 1 &&
        locales.map((lang) => {
          let langUri = `${baseUri}/${lang}${path}`;
          if (lang === defaultLocale) {
            langUri = uri;
          }
          return (
            <link key={lang} rel="alternate" href={langUri} hrefLang={lang} />
          );
        })}

      <meta name="description" content={description ?? ""} />
      <meta name="keywords" content={keywords ?? ""} />
      <meta name="author" content={author ?? ""} />

      <meta name="google" content="notranslate" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterSite ?? ""} />
      <meta name="twitter:creator" content={twitterCreator ?? ""} />

      <meta name="og:title" content={title ?? ""} />
      <meta name="og:description" content={description ?? ""} />
      <meta name="og:url" content={uri} />
      <meta name="og:image" content={image ?? ""} />
      <meta name="og:type" content="website" />
    </Head>
  );
};
