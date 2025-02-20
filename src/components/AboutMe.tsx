"use client";
import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher";
import useMediaQuery from "@/hook/useMediaQuery";

export const AboutMe = () => {
  const isDesktopOrLaptop = useMediaQuery("(min-width: 1224px)");
  return (
    <Card className="mb-6">
      <CardHeader className="flex flex-row justify-between items-baseline">
        <CardTitle>About Me</CardTitle>
        {isDesktopOrLaptop && <ThemeSwitcher />}
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          {/* Write 1-2 sentences about yourself */}I am a passionate software
          developer who loves building web applications, from frontend
          interfaces to backend systems. I enjoy working with technologies like
          React, TypeScript, Next.js, and Django to create scalable and
          user-friendly experiences. Always eager to learn and improve, I am
          currently diving deeper into Next.js and modern web development.
        </p>
      </CardContent>
    </Card>
  );
};
