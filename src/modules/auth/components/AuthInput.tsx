'use client';
import InstaImgIcon from '@/modules/common/components/icon/InstaImgIcon';
import { useClickOutSide } from '@/modules/common/hooks/use-click-out-side.hook';
import { cn } from '@/utilities/tailwind/cn';
import { useTranslations } from 'next-intl';
import React, {
	ChangeEvent,
	MouseEvent,
	forwardRef,
	useEffect,
	useId,
	useRef,
	useState,
} from 'react';

type AuthInputProps = React.JSX.IntrinsicElements['input'] & {
	type?: React.JSX.IntrinsicElements['input']['type'];
	isValid?: boolean;
	showPasswordLabel?: string;
	hidePasswordLabel?: string;
};

const AuthInput = forwardRef<HTMLInputElement, AuthInputProps>((props, ref) => {
	const {
		onChange,
		type = 'text',
		isValid,
		placeholder,
		showPasswordLabel,
		hidePasswordLabel,
		...rest
	} = props;

	const labelRef = useRef<HTMLLabelElement | null>(null);
	const [isActive, setIsActive] = useState(false);
	const [isShowPassword, setIsShowPassword] = useState(false);
	const t = useTranslations();
	const id = useId();

	useClickOutSide(labelRef, () => {
		if (!labelRef.current) return;
		const inputValue = labelRef.current?.getElementsByTagName('input')[0].value;

		if (!inputValue) setIsActive(false);
		else setIsActive(true);
	});

	const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		onChange?.(e);

		if (!e.target.value) setIsActive(false);
		else setIsActive(true);
	};

	const handleTogglePassword = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();

		setIsShowPassword((prev) => !prev);
	};

	useEffect(() => {
		const input = document.getElementById(`${id}`);

		try {
			if (input?.matches(':autofill') || input?.matches(':autocompleted')) {
				setIsActive(true);
			}
		} catch (error) {
			setIsActive(false);
		}
	}, []);

	return (
		<label
			className={cn('relative flex items-center w-full text-xs dark:bg-black', {
				'text-xs': isActive,
			})}
			ref={labelRef}
		>
			<span
				className={cn(
					'block absolute top-0 left-0 text-neutral-500 pointer-events-none transition p-2 text-[1em]',
					{ 'text-[0.8em] -translate-y-[8px]': isActive }
				)}
			>
				{placeholder}
			</span>
			<input
				className={cn(
					'p-2 pr-0 bg-zinc-50 w-full border-instagram-auth border focus:outline-none focus:border-zinc-300 dark:bg-black',
					{ 'pb-[2px] pt-[14px]': isActive }
				)}
				onChange={onInputChange}
				id={id}
				type={isShowPassword ? 'text' : type}
				{...rest}
				ref={ref}
			/>

			<div className='flex items-center space-x-2 absolute right-2 top-1/2 -translate-y-1/2'>
				{isValid === true && (
					<InstaImgIcon
						height={22}
						width={22}
						backgroundPosition='-225px -333px'
						url='https://static.cdninstagram.com/images/instagram/xig_legacy_spritesheets/sprite_core.png?__makehaste_cache_breaker=VftLCxPPZoi'
						className='flex-shrink-0'
					/>
				)}

				{isValid === false && (
					<InstaImgIcon
						height={22}
						width={22}
						backgroundPosition='-249px -333px'
						url='https://static.cdninstagram.com/images/instagram/xig_legacy_spritesheets/sprite_core.png?__makehaste_cache_breaker=VftLCxPPZoi'
						className='flex-shrink-0'
					/>
				)}

				{type === 'password' && (
					<button
						className='block text-xs font-semibold max-h-full p-3 pr-2 flex-shrink-0 capitalize'
						onClick={handleTogglePassword}
						type='button'
					>
						{isShowPassword
							? t('Client.hidePassword')
							: t('Client.showPassword')}
					</button>
				)}
			</div>
		</label>
	);
});

export default AuthInput;
