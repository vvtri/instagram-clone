'use client';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useInfiniteUser } from '../../hooks/use-infinite-user.hook';
import HomeSuggestUserItem, {
	HomeSuggestUserItemSkeleton,
} from './HomeSuggestUserItem';

export default function HomeSuggestUser() {
	const { data, isLoading } = useInfiniteUser({ size: 5 });
	const t = useTranslations('Client');

	console.log('data', data);

	return (
		<div className='w-full'>
			<div className='flex items-center mb-3 text-sm'>
				<span className='text-text-secondary dark:text-text-secondaryDark first-letter:uppercase'>
					{t('user.common.suggestUser')}
				</span>

				<Link
					href='/explore/people'
					className='text-text-primary text-xs font-semibold hover:text-text-secondary ml-auto pr-0 first-letter:uppercase'
				>
					{t('common.word.seeAll')}
				</Link>
			</div>

			<div className='space-y-4'>
				{isLoading &&
					Array(5)
						.fill(0)
						.map((item, idx) => (
							<HomeSuggestUserItemSkeleton key={`skeleton-${idx}`} />
						))}

				{!isLoading &&
					data?.pages.flatMap((page) =>
						page.data.map((user) => (
							<HomeSuggestUserItem
								key={user.id}
								user={user}
								suggestText={t('user.common.suggestUser')}
								followText={t('user.common.follow')}
							/>
						))
					)}
			</div>
		</div>
	);
}
