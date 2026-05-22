"use client";

import { useEffect, useRef, useState } from "react";
import type { Heading } from "@/lib/toc";

interface Props {
  headings: Heading[];
  variant: "desktop" | "mobile";
}

const TableOfContents = ({ headings, variant }: Props) => {
  const [activeId, setActiveId] = useState<string>("");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      }
    };

    observerRef.current = new IntersectionObserver(handleObserver, {
      rootMargin: "-10% 0% -80% 0%",
    });

    const elements = headings
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  const indentClass = (level: number) => {
    if (level === 3) return "pl-3";
    if (level === 4) return "pl-6";
    return "";
  };

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    const header = document.querySelector("header");
    const headerHeight = header?.getBoundingClientRect().height ?? 60;
    const top =
      element.getBoundingClientRect().top + window.scrollY - headerHeight - 16;
    window.scrollTo({ top, behavior: "smooth" });
  };

  if (variant === "mobile") {
    return (
      <>
        <nav className="w-full mb-8 rounded-md pl-2 py-3 xl:hidden">
          <span className="flex text-20 font-semibold text-black pb-4 tracking-wider">
            INDEX
          </span>
          <ul className="flex flex-col gap-y-1">
            {headings.map(({ id, text, level }) => (
              <li key={id} className={indentClass(level)}>
                <a
                  href={`#${id}`}
                  className="text-14 text-gray-sub underline hover:text-primary transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToHeading(id);
                  }}
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {/* <hr className="my-2 border-gray_sub" /> */}
      </>
    );
  }

  return (
    <nav className="hidden xl:block w-[200px]">
      <ul className="flex flex-col gap-y-1 border-l border-gray_sub/40 pl-3">
        {headings.map(({ id, text, level }) => (
          <li key={id} className={indentClass(level)}>
            <a
              href={`#${id}`}
              className={`block text-12 leading-relaxed transition-colors hover:text-primary ${
                activeId === id ? "text-primary font-medium" : "text-gray_sub"
              }`}
              onClick={(e) => {
                e.preventDefault();
                scrollToHeading(id);
              }}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;
