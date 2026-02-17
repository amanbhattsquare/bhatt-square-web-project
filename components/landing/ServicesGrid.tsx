"use client"

import { useEffect, useRef } from "react"
import { Monitor, Cloud, Database, Shield, Smartphone, Code, ArrowRight, Sparkles } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const services = [
  {
    icon: Monitor,
    title: "Web Development",
    description: "Enterprise-grade web applications built with cutting-edge technologies. We create responsive, accessible, and high-performance solutions that deliver exceptional user experiences and drive business growth.",
    color: "from-red-500 to-rose-500",
    technologies: ["React", "Next.js", "TypeScript"],
    useCases: ["E-Commerce", "Corporate Sites", "Web Portals"]
  },
  {
    icon: Cloud,
    title: "SaaS Solutions",
    description: "Scalable, multi-tenant SaaS platforms designed for rapid growth. From MVP to enterprise scale, we build secure, compliant, and feature-rich software-as-a-service products with seamless integrations.",
    color: "from-rose-500 to-pink-500",
    technologies: ["Microservices", "AWS", "Stripe"],
    useCases: ["B2B Platforms", "Subscription Apps", "Analytics Tools"]
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Native and cross-platform mobile apps that users love. We deliver pixel-perfect iOS and Android applications with offline capabilities, real-time sync, and deep native integrations.",
    color: "from-indigo-500 to-purple-500",
    technologies: ["React Native", "Swift", "Kotlin"],
    useCases: ["Consumer Apps", "Enterprise Mobile", "IoT Controls"]
  },
  {
    icon: Database,
    title: "Cloud Infrastructure",
    description: "Robust cloud architecture designed for scalability, reliability, and cost-efficiency. We implement DevOps best practices, automated deployments, and comprehensive monitoring solutions.",
    color: "from-cyan-500 to-blue-500",
    technologies: ["AWS/Azure", "Docker", "Kubernetes"],
    useCases: ["Auto-Scaling", "Load Balancing", "Disaster Recovery"]
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets. From penetration testing to compliance auditing (SOC 2, HIPAA, GDPR), we ensure your systems meet the highest security standards.",
    color: "from-emerald-500 to-green-500",
    technologies: ["OAuth", "SSL/TLS", "Encryption"],
    useCases: ["Security Audits", "Compliance", "Threat Detection"]
  },
  {
    icon: Code,
    title: "Custom Software",
    description: "Bespoke software solutions engineered to solve your unique business challenges. We build everything from internal tools to complex enterprise systems with precision and expertise.",
    color: "from-violet-500 to-purple-500",
    technologies: ["Python", "Node.js", "Go"],
    useCases: ["Automation", "Data Processing", "Legacy Modernization"]
  }
]

export function ServicesGrid() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      gsap.fromTo(".service-card", 
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          }
        }
      )

      // Animate section badge
      gsap.fromTo(".services-badge",
        { y: -20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
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
    <section ref={sectionRef} className="py-6 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="services-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 via-indigo-500/10 to-rose-500/10 border border-primary/20 text-primary text-sm font-semibold mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            COMPREHENSIVE SOLUTIONS
          </div>
          <h3 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Our Expertise
          </h3>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Enterprise-grade digital solutions powered by cutting-edge technology and delivered with precision. We transform complex challenges into elegant, scalable products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card group relative p-8 rounded-3xl bg-card/80 backdrop-blur-sm border-2 border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2"
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Corner accent */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-5 rounded-3xl blur-2xl`}></div>

              <div className="relative z-10">
                {/* Icon */}
                <div className={`mb-6 p-5 rounded-2xl bg-gradient-to-br ${service.color} w-fit group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <service.icon className="h-10 w-10 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  {service.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                    Technologies
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1.5 text-xs font-medium rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Use Cases */}
                <div className="mb-6">
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    Use Cases
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {service.useCases.map((useCase, ucIndex) => (
                      <span
                        key={ucIndex}
                        className="px-3 py-1 text-xs rounded-full bg-muted/50 text-muted-foreground border border-border"
                      >
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Learn More Link */}
                <a
                  href="/services"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Need a custom solution? We've got you covered.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all"
          >
            Discuss Your Project
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
