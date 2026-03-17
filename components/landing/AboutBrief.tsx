"use client"

import { useEffect, useRef } from "react"
import { CheckCircle2 } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export function AboutBrief() {
    const sectionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        const ctx = gsap.context(() => {
            gsap.fromTo(".about-content", 
                { x: -50, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 75%",
                    }
                }
            )

            gsap.fromTo(".about-stats", 
                { x: 50, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                    delay: 0.2,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 75%",
                    }
                }
            )
        }, sectionRef)
        return () => ctx.revert()
    }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="about-content space-y-8">
            <h2 className="section-heading">
              Why Choose <span className="text-primary">Bhatt Square?</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              We are more than just a software company. We are your strategic partner in digital transformation. With a focus on innovation, quality, and reliability, we build solutions that last.
            </p>
            
            <ul className="space-y-4">
              {['Industry-leading expertise', 'Tailored SaaS solutions', '24/7 Support & Maintenance', 'Agile Development Methodology'].map((item, i) => (
                <li key={i} className="flex items-center space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="about-stats grid grid-cols-2 gap-6">
            <div className="bg-card p-8 rounded-2xl border border-border shadow-sm text-center">
              <div className="text-4xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-muted-foreground font-medium uppercase tracking-wide">Years Experience</div>
            </div>
            <div className="bg-card p-8 rounded-2xl border border-border shadow-sm text-center">
               <div className="text-4xl font-bold text-rose-500 mb-2">100+</div>
              <div className="text-sm text-muted-foreground font-medium uppercase tracking-wide">Projects Delivered</div>
            </div>
            <div className="bg-card p-8 rounded-2xl border border-border shadow-sm text-center">
               <div className="text-4xl font-bold text-indigo-500 mb-2">50+</div>
              <div className="text-sm text-muted-foreground font-medium uppercase tracking-wide">Happy Clients</div>
            </div>
            <div className="bg-card p-8 rounded-2xl border border-border shadow-sm text-center">
               <div className="text-4xl font-bold text-cyan-500 mb-2">24/7</div>
              <div className="text-sm text-muted-foreground font-medium uppercase tracking-wide">Support Available</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
