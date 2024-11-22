import { HeroSection } from '@/components/hero-section'
import { ProjectsSection } from '@/components/projects-section'
import { AboutSection } from '@/components/about-section'
import { SkillsSection } from '@/components/skills-section'
import { ContactSection } from '@/components/contact-section'
import { TestimonialsSection } from '@/components/testimonials-section'

export default function Home() {
  return (
    <div className="space-y-24 pb-8">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  )
}