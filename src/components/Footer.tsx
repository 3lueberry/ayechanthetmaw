import Image from "next/image";
import Breadcrumbs from "./Crumbs";

const Footer = () => {
  return (
    <div className="relative mx-auto lg:max-w-screen-xl flex flex-col items-center justify-between lg:flex-row">
      <div className="hidden lg:block flex justify-center items-end w-auto rounded-xl p-2">
        <Breadcrumbs />
      </div>
      <div className="flex items-center justify-center w-full lg:h-auto lg:w-auto lg:bg-none lg:p-4">
        <a
          className="flex place-items-center gap-2 p-0 pointer-events-auto"
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer">
          <span className="-mb-2">coded with:</span>
          <Image className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert" src="/img/next.svg" alt="Next.js Logo" width={100} height={24} priority />
        </a>
      </div>
    </div>
  );
};

export default Footer;
