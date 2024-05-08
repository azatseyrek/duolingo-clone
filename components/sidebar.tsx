import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import { ClerkLoaded, ClerkLoading, UserButton } from '@clerk/nextjs';

import { Loader } from './loader';
import { SidebarItem } from './sidebar-item';

type Props = {
  className?: string;
};

const SidebarItems = [
  { name: 'Learn', href: '/learn', imagePath: '/learn.svg' },
  { name: 'Leaderboard', href: '/leaderboard', imagePath: '/leaderboard.svg' },
  { name: 'Quests', href: '/quests', imagePath: '/quests.svg' },
  { name: 'Shop', href: '/shop', imagePath: '/shop.svg' },
];

export const Sidebar = ({ className }: Props) => {
  return (
    <aside
      className={cn(
        'left-0 top-0 flex h-full flex-col border-r-2 px-4 lg:fixed lg:w-[256px]',
        className,
      )}
    >
      <Link href="/learn">
        <div className="flex items-center gap-x-3 pb-7 pl-4 pt-8">
          <Image src="/mascot.svg" height={40} width={40} alt="Mascot" />
          <h1 className="trackin-wide text-2xl font-extrabold text-green-600">Lingo</h1>
        </div>
      </Link>
      <div className="flex flex-1 flex-col gap-y-2">
        {SidebarItems.map((item) => (
          <SidebarItem
            key={item.name}
            href={item.href}
            imagePath={item.imagePath}
            label={item.name}
          />
        ))}
      </div>
      <div className="p-4">
        <ClerkLoading>
          <Loader />
        </ClerkLoading>
        <UserButton afterSignOutUrl="/" />
        <ClerkLoaded />
      </div>
    </aside>
  );
};
