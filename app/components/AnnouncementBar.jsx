"use client";

import Marquee from "react-fast-marquee";
import Link from "next/link"; // fix below

export default function AnnouncementBar() {
  return (
    <div className="bg-[#002f60] text-white text-xs font-medium py-2 px-4 flex items-center gap-4">
      <Marquee speed={40} autoFill pauseOnHover gradient gradientWidth={20} gradientColor="#002f60" className="w-1/2">
        <span className="mx-8">Welcome to our website! Check out our latest updates.</span>
        <span className="mx-8">Admissions Open for 2026 — Apply Now!</span>
        <span className="mx-8">New scholarships available for top scorers.</span>
      </Marquee>

      <div className="w-1/2 hidden md:flex items-center justify-end shrink-0">
        <Link href="/admissions" className="text-white border-r px-2 border-white/60 ">Admissions Open 2026</Link>
        <Link href="/contact" className="text-white border-r px-2 border-white/60 ">Contact Us</Link>
        <Link href="/about" className="text-white ml-4">About Us</Link>
      </div>
    </div>
  );
}