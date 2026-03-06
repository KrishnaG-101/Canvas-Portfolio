"use client"

import { useState } from "react"
import Image from "next/image"
import { Github, Linkedin, Mail, BrainCircuit, Sparkles } from "lucide-react"

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) / 10
    const y = (e.clientY - rect.top - rect.height / 2) / 10
    setMousePosition({ x, y })
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    setMousePosition({ x: 0, y: 0 })
  }

  return (
    <section className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-24 pb-16 relative overflow-hidden">
      {/* Subtle background grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/3 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-6xl w-full mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center">
          
          {/* Left: Text Content */}
          <div className="order-2 lg:order-1">
            {/* Greeting tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span className="text-xs sm:text-sm font-medium text-accent">Available for collaborations</span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-3 leading-[1.1]">
              Krishna
              <br />
              <span className="text-accent">Gelra</span>
            </h1>

            {/* Title */}
            <div className="flex items-center gap-2.5 mb-8">
              <BrainCircuit className="w-5 h-5 text-accent" />
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-medium tracking-wide uppercase">
                Data Scientist & AI/ML Engineer
              </p>
            </div>

            {/* Description */}
            <div className="space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base max-w-xl">
              <p className="text-base sm:text-lg">
                I turn raw data into actionable insights and build intelligent systems 
                that learn, predict, and automate. From training neural networks to deploying 
                production ML pipelines — I make data do the heavy lifting so humans can take 
                the credit.
              </p>
              <p>
                Passionate about Generative AI, deep learning, and building end-to-end 
                data solutions. Currently exploring the frontiers of LLMs, RAG systems, 
                and the art of making models that actually generalize (instead of just 
                memorizing the training set like it{"'"}s an exam).
              </p>
              <p className="text-sm italic text-muted-foreground/70 border-l-2 border-accent/30 pl-4">
                {'"'}My code compiles on the first try{'"'} — said no one ever. But my models 
                converge... eventually. I{"'"}ve debugged more hidden bugs than a pest control 
                company. If you need someone who treats StackOverflow as scripture, I{"'"}m your guy.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 sm:gap-4 mt-10">
              <a
                href="https://linkedin.com/in/krishna-gelra"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-2.5 rounded-lg bg-secondary hover:bg-accent hover:text-accent-foreground transition-all duration-200 hover:scale-105 text-sm font-medium"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
              <a
                href="https://github.com/KrishnaG-101"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-2.5 rounded-lg bg-secondary hover:bg-accent hover:text-accent-foreground transition-all duration-200 hover:scale-105 text-sm font-medium"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
                <span className="hidden sm:inline">GitHub</span>
              </a>
              <a
                href="mailto:krishnagelra@gmail.com"
                className="group flex items-center gap-2 px-4 py-2.5 rounded-lg bg-secondary hover:bg-accent hover:text-accent-foreground transition-all duration-200 hover:scale-105 text-sm font-medium"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
                <span className="hidden sm:inline">Say Hello</span>
              </a>
            </div>
          </div>

          {/* Right: Interactive Profile Photo */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div
              className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-72 lg:h-72 cursor-pointer"
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-border shadow-2xl transition-transform duration-200 ease-out"
                style={{
                  transform: isHovering
                    ? `perspective(1000px) rotateY(${mousePosition.x}deg) rotateX(${-mousePosition.y}deg) scale(1.05)`
                    : "perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)",
                }}
              >
                <Image
                  src="/images/profile.jpg"
                  alt="Krishna Gelra — Data Scientist & AI/ML Engineer"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {isHovering && (
                <div className="absolute -inset-3 rounded-2xl bg-accent/15 blur-2xl -z-10 animate-pulse" />
              )}
              {/* Decorative floating elements */}
              <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-accent/20 blur-sm animate-bounce" style={{ animationDelay: '0.5s' }} />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-accent/15 blur-sm animate-bounce" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 sm:mt-20 flex justify-center animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
