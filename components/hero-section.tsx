"use client"

import { useState } from "react"
import { Github, Linkedin, Mail } from "lucide-react"

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) / 12
    const y = (e.clientY - rect.top - rect.height / 2) / 12
    setMousePosition({ x, y })
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    setMousePosition({ x: 0, y: 0 })
  }

  return (
    <section className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-24 pb-16 relative overflow-hidden">
      {/* Background dot grid */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      {/* Ambient glows */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-accent/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl w-full mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-10 md:gap-14 lg:gap-20 items-center">

          {/* ─── Left Column: Photo + Social Links ─── */}
          <div className="flex flex-col items-center">
            {/* Interactive Profile Photo */}
            <div
              className="relative w-52 h-52 sm:w-60 sm:h-60 md:w-64 md:h-64 lg:w-72 lg:h-72 cursor-pointer flex-shrink-0"
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-border/60 shadow-xl transition-transform duration-300 ease-out"
                style={{
                  transform: isHovering
                    ? `perspective(800px) rotateY(${mousePosition.x}deg) rotateX(${-mousePosition.y}deg) scale(1.03)`
                    : "perspective(800px) rotateY(0deg) rotateX(0deg) scale(1)",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${basePath}/images/profile.jpg`}
                  alt="Krishna Gelra"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              {isHovering && (
                <div className="absolute -inset-3 rounded-2xl bg-accent/10 blur-2xl -z-10 animate-pulse" />
              )}
            </div>

            {/* Social Links — below photo */}
            <div className="flex items-center gap-2 mt-6">
              <a
                href="https://linkedin.com/in/krishna-gelra"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-secondary/80 hover:bg-accent hover:text-accent-foreground transition-all duration-200 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-[18px] h-[18px]" />
              </a>
              <a
                href="https://github.com/KrishnaG-101"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-secondary/80 hover:bg-accent hover:text-accent-foreground transition-all duration-200 hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-[18px] h-[18px]" />
              </a>
              <a
                href="mailto:krishnagelra18@gmail.com"
                className="p-2.5 rounded-lg bg-secondary/80 hover:bg-accent hover:text-accent-foreground transition-all duration-200 hover:scale-110"
                aria-label="Email"
              >
                <Mail className="w-[18px] h-[18px]" />
              </a>
            </div>
          </div>

          {/* ─── Right Column: Text Content ─── */}
          <div>
            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-2 leading-[1.1]">
              Krishna{" "}
              <span className="text-accent">Gelra</span>
            </h1>

            {/* Title */}
            <div className="flex items-center gap-2 mb-7">
              <p className="text-sm sm:text-base text-muted-foreground font-medium tracking-widest uppercase">
                Data Scientist & AI/ML Engineer
              </p>
            </div>

            {/* Description */}
            <div className="space-y-3.5 text-muted-foreground leading-relaxed text-[15px]">
              <p>
                I turn raw data into actionable insights and build intelligent systems
                that learn, predict, and automate. From training neural networks to deploying
                production ML pipelines — I make data do the heavy lifting so humans can
                take the credit.
              </p>
              <p>
                Passionate about Generative AI, deep learning, and building end-to-end
                data solutions. Currently exploring the frontiers of LLMs, RAG systems,
                and the art of making models that actually generalize (instead of just
                memorizing the training set like it{"'"}s an exam).
              </p>
              <p className="text-sm italic text-muted-foreground/60 border-l-2 border-accent/30 pl-4">
                {"\""}My code compiles on the first try{"\""} — said no one ever. But my models
                converge... eventually. I{"'"}ve debugged more hidden bugs than a pest control
                company.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}