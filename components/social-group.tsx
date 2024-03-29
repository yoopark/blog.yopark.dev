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
        <GithubLogo className="w-5 h-5 text-gray-600 transition hover:text-[#171515] hover:scale-125" />
      </NewTabLink>
      <NewTabLink href={linkedInUrl}>
        <LinkedInLogo className="w-5 h-5 text-gray-600 transition hover:text-[#0077b5] hover:scale-125" />
      </NewTabLink>
    </div>
  );
};

export default SocialGroup;
