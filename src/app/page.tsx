import SparklesBg from "@/components/sparkles-bg";
import Logo from "@/components/ui/logo";
import { TDCardBody, TDCardContainer, TDCardItem } from "@/components/ui/text-3d-card";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import ThemeButton from "@/components/ui/theme-button";
import { opacityInViewVariants } from "@/framerVariants";
import { MotionDiv, MotionHeader } from "@/lib/framer-motion";
import HeroImage from "@/resources/images/visual-1.png";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen p-8 overflow-auto flex justify-center">
      <SparklesBg className="z-0" />
      <div className="w-full max-w-6xl z-10">
        <MotionHeader {...opacityInViewVariants} className="flex gap-2 items-center justify-between">
          <div className="flex gap-2 items-center">
            <Logo className="w-8 h-8 fill-foreground bg-background rounded-full" />
            <h1 className="text-2xl font-bold select-none">Dunniabs</h1>
          </div>
          <ThemeButton className="z-10" />
        </MotionHeader>
        <MotionDiv {...opacityInViewVariants} className="w-full my-12 flex items-center select-none gap-4">
          <TextGenerateEffect className="text-5xl font-bold text-center" words="Turn Your Vision into Reality" />
          <TDCardContainer>
            <TDCardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <TDCardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                Seeking flawless technical expertise paired with boundless creativity?
              </TDCardItem>
              <TDCardItem as="p" translateZ="50" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
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
        </MotionDiv>
      </div>
    </main>
  );
}
