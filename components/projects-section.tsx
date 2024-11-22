"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with real-time inventory management",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c",
    technologies: ["Next.js", "TypeScript", "Prisma", "Stripe"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "AI Content Generator",
    description: "An AI-powered content generation tool for marketers",
    image: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d",
    technologies: ["Python", "FastAPI", "React", "OpenAI"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Featured Projects
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <div className="relative h-48 w-full overflow-hidden rounded-lg">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardTitle className="mt-4">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="default">View Demo</Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl">
                      <DialogHeader>
                        <DialogTitle>{project.title}</DialogTitle>
                        <DialogDescription>
                          Live preview of the project
                        </DialogDescription>
                      </DialogHeader>
                      <div className="aspect-video w-full">
                        <iframe
                          src={project.demoUrl}
                          className="h-full w-full rounded-lg border"
                          title={project.title}
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                  <Button variant="outline" asChild>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Source Code
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}