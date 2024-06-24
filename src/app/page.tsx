import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="relative w-full min-h-screen m-0 p-0 -mt-2 lg:-mt-20 pt-60 lg:pt-80 pb-24 lg:pb-28 flex flex-col items-center justify-between bg-transparent bg-fixed bg-[url('/img/bg_portrait.png')] dark:bg-[url('/img/dark_bg_portrait.png')] md:bg-[url('/img/bg_landscape.png')] dark:md:bg-[url('/img/dark_bg_landscape.png')] bg-cover bg-center">
        {/* <div className="w-full h-fit flex items-center justify-center"> */}
        <div
          className="relative flex place-items-center
          before:absolute before:w-[480px] before:h-[300px] 
          after:absolute after:w-[240px] after:h-[180px] after:-z-20 
          before:-translate-x-1/2 before:rounded-full 
          before:bg-gradient-radial before:from-white 
          before:to-transparent before:blur-2xl before:content-[' '] 
          after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 
          after:via-blue-200 after:blur-2xl after:content-[' '] 
          before:dark:bg-gradient-to-br before:dark:from-transparent 
          before:dark:to-blue-700 before:dark:opacity-10 
          after:dark:from-sky-900 after:dark:via-[#0141ff] 
          after:dark:opacity-40 before:lg:h-[360px] m-0 p-0 pb-20">
          <Image className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] w-auto h-10 w-[auto] dark:invert" src="/img/logo.png" alt="Logo" width={180} height={40} priority />
        </div>
        {/* </div> */}
        <div className="grid text-center md:grid-cols-2 lg:grid-cols-4 lg:text-left m-0 p-0 z-10">
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer">
            <h2 className={`mb-3 text-2xl font-semibold`}>
              FrontEnd <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">-&gt;</span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Next.js version 13. Using App Router. With TypeScript version 5.</p>
          </a>

          <a
            href="https://www.material-tailwind.com/docs/react/installation"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
            target="_blank"
            rel="noopener noreferrer">
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Styling <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">-&gt;</span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Material UI v2 React Components with Tailwind CSS ver.3.</p>
          </a>

          <a
            href="https://d3js.org/what-is-d3#"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer">
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Visualization<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">-&gt;</span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Custom React Component with D3 Force Simulation version 3.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer">
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Deploy <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">-&gt;</span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Instantly deploy your Next.js site to a shareable URL with Vercel.</p>
          </a>
        </div>
      </div>
    </>
  );
}
