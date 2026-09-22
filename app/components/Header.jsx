import { NavigationMenuDemo } from './NavigationMenu';
import { Button } from "@/components/ui/button";
import AnnouncementBar from './AnnouncementBar';
import Image from 'next/image';
import SocialMedia from './SocialMedia';

export default function Header() {
  return (
    <>
        <AnnouncementBar />
        <header className="p-2">
          <header-logo className="flex page-width items-center justify-between text-2xl font-bold">
            <div className="flex items-center gap-2">
              <Image src="/logo-v1.png" alt="College Logo" width={80} height={80} />
              <h1 className="text-lg font-bold">Pachamuthu Group of Institutions </h1>
            </div>
            <div className="flex items-center gap-4">
              <SocialMedia />
              <a href="mailto:info@pachamuthu.com" className="button-primary pulse-animate text-white hover:underline">
                info@pachamuthu.com
              </a>
              <Button className="relative overflow-hidden rounded-[50px] bg-black px-5 text-xs font-bold">
                  <span className="relative z-10">
                    Admission Open 2026
                  </span>

                  <span className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                </Button>

            </div>
            
          </header-logo> 
        </header>
        <header-nav className="bg-[#00468B] text-sm text-white px-2 py-1">
          <NavigationMenuDemo />
        </header-nav>
    </>
  );
}