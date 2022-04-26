/* eslint-disable camelcase */
import { format } from "date-fns";

import { AnimatedLink } from "components/modules";

interface BlogAuthorProps {
  profile_image: string | undefined | null;
  published_at?: string | undefined | null;
  name: string | undefined;
  reading_time?: number;
}

export const BlogAuthor = ({
  profile_image,
  published_at,
  name,
  reading_time,
}: BlogAuthorProps) => (
  <div className="flex items-center space-x-4 text-xs">
    {profile_image && (
      <img
        src={profile_image}
        alt=""
        className="rounded-full object-cover w-12 h-12 border"
      />
    )}
    <div className="flex items-start justify-between w-full">
      <div className="space-y-1">
        {name && <p className="font-alt font-bold mb-0 text-lg">{name}</p>}
        <div className="flex text-theme-base-content-muted">
          {published_at && (
            <div className="">
              {format(new Date(published_at), "d MMM yyyy").toLowerCase()}
            </div>
          )}
          {reading_time && <div>&nbsp;- {reading_time} min read</div>}
        </div>
      </div>
      <div className="text-base">
        <AnimatedLink text="read more" tagColor="bg-theme-primary" />
      </div>
    </div>
  </div>
);
