import { Users, Target, Trophy, Lightbulb } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import WhyChooseUsAnimation from "./../animation/WhyChooseUsAnimation";

const defaultFeatures = [
  {
    title: "Expert Faculty",
    description:
      "Experienced educators and world-class infrastructure designed for modern engineering learning.",
    icon: Users,
    iconClass: "bg-blue-50 text-blue-600",
  },
  {
    title: "Industry Aligned",
    description:
      "Strategic curriculum that bridges the gap between academics and professional industry needs.",
    icon: Target,
    iconClass: "bg-emerald-50 text-emerald-600",
  },
  {
    title: "Career Support",
    description:
      "Strong placement ecosystem with a legacy of success across top-tier global industries.",
    icon: Trophy,
    iconClass: "bg-amber-50 text-amber-500",
  },
  {
    title: "Innovation Focus",
    description:
      "Empowering students through research and innovation for tomorrow's technological challenges.",
    icon: Lightbulb,
    iconClass: "bg-violet-50 text-violet-600",
  },
];

export default function WhyChooseUs({
  eyebrow = "",
  title = "Why Study With Us?",
  subtitle = "Excellence defined through infrastructure, innovation, and outcome-based education.",
  features = defaultFeatures,
}) {
  return (
    <section className="w-full bg-[#f0f4f8] py-12 md:py-20">
      <WhyChooseUsAnimation className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Card className="relative gap-0 overflow-hidden rounded-3xl border border-slate-200/80 bg-white px-5 py-12 shadow-sm sm:px-8 md:py-14 lg:px-10">
          {/* Top gradient bar */}
          <div
            data-anim="bar"
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-blue-900 via-blue-500 to-blue-900"
          />

          {/* Header */}
          <div data-anim="header" className="mx-auto max-w-2xl text-center">
            {eyebrow && (
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-blue-500">
                {eyebrow}
              </p>
            )}
            <h2 className="text-2xl font-extrabold tracking-tight text-blue-900 sm:text-3xl">
              {title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-500 sm:text-base">
              {subtitle}
            </p>
          </div>

          {/* Feature cards */}
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 md:mt-10 lg:grid-cols-4 lg:gap-8">
            {features.map(({ title, description, icon: Icon, iconClass }) => (
              // GSAP moves this wrapper, so it never fights the card's CSS hover lift
              <div key={title} data-anim="card">
                <Card className="group h-full gap-0 rounded-2xl border border-slate-100 bg-white py-5 shadow-[0_2px_12px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-200 hover:shadow-[0_12px_30px_rgba(15,23,42,0.08)] sm:py-6">
                  <CardHeader className="gap-0 px-4 sm:px-8">
                    <div
                      data-anim="icon"
                      className={`flex h-14 w-14 items-center justify-center rounded-xl ${iconClass}`}
                    >
                      <Icon aria-hidden="true" className="h-6 w-6" strokeWidth={2} />
                    </div>
                    <CardTitle className="mt-4 text-lg font-bold text-blue-900">
                      {title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-4 sm:px-8">
                    <CardDescription className="mt-3 text-sm leading-5 text-slate-600">
                      {description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </Card>
      </WhyChooseUsAnimation>
    </section>
  );
}