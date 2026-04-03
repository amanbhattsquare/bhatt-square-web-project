"use client"

import { useEffect, useRef, useState } from "react"
import { Monitor, Cloud, Database, Shield, Smartphone, Code, ArrowRight, Stars, MoveUpRight, Zap, Boxes } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const services = [
  {
    icon: Monitor,
    title: "Web Engineering",
    tagline: "High-performance architectures for the modern web.",
    color: "#3b82f6",
    tech: ["Next.js", "Turbo", "Vercel"]
  },
  {
    icon: Cloud,
    title: "SaaS Ecosystems",
    tagline: "Scalable multi-tenant cloud platforms.",
    color: "#ec4899",
    tech: ["Microservices", "Stripe", "AWS"]
  },
  {
    icon: Smartphone,
    title: "Mobile Platforms",
    tagline: "Native-grade experiences for iOS & Android.",
    color: "#10b981",
    tech: ["Flutter", "React Native", "Swift"]
  },
  {
    icon: Database,
    title: "Cloud Infrastructure",
    tagline: "Enterprise DevOps & Infrastructure as Code.",
    color: "#06b6d4",
    tech: ["Terraform", "K8s", "Azure"]
  },
  {
    icon: Shield,
    title: "Digital Security",
    tagline: "Hardening your assets against modern threats.",
    color: "#f43f5e",
    tech: ["OAuth", "Pen-testing", "Zero-Trust"]
  },
  {
    icon: Code,
    title: "Bespoke Software",
    tagline: "Custom engineered solutions for complex problems.",
    color: "#f59e0b",
    tech: ["Go", "Node.js", "Python"]
  }
]

