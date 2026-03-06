import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { TechStackSection } from "@/components/tech-stack-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { AcademicSection } from "@/components/academic-section"
import { GitHubSection } from "@/components/github-section"
import { LinkedInSection } from "@/components/linkedin-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <TechStackSection />
      <ExperienceSection />
      <ProjectsSection />
      <AcademicSection />
      <GitHubSection />
      <LinkedInSection />
      <Footer />
    </main>
  )
}
