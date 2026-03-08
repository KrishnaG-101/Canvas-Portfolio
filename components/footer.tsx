"use client"

import { useState } from "react"
import { Sparkles, Github, Linkedin, Mail, MapPin, ArrowRight } from "lucide-react"

export function Footer() {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <footer id="connect" className="py-16 sm:py-20 px-4 sm:px-6 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-2">Let{"'"}s Connect</h2>
        <p className="text-sm text-muted-foreground text-center mb-8 sm:mb-12 italic">
          I promise I respond faster than my models train. Usually.
        </p>

        {/* Business Card */}
        <div
          className="relative w-full max-w-3xl mx-auto aspect-[1.8/1] max-h-[320px] cursor-pointer group"
          onClick={() => setIsFlipped(!isFlipped)}
          style={{ perspective: "1200px" }}
        >
          {/* Animated gradient glow behind card on hover */}
          <div
            className="absolute -inset-[2px] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, var(--accent), oklch(0.55 0.18 280), var(--accent))',
              backgroundSize: '200% 200%',
              animation: 'gradient-shift 4s ease-in-out infinite',
            }}
          />

          <div
            className="relative w-full h-full transition-transform duration-700"
            style={{
              transformStyle: "preserve-3d",
              transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
            }}
          >
            {/* ─── Front ─── */}
            <div
              className="absolute inset-0 bg-card border border-border rounded-xl shadow-lg overflow-hidden"
              style={{ backfaceVisibility: "hidden" }}
            >
              <div className="h-full flex flex-col justify-between p-5 sm:p-8 md:p-10">
                {/* Corner accents */}
                <div className="absolute top-0 right-0 w-40 h-40 opacity-[0.03] pointer-events-none" style={{
                  background: 'radial-gradient(circle at top right, var(--accent), transparent 70%)',
                }} />
                <div className="absolute bottom-0 left-0 w-32 h-32 opacity-[0.02] pointer-events-none" style={{
                  background: 'radial-gradient(circle at bottom left, var(--accent), transparent 70%)',
                }} />

                {/* Top row */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-foreground/80">AI / ML</p>
                      <p className="text-[8px] sm:text-[9px] text-muted-foreground tracking-[0.12em] uppercase">Data Science & Engineering</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-muted-foreground/50">
                    <MapPin className="w-3 h-3" />
                    <span className="text-[10px] sm:text-xs">Indore, India</span>
                  </div>
                </div>

                {/* Center — name + title */}
                <div className="text-center">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide">
                    <span className="font-light">Krishna</span>{" "}
                    <span className="text-accent">Gelra</span>
                  </h3>
                  <p className="text-[10px] sm:text-xs tracking-[0.25em] uppercase text-muted-foreground mt-2">
                    Data Scientist & AI/ML Engineer
                  </p>
                </div>

                {/* Bottom row */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <a
                    href="mailto:krishnagelra18@gmail.com"
                    onClick={(e) => e.stopPropagation()}
                    className="text-[10px] sm:text-xs text-muted-foreground hover:text-accent transition-colors tracking-wide break-all"
                  >
                    krishnagelra18@gmail.com
                  </a>
                  <div className="flex items-center gap-3">
                    <a
                      href="https://github.com/KrishnaG-101"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-muted-foreground/50 hover:text-accent transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="https://linkedin.com/in/krishna-gelra"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-muted-foreground/50 hover:text-accent transition-colors"
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                    </a>
                    <span className="text-border">|</span>
                    <div className="flex items-center gap-1 text-[10px] text-muted-foreground/40">
                      <span>flip</span>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ─── Back ─── */}
            <div
              className="absolute inset-0 bg-card border border-border rounded-xl shadow-lg overflow-hidden"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >
              <div className="h-full flex flex-col justify-between p-5 sm:p-8 md:p-10">
                {/* Corner accent */}
                <div className="absolute bottom-0 left-0 w-40 h-40 opacity-[0.03] pointer-events-none" style={{
                  background: 'radial-gradient(circle at bottom left, var(--accent), transparent 70%)',
                }} />

                {/* Top — icon */}
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto rounded-xl bg-accent/10 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                  </div>
                </div>

                {/* Center — tagline */}
                <div className="text-center max-w-sm mx-auto px-2">
                  <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    Turning data into decisions, coffee into code,
                    <br />
                    and bugs into {"'"}features.{"'"}
                  </p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground/60 mt-2.5 italic">
                    Open for collaborations in AI/ML, Data Science & GenAI.
                  </p>
                </div>

                {/* Bottom — social links */}
                <div className="flex items-center justify-center gap-3 sm:gap-4">
                  <a
                    href="https://github.com/KrishnaG-101"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary/60 text-[11px] sm:text-xs text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all duration-200"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github className="w-3.5 h-3.5" />
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/krishna-gelra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary/60 text-[11px] sm:text-xs text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all duration-200"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    LinkedIn
                  </a>
                  <a
                    href="mailto:krishnagelra18@gmail.com"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary/60 text-[11px] sm:text-xs text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all duration-200"
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
