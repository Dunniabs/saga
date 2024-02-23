import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
import { cn } from "@/lib/utils";
import type { Project } from "data";
import Image from "next/image";

const choosingData: { title: string; content: React.ReactNode; project?: Project }[] = [
  {
    title: "Innovative Web Developer and Entrepreneur",
    content: (
      <p>
        Expert in leveraging cutting-edge technologies like <strong>TypeScript</strong>, <strong>Next.js</strong>, <strong>Node.js</strong>, and{" "}
        <strong>React</strong> to build scalable, efficient web applications. Passionate about Web3 and AI, with a focus on enhancing inbound organic
        traffic through innovative solutions.
      </p>
    ),
    project: RESUME_DATA.projects.find((project) => project.title === "Reboom"),
  },
  {
    title: "Web3 and Blockchain Expert",
    content: (
      <p>
        Specialized in <strong>developing decentralized applications</strong> (dApps) using platforms like <strong>MultiversX</strong> and{" "}
        <strong>Ethereum</strong>. Offers deep insights into <strong>blockchain technology</strong>, ensuring projects are secure, scalable, and
        aligned with the latest trends.
      </p>
    ),
    project: RESUME_DATA.projects.find((project) => project.title === "Great War"),
  },
  {
    title: "Proven Leadership in Tech",
    content: (
      <p>
        Experienced in leading projects and teams to success, highlighted by roles as <strong>CTO</strong> and <strong>lead developer</strong>.
        Demonstrates a keen ability to drive <strong>product development</strong>, <strong>team efficiency</strong>, and{" "}
        <strong>tech innovation</strong>.
      </p>
    ),
    project: RESUME_DATA.projects.find((project) => project.title === "Melba"),
  },
  {
    title: "Continuous Learning and Adaptation",
    content: (
      <p>
        Committed to staying at the forefront of technology, continuously exploring new <strong>tools</strong> and <strong>methodologies</strong>.
        This adaptability ensures the delivery of modern, effective solutions that address current and <strong>future tech challenges</strong>.
      </p>
    ),
    project: RESUME_DATA.projects.find((project) => project.title === "Gnogons v2"),
  },
  {
    title: "Global Perspective and Experience",
    content: (
      <p>
        With a rich background in <strong>international projects</strong> and <strong>collaborations</strong>, brings a unique global perspective to
        the table, enhancing the ability to innovate and compete on a <strong>worldwide scale</strong>.
      </p>
    ),
    project: RESUME_DATA.projects.find((project) => project.title === "Rizen city"),
  },
];

interface IProps {
  className?: string;
}

const ChoosingMe = ({ className }: IProps) => {
  return (
    <HeroSection className="flex flex-col gap-8">
      <HeroTitle>Why choose me?</HeroTitle>
      {choosingData.map((data, index) => {
        const { project } = data;

        return (
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          <Drawer key={index} dismissible>
            <DrawerTrigger asChild>
              <Card className={cn("relative p-4 md:p-8 rounded bg-muted/80 cursor-pointer", className)}>
                <div className="absolute inset-0 dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] z-0" />
                <CardContent
                  className={cn("text-base z-10 gap-8 p-0 flex flex-col md:flex-row", {
                    "md:flex-row-reverse": index % 2 === 0,
                  })}
                >
                  <div className="flex flex-col gap-4 col-span-2 flex-1">
                    <h3 className="text-lg font-bold">{data.title}</h3>
                    <div className="text-foreground/70">{data.content}</div>
                    {project ? (
                      <div className="flex gap-2 h-full justify-self-end items-end flex-wrap">
                        {project.techStack.map((tech, index) => (
                          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                          <Badge className="h-fit" key={index}>
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    ) : null}
                  </div>
                  {project ? (
                    <div className="relative flex items-center justify-center flex-1">
                      <DirectionAwareHover image={project.image}>
                        <p className="font-bold text-xl">{project.title}</p>
                        <p className="font-normal text-sm">{project.description}</p>
                      </DirectionAwareHover>
                    </div>
                  ) : null}
                </CardContent>
              </Card>
            </DrawerTrigger>
            {project ? (
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
            ) : null}
          </Drawer>
        );
      })}
    </HeroSection>
  );
};

export default ChoosingMe;
