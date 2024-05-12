'use client';

import AuthGuard from '@/modules/auth/components/guard/AuthGuard';
import { useAppDispatch } from '@/modules/common/hooks/store.hook';
import UserStoryDetailSlider from '@/modules/user-story/components/user-story-detail/UserStoryDetailSlider';
import { useInfiniteUserStory } from '@/modules/user-story/hooks/use-infinite-user-story.hook';
import { setIsUserInteracted } from '@/modules/user-story/slices/user-story.slice';
import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';

type InterceptedUserStoryDetailPageProps = {
  params: {
    storyId: string;
  };
};

export default function InterceptedUserStoryDetailPage(
  props: InterceptedUserStoryDetailPageProps,
) {
  const { params } = props;
  const { storyId } = params;
  const { data, isLoading } = useInfiniteUserStory();
  const router = useRouter();
  const isRedirected = useRef(false);
  const dispatch = useAppDispatch();

  if (!data) throw new Error(`user stories data must be preloaded`);
  const userStories = data.pages.flatMap((page) => page.data);
  const defaultIdx = userStories.findIndex(
    (item) => item.id === parseInt(storyId),
  );

  useEffect(() => {
    dispatch(setIsUserInteracted(true));
  }, []);

  return (
    <AuthGuard>
      <div className="w-screen h-screen bg-[#1a1a1a]">
        <UserStoryDetailSlider
          userStories={userStories}
          defaultIdx={defaultIdx}
          onExitClicked={() => {
            if (isRedirected.current) return;

            isRedirected.current = true;
            return router.back();
          }}
          onAllStoriedEnd={() => {
            if (isRedirected.current) return;

            isRedirected.current = true;
            return router.push('/');
          }}
        />
      </div>
    </AuthGuard>
  );
}
