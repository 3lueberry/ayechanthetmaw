import type { Metadata } from "next";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import "./global.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import Footer from "../components/Footer";
import ComplexNavbar from "../components/ComplexNavbar";

export const metadata: Metadata = {
  title: "Aye Chan Thet Maw",
  description: "My Porfolio",
  // themeColor: "#3b82f6",
  appleWebApp: {
    title: "My Resume",
    statusBarStyle: "black-translucent",
    startupImage: ["/img/startup.png"],
  },
  manifest: "/manifest.json",
  // other: {
  //   "msapplication-TileColor": "#3b82f6cd",
  // },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.className}>
      {/* <div className="block m-0 p-0 w-full bg-blue-500 h-[128px] -mt-[128px] lg:hidden"></div> */}
      <body className="bg-cover bg-fixed">
        <header className="sticky -top-11 md:top-0 left-0 w-full m-0 p-0 z-20 lg:pt-6 bg-transparent backdrop-blur-sm">
          <ComplexNavbar />
        </header>{" "}
        <main className="m-0 p-0 w-full min-h-[calc(100vh-5rem)] -mt-14 lg:min-h-screen lg:-mt-20 lg:pt-20 h-fit flex flex-col items-center justify-center overflow-x-clip">{children}</main>
        <footer className="m-0 p-0 fixed bottom-0 left-0 z-10 w-full py-8 lg:py-6 font-mono text-sm bg-gradient-to-t from-white via-white dark:from-black dark:via-black backdrop-blur-sm">
          <Footer />
        </footer>
        {/* <div className="absolute top-0 left-0 w-screen h-screen bg-[rgba(255,255,255,0.5)] z-30 pointer-events-none"></div> */}
      </body>
    </html>
  );
}
