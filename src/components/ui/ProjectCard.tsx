// src/components/ui/ProjectCard.tsx

import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Globe } from "lucide-react";

type ProjectCardProps = {
  title: string;
  description: string;
  tags: readonly string[];
  githubUrl: string;
  liveUrl: string;
};

export function ProjectCard({
  title,
  description,
  tags,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  return (
    // --- THIS IS THE FIX ---
    // Changed p-0 back to p-6 to restore the content padding
    <Card className="relative flex h-full flex-col justify-between bg-transparent p-6 rounded-xl">
      
      {/* Inner Div: Contains background, overlay, and handles overflow/border */}
      <div className="absolute inset-0 rounded-xl overflow-hidden border-2 border-white/20">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('/assets/matrix.gif')] bg-cover bg-center"></div>
        {/* Glass overlay with blur */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
      </div>

      {/* Content: All content now sits on top of the inner div's layers */}
      {/* These components have their own negative margins to align with the parent's p-6 */}
      <CardHeader className="relative z-10 border-none bg-transparent">
        <CardTitle className="text-white">{title}</CardTitle>
        <CardDescription className="text-zinc-200">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="relative z-10 bg-transparent">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="relative z-10 flex justify-start gap-4 bg-transparent">
        <Button asChild variant="secondary" size="sm">
          <Link
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <Github className="h-4 w-4" />
            GitHub
          </Link>
        </Button>
        <Button asChild variant="secondary" size="sm">
          <Link
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <Globe className="h-4 w-4" />
            Live Demo
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}