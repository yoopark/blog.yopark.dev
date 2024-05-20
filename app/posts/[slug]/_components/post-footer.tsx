'use client';

import { ClapButton } from '@lyket/react';

import type { Post } from '@/.contentlayer/generated';
import PostNavigator from '@/app/posts/[slug]/_components/post-navigator';
import GiscusComment from '@/components/giscus-comment';

type PostFooterProps = {
  post: Post;
  prevPost: Post;
  nextPost: Post;
};

const PostFooter = ({ post, prevPost, nextPost }: PostFooterProps) => {
  return (
    <>
      <PostNavigator prevPost={prevPost} nextPost={nextPost} />
      <ClapButton id={post._raw.flattenedPath} namespace="post" />
      <GiscusComment />
    </>
  );
};

export default PostFooter;
