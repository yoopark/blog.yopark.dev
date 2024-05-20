import GithubLogo from '@/assets/images/icons/github-logo.svg';
import LinkedInLogo from '@/assets/images/icons/linked-in-logo.svg';
import NewTabLink from '@/components/new-tab-link';

type SocialGroupProps = {
  githubUrl: string;
  linkedInUrl: string;
};

const SocialGroup = ({ githubUrl, linkedInUrl }: SocialGroupProps) => {
  return (
    <div className="flex gap-3">
      <NewTabLink href={githubUrl}>
        <GithubLogo className="h-5 w-5 text-gray-600 transition hover:scale-125 hover:text-[#171515]" />
      </NewTabLink>
      <NewTabLink href={linkedInUrl}>
        <LinkedInLogo className="h-5 w-5 text-gray-600 transition hover:scale-125 hover:text-[#0077b5]" />
      </NewTabLink>
    </div>
  );
};

export default SocialGroup;
