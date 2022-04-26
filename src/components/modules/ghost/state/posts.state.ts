import { PostsOrPages, PostOrPage, GhostAPI } from "@tryghost/content-api";
import { selectorFamily, GetRecoilValue } from "recoil";
import { ghostAtom } from "./ghost.state";

export type GhostFilterPost = {
  filter?: string;
  limit?: number;
  page?: number;
  order?: string;
};

interface browsePostsProps {
  ghost: GhostAPI;
  filter: GhostFilterPost;
  tries?: number;
}

const browsePosts = async ({
  ghost,
  filter,
  tries = 5,
}: browsePostsProps): Promise<PostsOrPages | void> => {
  try {
    const result = await ghost.posts.browse({
      ...filter,
      include: ["tags", "authors"],
    });
    return result;
  } catch (error) {
    if (tries > 0) {
      console.error(`- browsePosts (retry): ${tries}`);
      browsePosts({ ghost, filter, tries: tries - 1 });
    }
  }
};

export const postsBrowserSelector = selectorFamily<
  PostsOrPages | void,
  GhostFilterPost
>({
  key: "postsBrowser",
  get:
    ({ limit = 10, page = 0, ...filterProps }: GhostFilterPost) =>
    async ({ get }: { get: GetRecoilValue }): Promise<PostsOrPages | void> => {
      const ghost = get(ghostAtom);
      if (ghost) {
        return await browsePosts({ ghost, filter: { limit, page: page + 1, ...filterProps } });
      }
    },
});

interface readPostsProps {
  ghost: GhostAPI;
  slug: string;
  tries?: number;
}

const readPosts = async ({
  ghost,
  slug,
  tries = 5,
}: readPostsProps): Promise<PostOrPage | void> => {
  try {
    const result = await ghost.posts.read(
      {
        slug,
      },
      { include: ["tags", "authors"] }
    );
    return result;
  } catch (error) {
    if (tries > 0) {
      console.error(`- readPosts (retry): ${tries}`);
      readPosts({ ghost, slug, tries: tries - 1 });
    }
  }
};

export const postsReadSelector = selectorFamily<PostOrPage | void, string>({
  key: "postsRead",
  get:
    (slug: string) =>
    async ({ get }: { get: GetRecoilValue }): Promise<PostOrPage | void> => {
      const ghost = get(ghostAtom);
      if (ghost) {
        return await readPosts({ ghost, slug });
      }
    },
});
