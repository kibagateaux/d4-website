import { useEffect, useState } from "react";
import Link from "next/link";

interface AnimatedLinkProps {
  text: string;
  href?: string;
  tagColor?: string;
}

export const AnimatedLink = ({
  text,
  href,
  tagColor = "bg-theme-primary",
}: AnimatedLinkProps) => {
  const intervalMs = 300;
  const opacities = ["opacity-50", "opacity-100", "opacity-100"];

  const [currentOpacity, setCurrentOpacity] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOpacity((currentOpacity + 1) % opacities.length);
    }, intervalMs);
    return () => clearInterval(interval);
  });

  const content = (
    <div className="flex items-center justify-end space-x-2 max-w-2xl 2xl:max-w-3xl hover:opacity-80">
      <div className={`w-6 h-6 ${opacities[currentOpacity]} ${tagColor}`}></div>
      <div className="font-alt">{text}</div>
    </div>
  );

  return href ? (
    <Link href={href}>
      <a>{content}</a>
    </Link>
  ) : (
    content
  );
};
