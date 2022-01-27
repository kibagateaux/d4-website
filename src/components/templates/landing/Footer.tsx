import Link from "next/link";

import { Container } from "components/elements";

interface LandingFooterProps {
  tagsBg?: string;
  tagsColor?: string;
  topTextColor?: string;
}

const LandingFooter = ({
  tagsBg = "bg-theme-base-content",
  tagsColor = "text-theme-base-100",
  topTextColor = "text-theme-base-content",
}: LandingFooterProps) => {
  return (
    <>
      {/* Mobile view */}
      <footer className="w-full md:hidden space-y-4 max-w-md mx-auto p-4">
        <p className="flex items-center justify-center">
          <span className="px-4 border-l border-theme-base-content flex items-center h-12 text-2xl">
            We show the Path of the Data
          </span>
          <span className="px-4 border-x border-theme-base-content flex items-center h-12">
            <img src="/images/sword.svg" alt="" className="w-6" />
          </span>
        </p>

        <div className="font-alt w-full space-y-4">
          <div className="flex space-x-8 w-full">
            <div className={`h-8 w-1/6 ${tagsBg}`}></div>
            <div className={`h-8 w-5/6 ${tagsBg}`}></div>
          </div>

          <Link href="#">
            <a
              className={`h-8 w-5/6 ${tagsBg} ${tagsColor} flex items-center px-4 py-2 hover:opacity-80 cursor-pointer mr-12 font-bold`}
            >
              join the discord
            </a>
          </Link>

          <div className="flex space-x-8 w-full">
            <div className={`h-8 w-1/12 ${tagsBg}`}></div>
            <div className={`h-8 w-11/12 ${tagsBg}`}></div>
          </div>

          <Link href="#">
            <a
              className={`h-8 w-full ${tagsBg} ${tagsColor} flex items-center px-4 py-2 hover:opacity-80 cursor-pointer mr-12 font-bold`}
            >
              follow on twitter
            </a>
          </Link>

          <div className={`h-8 w-9/12 ${tagsBg}`}></div>
          <div className={`h-8 w-full ${tagsBg}`}></div>

          <Link href="#">
            <a
              className={`h-8 w-5/6 ${tagsBg} ${tagsColor} flex items-center justify-end px-4 py-2 hover:opacity-80 cursor-pointer mr-12 font-bold`}
            >
              read our minds
            </a>
          </Link>

          <div className={`h-8 w-full ${tagsBg}`}></div>

          <div
            className={`h-8 w-full ${tagsBg} ${tagsColor} flex items-center justify-end px-4 py-2 leading-none text-sm`}
          >
            © D4DATA 2022. All rights reserved
          </div>

          <div
            className={`h-8 w-full ${tagsBg} ${tagsColor} flex items-center justify-end px-4 py-2 leading-none text-sm`}
          >
            Designed by FLOC*
          </div>
          <div
            className={`h-8 w-full ${tagsBg} ${tagsColor} flex items-center justify-end px-4 py-2 leading-none text-sm`}
          >
            Developed by Tutellus
          </div>
        </div>
        <Link href="#top" scroll={true}>
          <button
            type="button"
            className="grow flex w-full text-4xl items-center justify-between space-x-2 font-bold font-alt uppercase cursor-pointer"
          >
            <span>Back to top</span>
            <img src="/images/arrow-up.svg" alt="" className="w-7" />
          </button>
        </Link>
      </footer>
      {/* Desktop view */}
      <footer className="py-12 px-4 hidden md:block">
        <Container className="space-y-3 md:space-y-6 text-xs md:text-sm">
          <div
            className={`flex flex-col md:flex-row items-center justify-between space-y-4 text-2xl md:text-3xl pb-4 md:pb-0 ${topTextColor}`}
          >
            <p className="grow flex items-center">
              <span className="px-4 border-l border-theme-base-content flex items-center h-12">
                We show the Path of the Data
              </span>
              <span className="px-4 border-x border-theme-base-content flex items-center h-12">
                <img src="/images/sword.svg" alt="" className="w-6" />
              </span>
            </p>
            <Link href="#" scroll={true}>
              <button
                type="button"
                className="flex items-center space-x-2 font-bold font-alt uppercase cursor-pointer"
              >
                <span>Back to top</span>
                <img src="/images/arrow-up.svg" alt="" className="w-6" />
              </button>
            </Link>
          </div>

          <div className="flex justify-between w-full">
            <div className="flex space-x-8 w-full">
              <div className={`h-8 w-1/6 ${tagsBg}`}></div>
              <div className={`h-8 w-2/4 ${tagsBg}`}></div>
            </div>
            <div className={`h-8 w-2/5 ${tagsBg}`}></div>
          </div>

          <div className="flex justify-between w-full font-alt font-bold text-theme-base-100 space-x-4 pr-10">
            <Link href="#">
              <a
                className={`h-8 w-1/2 md:w-1/3 ${tagsBg} ${tagsColor} flex items-center px-4 py-2 hover:opacity-80 cursor-pointer mr-12`}
              >
                join the discord
              </a>
            </Link>
            <Link href="#">
              <a
                className={`h-8 w-4/12 ${tagsBg} ${tagsColor} flex items-center justify-end px-4 py-2 hover:opacity-80 cursor-pointer`}
              >
                read out minds
              </a>
            </Link>
          </div>

          <div className="flex justify-between w-full">
            <div className="flex space-x-8 w-full">
              <div className={`h-8 w-1/12 ${tagsBg}`}></div>
              <div className={`h-8 w-4/12 ${tagsBg}`}></div>
            </div>
            <div className={`h-8 w-10/12 ${tagsBg}`}></div>
          </div>

          <div className="flex justify-between w-full font-alt text-theme-base-100 space-x-4">
            <Link href="#">
              <a
                className={`h-8 w-1/2 md:w-1/3 ${tagsBg} ${tagsColor} flex items-center px-4 py-2 hover:opacity-80 cursor-pointer font-bold`}
              >
                follow us on twitter
              </a>
            </Link>
            <div
              className={`h-8 w-1/2 md:w-5/12 ${tagsBg} ${tagsColor} flex items-center justify-end px-4 py-2 leading-none`}
            >
              © D4DATA 2022. All rights reserved
            </div>
          </div>

          <div className="flex justify-between w-full font-alt text-theme-base-100">
            <div className={`h-8 md:w-2/5 ${tagsBg}`}></div>
            <div className="flex space-x-4 w-full md:w-2/5">
              <div
                className={`h-8 w-1/2 ${tagsBg} ${tagsColor} flex items-center justify-end px-4 py-2 leading-none`}
              >
                Designed by FLOC*
              </div>
              <div
                className={`h-8 w-1/2 ${tagsBg} ${tagsColor} flex items-center justify-end px-4 py-2 leading-none`}
              >
                Developed by Tutellus
              </div>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default LandingFooter;
