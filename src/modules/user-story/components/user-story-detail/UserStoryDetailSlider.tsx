'use client';

import { cn } from '@/utilities/tailwind/cn';
import React, { useState } from 'react';
import { default as ReactSlick, default as Slider } from 'react-slick';
import { UserStoryModel } from '../../apis/user-story.api';
import UserStoryDetail from './UserStoryDetail';
import { useRouter } from 'next/navigation';
import InstagramLogoTextSvgIcon from '@/modules/common/components/icon/svg-icon/InstagramLogoTextSvgIcon';
import CloseSvgIcon from '@/modules/common/components/icon/svg-icon/CloseSvgIcon';

type UserStoryDetailSliderProps = {
  userStories: UserStoryModel[];
  onAllStoriedEnd?: () => any;
  onExitClicked?: () => any;
  defaultIdx?: number;
};

export default function UserStoryDetailSlider(
  props: UserStoryDetailSliderProps,
) {
  const { userStories, onExitClicked, onAllStoriedEnd, defaultIdx = 0 } = props;
  const [activeIdx, setActiveIdx] = useState(defaultIdx);
  const sliderRef = React.useRef<Slider | null>(null);
  const router = useRouter();
  const slidesToShow = 3;
  const isLastSlide = activeIdx >= userStories.length - 1;

  const userStoryDetails = userStories.map((item, idx) => (
    <UserStoryDetail
      key={item.id}
      userStory={item}
      isActive={activeIdx === idx}
      onAllStoriesEnd={() => {
        if (activeIdx >= userStories.length - 1) onAllStoriedEnd?.();
        else sliderRef.current?.slickNext();
      }}
      goToSlide={() => {
        sliderRef.current?.slickGoTo(idx);
      }}
      onExitClicked={onExitClicked}
    />
  ));

  // to fix bug latest last slide not centered
  if (userStories.length > 1 && window) {
    userStoryDetails.push(
      ...Array(slidesToShow)
        .fill(0)
        .map((_, idx) => <div aria-hidden key={idx} />),
    );
  }

  return (
    <div
      className={cn(
        'relative user-story-detail-slider w-1/2 min-w-[400px] mx-auto h-full flex items-center justify-center xl:max-w-full xl:w-full xl:px-10 xl:py-5',
        { 'disable-next-user-story-btn': isLastSlide },
      )}
    >
      <div className="hidden absolute top-4 left-4 right-4 z-float xl:flex justify-between">
        <InstagramLogoTextSvgIcon
          className="cursor-pointer"
          onClick={() => router.push('/')}
        />
        <div className="p-4 cursor-pointer" onClick={onExitClicked}>
          <CloseSvgIcon className="w-6 h-6" />
        </div>
      </div>

      <ReactSlick
        className="w-full"
        ref={sliderRef}
        centerMode
        beforeChange={(_, nextIdx) => {
          if (nextIdx > userStories.length - 1) return onAllStoriedEnd?.();

          const nextUserStory = userStories[nextIdx];
          router.push(
            `/stories/${nextUserStory.user.username}/${nextUserStory.id}`,
            { scroll: false },
          );
          setActiveIdx(nextIdx);
        }}
        speed={1000}
        initialSlide={defaultIdx}
        infinite={false}
        slidesToShow={3}
        arrows={true}
        centerPadding="0"
        useTransform={false}
        swipe={!isLastSlide}
        draggable={!isLastSlide}
        responsive={[
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 1,
              arrows: false,
              infinite: false,
            },
          },
        ]}
      >
        {userStoryDetails}
      </ReactSlick>
    </div>
  );
}
