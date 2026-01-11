import React from "react";
import Link from "next/link";

import InstaIcon from "../../assets/icons/ic_instagram.svg";
import GithubIcon from "../../assets/icons/ic_github.svg";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center gap-y-2 w-[100%] text-black text-14 mt-2 p-5">
      <div className="flex justify-center gap-x-2">
        <Link
          className="hover:fill-primary"
          href="https://github.com/zinnli"
          target="_blank"
        >
          <GithubIcon className="mt-[1px]" />
        </Link>
        <Link
          className="hover:fill-primary"
          href="https://www.instagram.com/hinen_li/"
          target="_blank"
        >
          <InstaIcon />
        </Link>
      </div>
      <span className="flex justify-center">
        © 2025. zinnli all rights reserved.
      </span>
    </footer>
  );
};

export default Footer;
