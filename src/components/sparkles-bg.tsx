"use client";

import SparklesCore from "@/components/ui/sparkles";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

interface IProps {
  className?: string;
}

const SparklesBg = ({ className }: IProps) => {
  const { theme } = useTheme();

  return (
    <div className={cn("absolute inset-x-0 h-full w-full m-auto", className)}>
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.6}
        maxSize={1.0}
        particleDensity={10}
        className="h-full w-full"
        particleColor={theme === "dark" ? "#FFFFFF" : "#000000"}
      />
    </div>
  );
};

export default SparklesBg;
