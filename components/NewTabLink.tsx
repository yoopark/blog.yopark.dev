import Link from 'next/link';

type NewTabLinkProps = {
  href: string;
} & React.PropsWithChildren;

export const NewTabLink = ({ href, children }: NewTabLinkProps) => {
  return (
    <Link href={href} target="_blank" rel="noreferrer noopener">
      {children}
    </Link>
  );
};
