"use client";

import Marquee from "react-fast-marquee";
import { useLayoutEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function AboutHome() {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            });

            tl.from(".about-label-container", {
                opacity: 0,
                y: 30,
                duration: 0.7,
                ease: "power3.out",
            })
                .from(
                    ".about-home-content",
                    {
                        opacity: 0,
                        y: 50,
                        duration: 0.9,
                        ease: "power3.out",
                    },
                    "-=0.4"
                )
                .from(
                    ".about-home-heading",
                    {
                        opacity: 0,
                        x: -30,
                        duration: 0.6,
                        ease: "power3.out",
                    },
                    "-=0.4"
                )
                .from(
                    ".about-home-description",
                    {
                        opacity: 0,
                        y: 20,
                        duration: 0.6,
                        stagger: 0.15,
                        ease: "power2.out",
                    },
                    "-=0.3"
                )
                .from(
                    ".about-home-content a",
                    {
                        opacity: 0,
                        y: 20,
                        duration: 0.5,
                        ease: "power2.out",
                    },
                    "-=0.2"
                );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="about-home-wrapper bg-[#f0f4ff]"
        >
            <div className="about-home-container max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">

                {/* About Label */}
                <div className="about-label-container flex items-center gap-4">
                    <span className="about-label">About</span>
                    <div className="about-label-line"></div>
                </div>

                {/* Content */}
                <div className="about-home-content relative mt-4 pl-7">

                    {/* Vertical Line */}
                    <div className="about-vertical-bar"></div>

                    <h2 className="about-home-heading uppercase  text-2xl font-bold tracking text-[#00468B] sm:text-2xl">
                        Pachamuthu Group of Institutions
                    </h2>
                    {/* <Marquee
                        speed={40}
                        autoFill
                        pauseOnHover
                        // gradient
                        gradientWidth={20}
                        gradientColor="#f0f4ff"
                        className="w-1/2 mt-4"
                    >
                        <div className="mx-3 h-42 w-64 shrink-0 overflow-hidden rounded-2xl">
                            <Image
                                src="/about-image-1.webp"
                                alt="About Image 1"
                                width={300}
                                height={300}
                                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                            />
                        </div>

                        <div className="mx-3 h-42 w-64 shrink-0 overflow-hidden rounded-2xl">
                            <Image
                                src="/about-image-2.webp"
                                alt="About Image 2"
                                width={300}
                                height={300}
                                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                            />
                        </div>

                        <div className="mx-3 h-42 w-64 shrink-0 overflow-hidden rounded-2xl">
                            <Image
                                src="/about-image-3.webp"
                                alt="About Image 3"
                                width={300}
                                height={300}
                                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                            />
                        </div>

                        <div className="mx-3 h-42 w-64 shrink-0 overflow-hidden rounded-2xl">
                            <Image
                                src="/about-image-4.webp"
                                alt="About Image 4"
                                width={300}
                                height={300}
                                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                    </Marquee> */}


                    <p className="about-home-description mt-4 text-md leading-6 text-justify text-gray-600">
                        <span className="font-bold">Pachamuthu Group of Institutions</span>, we are not just preparing
                        students for the future — we are actively shaping it. With a
                        bold vision and a commitment to innovation, we are expanding
                        the frontiers of knowledge, technology, and holistic education.
                    </p>

                    <p className="about-home-description mt-4 text-md leading-6 text-justify text-gray-600">
                        Our goal is to empower young minds to become changemakers,
                        leaders, and pioneers in their fields, guided by strong values
                        and a global perspective.
                    </p>

                    <Link href="/about">
                        <Button
                            variant="default"
                            className="bg-[#F7941D] cursor-pointer hover:bg-[#F7941D]/90 mt-4 px-5 py-2 text-[12px] font-semibold flex items-center gap-2"
                        >
                            Read More
                            <ArrowRightIcon />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
