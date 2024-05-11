import React from 'react';
import InstaButton from '../utility/InstaButton';
import { useTranslations } from 'next-intl';
import Modal from '../modal/Modal';

export type ErrorModalProps = {
	retry?: () => any;
	errorText?: string;
};

export default function ErrorModal(props: ErrorModalProps) {
	const { retry } = props;
	let errorText = props.errorText;
	const t = useTranslations('Client');

	if (!errorText) errorText = t('common.error.default');

	return (
		<Modal isShow showCloseButton={false}>
			<div className='bg-white text-black flex flex-col items-center text-center rounded-lg'>
				<div className='py-8 px-16'>
					<h3 className='text-3xl font-bold first-letter:uppercase'>
						{t('common.word.error')}
					</h3>
					<p className='text-base text-text-secondary mt-8'>{errorText}</p>
				</div>

				<div className='border-t border-gray-500 py-5 px-8 w-full flex justify-center'>
					<InstaButton variant='outline' colorSchema='blue' className=''>
						{retry ? t('common.error.retry') : t('common.error.dismiss')}
					</InstaButton>
				</div>
			</div>
		</Modal>
	);
}
