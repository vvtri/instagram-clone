import { UserModel } from '@/modules/auth/apis/auth.api';
import AvatarSkeleton from '@/modules/common/components/skeleton/AvatarSkeleton';
import BoxSkeleton from '@/modules/common/components/skeleton/BoxSkeleton';
import InstaButton from '@/modules/common/components/utility/InstaButton';
import { getUserProfileLink } from '@/modules/common/helpers/link.helper';
import Image from 'next/image';
import Link from 'next/link';

type HomeSuggestUserItemProps = {
  user: UserModel;
  suggestText: string;
  followText: string;
  onFollow?: () => any;
};

export default function HomeSuggestUserItem(props: HomeSuggestUserItemProps) {
  const { user, followText, suggestText, onFollow } = props;

  return (
    <div className="flex items-center">
      <Link href={getUserProfileLink(user.username)}>
        <Image
          src={user.avt}
          height={44}
          width={44}
          className="rounded-full mr-3"
          alt="user avt"
          priority
        />
      </Link>

      <div className="flex justify-center flex-col overflow-ellipsis">
        <span className="text-sm text-text-primary font-semibold">
          {user.username}
        </span>
        <span className="text-text-secondary text-sm first-letter:uppercase">
          {suggestText}
        </span>
      </div>

      <InstaButton
        className="text-xs ml-auto flex-shrink-0 pr-0"
        variant="outline"
        onClick={onFollow}
      >
        <span className="first-letter:uppercase">{followText}</span>
      </InstaButton>
    </div>
  );
}

export const HomeSuggestUserItemSkeleton = () => {
  return (
    <div className="flex items-center h-[44px]">
      <AvatarSkeleton className="" containerClassName="mr-3 w-[44px]" />

      <BoxSkeleton containerClassName="h-4/5" />
    </div>
  );
};
