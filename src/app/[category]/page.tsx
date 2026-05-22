import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { List } from "@/components";
import {
  getMarkdownInfos,
  getPostList,
  getPostPaths,
  parseMarkdownPath,
} from "@/lib/mdx";

export const metadata: Metadata = {
  title: "POST | zinnli.dev",
  description: "공부한 내용을 정리, 공유합니다.",
};

export function generateStaticParams() {
  const postPaths: string[] = getPostPaths();
  const paramList = postPaths
    .map((path) => parseMarkdownPath(path))
    .map((item) => ({
      category: item.categoryPath,
    }));

  return paramList;
}

export const dynamicParams = false;

const Post = async ({ params }: { params: Promise<{ category: string }> }) => {
  const { category } = await params;

  const categories = await getMarkdownInfos();

  if (!categories.some((item) => item.category === category)) {
    notFound();
  }

  const post = await getPostList(category);

  const totalCount = categories.reduce((acc, curr) => acc + curr.count, 0);

  const selectTextStyle = (isSelected: boolean) =>
    `text-14 sm:text-16 ${isSelected ? "font-bold text-black" : "font-normal text-black/80"}`;

  return (
    <>
      <div className="flex justify-start gap-x-[10px] w-full mt-12 mb-12">
        <Link className={selectTextStyle(!category)} href={"/"}>
          All({totalCount})
        </Link>
        {categories.map((item, i) => {
          return (
            <Link
              className={selectTextStyle(item.category === category)}
              key={i}
              href={`${item.category}`}
            >
              {item.category}({item.count})
            </Link>
          );
        })}
      </div>
      <section className="flex flex-col gap-y-2 w-full">
        {(category
          ? post.filter((item) => item.categoryPath === category)
          : post
        ).map((item) => {
          return (
            <List
              key={item.filePath}
              isPost
              category={item.categoryPath}
              date={item.date}
              desc={item.desc}
              path={`/${item.filePath}`}
              title={item.title}
            />
          );
        })}
      </section>
    </>
  );
};

export default Post;
