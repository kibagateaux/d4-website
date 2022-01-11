import { useEffect, useState } from "react";
import Link from "next/link";

import { shuffleArray } from "utils";

interface AnimatedLinkProps {
  text: string;
  href: string;
}

export const AnimatedLink = ({ text, href }: AnimatedLinkProps) => {
  const intervalMs = 300;
  const colors = [
    "bg-theme-base-400",
    "bg-theme-base-content",
    "bg-theme-primary",
  ];

  const [currentBg, setCurrentBg] = useState();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg(shuffleArray(colors)[0]);
    }, intervalMs);
    return () => clearInterval(interval);
  });

  return (
    <Link href={href}>
      <a className="flex items-center justify-end space-x-2 max-w-2xl 2xl:max-w-3xl hover:opacity-80">
        <div className={`w-6 h-6 ${currentBg}`}></div>
        <div className="font-alt">{text}</div>
      </a>
    </Link>
  );
};
