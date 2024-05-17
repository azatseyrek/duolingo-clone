import { redirect } from 'next/navigation';

import { FeedWrapper } from '@/components/feed-wrapper';
import { Header } from '@/components/header';
import { StickyWrapper } from '@/components/sticky-wrapper';
import { UserProgress } from '@/components/user-progress';
import { getUserProgress } from '@/db/queries';

const LearnPage = async () => {
  const [userProgress] = await Promise.all([getUserProgress()]);

  if (!userProgress || !userProgress.activeCourse) {
    redirect('/courses');
  }

  return (
    <div className="flex flex-row-reverse gap-12 px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={{ title: 'Spanish', imagePath: '/flags/es.svg' }}
          hearts={5}
          points={100}
          hasActiveSubscription={true}
        />
      </StickyWrapper>
      <FeedWrapper>
        <Header title="Spanish" />
      </FeedWrapper>
    </div>
  );
};

export default LearnPage;
