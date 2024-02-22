"use client";

import { opacityInViewVariants } from "@/constants/framerVariants";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image, { type StaticImageData } from "next/image";
import { useRef, useState } from "react";

const textVariants = {
  initial: {
    y: 0,
    x: 0,
    opacity: 0,
  },
  enter: {
    x: -2,
    opacity: 1,
  },
  exit: {
    y: 0,
    x: 0,
    opacity: 0,
  },
  top: {
    x: -2,
    opacity: 1,
  },
  bottom: {
    x: -2,
    opacity: 1,
  },
  left: {
    x: -2,
    opacity: 1,
  },
  right: {
    x: -2,
    opacity: 1,
  },
};

export const DirectionAwareHover = ({
  image,
  children,
  childrenClassName,
  imageClassName,
  className,
}: {
  image: StaticImageData;
  children: React.ReactNode | string;
  childrenClassName?: string;
  imageClassName?: string;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const [direction, setDirection] = useState<"top" | "bottom" | "left" | "right" | string>("left");

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;

    const direction = getDirection(event, ref.current);
    switch (direction) {
      case 0:
        setDirection("top");
        break;
      case 1:
        setDirection("right");
        break;
      case 2:
        setDirection("bottom");
        break;
      case 3:
        setDirection("left");
        break;
      default:
        setDirection("left");
        break;
    }
  };

  const getDirection = (ev: React.MouseEvent<HTMLDivElement, MouseEvent>, obj: HTMLElement) => {
    const { width: w, height: h, left, top } = obj.getBoundingClientRect();
    const x = ev.clientX - left - (w / 2) * (w > h ? h / w : 1);
    const y = ev.clientY - top - (h / 2) * (h > w ? w / h : 1);
    const d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
    return d;
  };

  return (
    <motion.div
      {...opacityInViewVariants}
      onMouseEnter={handleMouseEnter}
      ref={ref}
      className={cn("bg-transparent rounded-lg overflow-hidden group/card relative w-full border-2 border-border h-full", className)}
    >
      <AnimatePresence mode="wait">
        <motion.div className="relative h-full w-full" initial="initial" whileHover={direction} exit="exit">
          <motion.div className="group-hover/card:opacity-100 md:opacity-0 absolute inset-0 w-full h-full bg-background/40 z-10 transition duration-500" />
          <div className="h-full w-full relative bg-background">
            <Image
              alt="image"
              className={cn("h-full w-full object-cover", imageClassName)}
              sizes="(max-width: 768px) 80vw, (max-width: 1200px) 60vw, 33vw"
              src={image}
              placeholder="blur"
            />
          </div>
          <motion.div
            variants={textVariants}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            className={cn("absolute bottom-4 left-4 z-40 max-[640px]:!opacity-100", childrenClassName)}
          >
            {children}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};
