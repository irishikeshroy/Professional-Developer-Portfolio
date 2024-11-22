"use client"

import { motion } from "framer-motion"
import { Progress } from "@/components/ui/progress"

const skills = [
  { name: "React", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "Next.js", level: 88 },
  { name: "AWS", level: 80 },
  { name: "Docker", level: 75 },
]

const technologies = [
  "JavaScript",
  "HTML5",
  "CSS3",
  "Git",
  "MongoDB",
  "PostgreSQL",
  "Redis",
  "GraphQL",
  "REST APIs",
  "CI/CD",
  "Jest",
  "Cypress",
]

export function SkillsSection() {
  return (
    <section className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Skills & Technologies
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Core Skills</h3>
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-2 flex justify-between">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </motion.div>
            ))}
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-full bg-primary/10 px-3 py-1 text-sm"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}