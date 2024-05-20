import Link from 'next/link';

import { type PropsWithChildren } from 'react';

type NewTabLinkProps = {
  href: string;
  className?: string;
} & PropsWithChildren;

const NewTabLink = (props: NewTabLinkProps) => {
  return <Link target="_blank" rel="noreferrer noopener" {...props} />;
};

export default NewTabLink;
