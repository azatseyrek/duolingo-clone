import React from 'react';

import { cn } from '@/lib/utils';
import { Loader as LucideLoader } from 'lucide-react';

interface loaderProps {
  className?: string;
}

export const Loader = ({ className }: loaderProps) => {
  return (
    <LucideLoader
      size={20}
      className={cn('animate-spin text-muted-foreground', className)}
    />
  );
};
