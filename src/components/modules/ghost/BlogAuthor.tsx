/* eslint-disable camelcase */
import { format } from "date-fns";
import { Avatar } from "primereact/avatar";

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
  <div className="flex items-center space-x-4 p-4 text-xs">
    {profile_image && (
      <img
        src={profile_image}
        alt=""
        className="rounded-full object-cover w-12 h-12 border"
      />
    )}
    <div>
      {name && <p className="font-alt font-bold mb-2">{name.toUpperCase()}</p>}
      <div className="flex">
        {published_at && (
          <div className="">
            {format(new Date(published_at), "d MMM yyyy").toLowerCase()}
          </div>
        )}
        {reading_time && <div>&nbsp;- {reading_time} min read</div>}
      </div>
    </div>
  </div>
);
