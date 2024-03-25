import React from 'react';

import { cn } from '@/utils/cn';

type LabelWithCountProps = {
  text: string;
  count: number;
  isSelected?: boolean;
  onClick?: React.MouseEventHandler<HTMLSpanElement>;
};

const LabelWithCount = ({
  text,
  count,
  isSelected,
  onClick,
}: LabelWithCountProps) => {
  return (
    <span
      onClick={onClick}
      className={cn(
        'px-4 py-2 bg-gray-100 rounded-lg transition text-sm select-none cursor-pointer',
        'hover:bg-green-500 hover:text-white active:bg-green-600 active:scale-95',
        isSelected && 'bg-green-500 text-white',
      )}
    >
      {text} ({count})
    </span>
  );
};

export default LabelWithCount;
