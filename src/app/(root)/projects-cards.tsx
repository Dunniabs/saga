import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { DirectionAwareHover } from "@/components/ui/direction-card";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { HeroSection, HeroTitle } from "@/components/ui/hero-section";
import { RESUME_DATA } from "@/data/resume-data";
import Image from "next/image";

const ProjectsCards = () => {
  return (
    <HeroSection className="flex flex-col gap-8">
      <HeroTitle>Recent projects</HeroTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        {RESUME_DATA.projects.map((project) => (
          <Drawer key={project.title}>
            <DrawerTrigger asChild>
              <div className="relative flex items-center justify-center cursor-pointer">
                <DirectionAwareHover image={project.image}>
                  <p className="font-bold text-xl">{project.title}</p>
                  <p className="font-normal text-sm">{project.description}</p>
                </DirectionAwareHover>
              </div>
            </DrawerTrigger>
            <DrawerContent>
              <div className="mx-auto w-full max-w-2xl">
                <DrawerHeader>
                  <a href={project.link.href} target="_blank" rel="noreferrer" aria-label={project.link.label}>
                    <DrawerTitle className="text-blue-400 hover:underline transition-all">{project.title}</DrawerTitle>
                  </a>
                  <DrawerDescription>{project.description}</DrawerDescription>
                </DrawerHeader>
                <div className="flex justify-center">
                  <Carousel
                    className="w-[95%] md:w-[80%]"
                    opts={{
                      loop: true,
                    }}
                  >
                    <CarouselContent>
                      <CarouselItem>
                        <div className="p-1">
                          <Image src={project.image} alt={project.title} placeholder="blur" className="rounded object-cover border border-border" />
                        </div>
                      </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="left-4 md:-left-12" />
                    <CarouselNext className="right-4 md:-right-12" />
                  </Carousel>
                </div>
                <DrawerFooter>
                  <DrawerClose asChild>
                    <Button variant="outline">Close</Button>
                  </DrawerClose>
                </DrawerFooter>
              </div>
            </DrawerContent>
          </Drawer>
        ))}
      </div>
    </HeroSection>
  );
};

export default ProjectsCards;