import React from 'react';

import Image from 'next/image';

import { Button } from './ui/button';

interface flagButtonProps {
  imagePath: string;
  altText: string;
  title: string;
}

export const FlagButton = ({ imagePath, altText, title }: flagButtonProps) => {
  return (
    <Button size="lg" variant="ghost" className="w-full">
      <Image src={imagePath} alt={altText} height={32} width={40} className="mr-4 rounded-md" />
      {title}
    </Button>
  );
};
