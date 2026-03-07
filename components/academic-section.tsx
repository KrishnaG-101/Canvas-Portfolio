"use client"

import { GraduationCap, Award } from "lucide-react"

interface Education {
  id: number
  degree: string
  institution: string
  location: string
  period: string
  grade?: string
  coursework: string[]
  icon: "graduation" | "award"
}

const EDUCATION: Education[] = [
  {
    id: 1,
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Sri Aurobindo Institute of Technology",
    location: "Indore, India",
    period: "2022 — 2026",
    coursework: [
      "Machine Learning",
      "Deep Learning",
      "Data Structures & Algorithms",
      "Statistics & Probability",
      "Natural Language Processing",
      "Computer Vision",
      "Database Management Systems",
      "Linear Algebra",
    ],
    icon: "graduation",
  },
]

const CERTIFICATIONS = [
  "Microsoft Elevate — Copilot Internship Program",
  "Microsoft Elevate — Azure Internship Program",
  "Build with AI Indore — Workshop Series (GDG Indore)",
]

const IconMap = {
  graduation: GraduationCap,
  award: Award,
}

export function AcademicSection() {
  return (
    <section id="academic" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 sm:mb-12 gap-2">
          <h2 className="text-2xl font-semibold">Academic Background</h2>
          <span className="text-sm text-muted-foreground">
            Education & certifications
          </span>
        </div>

        {/* Education + Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Education Cards */}
          {EDUCATION.map((edu) => {
            const Icon = IconMap[edu.icon]
            return (
              <div
                key={edu.id}
                className="bg-card border border-border rounded-lg p-5 sm:p-6 transition-all duration-200 hover:border-accent/50 hover:shadow-md"
              >
                <div className="flex items-start gap-3 sm:gap-4 mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm sm:text-base font-semibold leading-tight">{edu.degree}</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm mt-1">{edu.institution}</p>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1.5">
                      <span className="text-xs text-muted-foreground">{edu.period}</span>
                      {edu.grade && (
                        <span className="text-xs font-medium text-accent">{edu.grade}</span>
                      )}
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-medium text-muted-foreground mb-2.5">Key Coursework</p>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.coursework.map((course) => (
                      <span
                        key={course}
                        className="text-xs px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}

          {/* Certifications — same card style as education for consistency */}
          <div className="bg-card border border-border rounded-lg p-5 sm:p-6 transition-all duration-200 hover:border-accent/50 hover:shadow-md">
            <div className="flex items-start gap-3 sm:gap-4 mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Award className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
              </div>
              <div className="min-w-0">
                <h3 className="text-sm sm:text-base font-semibold leading-tight">Certifications & Programs</h3>
                <p className="text-muted-foreground text-xs sm:text-sm mt-1">Industry recognized credentials</p>
              </div>
            </div>

            <ul className="space-y-2.5">
              {CERTIFICATIONS.map((cert, index) => (
                <li key={index} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 flex-shrink-0" />
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
