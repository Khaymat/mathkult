import { MDXRemote } from "next-mdx-remote/rsc"
import remarkGfm from "remark-gfm"
import MathAutoRender from "@/components/math-auto-render"

type Props = {
  source: string
}

export default function MdxContent({ source }: Props) {
  return (
    <MathAutoRender key={source}>
      <article className="prose prose-neutral max-w-none dark:prose-invert">
        <MDXRemote
          source={source}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
            },
          }}
        />
      </article>
    </MathAutoRender>
  )
}
