"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Palette,
  Pill,
  HeartPulse,
  FlaskConical,
  Activity,
  GraduationCap,
  CalendarDays,
  Users,
  ArrowRight,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/*
 * PLACEHOLDERS: `est` and `seats` below are example values only.
 * Replace them with the real numbers, or delete the field to hide it
 * (the meta row only shows the items that are present).
 */
const programs = [
  {
    title: "Arts & Science",
    code: "Arts",
    href: "/arts-science",
    image: "/college-1.webp",
    alt: "Arts and Science college building with a landscaped garden",
    description: "Explore courses, eligibility and admission details for the College of Arts & Science.",
    icon: Palette,
    est: "2009",
    seats: "60",
  },
  {
    title: "Pharmacy",
    code: "Pharma",
    href: "/pharmacy",
    image: "/college-2.webp",
    alt: "Pachamuthu College of Pharmacy building entrance",
    description: "Explore courses, eligibility and admission details for the College of Pharmacy.",
    icon: Pill,
    est: "2009",
    seats: "60",
  },
  {
    title: "Nursing",
    code: "Nursing",
    href: "/nursing",
    image: "/college-3.webp",
    alt: "Pachamuthu College of Nursing building",
    description: "Explore courses, eligibility and admission details for the College of Nursing.",
    icon: HeartPulse,
    est: "2009",
    seats: "60",
  },
  {
    title: "Health Science",
    code: "Health",
    href: "/health-science",
    image: "/college-4.webp",
    alt: "Students working with coloured liquids in a science lab",
    description: "Explore courses, eligibility and admission details for Health Science programs.",
    icon: FlaskConical,
    est: "2009",
    seats: "60",
  },
  {
    title: "Physiotherapy",
    code: "Physio",
    href: "/physiotherapy",
    image: "/college-5.webp",
    alt: "Student studying an anatomical model",
    description: "Explore courses, eligibility and admission details for the College of Physiotherapy.",
    icon: Activity,
    est: "2009",
    seats: "60",
  },
  {
    title: "Education",
    code: "Edu",
    href: "/education",
    image: "/college-6.webp",
    alt: "College of Education main building at dusk",
    description: "Explore courses, eligibility and admission details for the College of Education.",
    icon: GraduationCap,
    est: "2009",
    seats: "60",
  },
];

export default function FindYourProgram({
  eyebrow = "Programs",
  title = "Find Your Program",
  subtitle = "Explore our colleges and choose the course that fits your career goals.",
}) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Reduced motion: everything shows as normal, no animation
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          "[data-anim='header'] > *",
          { autoAlpha: 0, y: 24 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: { trigger: "[data-anim='header']", start: "top 85%", once: true },
          }
        );

        const cards = gsap.utils.toArray("[data-anim='card']");
        gsap.set(cards, { autoAlpha: 0, y: 50 });
        gsap.set("[data-anim='img']", { scale: 1.25 });
        gsap.set("[data-anim='icon']", { autoAlpha: 0, scale: 0.4, rotate: -25 });

        // batch(): a desktop row staggers in together; on mobile each card
        // animates as it reaches the screen
        ScrollTrigger.batch(cards, {
          start: "top 90%",
          once: true,
          onEnter: (batch) => {
            const pick = (sel) => batch.map((c) => c.querySelector(sel));

            gsap.to(batch, {
              autoAlpha: 1,
              y: 0,
              duration: 0.9,
              stagger: 0.12,
              ease: "power3.out",
            });
            gsap.to(pick("[data-anim='img']"), {
              scale: 1,
              duration: 1.6,
              stagger: 0.12,
              ease: "power2.out",
            });
            gsap.to(pick("[data-anim='icon']"), {
              autoAlpha: 1,
              scale: 1,
              rotate: 0,
              duration: 0.7,
              delay: 0.35,
              stagger: 0.12,
              ease: "back.out(2.4)",
            });
          },
        });
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="w-full bg-slate-50 py-14 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div data-anim="header" className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#E9A92B]">{eyebrow}</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-blue-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-500 sm:text-base">{subtitle}</p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:mt-14 lg:grid-cols-3 lg:gap-8">
          {programs.map(
            ({ title, code, href, image, alt, description, icon: Icon, est, seats }) => (
              // GSAP animates this wrapper so it never fights the card's CSS hover lift
              <div key={title} data-anim="card" className="h-full">
                <article className="group relative flex h-full flex-col rounded-3xl border border-slate-200/80 bg-white shadow-[0_2px_14px_rgba(15,23,42,0.05)] transition-all duration-500 hover:-translate-y-1.5 hover:border-slate-300 hover:shadow-[0_18px_40px_rgba(10,33,70,0.12)] has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-[#E9A92B] has-[:focus-visible]:ring-offset-2">
                  {/* Image + badges */}
                  <div className="relative">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-t-3xl bg-slate-200">
                      <div data-anim="img" className="absolute inset-0">
                        <Image
                          src={image}
                          alt={alt}
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        />
                      </div>
                      <span className="absolute right-4 top-4 rounded-full bg-[#2B2A57]/90 px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-wider text-[#F5C542] backdrop-blur-sm">
                        {code}
                      </span>
                    </div>

                    {/* Icon overlapping the image edge */}
                    <span
                      data-anim="icon"
                      className="absolute -bottom-6 left-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0A2146] text-[#F5C542] shadow-md ring-4 ring-white transition-colors duration-300 group-hover:bg-[#E9A92B] group-hover:text-[#0A2146]"
                    >
                      <Icon aria-hidden="true" className="h-6 w-6" strokeWidth={1.8} />
                    </span>
                  </div>

                  {/* Body */}
                  <div className="flex flex-1 flex-col px-6 pb-6 pt-10">
                    {/* {(est || seats) && (
                      <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
                        {est && (
                          <span className="inline-flex items-center gap-2">
                            <CalendarDays aria-hidden="true" className="h-4 w-4" />
                            Est. {est}
                          </span>
                        )}
                        {seats && (
                          <span className="inline-flex items-center gap-2">
                            <Users aria-hidden="true" className="h-4 w-4" />
                            {seats} Seats
                          </span>
                        )}
                      </div>
                    )} */}

                    <h3 className="mt-4 text-xl font-bold leading-snug text-blue-900">{title}</h3>
                    <p className="mt-2 flex-1 text-[15px] leading-relaxed text-slate-600">
                      {description}
                    </p>

                    {/* The link is stretched over the whole card (after:inset-0) */}
                    <Link
                      href={href}
                      className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-slate-100 px-5 py-3.5 text-sm font-bold text-blue-900 outline-none transition-colors duration-300 after:absolute after:inset-0 after:rounded-3xl group-hover:bg-blue-900 group-hover:text-white"
                    >
                      View More
                      <ArrowRight
                        aria-hidden="true"
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5"
                      />
                    </Link>
                  </div>
                </article>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}