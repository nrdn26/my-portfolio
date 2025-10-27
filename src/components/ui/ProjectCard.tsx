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
import { Github, Globe, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: readonly string[];
  githubUrl: string;
  liveUrl: string;
}

export function ProjectCard({
  title,
  description,
  tags,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  const isPlaceholder = githubUrl === "#" || liveUrl === "#";

  return (
    <Card className="group relative h-full overflow-hidden border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-950/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-300" />
      
      {/* Card Content */}
      <CardHeader className="relative z-10">
        <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
          {title}
        </CardTitle>
        <CardDescription className="text-gray-600 dark:text-gray-400 line-clamp-3">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="relative z-10">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge 
              key={tag} 
              variant="secondary"
              className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="relative z-10 mt-auto flex gap-3">
        {!isPlaceholder ? (
          <>
            <Button asChild variant="outline" size="sm" className="flex-1">
              <Link
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <Github className="h-4 w-4" />
                Code
              </Link>
            </Button>
            <Button asChild size="sm" className="flex-1">
              <Link
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </Link>
            </Button>
          </>
        ) : (
          <div className="flex w-full items-center justify-center rounded-md bg-gray-100 dark:bg-gray-800 px-4 py-2 text-sm text-gray-500 dark:text-gray-400">
            Coming Soon
          </div>
        )}
      </CardFooter>
    </Card>
  );
}