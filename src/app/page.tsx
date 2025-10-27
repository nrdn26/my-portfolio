import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Github, Instagram, MessageSquare } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { ThemeToggle } from "@/components/ui/ThemeToggle";

export default function Home() {
  const projects = [
    {
      title: "Pacman-Game",
      description: "This was a group project for Multimedia",
      tags: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/nrdn26/PacManGame",
      liveUrl: "https://nrdn26.github.io/PacManGame",
    },
    {
      title: "Upcoming Android Project",
      description: "I will build an android app soon. Stay tuned!",
      tags: ["Kotlin", "Upcoming"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Upcoming Project (Rust)",
      description: "I will make use of Rust in one of my next projects.",
      tags: ["Rust", "Upcoming"],
      githubUrl: "#",
      liveUrl: "#",
    },
  ] as const;

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-black">
      {/* Glassmorphism Header */}
      <header className="fixed top-0 left-0 right-0 z-50 h-20 border-b bg-white/30 backdrop-blur-lg dark:bg-black/30">
        <div className="container mx-auto flex h-full items-center justify-between">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="#projects" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Projects
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#contact" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <ThemeToggle />
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section
          id="hero"
          className="relative pt-52 pb-32 text-center bg-[url('/assets/matrix.gif')] bg-cover bg-center"
        >
          <div className="absolute inset-0 bg-black opacity-70"></div>
          <div className="container mx-auto relative z-10">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Hello, I am Nuredin Bajrami
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-200">
              I'm a second year student at the Johannes Kepler University in
              Linz.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg">
                <Link href="#projects">View My Projects</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="#contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="container mx-auto py-24">
          <h2 className="mb-8 text-center text-3xl font-bold">
            My Projects
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                tags={project.tags}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
              />
            ))}
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="container mx-auto py-24">
          <h2 className="mb-8 text-center text-3xl font-bold">About Me</h2>
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 md:flex-row md:gap-12">
            <Avatar className="h-48 w-48">
              <AvatarImage
                src="/assets/Foto_NuredinBajrami.jpg"
                alt="Nuredin Bajrami"
                className="object-cover"
              />
              <AvatarFallback>NB</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-4 text-center text-lg text-zinc-600 dark:text-zinc-400 md:text-left">
              <p>
                Hello! I'm Nuredin Bajrami, a computer science aficionado based in Austria. My
                specialization is in computer networks, operating systems, cloud computing, and cybersecurity.
              </p>
              <p>
                My interest with the areas listed above started when I got my first server, 
                which was an old computer I got from High School. There I hosted a web server and game servers
                on headless Ubuntu. I'm currently hosting this website on my Proxmox ThinClient machine and
                multiple other services.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container mx-auto py-24">
          <h2 className="mb-8 text-center text-3xl font-bold">Get in Touch</h2>
          <p className="mx-auto mb-10 max-w-xl text-center text-lg text-zinc-600 dark:text-zinc-400">
            I'm always open to connecting. Feel free to reach out or check out my
            profiles.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Button asChild variant="outline" size="lg">
              <Link
                href="https://github.com/nrdn26"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="h-5 w-5" />
                GitHub
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link
                href="https://discordapp.com/users/481181876682227712"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageSquare className="h-5 w-5" />
                Discord
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link
                href="https://instagram.com/nrdn.brm"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Instagram className="h-5 w-5" />
                Instagram
              </Link>
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto text-center text-zinc-600 dark:text-zinc-400">
          <p>
            &copy; {new Date().getFullYear()} Nuredin Bajrami. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}