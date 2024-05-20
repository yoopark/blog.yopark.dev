import { type PropsWithChildren } from 'react';

type CalloutType = 'default' | 'warning' | 'danger';

type CalloutProps = {
  type?: CalloutType;
} & PropsWithChildren;

const Callout = ({ type = 'default', ...props }: CalloutProps) => {
  return (
    <div
      className={`my-6 flex items-start rounded-md border border-l-4 p-4${type === 'danger' ? ' border-red-900 bg-red-50' : type === 'warning' ? ' border-yellow-900 bg-yellow-50' : ''}`}
      {...props}
    />
  );
};

export { Callout };
