"use client"

import { useState } from "react"
import { BrainCircuit, Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <footer className="py-16 sm:py-20 px-4 sm:px-6 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-3">Let{"'"}s Connect</h2>
        <p className="text-sm text-muted-foreground text-center mb-8 sm:mb-12 italic">
          I promise I respond faster than my models train. Usually.
        </p>

        {/* Business Card */}
        <div
          className="relative w-full aspect-[1.8/1] max-h-[300px] cursor-pointer mx-auto"
          onClick={() => setIsFlipped(!isFlipped)}
          style={{ perspective: "1200px" }}
        >
          <div
            className="relative w-full h-full transition-transform duration-700"
            style={{
              transformStyle: "preserve-3d",
              transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
            }}
          >
            {/* ─── Front ─── */}
            <div
              className="absolute inset-0 bg-card border-2 border-border rounded-xl shadow-lg overflow-hidden"
              style={{ backfaceVisibility: "hidden" }}
            >
              <div className="h-full flex flex-col justify-between p-5 sm:p-8 md:p-10">
                {/* Top row */}
                <div className="flex items-start justify-between gap-4">
                  <a
                    href="mailto:krishnagelra@gmail.com"
                    onClick={(e) => e.stopPropagation()}
                    className="text-[11px] sm:text-xs md:text-sm text-muted-foreground hover:text-accent transition-colors tracking-wide break-all"
                  >
                    krishnagelra@gmail.com
                  </a>
                  <div className="text-right flex-shrink-0">
                    <p className="text-[9px] sm:text-[10px] text-muted-foreground tracking-[0.15em] uppercase mt-0.5">
                      Data Science & Engineering
                    </p>
                  </div>
                </div>

                {/* Center — name + title */}
                <div className="text-center">
                  <h3 className="text-xl sm:text-3xl md:text-4xl font-bold tracking-wider">
                    <span className="font-normal">Krishna Gelra</span>
                  </h3>
                  <p className="text-xs sm:text-sm tracking-[0.2em] uppercase text-muted-foreground mt-1 sm:mt-2">
                    Data Scientist & AI/ML Engineer
                  </p>
                </div>

                {/* Bottom row */}
                <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 sm:gap-x-6 text-[10px] sm:text-xs text-muted-foreground tracking-wide">
                  <span>Indore, India</span>
                  <span className="hidden sm:inline text-border">|</span>
                  <span className="break-all">github.com/KrishnaG-101</span>
                  <span className="hidden sm:inline text-border">|</span>
                  <span>linkedin.com/in/krishna-gelra</span>
                </div>
              </div>
            </div>

            {/* ─── Back ─── */}
            <div
              className="absolute inset-0 bg-card border-2 border-border rounded-xl shadow-lg overflow-hidden"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >
              <div className="h-full flex flex-col justify-between p-5 sm:p-8 md:p-10">
                {/* Top — icon */}
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto rounded-full border border-border flex items-center justify-center">
                    <BrainCircuit className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />
                  </div>
                </div>

                {/* Center — tagline */}
                <div className="text-center max-w-sm mx-auto px-2">
                  <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    Turning data into decisions, coffee into code,
                    <br />
                    and bugs into {"'"}features.{"'"}
                  </p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground/60 mt-2 italic">
                    Open for collaborations in AI/ML, Data Science & GenAI.
                  </p>
                </div>

                {/* Bottom — social links */}
                <div className="flex items-center justify-center gap-4 sm:gap-8">
                  <a
                    href="https://github.com/KrishnaG-101"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-[11px] sm:text-xs text-muted-foreground hover:text-accent transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github className="w-3.5 h-3.5" />
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/krishna-gelra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-[11px] sm:text-xs text-muted-foreground hover:text-accent transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    LinkedIn
                  </a>
                  <a
                    href="mailto:krishnagelra@gmail.com"
                    className="flex items-center gap-1.5 text-[11px] sm:text-xs text-muted-foreground hover:text-accent transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Mail className="w-3.5 h-3.5" />
                    Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Flip hint */}
        <p className="text-[10px] text-muted-foreground/40 text-center mt-3">
          click the card to flip
        </p>

        {/* Copyright */}
        <div className="mt-10 sm:mt-14 pt-6 border-t border-border text-center">
          <p className="text-xs sm:text-sm text-muted-foreground">
            © {new Date().getFullYear()} Krishna Gelra. Built with Next.js & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  )
}
