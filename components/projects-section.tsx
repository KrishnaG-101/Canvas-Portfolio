"use client"

import { useState } from "react"
import { ExternalLink, Github, X, ChevronRight, Star, GitFork } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  technologies: string[]
  githubUrl: string
  liveUrl?: string
  stars: number
  forks: number
  role: "author" | "contributor"
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "AI Medical Expert",
    description: "AI-powered medical expert system for intelligent health diagnostics and recommendations",
    longDescription: "AI Medical Expert is an intelligent diagnostic assistant built with Python. It leverages machine learning and NLP techniques to analyze symptoms, suggest possible conditions, and provide health recommendations. The system is designed to assist — not replace — medical professionals by offering quick preliminary analysis based on trained models. Licensed under MIT.",
    technologies: ["Python", "Machine Learning", "NLP", "AI"],
    githubUrl: "https://github.com/KrishnaG-101/AI-Medical-Expert",
    stars: 0,
    forks: 0,
    role: "author",
  },
  {
    id: 2,
    title: "Forest Fire Detection",
    description: "Deep learning-based system to detect forest fires from satellite and aerial imagery",
    longDescription: "A deep learning project that uses Convolutional Neural Networks to detect and classify forest fires from satellite and aerial imagery. Built entirely in Jupyter Notebooks, the project covers the full ML pipeline — from data preprocessing and augmentation to model training, evaluation, and visualization. Uses transfer learning techniques to achieve high accuracy with limited training data. Licensed under MIT.",
    technologies: ["Jupyter Notebook", "Python", "Deep Learning", "CNN", "Computer Vision"],
    githubUrl: "https://github.com/KrishnaG-101/Forest-Fire-Detection-using-Deep-Learning",
    stars: 1,
    forks: 0,
    role: "author",
  },
  {
    id: 3,
    title: "CoderHigh",
    description: "Community website for Coder's High — a coding community platform",
    longDescription: "Coder's High is a community-driven platform and website built to connect developers, share knowledge, and foster collaborative learning. As a contributor to the project (originally by sudarshansudarshan), Krishna helps build and maintain the website using SCSS for styling, HTML for structure, and Shell/Ruby scripts for tooling. The project has 7 forks and an active contributor base.",
    technologies: ["SCSS", "HTML", "Shell", "Ruby"],
    githubUrl: "https://github.com/sudarshansudarshan/codershigh",
    stars: 1,
    forks: 7,
    role: "contributor",
  },
  {
    id: 4,
    title: "Attendance Management",
    description: "Automated attendance tracking system using facial recognition with OpenCV",
    longDescription: "An automated attendance management system that uses facial recognition to identify and log student attendance in real-time. Built with Python and OpenCV's face recognition module, the system captures faces via webcam, matches them against a registered database, and records attendance with timestamps. Eliminates manual roll-calls and prevents proxy attendance. The project demonstrates practical application of computer vision in everyday scenarios.",
    technologies: ["Python", "OpenCV", "Face Recognition", "Computer Vision"],
    githubUrl: "https://github.com/KrishnaG-101/Attendance_Management_Using_Facial_Recognition",
    stars: 1,
    forks: 0,
    role: "author",
  },
]

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 sm:mb-12 gap-2">
          <h2 className="text-2xl font-semibold">Projects</h2>
          <span className="text-sm text-muted-foreground">
            Some things I{"'"}ve built
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer bg-card rounded-lg border border-border p-5 sm:p-6 transition-all duration-200 hover:border-accent hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-3 sm:mb-4">
                <div className="flex items-center gap-2 min-w-0">
                  <h3 className="text-base sm:text-lg font-medium group-hover:text-accent transition-colors truncate">
                    {project.title}
                  </h3>
                  {project.role === "contributor" && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-purple-500/10 text-purple-600 dark:text-purple-400 font-medium flex-shrink-0">
                      Contributor
                    </span>
                  )}
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all flex-shrink-0 ml-2" />
              </div>
              
              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                {project.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs px-2 py-1 rounded-full bg-secondary text-muted-foreground">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Stars & Forks */}
                <div className="flex items-center gap-3 text-xs text-muted-foreground flex-shrink-0 ml-3">
                  {project.stars > 0 && (
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5" />
                      <span>{project.stars}</span>
                    </div>
                  )}
                  {project.forks > 0 && (
                    <div className="flex items-center gap-1">
                      <GitFork className="w-3.5 h-3.5" />
                      <span>{project.forks}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-card border border-border rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-5 sm:p-6">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-2.5">
                    <h3 className="text-xl sm:text-2xl font-semibold">{selectedProject.title}</h3>
                    {selectedProject.role === "contributor" && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 font-medium">
                        Contributor
                      </span>
                    )}
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSelectedProject(null)}
                    className="h-8 w-8 flex-shrink-0"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed text-sm sm:text-base">
                  {selectedProject.longDescription}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-medium mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs sm:text-sm px-3 py-1 rounded-full bg-accent/10 text-accent"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Repo stats */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-1.5">
                    <Star className="w-4 h-4" />
                    <span>{selectedProject.stars} star{selectedProject.stars !== 1 ? "s" : ""}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <GitFork className="w-4 h-4" />
                    <span>{selectedProject.forks} fork{selectedProject.forks !== 1 ? "s" : ""}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button variant="outline" className="w-full">
                      <Github className="w-4 h-4 mr-2" />
                      View on GitHub
                    </Button>
                  </a>
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button className="w-full">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
