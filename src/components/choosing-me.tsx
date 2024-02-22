import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { opacityInViewVariants } from "@/constants/framerVariants";
import { MotionSection } from "@/lib/framer-motion";
import { cn } from "@/lib/utils";

const choosingData: { title: string; content: React.ReactNode }[] = [
  {
    title: "Innovative Web Developer and Entrepreneur",
    content: (
      <p>
        Expertise in leveraging cutting-edge technologies like <strong>TypeScript</strong>, <strong>Next.js</strong>, <strong>Node.js</strong>, and
        <strong>React</strong> to build scalable, efficient web applications. Passionate about Web3 and AI, with a focus on enhancing inbound organic
        traffic through innovative solutions.
      </p>
    ),
  },
  {
    title: "Proven Leadership in Tech",
    content: (
      <p>
        Experience leading projects and teams to success, highlighted by roles as <strong>CTO</strong> and <strong>lead developer</strong>.
        Demonstrates a keen ability to drive <strong>product development</strong>, <strong>team efficiency</strong>, and{" "}
        <strong>tech innovation</strong>.
      </p>
    ),
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
  },
  {
    title: "Results-Driven Project Management",
    content: (
      <p>
        Adept at managing all phases of the development lifecycle, ensuring projects meet deadlines, budgets, and quality standards. Experience in{" "}
        <strong>agile and scrum methodologies</strong> enhances team productivity and project outcomes.
      </p>
    ),
  },
  {
    title: "Continuous Learning and Adaptation",
    content: (
      <p>
        Committed to staying at the forefront of technology, continuously exploring new <strong>tools</strong> and <strong>methodologies</strong>.
        This adaptability ensures the delivery of modern, effective solutions that address current and <strong>future tech challenges</strong>.
      </p>
    ),
  },
  {
    title: "Global Perspective and Experience",
    content: (
      <p>
        With a rich background in <strong>international projects</strong> and <strong>collaborations</strong>, brings a unique global perspective to
        the table, enhancing the ability to innovate and compete on a <strong>worldwide scale</strong>.
      </p>
    ),
  },
];

interface IProps {
  className?: string;
}

const ChoosingMe = ({ className }: IProps) => {
  return (
    <MotionSection {...opacityInViewVariants} className="flex flex-col gap-8">
      <h2 className="text-4xl font-bold w-full text-center md:text-start">Our collaboration</h2>
      <Card className={cn("relative p-0 md:p-4 rounded bg-muted/80", className)}>
        <div className="absolute inset-0 dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] z-0" />
        <CardHeader className="z-10">
          <CardTitle>Why choosing me?</CardTitle>
          <CardDescription className="text-base">
            You've come to the right place. I'm <strong>Paul-louis</strong>, your next <strong>web development partner</strong>, specialized in
            crafting personalized digital solutions that catapult your business to new heights.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-base z-10">
          <ol className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-3 md:gap-3 lg:gap-8">
            {choosingData.map((data, index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              <li key={index} className="flex flex-col gap-4">
                <h3 className="text-lg font-bold">{data.title}</h3>
                <div className="text-muted-foreground">{data.content}</div>
              </li>
            ))}
          </ol>
        </CardContent>
      </Card>
    </MotionSection>
  );
};

export default ChoosingMe;
