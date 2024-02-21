import { Button } from "@/components/ui/button";
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
import { MotionDiv } from "@/lib/framer-motion";
import Image from "next/image";

const ProjectsCards = () => {
  return (
    <MotionDiv className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
      {RESUME_DATA.projects.map((project) => (
        <Drawer key={project.title}>
          <DrawerTrigger asChild>
            <div className="relative flex items-center justify-center cursor-pointe">
              <DirectionAwareHover image={project.image}>
                <p className="font-bold text-xl">{project.title}</p>
                <p className="font-normal text-sm">{project.description}</p>
              </DirectionAwareHover>
            </div>
          </DrawerTrigger>
          <DrawerContent>
            <div className="mx-auto w-full max-w-2xl">
              <DrawerHeader>
                <DrawerTitle>{project.title}</DrawerTitle>
                <DrawerDescription>{project.description}</DrawerDescription>
              </DrawerHeader>
              <div>
                <Image src={project.image} alt={project.title} />
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
    </MotionDiv>
  );
};

export default ProjectsCards;
