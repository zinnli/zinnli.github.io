import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ABOUT | zinnli.dev",
  description: "저를 소개합니다.",
};

const About = () => {
  return (
    <>
      <section className="flex flex-col mt-12 w-[100%]">
        <div className="flex flex-col justify-start py-[5px] mb-10">
          <div className="flex gap-x-2 text-20 font-bold text-primary">
            <span>이현진</span>
            <span>LEE HYUNJIN</span>
          </div>
          <span className="text-18 text-primary_sub">Frontend developer</span>
        </div>
        <span>
          배우고, 기록하고, 나눕니다. 성장과 공유를 위한 개발 로그입니다.
        </span>
      </section>
    </>
  );
};

export default About;
