import { cn } from '@/utilities/tailwind/cn';
import React from 'react';

type AuthLogoProps = {
	className?: string;
};

export default function AuthLogo({ className }: AuthLogoProps) {
	return (
		<i
			className={cn(
				"bg-[url('https://static.cdninstagram.com/rsrc.php/v3/yM/r/8n91YnfPq0s.png')] bg-[position:0_-52px] w-[175px] h-[51px] bg-no-repeat",
				className
			)}
		/>
	);
}
