import fs from "fs";
import path from "path";
import matter from "gray-matter";
import dayjs from "dayjs";
import { sync } from "glob";

import type {
  MarkdownType,
  PostListType,
  PostMetaType,
  PostType,
} from "@/types";

const BASE_PATH = "src/markdown";
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

export const parsePostDetail = async (postPath: string): Promise<PostType> => {
  const fileContents = fs.readFileSync(postPath, "utf8");

  const { data, content } = matter(fileContents);
  const grayMatter = data as PostMetaType;
  const date = dayjs(grayMatter.date).locale("ko").format("YYYY-MM-DD");
  const updatedDate = new Date(grayMatter.date);

  return { ...grayMatter, content, date, updatedDate };
};

export const getPostDetail = async (
  category: string,
  slug: string
): Promise<PostType> => {
  const filePath = `${POSTS_PATH}/${category}/${slug}.mdx`;

  return await parsePostDetail(filePath);
};

export const getPostPaths = (category?: string): string[] => {
  return sync(`${POSTS_PATH}/${category || "**"}/**/*.mdx`);
};

export const parseMarkdownPath = (postPath: string): MarkdownType => {
  const filePath = postPath
    .slice(postPath.indexOf(BASE_PATH))
    .replace(`${BASE_PATH}/`, "")
    .replace(".mdx", "");

  const [categoryPath] = filePath.split("/");

  return { categoryPath, filePath };
};

export const getPostList = async (
  category: string
): Promise<PostListType[]> => {
  const postPaths = getPostPaths(category);

  const postList = await Promise.all(
    postPaths.map(async (postPath) => {
      const postDetaiilInfo = await parsePostDetail(postPath);

      return {
        ...parseMarkdownPath(postPath),
        title: postDetaiilInfo.title,
        desc: postDetaiilInfo.desc,
        date: postDetaiilInfo.date,
        updatedDate: postDetaiilInfo.updatedDate,
      };
    })
  );

  const sortedPostList = postList.sort(
    (a, b) => b.updatedDate.getTime() - a.updatedDate.getTime()
  );

  return sortedPostList;
};

type MarkdownInfosType = { count: number; category: string };

export const getMarkdownInfos = async (): Promise<MarkdownInfosType[]> => {
  const markdownInfos = fs
    .readdirSync(POSTS_PATH, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => {
      const folderPath = path.join(POSTS_PATH, entry.name);
      const files = fs
        .readdirSync(folderPath)
        .filter((file) => file.endsWith(".mdx"));

      return {
        category: entry.name,
        count: files.length,
      };
    });

  return markdownInfos;
};
