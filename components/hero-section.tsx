"use client"

import { useState } from "react"
import Image from "next/image"
import { Github, Linkedin, Mail, BrainCircuit } from "lucide-react"

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
    <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 pt-24 pb-16 relative overflow-hidden">
      {/* Subtle background grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />
      
      <div className="max-w-2xl mx-auto text-center relative z-10">
        {/* Interactive Profile Photo */}
        <div
          className="relative mx-auto mb-8 w-32 h-32 sm:w-40 sm:h-40 cursor-pointer"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="relative w-full h-full rounded-full overflow-hidden border-4 border-border shadow-lg transition-transform duration-200 ease-out"
            style={{
              transform: isHovering
                ? `perspective(1000px) rotateY(${mousePosition.x}deg) rotateX(${-mousePosition.y}deg) scale(1.05)`
                : "perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)",
            }}
          >
            <Image
              src="/images/profile.jpg"
              alt="Profile photo"
              fill
              className="object-cover"
              priority
            />
          </div>
          {isHovering && (
            <div className="absolute -inset-2 rounded-full bg-accent/20 blur-xl -z-10 animate-pulse" />
          )}
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-8">
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 sm:p-3 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-all duration-200 hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 sm:p-3 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-all duration-200 hover:scale-110"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <a
            href="mailto:your@email.com"
            className="p-2.5 sm:p-3 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-all duration-200 hover:scale-110"
            aria-label="Email"
          >
            <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </div>

        {/* Name and Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 text-balance">
          Your Name
        </h1>
        <div className="flex items-center justify-center gap-2 mb-6">
          <BrainCircuit className="w-5 h-5 text-accent" />
          <p className="text-base sm:text-lg text-accent font-medium">
            Data Scientist & AI/ML Engineer
          </p>
        </div>

        {/* Description */}
        <div className="space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
          <p>
            I turn raw data into actionable insights and build intelligent systems 
            that learn, predict, and automate. From training neural networks to deploying 
            production ML pipelines — I make data do the heavy lifting.
          </p>
          <p>
            Passionate about Generative AI, deep learning, and building end-to-end 
            data solutions. Currently exploring the frontiers of LLMs, RAG systems, 
            and the art of making models that actually generalize.
          </p>
          <p className="text-sm italic">
            Fun fact: I{"'"}ve spent more time tuning hyperparameters than my actual 
            guitar. At least gradient descent converges — eventually.
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="mt-12 sm:mt-16 animate-bounce">
          <div className="w-6 h-10 mx-auto rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
