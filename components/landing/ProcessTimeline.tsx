"use client"

import { useEffect, useRef } from "react"
import { Lightbulb, Palette, Code, Rocket } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const processSteps = [
  {
    icon: Lightbulb,
    title: "Discovery",
    description: "We dive deep into your vision, goals, and requirements to craft the perfect strategy.",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Palette,
    title: "Design",
    description: "Our designers create stunning, user-centric interfaces that captivate and convert.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Code,
    title: "Development",
    description: "Clean, scalable code built with modern technologies and best practices.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Rocket,
    title: "Launch",
    description: "Seamless deployment, testing, and ongoing support to ensure your success.",
    color: "from-green-500 to-emerald-500"
  }
]

export function ProcessTimeline() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    const ctx = gsap.context(() => {
      gsap.fromTo(".process-step",
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          }
        }
      )

      gsap.fromTo(".timeline-line",
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.5,
          ease: "power2.out",
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
    <section ref={sectionRef} className="py-6 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Process</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A proven methodology that transforms ideas into exceptional digital products.
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Timeline line - hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border timeline-line origin-top"></div>

          <div className="space-y-12 md:space-y-16">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`process-step flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="inline-block p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group">
                    <h3 className="text-2xl font-bold mb-3 flex items-center gap-3 group-hover:text-primary transition-colors">
                      {index % 2 === 0 ? (
                        <>
                          <span>{step.title}</span>
                          <div className={`p-2 rounded-lg bg-gradient-to-br ${step.color}`}>
                            <step.icon className="w-5 h-5 text-white" />
                          </div>
                        </>
                      ) : (
                        <>
                          <div className={`p-2 rounded-lg bg-gradient-to-br ${step.color}`}>
                            <step.icon className="w-5 h-5 text-white" />
                          </div>
                          <span>{step.title}</span>
                        </>
                      )}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden md:flex w-12 h-12 rounded-full bg-primary border-4 border-background shadow-lg items-center justify-center relative z-10">
                  <div className="w-3 h-3 rounded-full bg-white animate-pulse"></div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
