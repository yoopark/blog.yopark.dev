import { type HTMLAttributes } from 'react';

import { type VariantProps, cva } from 'class-variance-authority';

import { cn } from '@/utils/tailwind';

const badgeVariants = cva('select-none', {
  variants: {
    size: {
      sm: 'px-2 py-0.5 rounded-2xl text-xs',
      lg: 'px-4 py-2 rounded-lg text-sm',
    },
    variant: {
      default: 'bg-gray-100 text-gray-500',
      darker: 'bg-gray-200 text-gray-600',
    },
    isClickable: {
      true: 'transition cursor-pointer hover:bg-amulet-500 hover:text-white hover:shadow-md active:bg-amulet-600 active:scale-[.98]',
    },
    isSelected: {
      true: 'bg-amulet-600 text-white',
    },
  },
  defaultVariants: {
    size: 'sm',
    variant: 'default',
    isClickable: false,
    isSelected: false,
  },
});

type BadgeProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof badgeVariants>;

const Badge = ({ className, variant, ...props }: BadgeProps) => {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
};

export { badgeVariants };
export default Badge;
