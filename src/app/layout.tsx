import "./globals.css";
import { Inter } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import Footer from "../components/Footer";
import ComplexNavbar from "../components/ComplexNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aye Chan Thet Maw",
  description: "My Resume",
  themeColor: "#3b82f6",
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // className="[@media(prefers-color-scheme:dark)]:sepia-[0.1]"
  return (
    <html lang="en" className={inter.className}>
      {/* <div className="block m-0 p-0 w-full bg-blue-500 h-[128px] -mt-[128px] lg:hidden"></div> */}
      <body>
        <header className="sticky -top-[44px] md:fixed md:top-0 lg:top-5 left-0 w-full m-0 p-0 z-20">
          <ComplexNavbar />
        </header>{" "}
        <main className="w-full min-h-screen m-0 p-0 -my-24 md:my-0 flex flex-col items-center justify-between overflow-x-clip">{children}</main>
        <footer className="m-0 p-0 sticky bottom-0 left-0 z-10 w-full py-8 font-mono text-sm md:fixed bg-gradient-to-t from-white via-white dark:from-black dark:via-black backdrop-blur-sm">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
