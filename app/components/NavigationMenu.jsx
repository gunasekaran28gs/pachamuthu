"use client"

import * as React from "react"
import Link from "next/link"
import {
  QuoteIcon,
  TargetIcon,
  UserIcon,
  HeartHandshakeIcon,
  BriefcaseIcon,
  GraduationCapIcon,
  CircleAlertIcon,
  CircleCheckIcon,
  CircleDashedIcon,
} from "lucide-react"

import {
  BookOpenIcon,
  PillIcon,
  HeartPulseIcon,
  PersonStandingIcon,
  SchoolIcon,
  MicroscopeIcon,
} from "lucide-react"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

/* ------------------------------------------------------------------ */
/* Main menu underline animation                                        */
/* - Idle:   scale-x-0 with origin-right                                */
/* - Hover:  scale-x-100 with origin-left  -> fills left to right       */
/* - Leave:  origin flips back to right    -> removes left to right     */
/* - Open:   stays underlined while the submenu is open (Base UI sets   */
/*           data-popup-open on the trigger)                            */
/* ------------------------------------------------------------------ */
const mainUnderline = cn(
  "relative",
  "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full",
  "after:bg-[#f7941d] after:content-['']",
  "after:origin-right after:scale-x-0",
  "after:transition-transform after:duration-300 after:ease-out",
  "hover:after:origin-left hover:after:scale-x-100",
  "focus-visible:after:origin-left focus-visible:after:scale-x-100",
  "data-[popup-open]:after:origin-left data-[popup-open]:after:scale-x-100",
  "motion-reduce:after:transition-none"
)

const mainItemClass = cn(
  navigationMenuTriggerStyle(),
  mainUnderline,
  "text-white hover:bg-none hover:text-white focus:bg-none focus:text-white",
  "data-[popup-open]:bg-blue-700 data-[popup-open]:text-white"
)

// `icon` is optional on every item
const aboutItems = [
  {
    title: "Chairman's Message",
    href: "/docs/primitives/alert-dialog",
    icon: QuoteIcon,
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Our Mission & Vision",
    href: "/docs/primitives/hover-card",
    icon: TargetIcon,
    description: "For sighted users to preview content available behind a link.",
  },
  {
    title: "Vice-Chairman's Message",
    href: "/docs/primitives/progress",
    icon: UserIcon,
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Core Values",
    href: "/docs/primitives/scroll-area",
    icon: HeartHandshakeIcon,
    description: "Visually or semantically separates content.",
  },
  {
    title: "Managing Director Message",
    href: "/docs/primitives/tabs",
    icon: BriefcaseIcon,
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Why study with us?",
    href: "/docs/primitives/tooltip",
    icon: GraduationCapIcon,
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

export function NavigationMenuDemo() {
  return (
    <NavigationMenu className="w-full">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink
            className={mainItemClass}
            render={<Link href="/">Home</Link>}
          />
        </NavigationMenuItem>

        <NavigationMenuItem className="hidden md:flex">
          <NavigationMenuTrigger className={mainItemClass}>
            About Us
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 p-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {aboutItems.map((item) => (
                <ListItem
                  key={item.title}
                  title={item.title}
                  href={item.href}
                  icon={item.icon}
                >
                  {item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Items without icons — icon is optional */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className={mainItemClass}>
            Institutions
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-72 gap-1 p-2">
              <ListItem href="/docs" title="College of Arts & Science" icon={BookOpenIcon} />
              <ListItem href="/docs/installation" title="College of Pharmacy" icon={PillIcon} />
              <ListItem href="/docs/primitives/typography" title="College of Nursing" icon={HeartPulseIcon} />
              <ListItem href="/docs/primitives/typography" title="College of Physiotherapy" icon={PersonStandingIcon} />
              <ListItem href="/docs/primitives/typography" title="College of Education" icon={SchoolIcon} />
              <ListItem href="/docs/primitives/typography" title="Pachamuthu Padasala" icon={MicroscopeIcon} />
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Title-only items with icons (no description) */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className={mainItemClass}>
            Admissions
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-1 p-2">
              <ListItem href="#" title="Arts & Science" />
              <ListItem href="#" title="Pharmacy" />
              <ListItem href="#" title="Nursing" />
              <ListItem href="#" title="Physiotherapy" />
              <ListItem href="#" title="Pachamuthu Padasala" />
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            className={mainItemClass}
            render={<Link href="/contact">Gallery</Link>}
          />
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            className={mainItemClass}
            render={<Link href="/contact">Career</Link>}
          />
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            className={mainItemClass}
            render={<Link href="/contact">Contact Us</Link>}
          />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ListItem({ title, children, href, icon: Icon, className, ...props }) {
  return (
    <li {...props}>
      <NavigationMenuLink
        className={cn(
          "group flex-row items-start gap-3 rounded-md p-3",
          // 1px left border, rounded by rounded-md, visible only on hover/focus
          "border-l-2 border-transparent transition-colors duration-200",
          "hover:border-[#f7941d] hover:bg-blue-50",
          "focus:border-[#f7941d] focus:bg-blue-50",
          className
        )}
        render={
          <Link href={href}>
            {Icon && (
              <Icon
                aria-hidden="true"
                className="mt-0.5 size-4 shrink-0 text-[#f7941d] transition-colors group-hover:text-[#f7941d] group-focus:text-[#f7941d]"
              />
            )}
            <div className="flex flex-col gap-1 text-sm">
              <div className="leading-none font-semibold text-blue-950 transition-colors group-hover:text-[#f7941d] group-focus:text-[#f7941d]">
                {title}
              </div>
              {children && (
                <div className="line-clamp-2 leading-snug text-slate-500">
                  {children}
                </div>
              )}
            </div>
          </Link>
        }
      />
    </li>
  )
}