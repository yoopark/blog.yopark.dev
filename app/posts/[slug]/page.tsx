import { Post } from '@/app/posts/[slug]/components/Post';
import { getPostBySlug } from '@/utils/contentlayer/getPostBySlug';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { notFound } from 'next/navigation';

type PostPageProps = {
  params: {
    slug: string;
  };
};

const PostPage = ({ params: { slug } }: PostPageProps) => {
  const post = getPostBySlug(slug);

  if (!post) {
    return notFound();
  }

  return <Post post={post} />;
};

export default PostPage;
