'use client';

import { useRouter } from 'next/navigation';

import { ROUTES } from '@/constants/routes';
import { cn } from '@/utils/tailwind';
import { getRandomPost } from '@/utils/velite';

/* FIXME: 뷰와 로직이 분리되지 않은 코드입니다 */
const ReadRandomPost = () => {
  const router = useRouter();

  const handleClick = () => {
    const randomPost = getRandomPost();

    if (randomPost === null) {
      throw new Error('unreachable code block: randomPost is null');
    }

    router.push(ROUTES.POST_OF(randomPost.slug));
  };

  return (
    <a
      onClick={handleClick}
      className={cn(
        'cursor-pointer select-none rounded-lg px-4 py-3',
        'transition hover:bg-gray-200/50 active:bg-gray-300/50',
      )}
    >
      랜덤 글 읽기 🎲
    </a>
  );
};

export default ReadRandomPost;
