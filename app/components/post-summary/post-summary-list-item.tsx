'use client';

import { format } from 'date-fns';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import FadeInFromLeft from '@/components/framer-motion/fade-in-from-left';
import Label from '@/components/label';
import { ROUTES } from '@/constants/routes';
import { cn } from '@/utils/cn';
import { Post } from '@contentlayer/generated';

type PostSummaryListItemProps = {
  post: Post;
};

const PostSummaryListItem = ({
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
          'bg-gray-100/50 p-5 rounded-lg flex gap-6 select-none cursor-pointer',
          'transition hover:bg-gray-100 active:bg-gray-200 active:scale-[.99]',
          'group',
          'md:flex-row flex-col md:items-center',
        )}
        onClick={() => router.push(ROUTES.POST_OF(flattenedPath))}
      >
        <div className="relative aspect-video overflow-hidden rounded-lg md:w-60">
          <Image
            src={thumbnail}
            alt={title}
            className={cn(
              'absolute w-full h-full',
              'object-cover',
              'group-hover:scale-110 transition-transform duration-700',
            )}
            width={1000}
            height={1000}
          />
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <p className="text-sm">{format(date, 'yyyy. MM. dd.')}</p>
            <h3 className="text-xl font-bold">{title}</h3>
            {description !== undefined && <p>{description}</p>}
          </div>
          {tags !== undefined && (
            <div className="flex flex-wrap gap-1">
              {tags.map((tag) => (
                <Label key={tag} variant="darker">
                  {tag}
                </Label>
              ))}
            </div>
          )}
        </div>
      </div>
    </FadeInFromLeft>
  );
};

export default PostSummaryListItem;
