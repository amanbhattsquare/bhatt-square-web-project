"use client"

import { useEffect, useRef } from "react"
import { Monitor, Cloud, Database, Shield, Smartphone, Code, ArrowRight, Sparkles } from "lucide-react"
import { motion, type TargetAndTransition } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const services: {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
  glowColor: string;
  technologies: string[];
  useCases: string[];
  animation: TargetAndTransition;
}[] = [
  {
    icon: Monitor,
    title: "Web Development",
    description: "Enterprise-grade web applications built with cutting-edge technologies. We create responsive, accessible, and high-performance solutions.",
    color: "from-red-500 to-rose-600",
    glowColor: "rgba(225, 29, 72, 0.4)",
    technologies: ["React", "Next.js", "TypeScript"],
    useCases: ["E-Commerce", "SaaS Dashboards"],
    animation: { rotate: [0, 5, -5, 0], transition: { duration: 4, repeat: Infinity } } as TargetAndTransition
  },
  {
    icon: Cloud,
    title: "SaaS Solutions",
    description: "Scalable, multi-tenant SaaS platforms designed for rapid growth. Built with secure, compliant, and feature-rich software-as-a-service.",
    color: "from-pink-500 to-rose-500",
    glowColor: "rgba(244, 63, 94, 0.4)",
    technologies: ["Microservices", "AWS", "Stripe"],
    useCases: ["B2B Platforms", "FinTech"],
    animation: { y: [0, -8, 0], transition: { duration: 3, repeat: Infinity } } as TargetAndTransition
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Native and cross-platform mobile apps that users love. We deliver pixel-perfect iOS and Android applications with offline capabilities.",
    color: "from-indigo-600 to-blue-500",
    glowColor: "rgba(79, 70, 229, 0.4)",
    technologies: ["React Native", "Swift", "Kotlin"],
    useCases: ["Consumer Apps", "IoT Controls"],
    animation: { scale: [1, 1.1, 1], transition: { duration: 2.5, repeat: Infinity } } as TargetAndTransition
  },
  {
    icon: Database,
    title: "Cloud Infrastructure",
    description: "Robust cloud architecture designed for scalability and reliability. We implement DevOps best practices and automated deployments.",
    color: "from-cyan-500 to-blue-600",
    glowColor: "rgba(6, 182, 212, 0.4)",
    technologies: ["AWS/Azure", "Docker", "K8s"],
    useCases: ["Auto-Scaling", "Big Data"],
    animation: { opacity: [0.7, 1, 0.7], transition: { duration: 3, repeat: Infinity } } as TargetAndTransition
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets. From penetration testing to compliance auditing (SOC 2, GDPR).",
    color: "from-emerald-500 to-teal-600",
    glowColor: "rgba(16, 185, 129, 0.4)",
    technologies: ["OAuth", "2FA", "Encryption"],
    useCases: ["Security Audits", "Threat Detection"],
    animation: { rotateY: [0, 180, 360], transition: { duration: 5, repeat: Infinity } } as TargetAndTransition
  },
  {
    icon: Code,
    title: "Custom Software",
    description: "Bespoke software solutions engineered to solve your unique business challenges. Internal tools to complex enterprise systems.",
    color: "from-violet-600 to-purple-500",
    glowColor: "rgba(139, 92, 246, 0.4)",
    technologies: ["Go", "Node.js", "Python"],
    useCases: ["Automation", "Legacy Systems"],
    animation: { x: [0, 5, -5, 0], transition: { duration: 2, repeat: Infinity } } as TargetAndTransition
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
          duration: 1,
          stagger: 0.1,
          ease: "power4.out",
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
    <section ref={sectionRef} className="py-24 bg-background relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(225,29,72,0.03),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="services-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/20 text-primary text-xs font-bold mb-6 tracking-widest uppercase"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Core Capabilities
          </motion.div>
          <h2 className="section-heading">
            Our <span className="text-primary italic">Expertise</span>
          </h2>
          <p className="section-subheading">
            Enterprise-grade engineering met with modern aesthetics. We help you build scalable products that define the industry standard.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              whileHover={{ y: -10 }}
              className="service-card group relative p-8 rounded-[2.5rem] bg-card border border-border/50 transition-all duration-500 hover:shadow-[0_22px_70px_-15px_rgba(0,0,0,0.1)] hover:border-primary/30 overflow-hidden"
            >
              {/* Animated Glow on Hover */}
              <div 
                className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[80px] transition-opacity duration-700 opacity-0 group-hover:opacity-100"
                style={{ backgroundColor: service.glowColor }}
              ></div>

              <div className="relative z-10 flex flex-col h-full">
                {/* Animated Icon Container */}
                <div className={`mb-8 p-4 rounded-3xl bg-gradient-to-br ${service.color} w-fit shadow-lg shadow-primary/10 group-hover:shadow-primary/30 transition-shadow duration-300`}>
                  <motion.div animate={service.animation}>
                    <service.icon className="h-9 w-9 text-white stroke-[1.5]" />
                  </motion.div>
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-muted-foreground text-[0.95rem] leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>

                <div className="space-y-6">
                  {/* Tech stack pill */}
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, idx) => (
                      <span key={idx} className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-muted text-muted-foreground border border-border/50 group-hover:border-primary/20 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="h-px w-full bg-gradient-to-r from-border/50 via-border/20 to-transparent"></div>

                  {/* Actions */}
                  <div className="flex items-center justify-between">
                    <a
                      href="/services"
                      className="group/link inline-flex items-center gap-2 text-sm font-bold text-foreground/80 hover:text-primary transition-colors"
                    >
                      Explore Service
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 p-8 rounded-[3rem] bg-gradient-to-r from-primary/5 via-muted/50 to-primary/5 border border-primary/10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left"
        >
          <div>
            <h4 className="text-2xl font-bold mb-2">Have a specific requirement?</h4>
            <p className="text-muted-foreground">Our engineers are ready to tackle your most complex challenges.</p>
          </div>
          <a href="/contact" className="btn-primary whitespace-nowrap">
            Schedule a Consultation
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
