"use client"

import { useEffect, useRef } from "react"
import { Target, Cpu, Layers, Activity, CheckCircle2, Crosshair, ArrowRight } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const specItems = [
    { 
        title: "Industrial SaaS Architecture", 
        desc: "Built for billion-record scalability and 99.99% uptime.",
        icon: Cpu,
        tag: "Core"
    },
    { 
        title: "Advanced Technical Strategy", 
        desc: "Integrating top-tier logic with elite-grade user experience.",
        icon: Layers,
        tag: "Logic"
    },
    { 
        title: "Mission Critical Support", 
        desc: "Round-the-clock infrastructure stability and monitoring.",
        icon: Activity,
        tag: "Safety"
    }
]

const metricItems = [
    { label: "EXPERIENCE", value: 5, suffix: "+ YR", subtext: "Legacy of innovation" },
    { label: "DELIVERED", value: 100, suffix: "+ OBJ", subtext: "High-impact deployments" },
    { label: "CLIENT BASE", value: 50, suffix: "+ UNIT", subtext: "Strategic global partners" },
    { label: "AVAILABILITY", value: 99.9, suffix: "%", subtext: "SLA-grade uptime" }
]

export function AboutBrief() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const metricsRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        
        const ctx = gsap.context(() => {
            // Smooth entrance for content
            gsap.fromTo(".fade-in-up", 
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 85%",
                    }
                }
            )

            // Number counting animation
            const metrics = metricsRef.current?.querySelectorAll(".metric-number")
            metrics?.forEach((metric: any) => {
                const target = parseFloat(metric.getAttribute("data-target") || "0")
                const isFloat = target % 1 !== 0
                
                gsap.fromTo(metric, 
                    { innerText: 0 },
                    {
                        innerText: target,
                        duration: 2.5,
                        ease: "expo.out",
                        snap: { innerText: isFloat ? 0.1 : 1 },
                        scrollTrigger: {
                            trigger: metricsRef.current,
                            start: "top 90%",
                        },
                        onUpdate: function() {
                           if (isFloat) {
                               metric.innerText = parseFloat(metric.innerText).toFixed(1)
                           }
                        }
                    }
                )
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

  return (
    <section ref={sectionRef} className="py-10 bg-background border-t border-border/40 overflow-hidden relative" aria-labelledby="why-choose-heading">
      {/* Industrial Blueprint Background */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.05)_100%)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Side: Content */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-6">
                <div className="fade-in-up inline-flex items-center gap-2 px-4 py-1.5 bg-primary/5 border border-primary/10 rounded-full text-[10px] font-black uppercase tracking-[0.3em] text-primary">
                    <Target className="w-3.5 h-3.5" /> SYSTEM ARCHITECTURE
                </div>
                <h2 id="why-choose-heading" className="fade-in-up text-4xl md:text-6xl font-black tracking-tighter text-foreground leading-[0.95]">
                   Why choose <br />
                   <span className="text-primary italic">Bhatt Square?</span>
                </h2>
                <p className="fade-in-up text-lg text-muted-foreground max-w-md leading-relaxed font-medium border-l-2 border-primary/20 pl-6">
                    We architect digital ecosystems that power the global frontier. From industrial-grade SaaS to mission-critical infrastructure.
                </p>
            </div>
            
            <div className="space-y-3">
              {specItems.map((item, i) => (
                <div key={i} className="fade-in-up group flex items-start gap-5 p-5 rounded-2xl transition-all duration-500 hover:bg-card border border-transparent hover:border-border/60">
                  <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-xl bg-muted/50 dark:bg-slate-900 border border-border/80 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
                      <item.icon className="h-5 w-5 stroke-[1.25]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-[7px] font-black uppercase tracking-widest px-1.5 py-0.5 bg-primary/10 text-primary rounded">{item.tag}</span>
                        <h4 className="text-sm font-black text-foreground uppercase tracking-widest leading-none">{item.title}</h4>
                    </div>
                    <p className="text-[13px] text-muted-foreground mt-1 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Bento Metric Grid */}
          <div ref={metricsRef} className="lg:col-span-7 grid grid-cols-2 gap-4 lg:py-6">
            {metricItems.map((metric, i) => (
                <div 
                    key={i} 
                    className={`fade-in-up group relative bg-card p-8 lg:p-10 rounded-[2.5rem] border border-border/80 hover:border-primary/40 transition-all duration-700 flex flex-col items-center justify-center text-center overflow-hidden ${i % 2 !== 0 ? 'lg:translate-y-10' : ''}`}
                >
                    <Crosshair className="absolute top-5 right-5 w-4 h-4 opacity-5 text-primary group-hover:opacity-100 group-hover:rotate-90 transition-all duration-700" />
                    <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-primary/10 group-hover:border-primary/40 transition-colors"></div>
                    
                    <div className="relative z-10 py-1">
                        <span className="text-[9px] font-black uppercase tracking-[0.4em] text-primary/60 mb-5 block group-hover:text-primary transition-colors">{metric.label}</span>
                        <div className="flex items-baseline justify-center gap-1 mb-3">
                            <span 
                                className="text-5xl md:text-6xl font-black tracking-tighter tabular-nums metric-number text-foreground leading-none"
                                data-target={metric.value}
                            >
                                0
                            </span>
                            <span className="text-lg font-bold text-primary">{metric.suffix}</span>
                        </div>
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                            {metric.subtext}
                        </p>
                    </div>

                    {/* Subtle scanner bar */}
                    <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
