'use client';

import { Post } from '@/.contentlayer/generated';
import { ROUTES } from '@/constants/routes';
import { useRouter } from 'next/navigation';

type PostNavigatorProps = {
  prevPost: Post | null;
  nextPost: Post | null;
};

export const PostNavigator = ({ prevPost, nextPost }: PostNavigatorProps) => {
  const router = useRouter();
  const hasPrevPost = prevPost !== null;
  const hasNextPost = nextPost !== null;

  if (!hasPrevPost && !hasNextPost) {
    return <></>;
  }

  return (
    <div className="flex gap-3 flex-col md:flex-row mx-2">
      {hasPrevPost && (
        <div
          className="p-6 bg-gray-50 hover:bg-gray-100 active:bg-gray-200 active:scale-95 flex flex-col items-start gap-2 rounded-lg flex-1 cursor-pointer transition"
          onClick={() =>
            router.push(ROUTES.POST_OF(prevPost._raw.flattenedPath))
          }
        >
          <p>바로 전에 쓴 글</p>
          <p className="text-lg font-semibold">{prevPost.title}</p>
        </div>
      )}
      {hasNextPost && (
        <div
          className="p-6 bg-gray-50 hover:bg-gray-100 active:bg-gray-200 active:scale-95 flex flex-col items-end gap-2 rounded-lg flex-1 cursor-pointer transition"
          onClick={() =>
            router.push(ROUTES.POST_OF(nextPost._raw.flattenedPath))
          }
        >
          <p>그 다음에 쓴 글</p>
          <p className="text-lg font-semibold">{nextPost.title}</p>
        </div>
      )}
    </div>
  );
};
