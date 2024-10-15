'use client';

import { useState } from 'react';

import { cn } from '@/utils/tailwind';

const EMOJI_LIST = [
  '🍀',
  '🎰',
  '🎲',
  '🎯',
  '🎱',
  '🎳',
  '🎮',
  '🎴',
  '🎹',
  '🎤',
] as const;

const pickRandom = <T extends readonly unknown[]>(list: T): T[number] => {
  return list[Math.floor(Math.random() * list.length)];
};

const getGeometricProbability = (prob: number, trials: number): number => {
  return 1 - Math.pow(1 - prob, trials);
};

const LuckyDraw = () => {
  const [count, setCount] = useState<number>(0);
  const [emoji, setEmoji] = useState<string>('🥠');
  const isLucky = emoji === '🍀';
  const probability = getGeometricProbability(1 / EMOJI_LIST.length, count);

  const handleClick = () => {
    if (isLucky) {
      return;
    }

    setCount((prev) => prev + 1);
    setEmoji(pickRandom(EMOJI_LIST));
  };

  return (
    <div className="flex flex-col items-center text-xs text-gray-500">
      <p>
        네잎클로버<span className="text-[10px]">(1/{EMOJI_LIST.length})</span>를
        뽑아보세요 ↓
      </p>
      <div className="flex items-center gap-2">
        <button
          onClick={handleClick}
          className={cn(
            'flex items-center gap-1',
            isLucky && 'cursor-not-allowed',
          )}
        >
          <p className="text-xl">{emoji}</p>
          <p
            className={cn(
              'text-xs ',
              isLucky ? 'font-semibold text-green-600' : 'text-gray-500',
            )}
          >
            {count}번 이내로 뽑을 확률 - {(probability * 100).toFixed(2)}%
          </p>
        </button>
      </div>
    </div>
  );
};

export { LuckyDraw };
