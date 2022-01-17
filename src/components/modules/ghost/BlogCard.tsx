import Link from "next/link";
import { Author } from "@tryghost/content-api";

import { BlogAuthor } from "./BlogAuthor";
import Title from "./PostTitle";

interface BlogCardProps {
  path?: string;
  slug: string;
  feature_image?: string | undefined | null;
  title?: string | undefined;
  published_at?: string | undefined | null;
  authors?: Author[] | undefined;
  reading_time?: number;
}

export const BlogCard = ({
  path = "blog",
  slug,
  feature_image,
  title = "",
  published_at,
  authors,
  reading_time,
}: BlogCardProps) => {
  const urlAs = `/${path}/${slug}`;
  const urlHref = `/${path}/[slug]`;

  return (
    <>
      <Link passHref as={urlAs} href={urlHref}>
        <a>
          {feature_image && (
            <div className="w-full h-72 lg:h-96">
              <img
                alt={title}
                src={feature_image}
                className="object-cover w-full h-full"
              />
            </div>
          )}
          <div className="py-4 space-y-4">
            <Title title={title} fontSize="text-2xl" padding="mb-2 p-2" />
            <BlogAuthor
              name={authors && authors[0].name}
              profile_image={authors && authors[0].profile_image}
              published_at={published_at}
              reading_time={reading_time}
            />
          </div>
        </a>
      </Link>
    </>
  );
};
