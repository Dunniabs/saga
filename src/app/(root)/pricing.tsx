import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { HeroSection, HeroTitle } from "@/components/ui/hero-section";
import { RESUME_DATA } from "@/data/resume-data";
import { cn } from "@/lib/utils";
import type { IconProps } from "@phosphor-icons/react";
import { Prohibit, SealCheck } from "@phosphor-icons/react/dist/ssr";
import { MailIcon } from "lucide-react";

const pricingData: {
  plan: string;
  description: string;
  features: string[];
  featuresIcon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;
  footer: () => React.JSX.Element;
  featured?: boolean;
}[] = [
  {
    plan: 'The "DIY Disaster" Plan',
    description: "Your sanity and timeline",
    features: ["Endless hours on Stack Overflow", "Random bugs at 2 AM", '"It works on my machine" certification', "A sense of impending doom"],
    featuresIcon: Prohibit,
    footer: () => {
      return (
        <Button className="w-full" disabled>
          Are you sure?
        </Button>
      );
    },
  },
  {
    plan: 'The "Dunniabs" Package',
    description: "A wise investment in your project's success",
    features: [
      "Cutting-edge tech stack integration by an expert (React, Node.js, TypeScript, and more)",
      "Seamless front-to-back development with a dash of infrastructure magic",
      "Peace of mind with scalable, secure, and efficient solutions",
      "A project that not only works but dazzles",
    ],
    featuresIcon: SealCheck,
    footer: () => {
      return (
        <Drawer>
          <DrawerTrigger asChild>
            <Button className="w-full">Contact Me</Button>
          </DrawerTrigger>
          <DrawerContent>
            <div className="mx-auto w-full max-w-2xl">
              <DrawerHeader>
                <DrawerTitle>Contact informations</DrawerTitle>
              </DrawerHeader>
              <div className="grid grid-cols-1 md:grid-cols-4 justify-between gap-8 py-8 md:py-12 px-4">
                {RESUME_DATA.contact.email ? (
                  <Button asChild>
                    <a href={`mailto:${RESUME_DATA.contact.email}`}>
                      <MailIcon className="size-4" />
                      <span className="ml-2">Email</span>
                    </a>
                  </Button>
                ) : null}
                {RESUME_DATA.contact.social.map((social) => (
                  <Button key={social.name} asChild>
                    <a href={social.url} target="_blank" rel="noreferrer">
                      <social.icon className="size-4" />
                      <span className="ml-2">{social.name}</span>
                    </a>
                  </Button>
                ))}
              </div>
              <DrawerFooter>
                <DrawerClose asChild>
                  <Button variant="outline">Close</Button>
                </DrawerClose>
              </DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer>
      );
    },
    featured: true,
  },
];

const Pricing = () => {
  return (
    <HeroSection className="w-full flex flex-col gap-8">
      <HeroTitle>Pricing</HeroTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-between">
        {pricingData.map((data, index) => {
          const Container = data.featured ? BackgroundGradient : "div";

          return (
            <Container
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={index}
              className={cn("rounded-[22px] dark:bg-zinc-900 h-full", {
                "bg-muted": !data.featured,
                "bg-white": data.featured,
              })}
            >
              <Card className="flex flex-col gap-4 bg-transparent border-0 h-full">
                <CardHeader>
                  <CardTitle className="text-lg font-bold">{data.plan}</CardTitle>
                  <CardDescription className="text-muted-foreground">{data.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid grid-cols-1 gap-2">
                    {data.features.map((feature, index) => (
                      // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                      <li key={index} className="flex gap-2 items-center">
                        <data.featuresIcon
                          className={cn("min-w-5 min-h-5 fill-foreground", {
                            "fill-green-400": data.featured,
                            "fill-muted-foreground": !data.featured,
                          })}
                          weight={data.featured ? "bold" : "regular"}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="h-full w-full justify-self-end flex flex-col justify-end">{data?.footer?.()}</CardFooter>
              </Card>
            </Container>
          );
        })}
      </div>
    </HeroSection>
  );
};

export default Pricing;
