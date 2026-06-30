"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const pathname = usePathname();

  const currentPath = pathname.split("/")[1];

  const textBoldStyle = (path: string): string =>
    `w-16 text-center text-18 font-bold ${currentPath === path || (path === "post" && currentPath === "") ? "text-primary" : "text-black/80"} hover:text-primary`;

  return (
    <header className="sticky top-0 z-50 flex w-screen justify-center bg-gray_bg">
      <nav className="flex w-full max-w-[800px] justify-end gap-3 px-7 py-3 sm:gap-5">
        <Link href="/" className={textBoldStyle("post")}>
          POST
        </Link>
        {/* 프로젝트 2개 이상 나올 때까지 임시 주석 처리 
        <Link href="/project" className={textBoldStyle("project")}>
          PROJECTS
        </Link> */}
        <Link href="/about" className={textBoldStyle("about")}>
          ABOUT
        </Link>
      </nav>
    </header>
  );
};

export default Header;
