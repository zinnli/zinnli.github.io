import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";

import { Mdx } from "../mdx";

interface Props {
  post: {
    title: string;
    date: string;
    thumbnail?: string;
    desc?: string;
    content: string;
  };
}

const Post = ({ post }: Props) => {
  if (!post.content) {
    return <p>Error: No content available</p>;
  }

  return (
    <article className="w-full max-w-[800px] mb-10 prose prose-lg prose-slate">
      <MDXRemote
        source={post.content}
        options={{
          parseFrontmatter: true,
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [rehypeSlug, rehypePrettyCode],
          },
        }}
        components={Mdx}
      />
    </article>
  );
};

export default Post;
