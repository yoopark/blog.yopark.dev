import { type Metadata } from 'next';

import { type Post } from '#velite';

const getPostMetadata = (post: Post): Metadata => {
  const { title, description, cover, slug } = post;

  return {
    title,
    description,
    openGraph: {
      type: 'article',
      title,
      description,
      url: `https://blog.yopark.dev/${slug}`,
      images: 'https://blog.yopark.dev' + cover,
    },
  };
};

export { getPostMetadata };
