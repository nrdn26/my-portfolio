"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Github, Instagram, MessageSquare, ChevronDown, Mail, Linkedin } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { projects } from "../lib/projectsData";
import { useState, useEffect } from "react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Handle scroll events for header styling and section detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Detect active section
      const sections = ["hero", "projects", "about", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function for navigation
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Filter projects by status for display
  const displayProjects = projects.slice(0, 6); // Show first 6 projects

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-[#0a1a0a] transition-colors duration-500">
      {/* Enhanced Header with scroll effects */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "border-b border-gray-200/20 bg-white/80 backdrop-blur-xl dark:border-green-700/20 dark:bg-black/80 shadow-sm" 
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <nav className="flex h-16 items-center justify-between">
            {/* Logo/Name */}
            <div className="flex items-center">
              <Link 
                href="/" 
                className="text-xl font-bold bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent hover:from-green-500 hover:to-green-300 transition-all duration-300"
              >
                Nuredin.B
              </Link>
            </div>

            {/* Navigation Menu */}
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                {["projects", "about", "contact"].map((section) => (
                  <NavigationMenuItem key={section}>
                    <button
                      onClick={() => scrollToSection(section)}
                      className={`${navigationMenuTriggerStyle()} cursor-pointer capitalize ${
                        activeSection === section 
                          ? "text-green-600 dark:text-green-400" 
                          : "dark:text-gray-300"
                      }`}
                    >
                      {section}
                    </button>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="hidden md:inline-flex dark:text-green-400 dark:hover:text-green-300"
              >
                <Link
                  href="https://github.com/nrdn26"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <ThemeToggle />
            </div>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        {/* Enhanced Hero Section with Parallax Effect */}
        <section
          id="hero"
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
          {/* Animated Background Pattern */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" />
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-transparent to-green-50 dark:from-green-950/20 dark:to-green-950/20" />
          </div>

          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
          </div>

          {/* Hero Content */}
          <div className="container relative z-10 mx-auto px-4 py-32 text-center md:px-6">
            <div className="mx-auto max-w-4xl space-y-8">
              {/* Greeting */}
              <div className="animate-fade-in">
                <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300">
                  Welcome to my portfolio
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="animate-fade-in-delay text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-6xl md:text-7xl lg:text-8xl">
                Hi, I'm{" "}
                <span className="relative">
                  <span className="relative z-10 bg-gradient-to-r from-green-500 via-green-400 to-green-300 bg-clip-text text-transparent">
                    Nuredin
                  </span>
                  <span className="absolute bottom-2 left-0 right-0 h-4 bg-gradient-to-r from-green-200 to-green-300 dark:from-green-800 dark:to-green-900 opacity-50 blur-md" />
                </span>
              </h1>
              
              {/* Subtitle */}
              <p className="animate-fade-in-delay-2 text-xl text-gray-600 dark:text-green-200 sm:text-2xl md:text-3xl font-light">
                Computer Science Student
              </p>
              
              {/* Description */}
              <p className="animate-fade-in-delay-3 mx-auto max-w-2xl text-base text-gray-500 dark:text-green-300 md:text-lg">
                Passionate about operating systems, exploring cloud architectures, and computer networks. 
                Currently pursuing my degree at Johannes Kepler University while working on exciting projects.
              </p>

              {/* CTA Buttons */}
              <div className="animate-fade-in-delay-3 flex flex-col items-center justify-center gap-4 sm:flex-row pt-4">
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto group dark:bg-green-600 dark:text-black dark:hover:bg-green-700"
                >
                  <Link href="#projects">
                    Explore My Work
                    <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto dark:border-green-500 dark:text-green-400 dark:hover:bg-green-900/20 dark:hover:text-green-300"
                >
                  <Link href="/resume.pdf" target="_blank">
                    Download Resume
                  </Link>
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="animate-fade-in-delay-3 grid grid-cols-3 gap-4 pt-12 max-w-md mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 dark:text-green-400">{projects.filter(p => p.status === 'completed').length}+</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 dark:text-green-400">2nd</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Year at JKU</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 dark:text-green-400">5+</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Technologies</div>
                </div>
              </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
              <button 
                onClick={() => scrollToSection("projects")}
                className="animate-bounce p-2 rounded-full bg-white/10 backdrop-blur-sm border border-gray-200/20 dark:border-green-700/40 hover:bg-white/20 transition-colors"
                aria-label="Scroll to projects"
              >
                <ChevronDown className="h-6 w-6 text-gray-600 dark:text-green-400" />
              </button>
            </div>
          </div>
        </section>

        {/* Projects Section with Filter */}
        <section id="projects" className="py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-12 text-center">
              <span className="text-sm font-medium text-green-600 dark:text-green-400 uppercase tracking-wider">Portfolio</span>
              <h2 className="mt-2 mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-green-400 md:text-4xl lg:text-5xl">
                Featured Projects
              </h2>
              <p className="mx-auto max-w-2xl text-gray-600 dark:text-green-300">
                A selection of my work showcasing various technologies and problem-solving approaches. 
                Each project represents a unique learning experience.
              </p>
            </div>

            {/* Project Status Pills */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300">
                {projects.filter(p => p.status === 'completed').length} Completed
              </span>
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300">
                {projects.filter(p => p.status === 'in-progress').length} In Progress
              </span>
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-900/30 text-gray-800 dark:text-gray-300">
                {projects.filter(p => p.status === 'planned').length} Planned
              </span>
            </div>

            {/* Projects Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {displayProjects.map((project, index) => (
                <div 
                  key={project.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    tags={project.tags}
                    githubUrl={project.githubUrl}
                    liveUrl={project.liveUrl}
                  />
                </div>
              ))}
            </div>

            {/* View All Projects Link */}
            {projects.length > 6 && (
              <div className="mt-12 text-center">
                <Button variant="outline" size="lg" asChild className="dark:border-green-500 dark:text-green-400 dark:hover:bg-green-900/20 dark:hover:text-green-300">
                  <Link href="/projects">
                    View All Projects ({projects.length})
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Enhanced About Section with Timeline */}
        <section id="about" className="bg-gradient-to-b from-gray-50 to-white dark:from-black dark:to-[#0a1a0a] py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-12 text-center">
              <span className="text-sm font-medium text-green-600 dark:text-green-400 uppercase tracking-wider">About</span>
              <h2 className="mt-2 mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-green-400 md:text-4xl lg:text-5xl">
                Get to Know Me
              </h2>
            </div>

            <div className="mx-auto max-w-6xl">
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                {/* Image and Info Card */}
                <div className="order-2 lg:order-1">
                  <div className="relative group">
                    {/* Decorative Elements */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity" />
                    
                    <div className="relative bg-white dark:bg-gray-950 rounded-2xl p-8 shadow-xl">
                      <div className="flex flex-col items-center text-center">
                        <Avatar className="h-40 w-40 mb-6 ring-4 ring-white dark:ring-green-700/50 shadow-2xl">
                          <AvatarImage
                            src="/assets/Foto_NuredinBajrami.jpg"
                            alt="Nuredin Bajrami"
                            className="object-cover"
                          />
                          <AvatarFallback className="text-4xl font-bold">NB</AvatarFallback>
                        </Avatar>
                        
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-green-400 mb-2">
                          Nuredin Bajrami
                        </h3>
                        
                        <p className="text-gray-600 dark:text-green-300 mb-4">
                          Computer Science Student
                        </p>
                        
                        <div className="flex flex-wrap gap-2 justify-center mb-6">
                          <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300">
                            JKU Linz
                          </span>
                          <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300">
                            2nd Year
                          </span>
                          <span className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-900/30 text-gray-800 dark:text-gray-300">
                            Austria
                          </span>
                        </div>
                        
                        {/* Social Links */}
                        <div className="flex gap-3">
                          <Button variant="ghost" size="icon" asChild className="dark:text-green-400 dark:hover:text-green-300">
                            <Link href="https://github.com/nrdn26" target="_blank" rel="noopener noreferrer">
                              <Github className="h-5 w-5" />
                            </Link>
                          </Button>
                          <Button variant="ghost" size="icon" asChild className="dark:text-green-400 dark:hover:text-green-300">
                            <Link href="mailto:nuredin_2004@hotmail.com">
                              <Mail className="h-5 w-5" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bio and Journey */}
                <div className="order-1 lg:order-2 space-y-6">
                  <div className="prose prose-gray dark:prose-invert max-w-none">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-green-400 mb-4">
                      My Journey in Tech
                    </h3>
                    
                    <p className="text-gray-600 dark:text-green-300 leading-relaxed">
                      My passion for technology began with curiosity about how things work under the hood. 
                      What started as tinkering with old computers has evolved into a deep fascination with 
                      system architecture, network security, and cloud computing.
                    </p>
                    
                    <p className="text-gray-600 dark:text-green-300 leading-relaxed">
                      The turning point in my journey came when I transformed an old high school computer 
                      into my first server. Running headless Ubuntu, I learned system administration by 
                      hosting web servers and game servers. This hands-on experience taught me more than 
                      any textbook could.
                    </p>
                    
                    <p className="text-gray-600 dark:text-green-300 leading-relaxed">
                      Today, I maintain my own Proxmox infrastructure where I host this portfolio and 
                      experiment with various services. Every project is an opportunity to learn something 
                      new and push my boundaries.
                    </p>
                  </div>

                  {/* Skills Grid */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-green-400 mb-4">
                      Core Competencies
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {[
                        "Linux Systems",
                        "Cloud Computing",
                        "Network Security",
                        "Docker/K8s",
                        "Python/Rust",
                        "Infrastructure as Code"
                      ].map((skill) => (
                        <div
                          key={skill}
                          className="px-4 py-2 text-sm text-center rounded-lg bg-gray-100 dark:bg-green-950/50 text-gray-700 dark:text-green-300 border border-gray-200 dark:border-green-700/30"
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Current Focus */}
                  <div className="p-6 rounded-xl bg-green-50 dark:bg-green-950/40 border border-green-200 dark:border-green-700/50">
                    <h4 className="text-lg font-semibold text-green-900 dark:text-green-300 mb-2">
                      Currently Learning
                    </h4>
                    <p className="text-green-700 dark:text-green-200">
                      Diving deep into Kubernetes orchestration. Also exploring AI/ML 
                      applications in cybersecurity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section with Contact Form */}
        <section id="contact" className="py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-4xl">
              <div className="text-center mb-12">
                <span className="text-sm font-medium text-green-600 dark:text-green-400 uppercase tracking-wider">Contact</span>
                <h2 className="mt-2 mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-green-400 md:text-4xl lg:text-5xl">
                  Let's Build Something Together
                </h2>
                <p className="text-lg text-gray-600 dark:text-green-300">
                  Whether you have a project in mind, want to collaborate, or just want to say hi, 
                  I'd love to hear from you.
                </p>
              </div>

              {/* Contact Options */}
              <div className="grid gap-6 md:grid-cols-3 mb-12">
                <div className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-green-700/30">
                  <Mail className="h-8 w-8 mx-auto mb-3 text-green-600 dark:text-green-400" />
                  <h3 className="font-semibold text-gray-900 dark:text-green-400 mb-2">Email</h3>
                  <p className="text-sm text-gray-600 dark:text-green-500">nuredin_2004@hotmail.com</p>
                </div>
                
                <div className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-green-700/30">
                  <MessageSquare className="h-8 w-8 mx-auto mb-3 text-green-600 dark:text-green-400" />
                  <h3 className="font-semibold text-gray-900 dark:text-green-400 mb-2">Discord</h3>
                  <p className="text-sm text-gray-600 dark:text-green-500">@nrdn26</p>
                </div>
                
                <div className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-green-700/30">
                  <Github className="h-8 w-8 mx-auto mb-3 text-green-600 dark:text-green-400" />
                  <h3 className="font-semibold text-gray-900 dark:text-green-400 mb-2">GitHub</h3>
                  <p className="text-sm text-gray-600 dark:text-green-500">@nrdn26</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button asChild size="lg" className="group dark:bg-green-600 dark:text-black dark:hover:bg-green-700">
                  <Link
                    href="mailto:nuredin_2004@hotmail.com"
                    className="flex items-center gap-2"
                  >
                    <Mail className="h-5 w-5" />
                    Send Email
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Enhanced Footer */}
      <footer className="border-t border-gray-200 dark:border-green-700/30 bg-white dark:bg-black">
        <div className="container mx-auto px-4 py-12 md:px-6">
          <div className="grid gap-8 md:grid-cols-4">
            {/* Brand */}
            <div className="md:col-span-2">
              <h3 className="text-lg font-bold text-gray-900 dark:text-green-400 mb-2">
                Nuredin Bajrami
              </h3>
              <p className="text-sm text-gray-600 dark:text-green-300 mb-4">
                Computer Science Student passionate about systems, security, and scalable solutions.
              </p>
              <div className="flex gap-3">
                <Button variant="ghost" size="icon" asChild className="dark:text-green-400 dark:hover:text-green-300">
                  <Link href="https://github.com/nrdn26" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild className="dark:text-green-400 dark:hover:text-green-300">
                  <Link href="https://instagram.com/nrdn.brm" target="_blank" rel="noopener noreferrer">
                    <Instagram className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-green-400 mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button onClick={() => scrollToSection("projects")} className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-green-400 transition-colors">
                    Projects
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("about")} className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-green-400 transition-colors">
                    About
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("contact")} className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-green-400 transition-colors">
                    Contact
                  </button>
                </li>
                <li>
                  <Link href="/resume.pdf" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-green-400 transition-colors">
                    Resume
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-green-700/30">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600 dark:text-green-500">
              <div>
                © {new Date().getFullYear()} Nuredin Bajrami. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .bg-grid-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2316a34a' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          opacity: 0;
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}