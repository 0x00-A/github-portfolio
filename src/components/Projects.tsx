import Link from "next/link";
import { cn } from "@/lib/utils";

import { ExternalLink } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    title: "Real-Time Pong Game Platform",
    description:
      "A real-time multiplayer gaming platform built with React, TypeScript, Django, and WebSockets.",
    tech: [
      "React",
      "TypeScript",
      "Django",
      "WebSockets",
      "Docker",
      "Nginx",
      "PostgreSQL",
    ],
    link: "https://github.com/0x00-A/ft_transcendence_42",
  },
  {
    title: "IRC Server",
    description:
      "A custom IRC server built from scratch, implementing low-level networking, event-driven architecture, and RFC-compliant messaging.",
    tech: ["C++", "Networking", "TCP/IP", "Event-Driven Architecture"],
    link: "https://github.com/0x00-A/ircserv_42",
  },
  {
    title: "Inception",
    description:
      "A fully containerized development environment using Docker, featuring Nginx, MariaDB, and WordPress.",
    tech: ["Docker", "Nginx", "MariaDB", "WordPress", "Bash"],
    link: "https://github.com/0x00-A/inception_42",
  },
  {
    title: "Cub3D",
    description:
      "A basic 3D game engine inspired by Wolfenstein 3D, featuring raycasting, texture mapping, and collision detection.",
    tech: ["C", "Raycasting", "Graphics Programming", "Game Development"],
    link: "https://github.com/0x00-A/cub3d_42",
  },
  {
    title: "MiniShell",
    description:
      "A custom shell that handles command parsing, pipes, redirections, job control, and signal handling.",
    tech: ["C", "Linux", "System Programming", "Shell Scripting"],
    link: "https://github.com/0x00-A/minishell_42",
  },
  {
    title: "Philosophers",
    description:
      "A multi-threaded simulation of the Dining Philosophers Problem, showcasing concurrency management and deadlock prevention.",
    tech: ["C", "Threads", "Mutex", "Concurrency"],
    link: "https://github.com/0x00-A/philosophers_42",
  },
  {
    title: "Fractol",
    description:
      "A fractal rendering program that generates and visualizes complex mathematical fractals like Mandelbrot and Julia sets.",
    tech: ["C", "Mathematics", "Graphics Programming"],
    link: "https://github.com/0x00-A/fractol_42",
  },
  {
    title: "Push Swap",
    description:
      "A stack-based sorting algorithm implementing efficient sorting operations with performance benchmarking.",
    tech: ["C", "Algorithms", "Sorting", "Data Structures"],
    link: "https://github.com/0x00-A/push_swap_42",
  },
  {
    title: "Born2BeRoot",
    description:
      "A system administration project focused on virtualization, security policies, and Linux server configuration.",
    tech: ["Linux", "System Administration", "Networking", "Security"],
    link: "https://github.com/0x00-A/born2beRoot",
  },
];

const techColors = {
  React: "bg-blue-500",
  TypeScript: "bg-blue-600",
  Django: "bg-green-700",
  WebSockets: "bg-gray-500",
  Docker: "bg-blue-400",
  Nginx: "bg-green-600",
  PostgreSQL: "bg-blue-700",
  C: "bg-gray-400",
  "C++": "bg-blue-800",
  Networking: "bg-yellow-600",
  "TCP/IP": "bg-indigo-600",
  "Event-Driven Architecture": "bg-purple-500",
  MariaDB: "bg-blue-900",
  WordPress: "bg-blue-600",
  Bash: "bg-green-500",
  Raycasting: "bg-red-500",
  "Graphics Programming": "bg-yellow-400",
  "Game Development": "bg-red-400",
  Linux: "bg-yellow-500",
  "System Programming": "bg-red-700",
  "Shell Scripting": "bg-yellow-400",
  Threads: "bg-green-700",
  Mutex: "bg-red-800",
  Concurrency: "bg-teal-600",
  Mathematics: "bg-red-600",
  "Data Structures": "bg-orange-500",
  Sorting: "bg-blue-500",
  Algorithms: "bg-purple-600",
  Security: "bg-red-500",
  "System Administration": "bg-teal-500",
  Virtualization: "bg-brown-600",
};

export const Projects = () => {
  return (
    <>
      <h2 className="text-xl font-bold mb-4">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {projects.map((p, i) => (
          <Card key={i}>
            <CardContent className="pt-6 h-full">
              <div className="flex flex-col h-full">
                <Link
                  href={p.link}
                  className="font-semibold text-primary hover:underline"
                >
                  {p.title}
                </Link>
                <p className="text-sm text-muted-foreground mt-1 mb-4">
                  {p.description}
                </p>
                <div className="mt-auto flex items-end justify-between">
                  <div className="flex flex-col max-w-28 items-start justify-start gap-1">
                    {p.tech.map((t: string, idx: number) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div
                          className={cn(
                            "size-4 rounded-full",
                            techColors[t as keyof typeof techColors]
                          )}
                        />
                        <span className="text-xs font-medium text-muted-foreground">
                          {t}
                        </span>
                      </div>
                    ))}
                  </div>
                  <Link
                    href={p.link}
                    className="flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    View Project
                    <ExternalLink className="inline-block size-3" />
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};
