import Image from 'next/image';

import * as runtime from 'react/jsx-runtime';

import { Callout } from './callout';

const sharedComponents = {
  Callout,
  Image,
};

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

type MDXProps = {
  code: string;
  components?: Record<string, React.ComponentType>;
  [key: string]: any;
};

const MDXContent = ({ code, components, ...props }: MDXProps) => {
  const Component = useMDXComponent(code);
  return (
    <Component components={{ ...sharedComponents, ...components }} {...props} />
  );
};

export { MDXContent };
