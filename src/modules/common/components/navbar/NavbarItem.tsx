'use client';
import Link from 'next/link';
import React, {
	Component,
	ComponentType,
	PropsWithChildren,
	ReactElement,
	ReactNode,
} from 'react';
import { SvgIconProps } from '../../types/svg-icon.type';
import { cn } from '@/utilities/tailwind/cn';
import { NAVBAR_ICON_SIZE } from './Navbar';

type NavbarItemProps = {
	highlight?: boolean;
	icon?: ComponentType<SvgIconProps>;
	label: ReactNode;
	onClick?: () => any;
	iconProps?: SvgIconProps;
	iconNode?: ReactNode;
	className?: string;
	popupOverNode?: ReactNode;
};

const NavbarItem = React.forwardRef<HTMLDivElement, NavbarItemProps>(
	(props, ref) => {
		const {
			icon: Icon,
			label,
			highlight,
			onClick,
			iconProps,
			iconNode,
			className,
			popupOverNode,
		} = props;

		return (
			<div
				className={cn('relative xl:w-full', className)}
				ref={ref}
				onClick={onClick}
			>
				{popupOverNode}

				<div className='transition cursor-pointer lg:py-4 xl:w-full xl:px-3 xl:flex xl:items-center xl:hover:bg-bg-hoverOverlay xl:dark:hover:bg-bg-hoverOverlayDark xl:rounded-lg group'>
					{Icon && (
						<Icon
							width={NAVBAR_ICON_SIZE}
							height={NAVBAR_ICON_SIZE}
							thickness={highlight ? 'fat' : 'thin'}
							className='transition group-hover:scale-110'
							{...iconProps}
						/>
					)}

					{iconNode}

					<span
						className='hidden xl:block text-base text-text-primary dark:text-text-primaryDark ml-5 first-letter:uppercase'
						style={{ fontWeight: highlight ? 700 : 400 }}
					>
						{label}
					</span>
				</div>
			</div>
		);
	}
);

export default NavbarItem;