export function ServicesGrid() {
  const containerRef = useRef<HTMLDivElement>(null)
  const portalRef = useRef<HTMLDivElement>(null)
  const cursorDotRef = useRef<HTMLDivElement>(null)
  const [activeItem, setActiveItem] = useState<number | null>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    // Smooth custom cursor/portal tracking
    const moveCursor = (e: MouseEvent) => {
      if (portalRef.current) {
        gsap.to(portalRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.8,
          ease: "power2.out"
        })
      }
      if (cursorDotRef.current) {
        gsap.to(cursorDotRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.1,
          ease: "none"
        })
      }
    }

    window.addEventListener("mousemove", moveCursor)

    // Entrance and Parallax for items
    const ctx = gsap.context(() => {
        gsap.utils.toArray(".service-item").forEach((item: any, i) => {
            gsap.from(item, {
                y: 30,
                opacity: 0,
                duration: 0.8,
                scrollTrigger: {
                    trigger: item,
                    start: "top 95%",
                }
            })
            
            // Subtle Parallax Tilt on scroll
            gsap.to(item.querySelector(".service-title"), {
                x: i % 2 === 0 ? 10 : -10,
                scrollTrigger: {
                    trigger: item,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            })
        })
    }, containerRef)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      ctx.revert()
    }
  }, [])

  return (
    <section ref={containerRef} className="py-14 md:py-24 bg-background relative overflow-hidden lg:cursor-none group/section">
      {/* Custom Cursor Dot (Ensures mouse is always visible) */}
      <div 
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[100] hidden lg:block -translate-x-1/2 -translate-y-1/2 shadow-[0_0_5px_rgba(191,70,70,0.5)]"
      />

      {/* Floating Portal Element */}
      <div 
        ref={portalRef}
        className="fixed top-0 left-0 w-[300px] h-[300px] -ml-[150px] -mt-[150px] pointer-events-none z-50 mix-blend-difference hidden lg:block"
        style={{ 
            opacity: activeItem !== null ? 1 : 0, 
            scale: activeItem !== null ? 1 : 0.4, 
            transition: "opacity 0.4s, scale 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)" 
        }}
      >
        <div className="w-full h-full rounded-full bg-white/5 backdrop-blur-2xl border border-white/10 relative overflow-hidden shadow-xl flex items-center justify-center">
            {activeItem !== null && (
                <div className="text-white transform transition-all duration-700 scale-90">
                    {(() => {
                        const Icon = services[activeItem].icon
                        return <Icon className="w-16 h-16 stroke-[1]" />
                    })()}
                </div>
            )}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-12 md:mb-16 gap-8 text-center md:text-left">
            <div className="space-y-4 w-full lg:w-auto">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-black uppercase tracking-widest">
                    <Boxes className="w-4 h-4" />
                    CAPABILITIES
                </div>
                <h2 className="section-heading !mb-0">
                    Our <span className="text-primary italic">Craft.</span>
                </h2>
            </div>
            <div className="max-w-lg lg:text-right">
                <p className="text-base md:text-lg text-muted-foreground font-medium italic">
                    "High-performance engineering for the modern enterprise."
                </p>
            </div>
        </div>

        {/* The List Layout - Mobile Optimized */}
        <div className="flex flex-col divide-y divide-border/30">
            {services.map((item, index) => (
                <div 
                    key={index}
                    onMouseEnter={() => setActiveItem(index)}
                    onMouseLeave={() => setActiveItem(null)}
                    className="service-item group relative py-8 md:py-12 flex flex-col lg:flex-row items-center transition-all duration-700 cursor-pointer overflow-hidden"
                >
                    {/* Hover Background Layer */}
                    <div className="absolute inset-x-0 bottom-0 top-full bg-primary/5 transition-all duration-700 group-hover:top-0 -z-10" />

                    {/* Numeric Index */}
                    <div className="w-12 hidden lg:block text-xl font-black text-muted-foreground/20 group-hover:text-primary/40 transition-colors">
                        {index + 1 < 10 ? `0${index + 1}` : index + 1}
                    </div>

                    {/* Content Section */}
                    <div className="flex-grow text-center lg:text-left z-10 w-full mb-4 lg:mb-0">
                        <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-6">
                            <div className="lg:hidden mx-auto mb-2 p-3 rounded-xl bg-primary/5 text-primary">
                                <item.icon className="w-4 h-4" />
                            </div>
                            <h3 className="service-title text-3xl sm:text-4xl md:text-5xl font-black tracking-tight group-hover:text-primary transition-all duration-700">
                                {item.title}
                            </h3>
                        </div>
                        <p className="text-muted-foreground text-sm md:text-base font-medium mt-2 lg:mt-1 max-w-xl lg:ml-1">
                           {item.tagline}
                        </p>
                    </div>

                    {/* Technology Indicators */}
                    <div className="flex flex-wrap justify-center lg:justify-start gap-1.5 z-10 lg:w-64">
                        {item.tech.map((t, i) => (
                            <span key={i} className="text-[9px] md:text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-muted/60 border border-border group-hover:border-primary/20 rounded-lg transition-all">
                                {t}
                            </span>
                        ))}
                    </div>

                    {/* Corner Link */}
                    <div className="hidden lg:flex ml-8 opacity-0 -translate-x-5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700">
                         <div className="w-14 h-14 rounded-full border border-primary/30 group-hover:bg-primary flex items-center justify-center text-primary group-hover:text-white transition-all transform group-hover:rotate-45">
                            <MoveUpRight className="w-5 h-5" />
                         </div>
                    </div>

                    {/* Mobile Only Link Trigger */}
                    <a href="/services" className="absolute inset-0 z-30 lg:hidden"></a>
                </div>
            ))}
        </div>

        {/* Global CTA Section - Industrial Redesign */}
        <div className="mt-5 md:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">
            <div className="lg:col-span-12 text-center mb-6">
                 <h4 className="section-heading !text-3xl opacity-50">Industrial Grade.</h4>
            </div>

            {/* Left Card: Rapid Deployment */}
            <div className="lg:col-span-7 group relative overflow-hidden rounded-[2rem] bg-slate-950 p-8 md:p-12 text-white border border-white/5 transition-all duration-700 hover:border-primary/50">
                {/* mesh gradient background */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_#BF464633_0%,_transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-primary/10 to-transparent opacity-20"></div>
                
                {/* Blueprint Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_at_center,black,transparent)]"></div>

                <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center mb-8 backdrop-blur-sm group-hover:scale-110 transition-transform duration-500">
                        <Zap className="w-6 h-6 text-primary" />
                    </div>
                    <h5 className="text-3xl font-black mb-4 tracking-tight uppercase">High-Velocity Deployment</h5>
                    <p className="text-slate-400 text-base mb-10 leading-relaxed font-medium max-w-sm">
                        Our sprint-optimized pipeline converts complex industrial specs into production-ready MVPs in weeks.
                    </p>
                    <div className="flex items-center gap-6">
                        <a href="/contact" className="px-6 py-2.5 bg-primary rounded-full text-xs font-black uppercase tracking-widest hover:bg-primary/90 transition-all hover:shadow-[0_0_20px_rgba(191,70,70,0.4)]">Initialize Sprint</a>
                        <a href="/services" className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-primary transition-colors flex items-center gap-2 group/link">
                            View Methodology <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>
            </div>
            
            {/* Right Group */}
            <div className="lg:col-span-5 flex flex-col gap-4">
                {/* Uptime Card */}
                <div className="flex-grow bg-card p-8 rounded-[2rem] border border-border relative overflow-hidden group hover:bg-muted/50 transition-colors">
                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center py-4">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-2">Availability</span>
                        <p className="text-5xl font-black tracking-tighter tabular-nums mb-1">99.99%</p>
                        <div className="h-0.5 w-8 bg-primary rounded-full mb-4"></div>
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">SLA Guaranteed Uptime</p>
                    </div>
                    {/* Subtle Scanner Effect */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent -translate-y-full group-hover:animate-[shimmer_2s_infinite]"></div>
                </div>

                {/* Main Action Button */}
                <div className="bg-primary hover:bg-primary/90 p-8 rounded-[2rem] text-primary-foreground flex items-center justify-between group cursor-pointer transition-all hover:shadow-2xl hover:shadow-primary/20 overflow-hidden relative">
                    <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                    <div className="relative z-10">
                        <span className="text-sm font-black uppercase tracking-[0.2em] block">Ready to scale?</span>
                        <span className="text-xl font-black">START YOUR JOURNEY</span>
                    </div>
                    <div className="h-14 w-14 rounded-full bg-white/20 flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                        <ArrowRight className="w-8 h-8" />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}




