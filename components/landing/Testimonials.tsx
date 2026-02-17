"use client"

import { useEffect, useRef } from "react"
import { Quote } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const testimonials = [
  {
    quote: "Bhatt Square transformed our legacy system into a modern, scalable SaaS platform. Their expertise is unmatched.",
    author: "Amit Patel",
    role: "CTO, FinTech Sol Pvt. Ltd."
  },
  {
    quote: "The team delivered our mobile app ahead of schedule and with zero bugs. Truly professional and industry-ready code.",
    author: "Sarah Johnson",
    role: "Product Manager, HealthLive"
  },
  {
    quote: "Excellent communication and deep technical knowledge. They helped us migrate to the cloud seamlessly.",
    author: "Rajesh Kumar",
    role: "Director, EduTech India"
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
    <section ref={sectionRef} className="py-6 bg-background relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-rose-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Client Success Stories</h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it. Here's what our partners have to say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="testimonial-card flex flex-col justify-between p-8 rounded-2xl bg-muted/20 border border-border/50 hover:border-primary/30 transition-colors">
              <div>
                <Quote className="h-10 w-10 text-primary/40 mb-6" />
                <p className="text-lg text-foreground/90 italic mb-6">"{item.quote}"</p>
              </div>
              <div>
                <div className="font-bold text-foreground">{item.author}</div>
                <div className="text-sm text-muted-foreground">{item.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
