import rehypePrettyCode from 'rehype-pretty-code';
import { defineCollection, defineConfig, s } from 'velite';

const posts = defineCollection({
  name: 'Post',
  pattern: 'posts/**/*.{md,mdx}',
  schema: s
    .object({
      title: s.string().max(99),
      slug: s.slug('posts'),
      date: s.isodate(),
      description: s.string().max(999).optional(),
      cover: s.image().optional(),
      tags: s.array(s.string()).default([]),
      content: s.markdown(),
    })
    .transform((data) => ({ ...data, permalink: `/posts/${data.slug}` })),
});

export default defineConfig({
  root: 'content',
  output: {
    data: '.velite',
    assets: 'public/static',
    base: '/static/',
    name: '[name]-[hash:6].[ext]',
    clean: true,
  },
  collections: { posts },
  markdown: { rehypePlugins: [rehypePrettyCode] },
});
