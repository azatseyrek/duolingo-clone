import Image from 'next/image';

import Mascot from '@/public/mascot.svg';

export const Header = () => {
  return (
    <header className="h-20 w-full border-b-2 border-slate-200 px-4">
      <div className="mx-auto flex h-full items-center justify-between bg-red-400 lg:max-w-screen-lg">
        {/* Logo */}
        <div className="flex items-center gap-x-3 pb-7 pl-4 pt-8">
          <Image src={Mascot} height={40} width={40} alt="Mascot" />
        </div>
      </div>
    </header>
  );
};
