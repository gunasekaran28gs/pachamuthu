import Image from "next/image";
import HeroSlider from "./components/HeroSlider";

export default function Home() {
  return (
    <div className="flex w-full flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="w-full">
        <HeroSlider />
        <div className="relative w-full h-[550px]">
          <Image
            src="/college-slide-1.webp"
            alt="College"
            fill
            priority
            className="object-cover"
          />
        </div>
        
        
      </main>
    </div>
  );
}
