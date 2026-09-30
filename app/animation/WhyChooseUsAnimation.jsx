"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseUsAnimation({ children, className = "" }) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Reduced motion: everything shows as normal, no animation
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // 1. Top bar + header, when the section comes into view
        gsap
          .timeline({
            defaults: { ease: "power3.out" },
            scrollTrigger: { trigger: ref.current, start: "top 80%", once: true },
          })
          .fromTo(
            "[data-anim='bar']",
            { scaleX: 0 },
            { scaleX: 1, duration: 1.1, ease: "power2.inOut" }
          )
          .fromTo(
            "[data-anim='header'] > *",
            { autoAlpha: 0, y: 20 },
            { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.1 },
            0.2
          );

        // 2. Cards: hidden until they scroll in.
        // batch() means a desktop row staggers in together,
        // and on mobile each card animates as it reaches the screen.
        const cards = gsap.utils.toArray("[data-anim='card']");
        const icons = gsap.utils.toArray("[data-anim='icon']");

        gsap.set(cards, { autoAlpha: 0, y: 40 });
        gsap.set(icons, { autoAlpha: 0, scale: 0.5, rotate: -20 });

        ScrollTrigger.batch(cards, {
          start: "top 88%",
          once: true,
          onEnter: (batch) => {
            gsap.to(batch, {
              autoAlpha: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.12,
              ease: "power3.out",
            });
            gsap.to(
              batch.map((card) => card.querySelector("[data-anim='icon']")),
              {
                autoAlpha: 1,
                scale: 1,
                rotate: 0,
                duration: 0.6,
                delay: 0.3,
                stagger: 0.12,
                ease: "back.out(2.5)",
              }
            );
          },
        });
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}