"use client"

import { Briefcase, Calendar } from "lucide-react"

interface Experience {
  id: number
  role: string
  company: string
  location: string
  period: string
  type: "full-time" | "internship" | "freelance" | "community"
  highlights: string[]
}

const EXPERIENCES: Experience[] = [
  {
    id: 1,
    role: "Microsoft Elevate — Copilot Intern",
    company: "Microsoft",
    location: "Remote",
    period: "Jan 2026 — Present",
    type: "internship",
    highlights: [
      "Building intelligent copilot experiences using Azure AI services and Microsoft 365 Copilot platform",
      "Developing AI-powered automation workflows leveraging LLMs and prompt engineering",
      "Collaborating with cross-functional teams to integrate copilot capabilities into enterprise products",
    ],
  },
  {
    id: 2,
    role: "Microsoft Elevate — Azure Intern",
    company: "Microsoft",
    location: "Remote",
    period: "Jan 2026 — Present",
    type: "internship",
    highlights: [
      "Deploying machine learning models on Azure cloud infrastructure for production workloads",
      "Working with Azure AI services, Cognitive Services, and Azure Machine Learning Studio",
      "Gaining hands-on experience with cloud architecture and scalable ML pipeline deployment",
    ],
  },
  {
    id: 3,
    role: "Community Member & Event Attendee",
    company: "GDG Indore / Machine Learning Indore",
    location: "Indore, India",
    period: "2025 — Present",
    type: "community",
    highlights: [
      "Active participant in Build with AI Indore workshop series focused on hands-on ML and GenAI",
      "Engaged with the GDG and Machine Learning Indore community for knowledge sharing",
      "Contributing to open-source projects and community-driven development initiatives",
    ],
  },
  {
    id: 4,
    role: "Student Developer",
    company: "Ambixous / Student Nexus Hyderabad",
    location: "India",
    period: "2024 — Present",
    type: "community",
    highlights: [
      "Active member of student tech communities focused on AI/ML, web development, and innovation",
      "Participating in hackathons, coding competitions, and collaborative project building",
    ],
  },
]

const TYPE_BADGE: Record<string, string> = {
  "full-time": "bg-accent/10 text-accent",
  "internship": "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  "freelance": "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  "community": "bg-purple-500/10 text-purple-600 dark:text-purple-400",
}

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 sm:py-20 px-4 sm:px-6 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 sm:mb-12 gap-2">
          <h2 className="text-2xl font-semibold">Experience</h2>
          <span className="text-sm text-muted-foreground">
            Where I{"'"}ve applied my skills
          </span>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-5 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8 sm:space-y-10">
            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="relative pl-10 sm:pl-14">
                {/* Timeline dot */}
                <div className="absolute left-2.5 sm:left-3.5 top-1.5 w-3 h-3 rounded-full bg-accent border-2 border-background shadow-sm" />

                <div className="bg-card border border-border rounded-lg p-5 sm:p-6 transition-all duration-200 hover:border-accent/50 hover:shadow-md">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-4 mb-3">
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold">{exp.role}</h3>
                      <p className="text-muted-foreground text-sm">
                        {exp.company} · {exp.location}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium capitalize ${TYPE_BADGE[exp.type]}`}>
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-4">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>

                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
