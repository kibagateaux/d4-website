import {
  FacebookShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  VKShareButton,
} from "react-share";

import {
  FacebookIcon,
  LinkedinIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  VKIcon,
} from "react-share";

export default function PostShareButtons({ url }: { url: string }) {
  const buttonSize = 28;
  const borderRadius = 5;
  const rounded = false;
  return (
    <div className="flex items-center space-x-2">
      <FacebookShareButton url={url}>
        <FacebookIcon
          round={rounded}
          borderRadius={borderRadius}
          size={buttonSize}
        />
      </FacebookShareButton>
      <TwitterShareButton url={url}>
        <TwitterIcon
          round={rounded}
          borderRadius={borderRadius}
          size={buttonSize}
        />
      </TwitterShareButton>
      <PinterestShareButton url={url} media="">
        <PinterestIcon
          round={rounded}
          borderRadius={borderRadius}
          size={buttonSize}
        />
      </PinterestShareButton>
      <LinkedinShareButton url={url}>
        <LinkedinIcon
          round={rounded}
          borderRadius={borderRadius}
          size={buttonSize}
        />
      </LinkedinShareButton>
      <RedditShareButton url={url}>
        <RedditIcon
          round={rounded}
          borderRadius={borderRadius}
          size={buttonSize}
        />
      </RedditShareButton>
      <TumblrShareButton url={url}>
        <TumblrIcon
          round={rounded}
          borderRadius={borderRadius}
          size={buttonSize}
        />
      </TumblrShareButton>
      <VKShareButton url={url}>
        <VKIcon round={rounded} borderRadius={borderRadius} size={buttonSize} />
      </VKShareButton>
      <PocketShareButton url={url}>
        <PocketIcon
          round={rounded}
          borderRadius={borderRadius}
          size={buttonSize}
        />
      </PocketShareButton>
      <TelegramShareButton url={url}>
        <TelegramIcon
          round={rounded}
          borderRadius={borderRadius}
          size={buttonSize}
        />
      </TelegramShareButton>
    </div>
  );
}
