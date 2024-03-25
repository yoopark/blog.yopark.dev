'use client';

import { format } from 'date-fns';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { Label } from '@/components/Label';
import { FadeInFromLeft } from '@/components/framer-motion/FadeInFromLeft';
import { ROUTES } from '@/constants/routes';
import { cn } from '@/utils/cn';
import { Post } from '@contentlayer/generated';

type PostSummaryListItemProps = {
  post: Post;
};

export const PostSummaryListItem = ({
  post: {
    date,
    title,
    description,
    thumbnail = '/images/blue-gradient.jpeg',
    tags,
    _raw: { flattenedPath },
  },
}: PostSummaryListItemProps) => {
  const router = useRouter();

  return (
    <FadeInFromLeft>
      <div
        className={cn(
          'bg-gray-100/50 p-5 rounded-lg flex gap-8 transition cursor-pointer',
          'hover:bg-gray-100 active:bg-gray-200 active:scale-[.98]',
          'md:flex-row flex-col md:items-center',
        )}
        onClick={() => router.push(ROUTES.POST_OF(flattenedPath))}
      >
        <Image
          src={thumbnail}
          alt={title}
          className="object-cover w-full aspect-video md:w-52 rounded-lg"
          width={1000}
          height={1000}
        />
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-sm">{format(date, 'yyyy. MM. dd.')}</p>
            <h3 className="text-xl font-bold">{title}</h3>
            {description !== undefined && <p>{description}</p>}
          </div>
          {tags !== undefined && (
            <div className="flex flex-wrap gap-1">
              {tags.map((tag) => (
                <Label key={tag} text={tag} />
              ))}
            </div>
          )}
        </div>
      </div>
    </FadeInFromLeft>
  );
};
