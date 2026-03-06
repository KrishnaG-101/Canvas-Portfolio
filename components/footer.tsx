"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Globe, BrainCircuit, Github, Linkedin } from "lucide-react"

export function Footer() {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <footer className="py-16 sm:py-20 px-4 sm:px-6 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-3">Let{"'"}s Connect</h2>
        <p className="text-sm text-muted-foreground text-center mb-8 sm:mb-12 italic">
          I promise I respond faster than my models train. Usually.
        </p>
        
        {/* Business Card — Full Width */}
        <div
          className="relative w-full h-[260px] sm:h-[280px] cursor-pointer"
          onClick={() => setIsFlipped(!isFlipped)}
          style={{ perspective: "1000px" }}
        >
          <div
            className="relative w-full h-full transition-transform duration-700"
            style={{
              transformStyle: "preserve-3d",
              transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
            }}
          >
            {/* Front of card */}
            <div
              className="absolute inset-0 bg-card border-2 border-border rounded-xl p-6 sm:p-8 lg:p-10 shadow-lg"
              style={{ backfaceVisibility: "hidden" }}
            >
              <div className="h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <BrainCircuit className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight">Krishna Gelra</h3>
                  </div>
                  <p className="text-accent font-medium mt-1 text-sm sm:text-base ml-9 sm:ml-10">
                    Data Scientist & AI/ML Engineer
                  </p>
                  <p className="text-xs text-muted-foreground/50 ml-9 sm:ml-10 mt-0.5 italic">
                    a.k.a. Professional Hyperparameter Whisperer
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-muted-foreground">
                    <Mail className="w-4 h-4 flex-shrink-0" />
                    <span className="truncate">krishnagelra@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    <span>India 🇮🇳</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-muted-foreground">
                    <Github className="w-4 h-4 flex-shrink-0" />
                    <span className="truncate">github.com/KrishnaG-101</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-muted-foreground">
                    <Globe className="w-4 h-4 flex-shrink-0" />
                    <span className="truncate">Open for opportunities</span>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground/60 text-center">
                  Click to flip — no gradient descent required
                </p>
              </div>
            </div>

            {/* Back of card */}
            <div
              className="absolute inset-0 bg-foreground text-background border-2 border-border rounded-xl p-6 sm:p-8 lg:p-10 shadow-lg"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >
              <div className="h-full flex flex-col justify-between">
                <div className="text-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 rounded-full border-2 border-background/20 flex items-center justify-center">
                    <BrainCircuit className="w-7 h-7 sm:w-8 sm:h-8 opacity-80" />
                  </div>
                  <p className="text-sm sm:text-base opacity-80 leading-relaxed max-w-md mx-auto">
                    Turning data into decisions, coffee into code, and bugs into {"'"}features.{"'"}
                    <br />
                    Open for collaborations in AI/ML, Data Science & GenAI.
                    <br />
                    <span className="text-xs opacity-60 italic">
                      Warning: May randomly talk about transformers at social gatherings.
                    </span>
                  </p>
                </div>

                <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
                  <a
                    href="https://github.com/KrishnaG-101"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs sm:text-sm opacity-70 hover:opacity-100 transition-opacity"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/krishna-gelra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs sm:text-sm opacity-70 hover:opacity-100 transition-opacity"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                  <a
                    href="https://kaggle.com/krishnagelra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs sm:text-sm opacity-70 hover:opacity-100 transition-opacity"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Globe className="w-4 h-4" />
                    Kaggle
                  </a>
                </div>

                <p className="text-xs opacity-40 text-center">
                  Click to flip back — backpropagation not needed
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Krishna Gelra. Crafted with care, caffeine & questionable sleep schedules.
          </p>
          <p className="text-xs text-muted-foreground/60 mt-2">
            Built with Next.js, Tailwind CSS, and a well-tuned loss function. No datasets were harmed in the making of this website.
          </p>
          <p className="text-xs text-muted-foreground/40 mt-1 italic">
            P.S. If this page loads slowly, blame the attention mechanism — it{"'"}s attending to everything.
          </p>
        </div>
      </div>
    </footer>
  )
}
