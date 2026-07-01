import Link from "next/link";
import React from "react";

import GithubIcon from "../../assets/icons/ic_github.svg";
import InstaIcon from "../../assets/icons/ic_instagram.svg";
import PersonIcon from "../../assets/icons/ic_person.svg";

const iconLinkClassName =
  "inline-flex h-8 w-8 items-center justify-center rounded-md border border-transparent hover:border-gray/20 hover:bg-gray/10";

const Footer = () => {
  return (
    <footer className="flex w-full flex-col justify-center gap-y-2 p-5 text-14 text-black">
      <div className="flex justify-center gap-x-1">
        <Link
          href="https://picturesque-cost-2c3.notion.site/Frontend-Developer-38b4be9efc2480e7b5aadb8f8e79f93e?pvs=74"
          className={iconLinkClassName}
          target="_blank"
          rel="noreferrer"
          aria-label="Resume"
        >
          <PersonIcon />
        </Link>
        <Link
          className={iconLinkClassName}
          href="https://github.com/zinnli"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <GithubIcon />
        </Link>
        <Link
          className={iconLinkClassName}
          href="https://www.instagram.com/hinen_li/"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
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
