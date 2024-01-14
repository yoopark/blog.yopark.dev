import { Post } from '@/app/posts/[slug]/components/Post';
import { PostFooter } from '@/app/posts/[slug]/components/PostNavigator/PostFooter';
import { getPostBySlug } from '@/utils/contentlayer/getPostBySlug';
import { getPostWithAdjacentPostBySlug } from '@/utils/contentlayer/getPostWithAdjacentPostBySlug';
import { getPostMetadata } from '@/utils/getPostMetadata';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

type PostPageProps = {
  params: {
    slug: string;
  };
};

type GenerateMetadataProps = {
  params: {
    slug: string;
  };
};

export const generateMetadata = ({
  params: { slug },
}: GenerateMetadataProps): Metadata => {
  const post = getPostBySlug(slug);

  if (post === undefined) {
    return {
      title: 'Not Found',
      description: 'Not Found',
      openGraph: {
        type: 'website',
        locale: 'ko_KR',
        title: 'Not Found',
        description: 'Not Found',
        url: 'https://blog.yopark.dev',
        images: 'https://blog.yopark.dev/images/og-image.jpeg',
      },
    };
  }

  const metadata = getPostMetadata(post);
  return metadata;
};

const PostPage = ({ params: { slug } }: PostPageProps) => {
  const { post, prevPost, nextPost } = getPostWithAdjacentPostBySlug(slug);

  if (post === undefined) {
    return notFound();
  }

  return (
    <div className="flex flex-col items-center gap-20 max-w-[70ch] mx-auto">
      <Post post={post} />
      <PostFooter post={post} prevPost={prevPost} nextPost={nextPost} />
    </div>
  );
};

export default PostPage;
