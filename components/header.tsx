import Link from 'next/link';

import { ArrowLeft } from 'lucide-react';

import { Button } from './ui/button';

type Props = {
  title: string;
};

export const Header = ({ title }: Props) => {
  return (
    <header className="sticky top-0 mb-5 flex items-center justify-between border-b-2 pb-3 text-neutral-500 lg:z-50 lg:mt-[-28px] lg:pt-[28px]">
      <Link href="/courses">
        <Button variant="ghost" size="sm">
          <ArrowLeft className="h-5 w-5 stroke-2 text-neutral-500" />
        </Button>
      </Link>
      <h1 className="text-lg font-bold">{title}</h1>
      <div />
    </header>
  );
};
