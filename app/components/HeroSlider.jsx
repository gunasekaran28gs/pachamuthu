"use client";

import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { getImageProps } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Keyboard, A11y } from "swiper/modules";
import gsap from "gsap";

import "swiper/css";
import "swiper/css/effect-fade";

const AUTOPLAY_DELAY = 6000;

/*
 * image.desktop  → landscape photo (e.g. 1920×1080)
 * image.mobile   → portrait crop (e.g. 900×1400). Optional, falls back to desktop.
 * focus          → object-position, keeps faces/buildings in frame on narrow screens
 */
const slides = [
  {
    id: "arts-science",
    label: "Arts & Science",
    image: { desktop: "/college-slide-1.webp", mobile: "/college-slide-1.webp" },
    focus: "50% 35%",
    alt: "Students walking together outside the main academic block",
    titlePrefix: "Pachamuthu College of",
    title: "Arts & Science",
    description:
      "Undergraduate and postgraduate programmes across our colleges. Send an enquiry and our admissions team will call you back.",
    primary: { text: "Send an enquiry", href: "/#contact" },
    secondary: { text: "Call admissions", href: "tel:+910000000000" },
  },
  {
    id: "pharmacy",
    label: "Pharmacy",
    image: { desktop: "/college-slide-2.webp", mobile: "/college-slide-2.webp" },
    focus: "50% 50%",
    alt: "Aerial view of the college campus buildings",
    titlePrefix: "Pachamuthu College of",
    title: "Pharmacy",
    description:
      "Engineering, arts and science, management and more. Compare our institutions and find the right fit.",
    primary: { text: "Explore colleges", href: "/#institutions" },
    secondary: { text: "View courses", href: "/#courses" },
  },
  {
    id: "nursing",
    label: "Nursing",
    image: { desktop: "/college-slide-3.webp", mobile: "/college-slide-3.webp" },
    focus: "60% 40%",
    alt: "Final-year students in formal wear at a campus recruitment drive",
    titlePrefix: "Pachamuthu College of",
    title: "Nursing",
    description:
      "Aptitude training, soft skills, internships and campus recruitment drives, run by a dedicated placement cell.",
    primary: { text: "See placement support", href: "/#placements" },
    secondary: { text: "View courses", href: "/#courses" },
  },
  {
    id: "physiotherapy",
    label: "Physiotherapy",
    image: { desktop: "/college-slide-4.webp", mobile: "/college-slide-4.webp" },
    focus: "40% 50%",
    alt: "Students studying in the college library",
    titlePrefix: "Pachamuthu College of",
    title: "Physiotherapy",
    description:
      "Everything students need to learn and live well, all on one campus. Take a look around.",
    primary: { text: "View facilities", href: "/#facilities" },
    secondary: { text: "Open gallery", href: "/#gallery" },
  },
];

