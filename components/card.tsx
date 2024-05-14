import Image from 'next/image';

import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

type CardProps = {
  id: number;
  title: string;
  imageSrc: string;
  onClick: (id: number) => void;
  disabled: boolean;
  active: boolean;
};

export const Card = ({ id, title, imageSrc, onClick, disabled, active }: CardProps) => {
  return (
    <div
      onClick={() => onClick(id)}
      className={cn(
        'flex h-full min-h-[217px] min-w-[200px] cursor-pointer flex-col items-center justify-between rounded-xl border-2 border-b-4 p-3 pb-6 opacity-50 hover:bg-green-200/5  hover:opacity-75 active:border-b-2',
        disabled && 'pointer-events-none opacity-50',
        active && 'border-green-500 opacity-100 hover:opacity-100',
      )}
    >
      <div className="flex min-h-[24px] w-full items-center justify-end">
        {active && (
          <div className="flex items-center justify-center rounded-md bg-green-600 p-1.5">
            <Check size={16} className="stroke-[4] text-white" />
          </div>
        )}
      </div>
      <Image
        src={imageSrc}
        alt={title}
        height={70}
        width={93.33}
        className="rounded-lg border object-cover drop-shadow-md"
      />
      <p className="mt-3 text-center font-bold text-neutral-700">{title}</p>
    </div>
  );
};
