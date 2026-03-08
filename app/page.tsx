import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { TechStackSection } from "@/components/tech-stack-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { AcademicSection } from "@/components/academic-section"
import { GitHubSection } from "@/components/github-section"
import { LinkedInSection } from "@/components/linkedin-section"
import { Footer } from "@/components/footer"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { BackToTop } from "@/components/back-to-top"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />

      <AnimateOnScroll>
        <ExperienceSection />
      </AnimateOnScroll>

      <AnimateOnScroll>
        <ProjectsSection />
      </AnimateOnScroll>

      <AnimateOnScroll>
        <TechStackSection />
      </AnimateOnScroll>

      <AnimateOnScroll>
        <AcademicSection />
      </AnimateOnScroll>

      <AnimateOnScroll>
        <GitHubSection />
      </AnimateOnScroll>

      <AnimateOnScroll>
        <LinkedInSection />
      </AnimateOnScroll>

      <AnimateOnScroll>
        <Footer />
      </AnimateOnScroll>

      <BackToTop />
    </main>
  )
}
