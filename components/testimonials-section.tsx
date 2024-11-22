"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO at TechStart",
    content:
      "John is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills are outstanding.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
  {
    name: "Michael Chen",
    role: "CTO at InnovateCo",
    content:
      "Working with John was a great experience. He brings both technical expertise and creative solutions to every project.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager at DevFlow",
    content:
      "John's ability to understand complex requirements and translate them into elegant solutions is remarkable. A true professional.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
  },
]

export function TestimonialsSection() {
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
          Testimonials
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <CardDescription>{testimonial.role}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{testimonial.content}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}