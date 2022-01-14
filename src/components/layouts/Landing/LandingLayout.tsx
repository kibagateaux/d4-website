import { SkeletonLayout } from "../SkeletonLayout";

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
    header={null}
    bgColor={bgColor}
    textColor={textColor}
  >
    {children}
  </SkeletonLayout>
);
