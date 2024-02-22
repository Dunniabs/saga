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
import { RESUME_DATA } from "@/data/resume-data";
import { MotionSection } from "@/lib/framer-motion";
import Image from "next/image";

const ProjectsCards = () => {
  return (
    <MotionSection className="flex flex-col gap-8">
      <h2 className="text-4xl font-bold w-full text-center md:text-start">Recent projects</h2>
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
                    <CarouselPrevious className="hidden md:flex" />
                    <CarouselNext className="hidden md:flex" />
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
    </MotionSection>
  );
};

export default ProjectsCards;
