import { MDXRemote } from "next-mdx-remote/rsc"
import remarkGfm from "remark-gfm"
import remarkMath from "remark-math"
import rehypeKatex from "rehype-katex"

type Props = {
  source: string
}

export default function MdxContent({ source }: Props) {
  return (
    <article className="prose dark:prose-invert max-w-none">
      <MDXRemote
        source={source}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm, remarkMath],
            rehypePlugins: [rehypeKatex],
          },
        }}
      />
    </article>
  )
}
