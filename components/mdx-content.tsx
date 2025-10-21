import { MDXRemote } from "next-mdx-remote/rsc"
import remarkGfm from "remark-gfm"
import remarkMath from "remark-math"
import rehypeKatex from "rehype-katex"
import MathAutoRender from "@/components/math-auto-render"

type Props = {
  source: string
}

export default function MdxContent({ source }: Props) {
  return (
    <MathAutoRender key={source}>
      <article className="prose max-w-none">
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
    </MathAutoRender>
  )
}
