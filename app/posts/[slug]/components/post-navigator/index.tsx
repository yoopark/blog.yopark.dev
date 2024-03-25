'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { Post } from '@/.contentlayer/generated';
import { ROUTES } from '@/constants/routes';
import { cn } from '@/utils/cn';

type PostNavigatorProps = {
  prevPost: Post | null;
  nextPost: Post | null;
};

const PostNavigator = ({ prevPost, nextPost }: PostNavigatorProps) => {
  const router = useRouter();
  const hasPrevPost = prevPost !== null;
  const hasNextPost = nextPost !== null;

  if (!hasPrevPost && !hasNextPost) {
    return <></>;
  }

  return (
    <div className="flex flex-col w-full gap-3 mx-2 md:flex-row select-none">
      {hasPrevPost && (
        <Link
          href={ROUTES.POST_OF(prevPost._raw.flattenedPath)}
          className={cn(
            'flex flex-col items-start flex-1 gap-2 p-6 rounded-lg cursor-pointer bg-gray-50 select-none',
            'transition hover:bg-gray-100 active:bg-gray-200 active:scale-[.98]',
          )}
        >
          <p>바로 전에 쓴 글</p>
          <p className="text-lg font-semibold">{prevPost.title}</p>
        </Link>
      )}
      {hasNextPost && (
        <Link
          href={ROUTES.POST_OF(nextPost._raw.flattenedPath)}
          className={cn(
            'flex flex-col items-end flex-1 gap-2 p-6 rounded-lg cursor-pointer bg-gray-50 select-none',
            'transition hover:bg-gray-100 active:bg-gray-200 active:scale-[.98]',
          )}
        >
          <p>그 다음에 쓴 글</p>
          <p className="text-lg font-semibold">{nextPost.title}</p>
        </Link>
      )}
    </div>
  );
};

export default PostNavigator;
