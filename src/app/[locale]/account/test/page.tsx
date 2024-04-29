'use client';
import { increaseNum } from '@/modules/auth/slices/auth.slice';
import {
	useAppDispatch,
	useAppSelector,
} from '@/modules/common/hooks/store.hook';
import React from 'react';

export default function SignUpPage() {
	const number = useAppSelector((state) => state.auth.num);
	const dispatch = useAppDispatch();

	return (
		<div
			className='flex space-x-10
  '
		>
			<h1 className='text-lg'>Num: {number}</h1>
			<button onClick={() => dispatch(increaseNum({ num: 1 }))}>
				Increase num
			</button>
		</div>
	);
}
