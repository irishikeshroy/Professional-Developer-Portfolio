"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid gap-8 md:grid-cols-2"
      >
        <div className="flex flex-col justify-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            About Me
          </h2>
          <p className="text-muted-foreground">
            I'm a Full Stack Developer with over 5 years of experience in building
            web applications. I specialize in React, Node.js, and Cloud
            Technologies, with a strong focus on creating scalable and maintainable
            solutions.
          </p>
          <p className="text-muted-foreground">
            My journey in tech started with a Computer Science degree, and I've
            since worked with various startups and enterprises, helping them build
            robust web applications and improve their development processes.
          </p>
          <div>
            <Button>
              <FileText className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative h-80 w-80 overflow-hidden rounded-full border-4 border-primary">
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
              alt="Profile picture"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}