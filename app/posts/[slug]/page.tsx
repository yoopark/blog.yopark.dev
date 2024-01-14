'use client';

import { Post } from '@/app/posts/[slug]/components/Post';
import { PostNavigator } from '@/app/posts/[slug]/components/PostNavigator';
import { GiscusComment } from '@/components/Giscus';
import { getPostWithAdjacentPostBySlug } from '@/utils/contentlayer/getPostWithAdjacentPostBySlug';
import { ClapButton } from '@lyket/react';
import { notFound } from 'next/navigation';

type PostPageProps = {
  params: {
    slug: string;
  };
};

const PostPage = ({ params: { slug } }: PostPageProps) => {
  const { post, prevPost, nextPost } = getPostWithAdjacentPostBySlug(slug);

  if (!post) {
    return notFound();
  }

  return (
    <div className="flex flex-col items-center gap-20 max-w-[70ch] mx-auto">
      <Post post={post} />
      <PostNavigator prevPost={prevPost} nextPost={nextPost} />
      <ClapButton id={post._raw.flattenedPath} namespace="post" />
      <GiscusComment />
    </div>
  );
};

export default PostPage;
