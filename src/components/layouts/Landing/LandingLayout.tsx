import { SkeletonLayout } from "../SkeletonLayout";
import LandingHeader from "./LandingHeader";

interface LandingLayoutProps {
  children: React.ReactNode;
}

export const LandingLayout = ({ children }: LandingLayoutProps) => (
  <SkeletonLayout menu={false} footer={null} header={<LandingHeader />}>
    {children}
  </SkeletonLayout>
);
