import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    date: {
      type: 'date',
      required: true,
    },
    description: {
      type: 'string',
    },
    thumbnail: {
      type: 'string',
    },
    tags: {
      type: 'list',
      of: {
        type: 'string',
      },
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `posts/${post._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
  date: {
    timezone: 'Asia/Seoul',
  },
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode as any /* FIXME: type assertion */,
        {
          theme: 'material-theme-palenight',
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'append',
          properties: {
            className: ['anchor'],
          },
        },
      ],
    ],
  },
});
