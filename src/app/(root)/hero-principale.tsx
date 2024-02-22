import { Badge } from "@/components/ui/badge";
import { HeroSection } from "@/components/ui/hero-section";
import { TDCardBody, TDCardContainer, TDCardItem } from "@/components/ui/text-3d-card";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { RESUME_DATA } from "@/data/resume-data";
import HeroImage from "@/resources/hero-dunniabs.png";
import Image from "next/image";

const HeroPrincipale = () => {
  return (
    <HeroSection className="w-full mt-10 grid grid-flow-row md:grid-flow-col select-none gap-8">
      <div className="flex flex-col gap-4 h-full text-center justify-between md:text-start">
        <div className="flex flex-col gap-4">
          <TextGenerateEffect className="text-5xl font-bold" words="Turn Your Vision into Reality" />
          <span className="text-base text-muted-foreground">
            Your project deserves excellence. With a personalized approach and a commitment to quality, I'm here to turn your digital vision into
            reality.
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
              placeholder="blur"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="Hero Image"
            />
          </TDCardItem>
        </TDCardBody>
      </TDCardContainer>
    </HeroSection>
  );
};

export default HeroPrincipale;
