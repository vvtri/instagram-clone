'use client';
import React from 'react';
import Slider from 'react-slick';
import UserStoryCard from './UserStoryCard';
import AddUserStoryBtn from './AddUserStoryBtn';

type UserStorySliderProps = {
	className?: string;
};

export default function UserStorySlider({ className }: UserStorySliderProps) {
	return (
		<div className='flex overflow-x-scroll no-scrollbar py-3 border-b border-separator'>
			<AddUserStoryBtn />

			{Array(10)
				.fill(0)
				.map((item, idx) => (
					<UserStoryCard key={idx} />
				))}
		</div>
	);
}
