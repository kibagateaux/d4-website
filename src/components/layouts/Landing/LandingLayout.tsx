import { SkeletonLayout } from "../SkeletonLayout";
import LandingHeader from "./LandingHeader";

interface LandingLayoutProps {
  children: React.ReactNode;
  bgColor?: string;
  textColor?: string;
}

export const LandingLayout = ({
  children,
  bgColor = "bg-theme-base-100",
  textColor = "text-theme-base-content",
}: LandingLayoutProps) => (
  <SkeletonLayout
    menu={false}
    footer={null}
    header={<LandingHeader />}
    bgColor={bgColor}
    textColor={textColor}
  >
    {children}
  </SkeletonLayout>
);
