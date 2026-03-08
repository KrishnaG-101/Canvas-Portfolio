"use client"

import { useEffect, useState } from "react"
import { Moon, Sun, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

const NAV_LINKS = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "GitHub", href: "#github" },
  { label: "Connect", href: "#connect" },
]

export function Header() {
  const [time, setTime] = useState<string>("")
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)

    const updateTime = () => {
      const now = new Date()
      const istTime = new Intl.DateTimeFormat("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      }).format(now)
      setTime(istTime)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  // Track scroll position for header styling
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = ["experience", "projects", "github", "connect"]
    const observers: IntersectionObserver[] = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id)
          } else if (id === "experience" && !entry.isIntersecting && entry.boundingClientRect.top > 0) {
            // If 'experience' (first section) leaves viewport downward (top > 0),
            // we're above all tracked sections → clear highlight
            setActiveSection("")
          }
        },
        { threshold: 0.05, rootMargin: "-80px 0px -50% 0px" }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: "smooth" })
  }

  if (!mounted) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
          <div className="font-mono text-sm text-muted-foreground">--:--:-- --</div>
          <div className="h-9 w-9" />
        </div>
      </header>
    )
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "border-border bg-background/90 backdrop-blur-lg shadow-sm"
            : "border-transparent bg-background/60 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
          {/* Left — IST clock */}
          <div className="flex items-center gap-1.5">
            <span className="font-mono text-xs sm:text-sm text-muted-foreground">{time}</span>
            <span className="text-[10px] text-muted-foreground/50">IST</span>
          </div>

          {/* Center — Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.replace("#", "")
              const isActive = activeSection === sectionId
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`relative px-3 py-1.5 text-xs font-medium rounded-md transition-colors duration-200 ${
                    isActive
                      ? "text-accent"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-accent" />
                  )}
                </button>
              )
            })}
          </nav>

          {/* Right — actions */}
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="h-8 w-8"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* Mobile hamburger */}
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-lg">
            <nav className="flex flex-col max-w-5xl mx-auto px-4 py-3 gap-1">
              {NAV_LINKS.map((link) => {
                const sectionId = link.href.replace("#", "")
                const isActive = activeSection === sectionId
                return (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`text-left px-3 py-2 rounded-md text-sm transition-colors ${
                      isActive
                        ? "text-accent bg-accent/5 font-medium"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                    }`}
                  >
                    {link.label}
                  </button>
                )
              })}
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
