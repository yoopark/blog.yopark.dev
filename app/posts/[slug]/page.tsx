import { PostPageHeader } from '@/app/posts/[slug]/components/PostPageHeader';
import { getPostBySlug } from '@/utils/contentlayer/getPostBySlug';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Image from 'next/image';
import { notFound } from 'next/navigation';

type PostPageProps = {
  params: {
    slug: string;
  };
};

const MDXNewTabAnchor = (
  props: React.AnchorHTMLAttributes<HTMLAnchorElement>
) => {
  if (props.className === 'anchor') {
    return <a {...props} />;
  }

  return <a {...props} target="_blank" rel="noopener noreferrer" />;
};

const PostPage = ({ params: { slug } }: PostPageProps) => {
  const post = getPostBySlug(slug);

  if (!post) {
    return notFound();
  }

  const {
    body: { code },
    title,
    thumbnail = '/images/blue-gradient.jpeg',
  } = post;

  const MDXContent = useMDXComponent(code);

  return (
    <div className="max-w-screen-md m-auto px-4 flex flex-col gap-20">
      <div className="flex flex-col gap-10">
        <PostPageHeader post={post} />
        <Image
          src={thumbnail}
          alt={title}
          width={2000}
          height={2000}
          className="rounded-lg"
        />
      </div>
      <article className="prose dark:prose-invert m-auto">
        <MDXContent components={{ a: MDXNewTabAnchor }} />
      </article>
    </div>
  );
};

export default PostPage;
