import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface Props {
  title: string;
  description: string;
  tags: readonly string[];
  link?: string;
  decommissioned?: boolean;
}

export function ProjectCard({ title, description, tags, link, decommissioned }: Props) {
  return (
    <Card className="flex flex-col overflow-hidden border border-muted">
      <CardHeader>
        <div className="flex flex-col gap-2">
          <CardTitle className="text-base">
            {link && !decommissioned ? (
              <a href={link} target="_blank" className="inline-flex items-center gap-1 hover:underline" rel="noreferrer">
                {title} <span className="size-1 rounded-full bg-green-500" />
              </a>
            ) : link && decommissioned ? (
              <span className="inline-flex items-center gap-1 text-muted-foreground cursor-not-allowed" title="This project has been decommissioned">
                {title} <span className="size-1 rounded-full bg-red-500" />
              </span>
            ) : (
              title
            )}
          </CardTitle>
          <div className="hidden font-mono text-xs underline print:visible">{link?.replace("https://", "").replace("www.", "").replace("/", "")}</div>
          <CardDescription className="font-mono text-xs">{description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex">
        <div className="flex flex-wrap gap-1">
          {tags.map((tag) => (
            <Badge className="px-1 py-0 text-[10px]" variant="secondary" key={tag}>
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
