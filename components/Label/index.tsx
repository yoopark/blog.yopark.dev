import { cn } from '@/utils/cn';

type LabelProps = {
  text: string;
};

export const Label = ({ text }: LabelProps) => {
  return (
    <span
      className={cn(
        'px-2 py-0.5 bg-gray-100 rounded-2xl transition text-xs',
        'hover:bg-green-500 hover:text-white active:scale-95 active:bg-green-600'
      )}
    >
      {text}
    </span>
  );
};
