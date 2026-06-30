"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const pathname = usePathname();

  const currentPath = pathname.split("/")[1];

  const textBoldStyle = (path: string): string =>
    `w-16 text-center text-18 font-bold ${currentPath === path || (path === "post" && currentPath === "") ? "text-black text-primary" : "text-black/80"}  hover:text-primary`;

  return (
    <header className="sticky top-0 flex justify-end w-full max-w-[800px] gap-5 py-3 bg-gray_bg z-50">
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
    </header>
  );
};

export default Header;
