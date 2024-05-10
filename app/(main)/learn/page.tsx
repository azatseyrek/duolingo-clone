import React from 'react';

import { FeedWrapper } from '@/components/feed-wrapper';
import { Header } from '@/components/header';
import { StickyWrapper } from '@/components/sticky-wrapper';
import { UserProgress } from '@/components/user-progress';

const LearnPage = () => {
  let dbUrl: string;

  switch (process.env.NODE_ENV) {
    case 'development':
      dbUrl = process.env.DATABASE_URL_DEV!;
      break;
    case 'production':
      dbUrl = process.env.DATABASE_URL!;
      break;
    default:
      dbUrl = process.env.DATABASE_URL_DEV!;
  }

  console.log(dbUrl);

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
