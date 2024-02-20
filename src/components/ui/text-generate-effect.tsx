"use client";
import { cn } from "@/lib/utils";
import { motion, stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";

interface IProps {
  words: string;
  className?: string;
}

export const TextGenerateEffect = ({ words, className }: IProps) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      },
    );
  }, [scope.current, animate]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <motion.span key={word + idx} className="dark:text-white text-black opacity-0">
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold text-2xl", className)}>
      <div className="mt-4">
        <div className=" text-foreground leading-snug tracking-wide">{renderWords()}</div>
      </div>
    </div>
  );
};
