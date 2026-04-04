"use client"

import { useEffect, useRef } from "react"
import { Quote, Star } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const testimonials = [
  {
    quote: "Bhatt Square transformed our legacy system into a modern, scalable SaaS platform. Their expertise is unmatched.",
    author: "Amit Patel",
    role: "CTO, FinTech Sol Pvt. Ltd.",
    rating: 5
  },
  {
    quote: "The team delivered our mobile app ahead of schedule and with zero bugs. Truly professional and industry-ready code.",
    author: "Sarah Johnson",
    role: "Product Manager, HealthLive",
    rating: 5
  },
  {
    quote: "Excellent communication and deep technical knowledge. They helped us migrate to the cloud seamlessly.",
    author: "Rajesh Kumar",
    role: "Director, EduTech India",
    rating: 5
  },
]

export function Testimonials() {
    const sectionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        const ctx = gsap.context(() => {
            gsap.fromTo(".testimonial-card", 
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.2,
                    ease: "power3.out",
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
    <section ref={sectionRef} className="py-15 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-6">
              <Star className="w-3 h-3 fill-current" />
              CLIENT VOICES
          </div>
          <h2 className="section-heading">Client Success <span className="text-primary italic">Stories</span></h2>
          <p className="section-subheading">
            Don't just take our word for it. Here's what our partners have to say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <div key={index} className="testimonial-card group relative flex flex-col justify-between p-8 bg-card border border-border/80 rounded-2xl hover:border-primary/40 transition-all duration-500 overflow-hidden hover:shadow-lg hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <Quote className="h-8 w-8 text-primary/30 group-hover:text-primary/60 transition-colors" />
                  <div className="flex gap-0.5">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-foreground/90 italic mb-6 leading-relaxed font-medium">"{item.quote}"</p>
              </div>
              
              <div className="relative z-10 pt-5 border-t border-border/50">
                <div className="text-sm font-black text-foreground uppercase tracking-wider">{item.author}</div>
                <div className="text-[11px] text-muted-foreground font-semibold uppercase tracking-wider mt-0.5">{item.role}</div>
              </div>

              <span className="absolute bottom-3 right-4 font-display font-black italic text-5xl text-foreground opacity-[0.03] group-hover:opacity-[0.07] transition-opacity select-none">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
