import { Post } from '@contentlayer/generated';
import { Metadata } from 'next';

export const getPostMetadata = (post: Post): Metadata => {
  const {
    title,
    description,
    _raw: { flattenedPath },
    thumbnail = '/images/blue-gradient.jpeg',
  } = post;
  return {
    title,
    description,
    openGraph: {
      type: 'article',
      title,
      description,
      url: `https://blog.yopark.dev/${flattenedPath}`,
      images: 'https://blog.yopark.dev' + thumbnail,
    },
  };
};
