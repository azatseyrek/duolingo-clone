import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

import { Sidebar } from './sidebar';

export const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu size="24" color="white" />
      </SheetTrigger>
      <SheetContent className="z-[100] p-0" side="left">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};
