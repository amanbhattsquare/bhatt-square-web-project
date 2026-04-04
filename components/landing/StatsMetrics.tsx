"use client"

import { useEffect, useRef, useState } from "react"
import { TrendingUp, Users, Award, Zap, Activity, ShieldCheck } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const stats = [
  { icon: Users, label: "GLOBAL CLIENTS", value: 50, suffix: "+" },
  { icon: Award, label: "ELITE PROJECTS", value: 100, suffix: "+" },
  { icon: TrendingUp, label: "STABILITY RATE", value: 99, suffix: "%" },
  { icon: Zap, label: "CORE EXPERIENCE", value: 2, suffix: "YR+" },
]

export function StatsMetrics() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [counters, setCounters] = useState(stats.map(() => 0))

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    const ctx = gsap.context(() => {
      // Background grid movement
      gsap.to(".stats-grid-bg", {
         x: -40,
         duration: 20,
         repeat: -1,
         ease: "linear",
         yoyo: true
      })

      gsap.fromTo(".stat-module",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "expo.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            onEnter: () => {
              stats.forEach((stat, index) => {
                const target = { val: 0 };
                gsap.to(target, {
                  val: stat.value,
                  duration: 2,
                  ease: "power2.out",
                  delay: index * 0.1,
                  onUpdate: () => {
                    setCounters(prev => {
                      const newCounters = [...prev]
                      newCounters[index] = Math.floor(target.val)
                      return newCounters
                    })
                  }
                });
              })
            }
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-15 bg-background relative overflow-hidden border-y border-border/50">
      {/* Moving technical grid background */}
      <div className="stats-grid-bg absolute inset-0 z-0 opacity-5 pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] dark:bg-[radial-gradient(#fff_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-border/50">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-module group relative p-6 md:p-10 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-100 transition-opacity">
                 <stat.icon className="w-12 h-12 text-primary" />
              </div>

              <div className="relative space-y-3">
                  <div className="flex items-center gap-2">
                       <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
                       <p className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">{stat.label}</p>
                  </div>
                  
                  <div className="flex items-baseline gap-1">
                      <span className="text-4xl md:text-5xl font-black tracking-tighter tabular-nums text-foreground">
                        {counters[index]}
                      </span>
                      <span className="text-xl font-bold text-primary">{stat.suffix}</span>
                  </div>

                  <p className="text-[9px] font-bold text-muted-foreground/60 uppercase tracking-widest pl-0.5">Measurement Finalized</p>
              </div>

              {/* Technical corner accents */}
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-border/0 group-hover:border-primary/40 transition-all"></div>
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-border/0 group-hover:border-primary/40 transition-all"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
