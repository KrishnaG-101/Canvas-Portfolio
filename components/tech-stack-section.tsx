"use client"

import { useState } from "react"

interface TechCategory {
  name: string
  color: string
  bgColor: string
  technologies: string[]
}

const TECH_CATEGORIES: TechCategory[] = [
  {
    name: "Data Science",
    color: "text-emerald-600 dark:text-emerald-400",
    bgColor: "bg-emerald-500/10 border-emerald-500/20",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter", "SQL", "Plotly", "Streamlit"],
  },
  {
    name: "AI / Machine Learning",
    color: "text-violet-600 dark:text-violet-400",
    bgColor: "bg-violet-500/10 border-violet-500/20",
    technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "Hugging Face", "OpenCV", "XGBoost", "Keras"],
  },
  {
    name: "Generative AI",
    color: "text-pink-600 dark:text-pink-400",
    bgColor: "bg-pink-500/10 border-pink-500/20",
    technologies: ["LangChain", "OpenAI API", "RAG", "Prompt Engineering", "Pinecone", "ChromaDB", "LlamaIndex"],
  },
  {
    name: "Web Development",
    color: "text-sky-600 dark:text-sky-400",
    bgColor: "bg-sky-500/10 border-sky-500/20",
    technologies: ["Django", "FastAPI", "Flask", "HTML/CSS", "JavaScript", "React", "REST APIs"],
  },
  {
    name: "Tools & Cloud",
    color: "text-amber-600 dark:text-amber-400",
    bgColor: "bg-amber-500/10 border-amber-500/20",
    technologies: ["Git", "Docker", "AWS", "GCP", "MLflow", "Airflow", "Linux", "CI/CD"],
  },
]

export function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  return (
    <section id="tech-stack" className="py-16 sm:py-20 px-4 sm:px-6 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 sm:mb-12 gap-2">
          <h2 className="text-2xl font-semibold">Tech Stack</h2>
          <span className="text-sm text-muted-foreground">
            Tools & technologies I work with
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {TECH_CATEGORIES.map((category) => (
            <div
              key={category.name}
              className={`bg-card border rounded-lg p-5 sm:p-6 transition-all duration-300 hover:shadow-lg cursor-default ${activeCategory === category.name
                  ? "border-accent shadow-lg scale-[1.02]"
                  : "border-border hover:border-accent/50"
                }`}
              onMouseEnter={() => setActiveCategory(category.name)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              <h3 className={`text-sm sm:text-base font-semibold mb-4 ${category.color}`}>
                {category.name}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech) => (
                  <span
                    key={tech}
                    className={`text-xs px-2.5 py-1 rounded-full border transition-all duration-200 font-medium ${category.bgColor} hover:scale-105`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
