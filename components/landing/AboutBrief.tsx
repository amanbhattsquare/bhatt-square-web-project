"use client"

import { useEffect, useRef } from "react"
import { CheckCircle2, ChevronRight, Crosshair, Target, ShieldCheck, Box } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const specItems = [
    { title: "Industrial SaaS Architecture", desc: "Built for billion-record scalability and 99.99% uptime." },
    { title: "Advanced Technical Strategy", desc: "Integrating top-tier logic with elite-grade user experience." },
    { title: "Mission Critical Support", desc: "Round-the-clock infrastructure stability and monitoring." }
]

const metricItems = [
    { label: "EXPERIENCE", value: "05", suffix: "+ YR", color: "text-primary" },
    { label: "DELIVERED", value: "100", suffix: "+ OBJ", color: "text-indigo-500" },
    { label: "CLIENT BASE", value: "50", suffix: "+ UNIT", color: "text-emerald-500" },
    { label: "UPTIME", value: "99.9", suffix: " %", color: "text-rose-500" }
]

export function AboutBrief() {
    const sectionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        const ctx = gsap.context(() => {
            gsap.fromTo(".about-spec", 
                { x: -30, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1.2,
                    stagger: 0.2,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                    }
                }
            )

            gsap.fromTo(".matrix-card", 
                { scale: 0.9, opacity: 0, y: 20 },
                {
                    scale: 1,
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.1,
                    ease: "expo.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                    }
                }
            )
        }, sectionRef)
        return () => ctx.revert()
    }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-[#fdf6ef] dark:bg-slate-950 border-t border-border/30 overflow-hidden relative">
      {/* Abstract Grid background */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.1] pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          
          <div className="about-spec space-y-10">
            <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 border border-primary/10 rounded text-[9px] font-black uppercase tracking-[0.2em] text-primary">
                    <Target className="w-3 h-3" /> System Architecture
                </div>
                <h2 className="section-heading !text-4xl lg:!text-5xl !mb-2 !tracking-tighter">
                   Why Choose <span className="text-transparent border-text-stroke-primary dark:border-text-stroke-white opacity-20 italic">Bhatt Square?</span>
                </h2>
                <p className="text-base text-muted-foreground max-w-lg leading-relaxed font-medium">
                    We architect digital ecosystems that power the global frontier. No placeholders, just mission-critical software.
                </p>
            </div>
            
            <div className="space-y-6">
              {specItems.map((item, i) => (
                <div key={i} className="about-spec flex items-start gap-4 p-4 rounded-2xl transition-all hover:bg-white/50 dark:hover:bg-white/5 border border-transparent hover:border-border">
                  <div className="mt-1 p-2 rounded-xl bg-background border border-border shadow-sm">
                      <ShieldCheck className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black uppercase tracking-widest text-foreground">{item.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1 font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Matrix Grid */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {metricItems.map((metric, i) => (
                <div key={i} className="matrix-card group relative bg-card p-1 items-center justify-center p-8 rounded-[2rem] border border-border hover:border-primary/40 transition-all overflow-hidden flex flex-col text-center">
                    {/* Crosshair accents */}
                    <Crosshair className="absolute top-4 right-4 w-4 h-4 opacity-5 text-primary group-hover:opacity-100 transition-opacity" />
                    <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-border/20 group-hover:border-primary/40"></div>
                    
                    <div className="relative z-10 flex flex-col items-center">
                        <span className={`text-[9px] font-black uppercase tracking-[0.4em] mb-4 opacity-70`}>{metric.label}</span>
                        <div className="flex items-baseline gap-1">
                            <span className="text-4xl md:text-5xl font-black tracking-tighter tabular-nums">{metric.value}</span>
                            <span className={`text-xs font-black uppercase tracking-widest ${metric.color}`}>{metric.suffix}</span>
                        </div>
                    </div>
                    {/* Subtle scanner bar */}
                    <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
            ))}
          </div>

        </div>
      </div>

      <style jsx>{`
        .border-text-stroke-primary {
          -webkit-text-stroke: 1px #BF4646;
        }
        .dark .border-text-stroke-white {
          -webkit-text-stroke: 1px #ffffff;
        }
      `}</style>
    </section>
  )
}
