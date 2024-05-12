'use client';

import { useAuth } from '@/modules/auth/hooks/use-auth.hook';
import { upperFirstChar } from '@/utilities/text/upper-first-char';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { getUserProfileLink } from '../../helpers/link.helper';
import { useToast } from '../../hooks/use-toast.hook';
import InstaButton from '../utility/InstaButton';

export default function HomeSwitchAccount() {
  const { user } = useAuth();
  const t = useTranslations('Client');
  const { warning } = useToast();

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
        <Link
          className="text-sm text-text-primary font-semibold"
          href={getUserProfileLink(user.username)}
        >
          {user.username}
        </Link>
        <span className="text-text-secondary text-sm">{user.fullName}</span>
      </div>

      <InstaButton
        className="text-xs ml-auto flex-shrink-0 pr-0"
        variant="outline"
        onClick={() => warning(t('common.error.functionIsNotImplemented'))}
      >
        {upperFirstChar(t('common.word.switch'))}
      </InstaButton>
    </div>
  );
}
