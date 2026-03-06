"use client"

import { useState } from "react"
import { ExternalLink, Github, X, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  technologies: string[]
  githubUrl: string
  liveUrl?: string
  image: string
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "SentimentScope",
    description: "Real-time NLP sentiment analysis engine for social media and reviews",
    longDescription: "SentimentScope is an advanced NLP pipeline that performs real-time sentiment analysis on social media feeds and product reviews. Built with Hugging Face Transformers and served via FastAPI, it classifies sentiment with 94% accuracy across multiple languages. Features include aspect-based sentiment analysis, emotion detection, and a live dashboard for monitoring brand perception trends.",
    technologies: ["Python", "Transformers", "FastAPI", "PostgreSQL", "Redis", "Docker"],
    githubUrl: "https://github.com/yourusername/sentimentscope",
    liveUrl: "https://sentimentscope.demo.com",
    image: "/images/project-1.jpg",
  },
  {
    id: 2,
    title: "VisionAI",
    description: "Computer vision pipeline for automated defect detection in manufacturing",
    longDescription: "VisionAI is a production-grade computer vision system for automated quality inspection in manufacturing. Using PyTorch and a custom-trained YOLOv8 model, it detects surface defects with 97% precision at 30 FPS. The pipeline includes data augmentation, model versioning with MLflow, and a REST API for edge deployment. Reduced manual inspection time by 80% in pilot deployment.",
    technologies: ["PyTorch", "OpenCV", "YOLOv8", "MLflow", "Docker", "FastAPI"],
    githubUrl: "https://github.com/yourusername/visionai",
    image: "/images/project-2.jpg",
  },
  {
    id: 3,
    title: "PredictFlow",
    description: "End-to-end ML pipeline for customer churn prediction and retention",
    longDescription: "PredictFlow is a complete machine learning pipeline that predicts customer churn with 91% AUC-ROC. It automates feature engineering, model training, and deployment using Airflow for orchestration. The system processes 10M+ records daily, generates SHAP-based explanations for each prediction, and triggers retention campaigns via webhook integrations. Built with Scikit-learn, XGBoost, and deployed on AWS SageMaker.",
    technologies: ["Scikit-learn", "XGBoost", "Airflow", "Pandas", "AWS SageMaker", "SHAP"],
    githubUrl: "https://github.com/yourusername/predictflow",
    liveUrl: "https://predictflow.demo.com",
    image: "/images/project-3.jpg",
  },
  {
    id: 4,
    title: "ChatGenius",
    description: "GenAI-powered enterprise chatbot with RAG and knowledge base integration",
    longDescription: "ChatGenius is an enterprise-grade conversational AI assistant built with LangChain and OpenAI GPT-4. It implements Retrieval-Augmented Generation (RAG) using Pinecone vector store to ground responses in company documentation. Features include multi-turn conversation memory, citation tracking, document summarization, and a Django-based admin panel for knowledge base management. Handles 5000+ queries daily with 95% user satisfaction.",
    technologies: ["LangChain", "OpenAI", "Pinecone", "Django", "React", "Docker"],
    githubUrl: "https://github.com/yourusername/chatgenius",
    liveUrl: "https://chatgenius.demo.com",
    image: "/images/project-4.jpg",
  },
]

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 bg-secondary/30">
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
                <h3 className="text-base sm:text-lg font-medium group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all flex-shrink-0 ml-2" />
              </div>
              
              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                {project.description}
              </p>
              
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
                  <h3 className="text-xl sm:text-2xl font-semibold">{selectedProject.title}</h3>
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

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button variant="outline" className="w-full">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
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
