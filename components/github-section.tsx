"use client"

import { useState, useEffect, useMemo, useCallback, useRef } from "react"
import { Github, ExternalLink, Users, BookOpen, Loader2 } from "lucide-react"

// ── Types ────────────────────────────────────────────────────────────────────
type ContributionDay = { date: string; count: number; level: number }

type ContributionData = {
  total: Record<string, number>
  contributions: ContributionDay[]
}

type GitHubUserData = {
  public_repos: number
  followers: number
  following: number
}

// ── Constants ────────────────────────────────────────────────────────────────
const GITHUB_USERNAME = "KrishnaG-101"
const CONTRIBUTIONS_API = `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}`
const GITHUB_API = `https://api.github.com/users/${GITHUB_USERNAME}`

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

// GitHub's exact contribution colors
const COLORS_DARK = ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"]
const COLORS_LIGHT = ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"]

// ── Component ────────────────────────────────────────────────────────────────
export function GitHubSection() {
  const [contributionData, setContributionData] = useState<ContributionDay[]>([])
  const [totalContributions, setTotalContributions] = useState(0)
  const [userData, setUserData] = useState<GitHubUserData | null>(null)
  const [selectedYear, setSelectedYear] = useState<string>("last")
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [tooltip, setTooltip] = useState<{ day: ContributionDay; x: number; y: number } | null>(null)
  const [isDark, setIsDark] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)

  // Detect dark mode
  useEffect(() => {
    const html = document.documentElement
    const observer = new MutationObserver(() => {
      setIsDark(html.classList.contains("dark"))
    })
    setIsDark(html.classList.contains("dark"))
    observer.observe(html, { attributes: true, attributeFilter: ["class"] })
    return () => observer.disconnect()
  }, [])

  // Available years
  const currentYear = new Date().getFullYear()
  const availableYears = useMemo(() => {
    const years: { label: string; value: string }[] = [
      { label: "Last year", value: "last" },
    ]
    for (let y = currentYear; y >= 2024; y--) {
      years.push({ label: String(y), value: String(y) })
    }
    return years
  }, [currentYear])

  // Fetch contribution data
  const fetchContributions = useCallback(async (year: string) => {
    setIsLoading(true)
    setError(null)
    try {
      const res = await fetch(`${CONTRIBUTIONS_API}?y=${year}`)
      if (!res.ok) throw new Error("Failed to fetch")
      const data: ContributionData = await res.json()
      setContributionData(data.contributions)
      const totalKey = year === "last" ? "lastYear" : year
      setTotalContributions(data.total[totalKey] ?? 0)
    } catch {
      setError("Couldn't load contributions")
      setContributionData([])
      setTotalContributions(0)
    } finally {
      setIsLoading(false)
    }
  }, [])

  // Fetch GitHub user profile
  useEffect(() => {
    fetch(GITHUB_API).then(r => r.ok ? r.json() : null).then(d => d && setUserData(d)).catch(() => {})
  }, [])

  useEffect(() => { fetchContributions(selectedYear) }, [selectedYear, fetchContributions])

  // Group data into weeks (columns)
  const weeks = useMemo(() => {
    if (!contributionData.length) return []
    const result: (ContributionDay | null)[][] = []
    let currentWeek: (ContributionDay | null)[] = []

    contributionData.forEach((day, i) => {
      const dow = new Date(day.date).getDay()
      if (i === 0) {
        for (let j = 0; j < dow; j++) currentWeek.push(null)
      }
      currentWeek.push(day)
      if (dow === 6 || i === contributionData.length - 1) {
        // Pad last week to have 7 days
        while (currentWeek.length < 7) currentWeek.push(null)
        result.push(currentWeek)
        currentWeek = []
      }
    })
    return result
  }, [contributionData])

  // Month labels positioned at the correct week column
  const monthLabels = useMemo(() => {
    if (!weeks.length) return []
    const labels: { month: string; col: number }[] = []
    let lastMonth = -1

    weeks.forEach((week, colIdx) => {
      // Find the first real day in this week
      const firstDay = week.find(d => d !== null)
      if (firstDay) {
        const m = new Date(firstDay.date).getMonth()
        if (m !== lastMonth) {
          // Only add if there's room (at least 3 weeks gap or first label)
          if (labels.length === 0 || colIdx - labels[labels.length - 1].col >= 3) {
            labels.push({ month: MONTHS[m], col: colIdx })
          }
          lastMonth = m
        }
      }
    })
    return labels
  }, [weeks])

  // SVG dimensions — matches GitHub proportions
  const CELL = 11
  const GAP = 3
  const COLS = weeks.length
  const LABEL_W = 30 // space for Mon/Wed/Fri
  const HEADER_H = 16 // space for month labels
  const svgWidth = LABEL_W + COLS * (CELL + GAP) - GAP + 20 // +20 right padding for last month label
  const svgHeight = HEADER_H + 7 * (CELL + GAP) - GAP

  const colors = isDark ? COLORS_DARK : COLORS_LIGHT

  const handleCellHover = (e: React.MouseEvent<SVGRectElement>, day: ContributionDay) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const containerRect = containerRef.current?.getBoundingClientRect()
    if (!containerRect) return
    setTooltip({
      day,
      x: rect.left + rect.width / 2 - containerRect.left,
      y: rect.top - containerRect.top,
    })
  }

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr)
    return d.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" })
  }

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-secondary/30" id="github">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-2xl font-semibold">GitHub Contributions</h2>
        </div>

        {/* Contribution card */}
        <div ref={containerRef} className="bg-card rounded-lg border border-border relative">
          {/* Top bar with year tabs */}
          <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-3 border-b border-border">
            <span className="text-sm text-muted-foreground">
              <strong className="text-foreground">{totalContributions.toLocaleString()}</strong> contributions{" "}
              {selectedYear === "last" ? "in the last year" : `in ${selectedYear}`}
            </span>
            <div className="flex gap-1">
              {availableYears.map((y) => (
                <button
                  key={y.value}
                  onClick={() => setSelectedYear(y.value)}
                  className={`px-2.5 py-1 text-xs rounded-md transition-colors ${
                    selectedYear === y.value
                      ? "bg-accent text-accent-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {y.label}
                </button>
              ))}
            </div>
          </div>

          {/* Graph area */}
          <div className="px-4 sm:px-6 py-4">
            {isLoading ? (
              <div className="flex items-center justify-center h-[130px] gap-2 text-muted-foreground">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span className="text-sm">Loading...</span>
              </div>
            ) : error ? (
              <div className="flex items-center justify-center h-[130px] text-sm text-muted-foreground">
                {error}
              </div>
            ) : (
              <>
                {/* Scrollable on mobile, fits on desktop */}
                <div className="auto-hide-scrollbar">
                  <svg
                    width={svgWidth}
                    height={svgHeight}
                    viewBox={`0 0 ${svgWidth} ${svgHeight}`}
                    className="sm:w-full sm:h-auto"
                    style={{ minWidth: `${svgWidth}px` }}
                  >
                    {/* Month labels */}
                    {monthLabels.map((label, i) => (
                      <text
                        key={i}
                        x={LABEL_W + label.col * (CELL + GAP)}
                        y={10}
                        fill="currentColor"
                        className="text-muted-foreground"
                        style={{ fontSize: "9px" }}
                      >
                        {label.month}
                      </text>
                    ))}

                    {/* Day labels — Mon, Wed, Fri (like GitHub) */}
                    {[1, 3, 5].map((dayIdx) => (
                      <text
                        key={dayIdx}
                        x={0}
                        y={HEADER_H + dayIdx * (CELL + GAP) + CELL - 2}
                        fill="currentColor"
                        className="text-muted-foreground"
                        style={{ fontSize: "9px" }}
                      >
                        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][dayIdx]}
                      </text>
                    ))}

                    {/* Contribution cells */}
                    {weeks.map((week, colIdx) =>
                      week.map((day, rowIdx) => {
                        if (!day) return null
                        const x = LABEL_W + colIdx * (CELL + GAP)
                        const y = HEADER_H + rowIdx * (CELL + GAP)
                        return (
                          <rect
                            key={`${colIdx}-${rowIdx}`}
                            x={x}
                            y={y}
                            width={CELL}
                            height={CELL}
                            rx={2}
                            ry={2}
                            fill={colors[day.level]}
                            onMouseEnter={(e) => handleCellHover(e, day)}
                            onMouseLeave={() => setTooltip(null)}
                            style={{ cursor: "pointer", outline: "none" }}
                          />
                        )
                      })
                    )}
                  </svg>
                </div>

                {/* Legend */}
                <div className="flex items-center justify-between mt-3">
                  <a
                    href={`https://github.com/${GITHUB_USERNAME}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted-foreground hover:text-accent transition-colors"
                  >
                    Learn how we count contributions
                  </a>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <span>Less</span>
                    {[0, 1, 2, 3, 4].map((level) => (
                      <div
                        key={level}
                        className="rounded-sm"
                        style={{
                          width: "10px",
                          height: "10px",
                          backgroundColor: colors[level],
                        }}
                      />
                    ))}
                    <span>More</span>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Tooltip */}
          {tooltip && (
            <div
              className="absolute z-50 pointer-events-none px-3 py-1.5 rounded-md text-xs font-medium shadow-lg whitespace-nowrap"
              style={{
                left: tooltip.x,
                top: tooltip.y - 32,
                transform: "translateX(-50%)",
                backgroundColor: isDark ? "#f0f0f0" : "#24292f",
                color: isDark ? "#24292f" : "#f0f0f0",
              }}
            >
              <strong>{tooltip.day.count === 0 ? "No" : tooltip.day.count} contribution{tooltip.day.count !== 1 ? "s" : ""}</strong> on {formatDate(tooltip.day.date)}
              <div
                className="absolute left-1/2 -bottom-1 w-2 h-2 rotate-45"
                style={{
                  transform: "translateX(-50%) rotate(45deg)",
                  backgroundColor: isDark ? "#f0f0f0" : "#24292f",
                }}
              />
            </div>
          )}
        </div>

        {/* Stats row */}
        {userData && (
          <div className="flex flex-wrap items-center gap-5 mt-5 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <BookOpen className="w-4 h-4" />
              <span>{userData.public_repos} repos</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Users className="w-4 h-4" />
              <span>{userData.followers} followers · {userData.following} following</span>
            </div>
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto inline-flex items-center gap-1.5 text-accent hover:underline font-medium"
            >
              <Github className="w-4 h-4" />
              @{GITHUB_USERNAME}
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
