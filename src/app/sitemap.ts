import { getPostList, getMarkdownInfos } from "@/lib/mdx";
import type { MetadataRoute } from "next";

const BASE_URL = "https://zinnli.github.io";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const markdownInfos = await getMarkdownInfos();

  // 고정 페이지 (홈, about, project, 카테고리 목록)
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/project`, changeFrequency: "monthly", priority: 0.8 },
    ...markdownInfos.map((info) => ({
      url: `${BASE_URL}/${info.category}`,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];

  // 각 카테고리별 포스트 URL (lastModified 반영)
  const postUrls = await Promise.all(
    markdownInfos.map(async (info) => {
      const posts = await getPostList(info.category);
      return posts.map((post) => ({
        url: `${BASE_URL}/${post.filePath}`,
        lastModified: post.updatedDate,
        changeFrequency: "weekly" as const,
        priority: 0.7,
      }));
    })
  );

  return [...staticPages, ...postUrls.flat()];
}
