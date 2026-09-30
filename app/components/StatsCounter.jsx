"use client";

import { Fragment, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GraduationCap, BookOpen, Medal, Building2 } from "lucide-react";

import { Card } from "@/components/ui/card";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 10000, suffix: "+", label: "Recent graduates who started a new job", icon: GraduationCap },
  { value: 30, suffix: "+", label: "Programs available for students", icon: BookOpen },
  { value: 25, suffix: "+", label: "Years of glorious history", icon: Medal },
  { value: 5, suffix: "+", label: "Campus locations", icon: Building2 },
];

/*
 * Divider lines per stat (i = index)
 * Mobile 2×2: right line on 0 & 2, bottom line on 0 & 1
 * Desktop 4 columns: right line on 0, 1, 2, no bottom lines
 */
const rightLine = ["block", "hidden lg:block", "block", "hidden"];
const bottomLine = ["block lg:hidden", "block lg:hidden", "hidden", "hidden"];

const formatNumber = (n) => Math.round(n).toLocaleString("en-IN");

export default function StatsCounter({ title = "Academic Achievers 2025 Exams" }) {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Reduced motion: final numbers, no animation
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const items = gsap.utils.toArray("[data-stat]");

        const tl = gsap.timeline({
          defaults: { ease: "power3.out" },
          scrollTrigger: { trigger: "[data-panel]", start: "top 80%", once: true },
        });

        // 1. Panel opens from a smaller rounded window
        tl.fromTo(
          "[data-panel]",
          { clipPath: "inset(6% 6% 6% 6% round 2rem)" },
          {
            clipPath: "inset(0% 0% 0% 0% round 2rem)",
            duration: 1.1,
            ease: "power4.inOut",
            clearProps: "clipPath", // lets the box shadow show after the reveal
          }
        )
          // 2. Heading words rise
          .fromTo(
            "[data-word]",
            { yPercent: 110 },
            { yPercent: 0, duration: 0.9, stagger: 0.06, ease: "power4.out" },
            0.45
          )
          // 3. Divider lines draw
          .fromTo("[data-line-h]", { scaleX: 0 }, { scaleX: 1, duration: 1 }, 0.6)
          .fromTo("[data-line-v]", { scaleY: 0 }, { scaleY: 1, duration: 1, stagger: 0.08 }, 0.7);

        // 4. Each stat: icon, count-up, label
        items.forEach((item, i) => {
          const numberEl = item.querySelector("[data-count]");
          const target = Number(numberEl.dataset.count);
          const counter = { val: 0 };
          const start = 0.8 + i * 0.12;

          numberEl.textContent = formatNumber(0);

          tl.fromTo(
            item.querySelector("[data-icon]"),
            { autoAlpha: 0, y: 10 },
            { autoAlpha: 1, y: 0, duration: 0.5 },
            start
          )
            .to(
              counter,
              {
                val: target,
                duration: target > 1000 ? 2.2 : 1.6,
                ease: "power2.out",
                onUpdate: () => (numberEl.textContent = formatNumber(counter.val)),
              },
              start
            )
            .fromTo(
              item.querySelector("[data-label]"),
              { autoAlpha: 0, y: 12 },
              { autoAlpha: 1, y: 0, duration: 0.6 },
              start + 0.25
            );
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white py-8 md:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
         {/* Header */}
          <div className="relative px-6 pt-5 pb-8 sm:px-10 sm:pt-5 lg:px-8 lg:pt-5 lg:pb-6">
            <h2 className="text-[2rem] text-center font-bold leading-[1.1] tracking-tight sm:text-2xl lg:text-3xl">
              {title.split(" ").map((word, i) => (
                <Fragment key={i}>
                  <span className="inline-block overflow-hidden pb-[0.1em] align-bottom">
                    <span data-word className="inline-block">
                      {word}
                    </span>
                  </span>{" "}
                </Fragment>
              ))}
            </h2>
            
          </div>

        <Card
          data-panel
          className="gap-0 overflow-hidden rounded-[2rem] border bg-white p-4 text-[#0A2146] shadow-md"
        >
         
          {/* Stats: 2 columns on mobile, 4 on desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map(({ value, suffix, label, icon: Icon }, i) => (
              <div
                key={label}
                data-stat
                className="relative px-2 py-4 sm:px-10 sm:py-6 lg:px-6 lg:py-8 xl:px-6"
              >
                <span
                  data-line-v
                  aria-hidden="true"
                  className={`${rightLine[i]} absolute right-0 top-0 h-full w-px origin-top bg-black/15`}
                />
                <span
                  data-line-h
                  aria-hidden="true"
                  className={`${bottomLine[i]} absolute bottom-0 left-0 h-px w-full origin-left bg-black/15`}
                />

                <Icon
                  data-icon
                  aria-hidden="true"
                  strokeWidth={1.6}
                  className="h-6 w-6 text-[#E9A92B] sm:h-7 sm:w-7"
                />
                <p className="mt-5 text-[1.35rem] font-semibold leading-none tracking-tight tabular-nums sm:mt-6 sm:text-4xl lg:text-3xl xl:text-4xl">
                  <span data-count={value}>{formatNumber(value)}</span>
                  <span className="text-[#E9A92B]">{suffix}</span>
                </p>
                <p
                  data-label
                  className="mt-3 max-w-[15rem] text-[12px] leading-snug text-[#0A2146]/70 sm:text-base"
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}