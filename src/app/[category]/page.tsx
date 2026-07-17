import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { CategoryNav, List } from "@/components";
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

  return (
    <>
      <CategoryNav
        categories={categories}
        totalCount={totalCount}
        currentCategory={category}
      />
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
