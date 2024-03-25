import { cn } from '@/utils/cn';

type LabelProps = {
  text: string;
  variant?: 'default' | 'darker';
  isClickable?: boolean;
};

const Label = ({
  text,
  variant = 'default',
  isClickable = true,
}: LabelProps) => {
  return (
    <span
      className={cn(
        'px-2 py-0.5 rounded-2xl transition text-xs select-none',
        variant === 'default' && 'bg-gray-100 text-gray-500',
        variant === 'darker' && 'bg-gray-200 text-gray-600',
        isClickable &&
          'cursor-pointer hover:bg-green-500 hover:text-white active:scale-95 active:bg-green-600',
      )}
    >
      {text}
    </span>
  );
};

export default Label;
