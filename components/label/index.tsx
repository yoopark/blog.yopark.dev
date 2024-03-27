import { cn } from '@/utils/cn';

type LabelSize = 'sm' | 'lg';

type LabelVariant = 'default' | 'darker';

type LabelProps = {
  children: string | string[];
  size?: LabelSize;
  variant?: LabelVariant;
  isClickable?: boolean;
  isSelected?: boolean;
  onClick?: React.MouseEventHandler<HTMLSpanElement>;
};

const Label = ({
  children,
  size = 'sm',
  variant = 'default',
  isClickable = false,
  isSelected = false,
  onClick,
}: LabelProps) => {
  return (
    <span
      className={cn(
        'transition select-none',
        size === 'sm' && 'px-2 py-0.5 rounded-2xl text-xs',
        size === 'lg' && 'px-4 py-2 rounded-lg text-sm',
        variant === 'default' && 'bg-gray-100 text-gray-500',
        variant === 'darker' && 'bg-gray-200 text-gray-600',
        isClickable &&
          'cursor-pointer hover:bg-green-500 hover:text-white active:bg-green-600 active:scale-[.98]',
        isSelected && 'bg-green-500 text-white',
      )}
      onClick={onClick}
    >
      {children}
    </span>
  );
};

export type { LabelProps };
export default Label;
