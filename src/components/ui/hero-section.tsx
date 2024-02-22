import * as React from "react";

import { opacityInViewVariants } from "@/constants/framerVariants";
import { MotionSection } from "@/lib/framer-motion";
import { cn } from "@/lib/utils";
import type { HTMLMotionProps } from "framer-motion";

const HeroSection = React.forwardRef<HTMLDivElement, HTMLMotionProps<"section">>(({ className, ...props }, ref) => (
  <MotionSection {...opacityInViewVariants} ref={ref} className={cn("w-full", className)} {...props} />
));
HeroSection.displayName = "HeroSection";

const HeroTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(({ className, ...props }, ref) => (
  <h2 ref={ref} className={cn("text-4xl font-bold w-full text-center md:text-start", className)} {...props} />
));
HeroTitle.displayName = "HeroTitle";

export { HeroSection, HeroTitle };
