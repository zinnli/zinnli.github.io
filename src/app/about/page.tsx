import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ABOUT | zinnli.dev",
  description: "저를 소개합니다.",
};

const workKeywords = [
  "운영 어드민",
  "모바일 웹",
  "서버 상태 관리",
  "다국어 UI",
  "Mock 환경",
];

const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript"],
  },
  {
    title: "State / Data",
    skills: ["TanStack Query", "Zustand", "Recoil"],
  },
  {
    title: "Form / Validation",
    skills: ["react-hook-form", "Zod", "Yup"],
  },
  {
    title: "Mocking",
    skills: ["MSW", "Dexie"],
  },
  {
    title: "Styling",
    skills: ["Tailwind CSS", "Emotion", "styled-components"],
  },
  {
    title: "Etc",
    skills: ["i18n", "Storybook", "Google Maps API"],
  },
];

const About = () => {
  return (
    <section className="flex w-full flex-col mt-12">
      
      <section className="flex flex-col pb-10">
      <div className="flex w-full flex-col gap-1 py-[5px] mb-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-x-2 text-20 font-bold text-black sm:flex-row sm:flex-wrap">
          <span>이현진</span>
          <span>Frontend developer</span>
        </div>
      </div>
      <div className="flex flex-col gap-y-1 text-16 leading-relaxed text-black/80">
        <span className="font-medium text-black">배우고, 기록하고, 나눕니다.</span>
        <span>
          구현 과정에서 마주한 문제와 선택의 이유를 기록하며, 더 나은 구조를
          고민합니다.
        </span>
      </div>
      </section>

      <section className="flex flex-col py-10 border-t border-gray_sub/40 mt-6">
        <h2 className="mb-6 text-20 font-bold text-black">Experience</h2>
        <div className="flex flex-col gap-y-4">
          <div className="flex flex-col gap-y-1">
            <h3 className="text-18 font-bold leading-relaxed text-black">
              코코넛사일로(Coconutsilo)
            </h3>
            <p className="text-14 text-gray">
              프론트엔드 연구원 · 2023.03 ~ 2026.04
            </p>
          </div>

          <div className="flex flex-col gap-y-2 text-14 leading-relaxed text-black/80">
            <p>
              KOKKOK 및 COCOTRUCK 서비스에서 운영 어드민과 드라이버 대상
              모바일 웹을 개발하고 유지보수했습니다.
            </p>
            <p>
              주문, 배송, 배차, 상품, 고객 관리처럼 상태 변화가 많은 화면을 관리했습니다. 또한 i18n 기반 다국어 UI와 React Query 기반 서버 상태 관리,
              MSW/Dexie 기반 시연 환경을 함께 구성했습니다.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-14 text-gray">
            {workKeywords.map((keyword, index) => (
              <span key={keyword}>
                {keyword}
                {index < workKeywords.length - 1 && (
                  <span className="ml-2 text-gray_sub">/</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </section>
      <section className="flex flex-col py-10 border-t border-gray_sub/40 mt-6">
        <h2 className="mb-6 text-20 font-bold text-black">Skills</h2>
        <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.title} className="flex flex-col gap-y-2">
              <h3 className="text-14 font-bold text-black">{group.title}</h3>
              <p className="text-14 leading-relaxed text-black/70">
                {group.skills.join(" / ")}
              </p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default About;
