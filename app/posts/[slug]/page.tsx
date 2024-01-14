import { Post } from '@/app/posts/[slug]/components/Post';
import { PostNavigator } from '@/app/posts/[slug]/components/PostNavigator';
import { getPostWithAdjacentPostBySlug } from '@/utils/contentlayer/getPostWithAdjacentPostBySlug';
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
    <div className="flex flex-col gap-20 max-w-[70ch] mx-auto">
      <Post post={post} />
      <PostNavigator prevPost={prevPost} nextPost={nextPost} />
    </div>
  );
};

export default PostPage;
