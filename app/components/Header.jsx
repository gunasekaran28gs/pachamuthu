import { NavigationMenuDemo } from './NavigationMenu';
import { Button } from "@/components/ui/button";
import AnnouncementBar from './AnnouncementBar';
import Image from 'next/image';

export default function Header() {
  return (
    <>
        <AnnouncementBar />
        <header className="p-2">
          <header-logo className="flex items-center justify-between text-2xl font-bold">
            <div className="flex items-center gap-2">
              <Image src="/logo-v1.png" alt="College Logo" width={100} height={100} />
              <h1 className="text-lg font-bold">Pachamuthu Group of Institutions </h1>
            </div>
            <Button className="font-bold text-xs bg-[#F7941D]">Admission Open 2026</Button>
          </header-logo> 
        </header>
        <header-nav className="bg-[#00468B] text-sm text-white p-1">
          <NavigationMenuDemo />
        </header-nav>
    </>
  );
}