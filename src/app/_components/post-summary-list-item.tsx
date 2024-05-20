'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { type Post } from '#velite';
import { format } from 'date-fns';

import blue_gradient from '@/assets/images/blue-gradient.jpeg';
import Badge from '@/components/badge';
import FadeInFromLeft from '@/components/framer-motion/fade-in-from-left';
import { ROUTES } from '@/constants/routes';
import { cn } from '@/utils/tailwind';

type PostSummaryListItemProps = {
  post: Post;
};

const PostSummaryListItem = ({
  post: { title, slug, date, cover, description, tags },
}: PostSummaryListItemProps) => {
  const router = useRouter();

  return (
    <FadeInFromLeft>
      <div
        className={cn(
          'flex cursor-pointer select-none gap-6 rounded-lg bg-gray-100/50 p-5',
          'transition hover:bg-gray-100 active:scale-[.99] active:bg-gray-200',
          'group',
          'flex-col md:flex-row md:items-center',
        )}
        onClick={() => router.push(ROUTES.POST_OF(slug))}
      >
        <div className="relative aspect-video overflow-hidden rounded-lg md:w-60">
          <Image
            src={cover ?? blue_gradient}
            alt={title}
            className={cn(
              'absolute h-full w-full',
              'object-cover',
              'transition-transform duration-700 group-hover:scale-110',
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
                <Badge key={tag} variant="darker">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </div>
    </FadeInFromLeft>
  );
};

export default PostSummaryListItem;
