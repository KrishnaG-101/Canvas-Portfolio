"use client"

import { useMemo, useState, useEffect } from "react"

type ContributionDay = { date: string; count: number; level: number }

// Seeded random number generator for consistent results
function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}

// Generate mock contribution data for the last 52 weeks with a fixed seed
function generateContributionData(): ContributionDay[] {
  const data: ContributionDay[] = []
  // Use a fixed base date to ensure consistency
  const baseDate = new Date("2026-03-06")
  
  for (let i = 364; i >= 0; i--) {
    const date = new Date(baseDate)
    date.setDate(date.getDate() - i)
    
    // Simulate realistic contribution patterns
    const dayOfWeek = date.getDay()
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6
    
    // Use seeded random based on date for consistent results
    const seed = date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate()
    const random = seededRandom(seed)
    
    let count: number
    if (isWeekend) {
      count = random > 0.7 ? Math.floor(random * 5) : 0
    } else {
      if (random > 0.3) {
        count = Math.floor(random * 12) + 1
      } else {
        count = 0
      }
    }
    
    let level: number
    if (count === 0) level = 0
    else if (count <= 3) level = 1
    else if (count <= 6) level = 2
    else if (count <= 9) level = 3
    else level = 4
    
    data.push({
      date: date.toISOString().split("T")[0],
      count,
      level,
    })
  }
  
  return data
}

const LEVEL_COLORS = [
  "bg-muted dark:bg-secondary",
  "bg-emerald-200 dark:bg-emerald-900/60",
  "bg-emerald-300 dark:bg-emerald-700/70",
  "bg-emerald-400 dark:bg-emerald-500/80",
  "bg-emerald-500 dark:bg-emerald-400",
]

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

export function GitHubSection() {
  const contributionData = useMemo(() => generateContributionData(), [])
  
  // Group data by weeks
  const weeks = useMemo(() => {
    const result: { date: string; count: number; level: number }[][] = []
    let currentWeek: { date: string; count: number; level: number }[] = []
    
    contributionData.forEach((day, index) => {
      const dayOfWeek = new Date(day.date).getDay()
      
      if (index === 0) {
        // Fill in empty days at the start
        for (let i = 0; i < dayOfWeek; i++) {
          currentWeek.push({ date: "", count: -1, level: -1 })
        }
      }
      
      currentWeek.push(day)
      
      if (dayOfWeek === 6 || index === contributionData.length - 1) {
        result.push(currentWeek)
        currentWeek = []
      }
    })
    
    return result
  }, [contributionData])

  const totalContributions = useMemo(
    () => contributionData.reduce((sum, day) => sum + day.count, 0),
    [contributionData]
  )

  // Get month labels
  const monthLabels = useMemo(() => {
    const labels: { month: string; position: number }[] = []
    let lastMonth = -1
    
    weeks.forEach((week, index) => {
      const firstValidDay = week.find(d => d.date)
      if (firstValidDay) {
        const month = new Date(firstValidDay.date).getMonth()
        if (month !== lastMonth) {
          labels.push({ month: MONTHS[month], position: index })
          lastMonth = month
        }
      }
    })
    
    return labels
  }, [weeks])

  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3 mb-8">
          <h2 className="text-2xl font-semibold">GitHub Contributions</h2>
          <span className="text-sm text-muted-foreground">
            {totalContributions.toLocaleString()} contributions in the last year
          </span>
        </div>
        
        <div className="bg-card rounded-lg border border-border p-6 overflow-x-auto">
          {/* Month labels */}
          <div className="flex mb-2 ml-8">
            {monthLabels.map((label, i) => (
              <div
                key={i}
                className="text-xs text-muted-foreground"
                style={{ 
                  position: "relative", 
                  left: `${label.position * 13}px`,
                  marginRight: i < monthLabels.length - 1 
                    ? `${(monthLabels[i + 1]?.position - label.position - 3) * 13}px` 
                    : "0"
                }}
              >
                {label.month}
              </div>
            ))}
          </div>
          
          <div className="flex gap-1">
            {/* Day labels */}
            <div className="flex flex-col gap-1 mr-2 text-xs text-muted-foreground">
              {DAYS.map((day, i) => (
                <div key={day} className="h-[11px] flex items-center">
                  {i % 2 === 1 ? day.slice(0, 3) : ""}
                </div>
              ))}
            </div>
            
            {/* Contribution grid */}
            <div className="flex gap-[3px]">
              {weeks.map((week, weekIndex) => (
                <div key={weekIndex} className="flex flex-col gap-[3px]">
                  {week.map((day, dayIndex) => (
                    <div
                      key={`${weekIndex}-${dayIndex}`}
                      className={`w-[11px] h-[11px] rounded-sm transition-colors ${
                        day.level === -1 
                          ? "bg-transparent" 
                          : LEVEL_COLORS[day.level]
                      }`}
                      title={day.date ? `${day.count} contributions on ${day.date}` : ""}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
          
          {/* Legend */}
          <div className="flex items-center justify-end gap-2 mt-4 text-xs text-muted-foreground">
            <span>Less</span>
            {[0, 1, 2, 3, 4].map((level) => (
              <div
                key={level}
                className={`w-[11px] h-[11px] rounded-sm ${LEVEL_COLORS[level]}`}
              />
            ))}
            <span>More</span>
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground mt-4 text-center">
          Simulated contribution heatmap — because my actual commit history would include 3 AM panic pushes.
          {" "}
          <a
            href="https://github.com/KrishnaG-101"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline font-medium"
          >
            View real profile on GitHub →
          </a>
        </p>
      </div>
    </section>
  )
}
