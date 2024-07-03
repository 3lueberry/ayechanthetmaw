import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import { PropsWithChildren, createElement } from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface LinkProps extends PropsWithChildren<any> {
  href: string;
}

export function MDX({ components, ...props }: MDXRemoteProps) {
  if (components == undefined) components = {};
  components = {
    ...components,
    h2: ({ children, ...props }: PropsWithChildren) => (
      <>
        <h2 {...props} className="text-2xl font-bold">
          {children}
        </h2>
        <hr className="h-4" />
      </>
    ),
    h3: ({ children, ...props }: PropsWithChildren) => (
      <h3 {...props} className="text-xl font-bold">
        {children}
      </h3>
    ),
    ul: ({ children, ...props }: PropsWithChildren) => (
      <ul {...props} className="list-disc font-normal pl-10 mb-4">
        {children}
      </ul>
    ),
    a: ({ children, ...props }: LinkProps) => (
      <Link {...props} rel="noopener noreferrer" target="_blank">
        <button
          type="button"
          className="align-middle select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-gray-900 hover:text-blue-500 hover:bg-gray-900/10 active:bg-gray-900/20">
          <div className="flex flex-nowrap items-center">
            <div className="flex-auto px-1 font-sans font-bold text-center uppercase">{children}</div>
            <div className="flex-auto px-1">{createElement(ArrowTopRightOnSquareIcon, { strokeWidth: 1, className: "h-4 w-4 opacity-70" })}</div>
          </div>
        </button>
      </Link>
    ),
  };
  return <MDXRemote {...props} components={components} />;
}
