"use client"

import { useEffect, useRef, useState } from "react"
import { TrendingUp, Users, Award, Zap } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const stats = [
  { icon: Users, label: "Happy Clients", value: 150, suffix: "+" },
  { icon: Award, label: "Projects Completed", value: 200, suffix: "+" },
  { icon: TrendingUp, label: "Success Rate", value: 98, suffix: "%" },
  { icon: Zap, label: "Years Experience", value: 5, suffix: "+" },
]

export function StatsMetrics() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [counters, setCounters] = useState(stats.map(() => 0))

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    const ctx = gsap.context(() => {
      gsap.fromTo(".stat-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            onEnter: () => {
              // Animate counters
              stats.forEach((stat, index) => {
                let current = 0
                const increment = stat.value / 50
                const timer = setInterval(() => {
                  current += increment
                  if (current >= stat.value) {
                    current = stat.value
                    clearInterval(timer)
                  }
                  setCounters(prev => {
                    const newCounters = [...prev]
                    newCounters[index] = Math.floor(current)
                    return newCounters
                  })
                }, 30)
              })
            }
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-6 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Proven Track Record
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Numbers that speak for themselves. Our commitment to excellence drives measurable results.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-card group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 text-center"
            >
              <div className="mb-4 inline-flex p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                {counters[index]}{stat.suffix}
              </div>
              <div className="text-sm md:text-base text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
