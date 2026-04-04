"use client"

import { useEffect, useRef } from "react"
import { Target, Cpu, Layers, Activity, ArrowUpRight, Briefcase, GraduationCap, ShoppingCart, Building2, HeartPulse, Truck, Zap } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "next/link"

const specItems = [
    { 
        title: "Industrial SaaS Architecture", 
        desc: "Built for billion-record scalability and 99.99% uptime.",
        icon: Cpu,
    },
    { 
        title: "Advanced Technical Strategy", 
        desc: "Integrating top-tier logic with elite-grade user experience.",
        icon: Layers,
    },
    { 
        title: "Mission Critical Support", 
        desc: "Round-the-clock infrastructure stability and monitoring.",
        icon: Activity,
    }
]

const industries = [
    { icon: Briefcase, name: "Business & Finance", projects: "45+", accent: "Enterprise CRM, FinTech, ERP" },
    { icon: GraduationCap, name: "Education & LMS", projects: "22+", accent: "E-Learning, School Management" },
    { icon: ShoppingCart, name: "E-commerce & Retail", projects: "38+", accent: "Storefronts, POS, Inventory" },
    { icon: Building2, name: "Real Estate & PropTech", projects: "15+", accent: "Listings, Virtual Tours, CRM" },
    { icon: HeartPulse, name: "Healthcare & Fitness", projects: "18+", accent: "GYM, Clinics, Telehealth" },
    { icon: Truck, name: "Logistics & Supply Chain", projects: "12+", accent: "Fleet, Warehousing, Tracking" },
]

export function AboutBrief() {
    const sectionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        
        const ctx = gsap.context(() => {
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

            gsap.fromTo(".industry-card", 
                { y: 20, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.08,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".industry-grid",
                        start: "top 85%",
                    }
                }
            )
        }, sectionRef)

        return () => ctx.revert()
    }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-background relative overflow-hidden" aria-labelledby="why-choose-heading">
      {/* Full-width dot-grid background */}
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header — Centered */}
        <div className="text-center mb-16 space-y-4">
          <div className="fade-in-up inline-flex items-center gap-2 px-4 py-1.5 bg-primary/5 border border-primary/10 rounded-full text-[10px] font-black uppercase tracking-[0.3em] text-primary">
              <Target className="w-3.5 h-3.5" /> SYSTEM ARCHITECTURE
          </div>
          <h2 id="why-choose-heading" className="fade-in-up text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-foreground leading-[0.95]">
             Why choose <span className="text-primary italic">Bhatt Square?</span>
          </h2>
          <p className="fade-in-up text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium">
              We architect digital ecosystems that power the global frontier. From industrial-grade SaaS to mission-critical infrastructure.
          </p>
        </div>

        {/* Core Capabilities — 3-Column Industrial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {specItems.map((item, i) => (
            <div key={i} className="fade-in-up group relative industrial-border bg-card p-8 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5">
              <div className="absolute inset-0 dot-grid opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none" />
              
              <div className="relative z-10 space-y-5">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-primary/5 border border-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <span className="font-display font-black italic text-5xl text-foreground opacity-[0.06] group-hover:opacity-[0.12] transition-opacity leading-none select-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-display font-black tracking-tighter uppercase group-hover:text-primary transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-xs font-semibold leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Industries Section */}
        <div className="space-y-10">
          <div className="fade-in-up flex flex-col md:flex-row items-start md:items-end justify-between gap-4 pb-6 border-b border-border/50">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/60 mb-2">SECTOR COVERAGE</p>
              <h3 className="text-3xl md:text-4xl font-black tracking-tighter uppercase">Industries We <span className="text-primary italic">Power</span></h3>
            </div>
            <Link href="/about" className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] text-foreground hover:text-primary transition-all group/link">
                LEARN MORE
                <div className="p-1.5 border border-border rounded-lg group-hover/link:border-primary transition-colors">
                    <ArrowUpRight className="w-3 h-3 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </div>
            </Link>
          </div>

          <div className="industry-grid grid grid-cols-2 md:grid-cols-3 gap-5">
            {industries.map((industry, i) => (
              <div 
                  key={i} 
                  className="industry-card group relative industrial-border bg-card p-7 transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-primary/5"
              >
                  <div className="absolute inset-0 dot-grid opacity-15 group-hover:opacity-35 transition-opacity pointer-events-none" />
                  
                  <div className="relative z-10 space-y-5">
                      <div className="flex items-center justify-between">
                        <div className="w-11 h-11 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                            <industry.icon className="w-5 h-5" />
                        </div>
                        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-primary/50 bg-primary/5 px-2 py-1 rounded-md border border-primary/10">
                          {industry.projects}
                        </span>
                      </div>
                      <div className="space-y-1.5">
                        <h4 className="text-sm font-display font-black uppercase tracking-tight leading-tight group-hover:text-primary transition-colors">{industry.name}</h4>
                        <p className="text-[10px] font-semibold text-muted-foreground/70 uppercase tracking-wider">{industry.accent}</p>
                      </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
