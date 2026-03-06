"use client"

import { useEffect, useRef, useState } from "react"
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
    content: "Just deployed a RAG pipeline that actually cites its sources correctly. Felt like teaching a student to use footnotes — except the student processes 10,000 documents per hour. #GenAI #LLM #RAG",
    likes: 312,
    comments: 56,
    reposts: 28,
    date: "2 days ago",
  },
  {
    id: 2,
    content: "Unpopular opinion: 80% of ML projects fail not because of bad models, but because of bad data. Spent 3 weeks cleaning a dataset that took 2 hours to model. The glamour of Data Science! #DataScience #ML",
    likes: 891,
    comments: 167,
    reposts: 92,
    date: "1 week ago",
  },
  {
    id: 3,
    content: "Trained a model for 12 hours. Forgot to save the checkpoints. The real lesson here isn't about GPUs — it's about humility. Also, always use callbacks. #DeepLearning #LessonsLearned",
    likes: 445,
    comments: 89,
    reposts: 34,
    date: "2 weeks ago",
  },
  {
    id: 4,
    content: "Hot take: Prompt engineering is the new feature engineering. The best GenAI applications aren't just API wrappers — they're carefully designed systems with guardrails, context management, and evaluation loops. #AI #PromptEngineering",
    likes: 723,
    comments: 134,
    reposts: 67,
    date: "3 weeks ago",
  },
  {
    id: 5,
    content: "Just automated a report that used to take the analytics team 4 hours every Monday. Built it with Python, Pandas, and a cron job. Sometimes the simplest ML is no ML at all. #DataEngineering #Automation",
    likes: 567,
    comments: 78,
    reposts: 45,
    date: "1 month ago",
  },
  {
    id: 6,
    content: "My model has 99% accuracy on the test set. Plot twist: the test set had data leakage. Back to square one. Remember: always check your train-test split before celebrating. #MachineLearning #DataScience",
    likes: 1024,
    comments: 203,
    reposts: 118,
    date: "1 month ago",
  },
]

export function LinkedInSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let scrollPosition = 0
    const speed = 0.5

    const scroll = () => {
      if (!isPaused && scrollContainer) {
        scrollPosition += speed
        
        // Reset scroll position when we've scrolled through all items
        const maxScroll = scrollContainer.scrollWidth / 2
        if (scrollPosition >= maxScroll) {
          scrollPosition = 0
        }
        
        scrollContainer.scrollLeft = scrollPosition
      }
      animationId = requestAnimationFrame(scroll)
    }

    animationId = requestAnimationFrame(scroll)
    return () => cancelAnimationFrame(animationId)
  }, [isPaused])

  // Duplicate posts for infinite scroll effect
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
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <div className="flex gap-4 sm:gap-6 px-4 sm:px-6" style={{ width: "max-content" }}>
          {allPosts.map((post, index) => (
            <div
              key={`${post.id}-${index}`}
              className="w-[280px] sm:w-[350px] flex-shrink-0 bg-card border border-border rounded-lg p-4 sm:p-6 transition-all duration-200 hover:border-accent hover:shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#0A66C2] flex items-center justify-center text-white font-semibold text-xs sm:text-sm">
                  YN
                </div>
                <div>
                  <p className="font-medium text-sm">Your Name</p>
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
          href="https://linkedin.com/in/yourprofile"
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