function AnimatedWords({ text, className = "" }) {
  return text.split(" ").map((word, i) => (
    <Fragment key={i}>
      <span className="inline-block overflow-hidden pb-[0.08em] align-bottom">
        <span data-word className={`inline-block will-change-transform ${className}`}>
          {word}
        </span>
      </span>{" "}
    </Fragment>
  ));
}

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function HeroSlider() {
  const swiperRef = useRef(null);
  const slideRefs = useRef([]);
  const progressRef = useRef(null);
  const activeRef = useRef(0);
  const textTl = useRef(null);
  const imageTween = useRef(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const getParts = (index) => {
    const root = slideRefs.current[index];
    if (!root) return null;
    return {
      words: root.querySelectorAll("[data-word]"),
      desc: root.querySelector("[data-desc]"),
      buttons: root.querySelectorAll("[data-btn]"),
      image: root.querySelector("[data-img]"),
    };
  };

  const hideSlide = (index) => {
    const p = getParts(index);
    if (!p || prefersReducedMotion()) return;
    gsap.set(p.words, { yPercent: 115 });
    gsap.set([p.desc, ...p.buttons], { autoAlpha: 0 });
  };

  const animateSlide = useCallback((index) => {
    const p = getParts(index);
    if (!p) return;

    textTl.current?.kill();
    imageTween.current?.kill();

    if (prefersReducedMotion()) {
      gsap.set([...p.words, p.desc, ...p.buttons, p.image], { clearProps: "all" });
      return;
    }

    // Image zoom runs on its own, so its long duration can't delay the text
    imageTween.current = gsap.fromTo(
      p.image,
      { scale: 1.1 },
      { scale: 1, duration: AUTOPLAY_DELAY / 1000 + 1, ease: "power1.out" }
    );

    // Text timeline: total ~1.6s, everything visible well before the slide changes
    textTl.current = gsap
      .timeline({ defaults: { ease: "power3.out" } })
      .fromTo(
        p.words,
        { yPercent: 115, rotate: 3 },
        { yPercent: 0, rotate: 0, duration: 0.9, stagger: 0.06, ease: "power4.out" },
        0.2
      )
      .fromTo(p.desc, { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 0.7 }, "-=0.55")
      .fromTo(
        p.buttons,
        { autoAlpha: 0, y: 16 },
        { autoAlpha: 1, y: 0, duration: 0.55, stagger: 0.08 },
        "-=0.45"
      );
  }, []);

  useEffect(() => {
    slides.forEach((_, i) => i !== 0 && hideSlide(i));
    animateSlide(0);
    return () => {
      textTl.current?.kill();
      imageTween.current?.kill();
    };
  }, [animateSlide]);

  const handleSlideChange = (swiper) => {
    const prev = activeRef.current;
    const next = swiper.realIndex;
    activeRef.current = next;
    setActive(next);
    animateSlide(next);
    // reset the outgoing slide after its fade, unless the user already swiped back to it
    gsap.delayedCall(0.8, () => {
      if (activeRef.current !== prev) hideSlide(prev);
    });
  };

  const togglePlay = () => {
    const swiper = swiperRef.current;
    if (!swiper) return;
    if (paused) swiper.autoplay.start();
    else swiper.autoplay.stop();
    setPaused(!paused);
  };

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Highlights"
      className="relative h-[88svh] min-h-[560px] w-full overflow-hidden bg-slate-950 text-white md:h-[90svh] md:max-h-[920px]"
    >
      <Swiper
        modules={[Autoplay, EffectFade, Keyboard, A11y]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={900}
        loop
        threshold={8}
        keyboard={{ enabled: true }}
        autoplay={{
          delay: AUTOPLAY_DELAY,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={handleSlideChange}
        onAutoplayTimeLeft={(_, __, progress) => {
          if (progressRef.current) {
            progressRef.current.style.transform = `scaleX(${1 - progress})`;
          }
        }}
        className="h-full w-full"
      >
        {slides.map((slide, i) => {
          const Heading = i === 0 ? "h1" : "h2";
          return (
            <SwiperSlide key={slide.id}>
              <div ref={(el) => (slideRefs.current[i] = el)} className="relative h-full w-full">
                <div data-img className="absolute inset-0 will-change-transform">
                  <HeroImage slide={slide} priority={i === 0} />
                </div>

                {/* Mobile: dark from the bottom where text sits. Desktop: dark from the left. */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/10 md:bg-gradient-to-r md:from-black/75 md:via-black/35 md:to-transparent" />

                <div className="relative z-10 mx-auto flex h-full max-w-350 items-end px-5 pb-28 sm:px-8 md:items-center md:px-12 md:pb-0">
                  <div className="slide-content w-full max-w-2xl">
                    <Heading className="text-[1.5rem] leading-[1.08] tracking-tight sm:text-3xl lg:text-5xl lg:leading-[1.02]">
                      {slide.titlePrefix && (
                        <AnimatedWords text={slide.titlePrefix} className=" font-extrabold text-white" />
                      )}
                      <AnimatedWords text={slide.title} className="font-extrabold title-gradient text-white" />
                    </Heading>

                    <p
                      data-desc
                      className="mt-4 line-clamp-3 max-w-md text-[15px] leading-relaxed text-white/85 sm:line-clamp-none sm:text-lg md:mt-6"
                    >
                      {slide.description}
                    </p>

                    <div className="mt-6 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap md:mt-9">
                      <CTA data-btn href={slide.primary.href} variant="primary">
                        {slide.primary.text}
                      </CTA>
                      <CTA data-btn href={slide.secondary.href} variant="secondary">
                        {slide.secondary.text}
                      </CTA>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Controls */}
      <div className="absolute inset-x-0 bottom-0 z-20">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-5 pb-[max(1rem,env(safe-area-inset-bottom))] sm:px-8 md:items-end md:gap-4 md:px-12 md:pb-8">
          <div className="grid flex-1 grid-cols-4 gap-2 sm:gap-6">
            {slides.map((slide, i) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => swiperRef.current?.slideToLoop(i)}
                aria-label={`Go to slide ${i + 1}: ${slide.label}`}
                aria-current={active === i}
                className="group py-4 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:py-0"
              >
                <span
                  className={`mb-3 hidden text-sm transition-colors md:block ${
                    active === i ? "text-white" : "text-white/55 group-hover:text-white/80"
                  }`}
                >
                  {slide.label}
                </span>
                <span className="relative block h-[3px] w-full overflow-hidden rounded-full bg-white/25 md:h-[2px]">
                  {active === i && (
                    <span
                      ref={progressRef}
                      className="absolute inset-0 origin-left bg-white"
                      style={{ transform: paused ? "scaleX(1)" : "scaleX(0)" }}
                    />
                  )}
                </span>
              </button>
            ))}
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <ControlButton
              label="Previous slide"
              className="hidden md:flex"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <path d="M15 18l-6-6 6-6" />
            </ControlButton>
            <ControlButton label={paused ? "Play slideshow" : "Pause slideshow"} onClick={togglePlay}>
              {paused ? <path d="M8 5v14l11-7z" /> : <path d="M9 5v14M15 5v14" />}
            </ControlButton>
            <ControlButton
              label="Next slide"
              className="hidden md:flex"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <path d="M9 18l6-6-6-6" />
            </ControlButton>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Serves the portrait image to phones and the landscape one to larger screens */
function HeroImage({ slide, priority }) {
  const common = { alt: slide.alt, fill: true, sizes: "100vw", priority };
  const {
    props: { srcSet: desktopSrcSet },
  } = getImageProps({ ...common, src: slide.image.desktop, quality: 80 });
  const {
    props: { srcSet: mobileSrcSet, ...rest },
  } = getImageProps({ ...common, src: slide.image.mobile ?? slide.image.desktop, quality: 75 });

  return (
    <picture>
      <source media="(min-width: 768px)" srcSet={desktopSrcSet} />
      <source media="(max-width: 767px)" srcSet={mobileSrcSet} />
      <img
        {...rest}
        alt={slide.alt}
        style={{ ...rest.style, objectFit: "cover", objectPosition: slide.focus }}
      />
    </picture>
  );
}

function CTA({ href, variant, children, ...props }) {
  const base =
    "inline-flex min-h-12 items-center justify-center rounded-full px-5 text-center text-sm font-medium leading-tight transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:px-7";
  const styles =
    variant === "primary"
      ? "bg-white text-slate-900 hover:bg-white/85"
      : "border border-white/60 text-white hover:border-white hover:bg-white/10";
  const className = `${base} ${styles}`;

  const isExternal = /^(tel:|mailto:|https?:)/.test(href);
  return isExternal ? (
    <a href={href} className={className} {...props}>
      {children}
    </a>
  ) : (
    <Link href={href} className={className} {...props}>
      {children}
    </Link>
  );
}

function ControlButton({ label, onClick, className = "", children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`h-11 w-11 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:border-white hover:bg-white hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
        className || "flex"
      }`}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {children}
      </svg>
    </button>
  );
}