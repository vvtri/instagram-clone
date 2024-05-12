'use client';

import AuthGuard from '@/modules/auth/components/guard/AuthGuard';
import LoadingScreen from '@/modules/common/components/loading/LoadingScreen';
import UserStoryDetailSlider from '@/modules/user-story/components/user-story-detail/UserStoryDetailSlider';
import { useDetailUserStory } from '@/modules/user-story/hooks/use-detail-user-story.hook';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';

type UserStoryDetailPageProps = {
  params: {
    storyId: string;
  };
};

export default function UserStoryDetailPage(props: UserStoryDetailPageProps) {
  const { params } = props;
  const { storyId } = params;
  const router = useRouter();
  const isReturnedHome = useRef<boolean>(false);

  const { data, isLoading } = useDetailUserStory({
    userStoryId: parseInt(storyId),
  });

  return (
    <AuthGuard>
      {isLoading && <LoadingScreen />}

      {!data && <h2 className="text-xl">Có lỗi xảy ra</h2>}

      {data && (
        <div className="w-screen h-screen bg-[#1a1a1a]">
          <UserStoryDetailSlider
            userStories={[data]}
            onAllStoriedEnd={() => {
              if (isReturnedHome.current) return;

              isReturnedHome.current = true;
              return router.push('/');
            }}
            onExitClicked={() => {
              if (isReturnedHome.current) return;

              isReturnedHome.current = true;
              return router.push('/');
            }}
          />
        </div>
      )}
    </AuthGuard>
  );
}
