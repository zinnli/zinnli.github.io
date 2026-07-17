"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

interface MarkdownInfo {
  category: string;
  count: number;
}

interface Props {
  categories: MarkdownInfo[];
  totalCount: number;
  currentCategory?: string;
}

const CategoryNav = ({ categories, totalCount, currentCategory }: Props) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const options = [
    { category: "", label: "All", count: totalCount },
    ...categories.map((item) => ({
      category: item.category,
      label: item.category,
      count: item.count,
    })),
  ];

  const selected =
    options.find((item) => item.category === (currentCategory ?? "")) ??
    options[0];

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleSelect = (category: string) => {
    setIsOpen(false);
    router.push(category ? `/${category}` : "/");
  };

  return (
    <div
      ref={containerRef}
      className="relative w-fit self-start my-4 px-4 pt-4"
    >
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className="flex items-center gap-1.5 text-14 sm:text-16 font-bold text-black hover:text-primary transition-colors"
      >
        {selected.label}({selected.count})
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        >
          <path
            d="M1.5 3.5L5 7L8.5 3.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {isOpen && (
        <ul
          role="listbox"
          className="absolute left-0 top-full z-10 mt-2 min-w-[140px] rounded-md border border-gray_sub/30 bg-white py-1 shadow-md"
        >
          {options.map((item) => {
            const isSelected = item.category === selected.category;
            return (
              <li key={item.category || "all"} role="option" aria-selected={isSelected}>
                <button
                  type="button"
                  onClick={() => handleSelect(item.category)}
                  className={`block w-full px-4 py-2 text-left text-14 transition-colors hover:bg-gray_bg hover:text-primary ${
                    isSelected ? "font-bold text-primary" : "font-normal text-black/80"
                  }`}
                >
                  {item.label}({item.count})
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default CategoryNav;
