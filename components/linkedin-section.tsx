"use client"

import { useEffect, useRef } from "react"
import { Linkedin, ThumbsUp, MessageCircle, Repeat2 } from "lucide-react"

interface LinkedInPost {
  id: number
  content: string
  likes: number
  comments: number
  reposts: number
  date: string
}

const LINKEDIN_POSTS: LinkedInPost[] = [
  {
    id: 1,
    content: "Build with AI Indore sessions have been incredible! Learning to build real-world ML applications with the GDG community. The hands-on workshops on Generative AI and LLMs are exactly what the community needs. #BuildWithAI #GDGIndore #MachineLearning",
    likes: 48,
    comments: 8,
    reposts: 5,
    date: "2 weeks ago",
  },
  {
    id: 2,
    content: "Completed my Microsoft Elevate Copilot Internship! Worked on building intelligent copilot experiences using Azure AI services. Huge thanks to the team for the mentorship and learning opportunities. #Microsoft #Copilot #AIInternship",
    likes: 112,
    comments: 24,
    reposts: 14,
    date: "1 month ago",
  },
  {
    id: 3,
    content: "Excited to share my Forest Fire Detection project using Deep Learning! Built a CNN-based classifier that detects forest fires from satellite imagery with high accuracy. Open-sourced on GitHub. #DeepLearning #ComputerVision #OpenSource",
    likes: 67,
    comments: 12,
    reposts: 9,
    date: "2 months ago",
  },
  {
    id: 4,
    content: "Attendance Management using Facial Recognition — my latest project that automates classroom attendance using OpenCV and face recognition. Sometimes the best ML projects solve everyday problems. #Python #ComputerVision #FaceRecognition",
    likes: 89,
    comments: 18,
    reposts: 11,
    date: "3 months ago",
  },
  {
    id: 5,
    content: "Diving deeper into the world of Data Science! Working through multiple ML projects — from regression models to neural networks. The journey from raw data to predictions never gets old. #DataScience #ML #LearningByDoing",
    likes: 54,
    comments: 7,
    reposts: 4,
    date: "4 months ago",
  },
  {
    id: 6,
    content: "Just wrapped up my Microsoft Elevate Azure Internship — deploying ML models on Azure, learning cloud infrastructure, and understanding how production ML systems actually work at scale. Cloud + AI = 🔥 #Azure #Microsoft #CloudComputing",
    likes: 96,
    comments: 15,
    reposts: 8,
    date: "5 months ago",
  },
]

export function LinkedInSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const scrollPosRef = useRef(0)
  const isPausedRef = useRef(false)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    const speed = 0.5

    const scroll = () => {
      if (!isPausedRef.current && scrollContainer) {
        scrollPosRef.current += speed

        // Reset seamlessly when we've scrolled through the first set of items
        const maxScroll = scrollContainer.scrollWidth / 2
        if (scrollPosRef.current >= maxScroll) {
          scrollPosRef.current -= maxScroll
        }

        scrollContainer.scrollLeft = scrollPosRef.current
      }
      animationId = requestAnimationFrame(scroll)
    }

    animationId = requestAnimationFrame(scroll)
    return () => cancelAnimationFrame(animationId)
  }, [])

  const handleMouseEnter = () => { isPausedRef.current = true }
  const handleMouseLeave = () => { isPausedRef.current = false }

  // Duplicate posts for seamless infinite scroll
  const allPosts = [...LINKEDIN_POSTS, ...LINKEDIN_POSTS]

  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-8">
        <div className="flex items-center gap-3 mb-2">
          <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-[#0A66C2]" />
          <h2 className="text-2xl font-semibold">LinkedIn Highlights</h2>
        </div>
        <p className="text-muted-foreground text-sm">
          Thoughts on Data Science, AI, and the occasional debugging confession
        </p>
      </div>

      <div
        ref={scrollRef}
        className="overflow-hidden hide-scrollbar"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleMouseEnter}
        onTouchEnd={handleMouseLeave}
      >
        <div className="flex gap-4 sm:gap-6 px-4 sm:px-6" style={{ width: "max-content" }}>
          {allPosts.map((post, index) => (
            <div
              key={`${post.id}-${index}`}
              className="w-[280px] sm:w-[350px] flex-shrink-0 bg-card border border-border rounded-lg p-4 sm:p-6 transition-all duration-200 hover:border-accent hover:shadow-lg shimmer-hover"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#0A66C2] flex items-center justify-center text-white font-semibold text-xs sm:text-sm">
                  KG
                </div>
                <div>
                  <p className="font-medium text-sm">Krishna Gelra</p>
                  <p className="text-xs text-muted-foreground">{post.date}</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm leading-relaxed mb-4 line-clamp-4">
                {post.content}
              </p>

              <div className="flex items-center gap-4 text-muted-foreground text-xs border-t border-border pt-3 sm:pt-4">
                <div className="flex items-center gap-1">
                  <ThumbsUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>{post.likes}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>{post.comments}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Repeat2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>{post.reposts}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-6 text-center">
        <a
          href="https://linkedin.com/in/krishna-gelra"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-accent hover:underline"
        >
          View all posts on LinkedIn →
        </a>
      </div>
    </section>
  )
}
