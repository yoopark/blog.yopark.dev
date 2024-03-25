import Link from 'next/link';
import { PropsWithChildren } from 'react';

type NewTabLinkProps = {
  href: string;
} & PropsWithChildren;

const NewTabLink = ({ href, children }: NewTabLinkProps) => {
  return (
    <Link href={href} target="_blank" rel="noreferrer noopener">
      {children}
    </Link>
  );
};

export default NewTabLink;
