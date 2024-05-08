'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Button } from './ui/button';

type Props = {
  label: string;
  imagePath: string;
  href: string;
};

export const SidebarItem = ({ href, imagePath, label }: Props) => {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Button
      variant={active ? 'sidebarOutline' : 'sidebar'}
      className="h-[52px] justify-start"
    >
      <Image src={imagePath} height={32} width={32} alt={label} className="mr-5" />
      <Link href={href}>{label}</Link>
    </Button>
  );
};
