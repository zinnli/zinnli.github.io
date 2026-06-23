import type { Metadata } from "next";

import { Post } from "@/components";
import { getPostDetail, getPostPaths, parseMarkdownPath } from "@/lib/mdx";
import { extractHeadings } from "@/lib/toc";
import TableOfContents from "@/components/toc/TableOfContents";
import Comment from "@/components/comment/Comment";

export function generateStaticParams() {
  const postPaths: string[] = getPostPaths();
  const paramList = postPaths
    .map((path) => parseMarkdownPath(path))
    .map((item) => ({
      category: item.categoryPath,
      slug: item.filePath.split("/")[1],
    }));

  return paramList;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}): Promise<Metadata> {
  const { category, slug } = await params;
  const post = await getPostDetail(category, slug);

  const title = post.title;
  const url = `https://zinnli.github.io/${category}/${slug}`;

  return {
    title,
    description: post.desc,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description: post.desc,
      type: "article",
      url,
      publishedTime: post.date,
    },
  };
}

export const dynamicParams = false;

const PostDetail = async ({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) => {
  const { category, slug } = await params;
  const post = await getPostDetail(category, slug);
  const headings = extractHeadings(post.content);
  const url = `https://zinnli.github.io/${category}/${slug}`;
  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.desc,
    datePublished: post.date,
    dateModified: post.updatedDate.toISOString(),
    url,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    author: {
      "@type": "Person",
      name: "Hyunjin Lee",
      url: "https://zinnli.github.io/about",
    },
  }).replace(/</g, "\\u003c");

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
      <section className="flex flex-col w-full max-w-[800px] px-4 py-10">
        <h1 className="flex justify-center w-full text-primary text-26 sm:text-30 font-bold mb-10">
          {post.title}
        </h1>
        <span className="mb-8 text-right">{post.date}</span>
        <TableOfContents headings={headings} variant="mobile" />
        <Post post={post} />
        <Comment />
      </section>
      <div className="fixed top-24 left-[calc(50%+430px)] hidden xl:block">
        <TableOfContents headings={headings} variant="desktop" />
      </div>
    </>
  );
};

export default PostDetail;
