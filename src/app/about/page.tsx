import Link from "next/link";
import type { Metadata } from "next";

import InstaIcon from "../../assets/icons/ic_instagram.svg";
import GithubIcon from "../../assets/icons/ic_github.svg";
import PersonIcon from "../../assets/icons/ic_person.svg";

export const metadata: Metadata = {
  title: "ABOUT | zinnli.dev",
  description: "저를 소개합니다.",
};

const iconLinkClassName =
  "inline-flex h-8 w-8 items-center justify-center rounded-md border border-gray/20 text-black leading-none transition-colors hover:border-gray/20 hover:bg-gray/10 sm:border-transparent";

const About = () => {
  return (
    <section className="flex w-full flex-col mt-12">
      <div className="flex w-full flex-col gap-1 py-[5px] mb-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-x-2 text-20 font-bold text-black sm:flex-row sm:flex-wrap">
          <span>이현진</span>
          <span>Frontend developer</span>
        </div>
        <div className="flex shrink-0 items-center gap-x-1">
          <Link
            href="https://picturesque-cost-2c3.notion.site/Frontend-Developer-38b4be9efc2480e7b5aadb8f8e79f93e?pvs=74"
            className={iconLinkClassName}
            target="_blank"
          >
            <PersonIcon />
          </Link>
          <Link
            className={iconLinkClassName}
            href="https://github.com/zinnli"
            target="_blank"
          >
            <GithubIcon />
          </Link>
          <Link
            className={iconLinkClassName}
            href="https://www.instagram.com/hinen_li/"
            target="_blank"
          >
            <InstaIcon />
          </Link>
        </div>
      </div>
      <span>배우고, 기록하고, 나눕니다.</span>
      <span>
        구현 과정에서 마주한 문제와 선택의 이유를 기록하며, 더 나은 구조를
        고민합니다.
      </span>
    </section>
  );
};

export default About;
