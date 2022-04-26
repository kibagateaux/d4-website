import { TFunction } from "next-i18next";
import Footer from "../Footer";
import Header from "../Header";
import MainSection from "./MainSection";

interface DataTokenProps {
  t: TFunction;
}

const DataToken = ({ t }: DataTokenProps) => (
  <>
    <Header
      bgColor="text-black"
      textColor="text-theme-base-100"
      bgSelectedColor="bg-black bg-opacity-70"
      textSelectedColor="text-theme-base-100"
    />
    <MainSection t={t} />
    <div className="bg-theme-base-200">
      <Footer tagsBg="bg-theme-base-content" tagsColor="text-theme-base-100" />
    </div>
  </>
);

export default DataToken;
