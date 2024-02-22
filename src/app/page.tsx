import ChoosingMe from "@/components/choosing-me";
import ProjectsCards from "@/components/projects-cards";
import SparklesBg from "@/components/sparkles-bg";
import { Badge } from "@/components/ui/badge";
import Logo from "@/components/ui/logo";
import { TDCardBody, TDCardContainer, TDCardItem } from "@/components/ui/text-3d-card";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import ThemeButton from "@/components/ui/theme-button";
import sharedConfig from "@/constants/config";
import { opacityInViewVariants } from "@/constants/framerVariants";
import { RESUME_DATA } from "@/data/resume-data";
import { MotionHeader, MotionSection } from "@/lib/framer-motion";
import HeroImage from "@/resources/hero-dunniabs.png";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
  description: "Dunniabs - Turn Your Vision into Reality",
  openGraph: {
    title: "Dunniabs",
    description: "Turn Your Vision into Reality",
    type: "website",
    url: sharedConfig.baseUrl,
  },
};

export default function Home() {
  return (
    <main className="h-full flex w-full justify-center">
      <SparklesBg className="z-0" />
      <div className="w-full z-10 overflow-auto absolute inset-0 m-auto">
        <MotionHeader {...opacityInViewVariants} className="flex justify-center sticky w-full m-auto top-0 z-50 p-4 rounded backdrop-blur-lg">
          <div className="w-full max-w-6xl flex gap-2 items-center justify-between">
            <div className="flex gap-2 items-center">
              <Logo className="w-8 h-8 fill-foreground bg-background rounded-full" />
              <h1 className="text-2xl font-bold select-none">Dunniabs</h1>
            </div>
            <ThemeButton />
          </div>
        </MotionHeader>
        <div className="w-full max-w-6xl m-auto flex flex-col relative gap-16 md:gap-32 pb-4 px-4 md:px-0 md:pb-8">
          <MotionSection {...opacityInViewVariants} className="w-full mt-10 grid grid-flow-row md:grid-flow-col select-none gap-8">
            <div className="flex flex-col gap-4 h-full text-center justify-between md:text-start">
              <div className="flex flex-col gap-4">
                <TextGenerateEffect className="text-5xl font-bold" words="Turn Your Vision into Reality" />
                <span className="text-base text-muted-foreground">
                  Your project deserves excellence. With a personalized approach and a commitment to quality, I'm here to turn your digital vision
                  into reality.
                </span>
              </div>
              <div className="flex gap-2 flex-wrap justify-center md:justify-start md:mb-10">
                {RESUME_DATA.skills.slice(0, 8).map((skill) => (
                  <Badge key={`${skill}`}>{skill}</Badge>
                ))}
              </div>
            </div>
            <TDCardContainer>
              <TDCardBody className="bg-muted relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                <TDCardItem translateZ="50" className="text-xl font-bold">
                  Seeking flawless technical expertise paired with boundless creativity?
                </TDCardItem>
                <TDCardItem as="p" translateZ="50" className="text-sm max-w-sm mt-2">
                  You've come to the right place!
                </TDCardItem>
                <TDCardItem translateZ="60" className="w-full mt-4">
                  <Image
                    src={HeroImage}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="Hero Image"
                  />
                </TDCardItem>
              </TDCardBody>
            </TDCardContainer>
          </MotionSection>
          <ChoosingMe />
          <ProjectsCards />
        </div>
      </div>
    </main>
  );
}
