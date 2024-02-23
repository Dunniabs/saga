import ChoosingMe from "@/app/(root)/choosing-me";
import HeroPrincipale from "@/app/(root)/hero-principale";
import Pricing from "@/app/(root)/pricing";
import SparklesBg from "@/components/sparkles-bg";
import Logo from "@/components/ui/logo";
import ThemeButton from "@/components/ui/theme-button";
import sharedConfig from "@/constants/config";
import { opacityInViewVariants } from "@/constants/framerVariants";
import { MotionHeader } from "@/lib/framer-motion";
import { GithubLogo } from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";
import Link from "next/link";

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
          <HeroPrincipale />
          <ChoosingMe />
          <Pricing />
        </div>
        <footer className="w-full backdrop-blur-xl">
          <div className="w-full max-w-6xl py-8 md:py-8 flex flex-col md:flex-row gap-4 justify-between items-center m-auto px-4">
            <div className="flex justify-center gap-4">
              <Logo className="w-8 h-8 fill-foreground bg-background rounded-full" />
              <h1 className="text-lg font-bold select-none">Dunniabs</h1>
            </div>
            <div className="flex gap-4 items-center">
              <Link
                href="/cv"
                className="text-muted-foreground transition-colors hover:text-blue-400 hover:border-blue-400 rounded-full border border-border p-1"
              >
                CV
              </Link>
              <a
                href="https://github.com/Dunniabs/saga"
                className="text-muted-foreground transition-colors hover:text-blue-400 hover:border-blue-400 rounded-full border border-border p-1"
                target="_blank"
                rel="noreferrer"
              >
                <GithubLogo size={24} />
              </a>
            </div>
            <span className="select-none text-xs text-muted-foreground">© {new Date().getFullYear()} Dunniabs</span>
          </div>
        </footer>
      </div>
    </main>
  );
}
