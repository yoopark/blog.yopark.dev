import { VariantProps, cva } from 'class-variance-authority';
import { HTMLAttributes } from 'react';

import { cn } from '@/utils/tailwind';

const labelVariants = cva('select-none', {
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
      true: 'transition cursor-pointer hover:bg-green-500 hover:text-white active:bg-green-600 active:scale-[.98]',
    },
    isSelected: {
      true: 'bg-green-500 text-white',
    },
  },
  defaultVariants: {
    size: 'sm',
    variant: 'default',
    isClickable: false,
    isSelected: false,
  },
});

type LabelProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof labelVariants>;

const Label = ({ className, variant, ...props }: LabelProps) => {
  return (
    <div className={cn(labelVariants({ variant }), className)} {...props} />
  );
};

export { labelVariants };
export default Label;
