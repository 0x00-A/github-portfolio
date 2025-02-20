import Image from "next/image";

import { CalendarDays } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

import { JobImages } from "@/components/JobImages";

const jobs = [
  {
    role: "Software engineer", // TODO: Replace with actual role
    company: "1337 Coding School", // TODO: Replace with actual company name
    logo: "/company.svg", // TODO: Replace with actual logo
    duration: "2022 - Present",
    description:
      "Developed full-stack applications with React, TypeScript, Django, and WebSockets. Designed a real-time chat platform, a custom Nginx-inspired web server, and a 3D game engine. Engineered networking solutions, optimized algorithms, and managed Linux systems with Docker and CI/CD automation.",
    link: "https://1337.ma/en/",
    images: [],
  },
];

export const Experience = () => {
  return (
    <>
      <h2 className="text-xl font-bold mb-4 text-black dark:text-white">
        Work Experience
      </h2>
      <Card>
        <CardContent className="pt-6">
          <ul className="space-y-8">
            {jobs.map((j, i) => (
              <li key={i} className="border-b last:border-b-0 pb-8 last:pb-0">
                {/* Job Details */}
                <div className="flex items-center space-x-4">
                  <Image
                    src={j.logo}
                    alt={j.company}
                    width={40}
                    height={40}
                    className="rounded-md border shadow-md object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{j.role}</h3>
                    <p className="text-sm text-muted-foreground">{j.company}</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-2 flex items-center">
                  <CalendarDays className="size-3 mr-2" />
                  {j.duration}
                </p>
                <p className="text-sm mt-2">{j.description}</p>
                {/* Job Images */}
                <JobImages
                  role={j.role}
                  link={j.link}
                  images={j.images}
                  duration={j.duration}
                />
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </>
  );
};
