"use client"

import { motion } from "framer-motion"
import { Layers, Rocket, ShieldCheck, Heart, Users, Activity, Sparkles, Monitor } from "lucide-react"

const benefits = [
    { title: "Ownership", icon: ShieldCheck, desc: "Lead mission-critical projects and own your entire lifecycle." },
    { title: "Scale", icon: Activity, desc: "Build systems that handle billions of records with zero downtime." },
    { title: "Growth", icon: Rocket, desc: "Personalized development tracks and elite mentorship programs." },
    { title: "Flexibility", icon: Monitor, desc: "Async-first culture. Work from the frontier, on your terms." },
    { title: "Wellness", icon: Heart, desc: "Comprehensive health, dental, and fitness coverage for all." },
    { title: "Culture", icon: Users, desc: "Collaborate with high-impact talent in a meritocratic environment." },
    { title: "Edge Tech", icon: Sparkles, desc: "Early access to next-gen tools and proprietary frameworks." },
    { title: "Impact", icon: Layers, desc: "Transform industries with industrial-grade SaaS architecture." },
]

export function CareersBenefits() {
  return (
    <section className="py-15 bg-card/60 backdrop-blur-3xl border-y border-border/60 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-none mb-6">
                Why Build at <span className="text-primary italic">Bhatt Square?</span>
            </h2>
            <p className="text-muted-foreground font-medium max-w-2xl mx-auto uppercase tracking-widest text-xs">
                Industrial excellence is not just a standard—it's our baseline. We provide the ecosystem for elite talent to flourish.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-x-6 md:gap-y-12">
            {benefits.map((benefit, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    viewport={{ once: true }}
                    className="group relative flex flex-col items-center text-center p-8 rounded-3xl border border-transparent hover:border-primary/20 transition-all hover:bg-background/80"
                >
                    <div className="p-4 rounded-2xl bg-muted/60 text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all transform group-hover:scale-110 group-hover:rotate-3">
                        <benefit.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-black uppercase tracking-widest text-foreground group-hover:text-primary transition-colors">{benefit.title}</h3>
                    <p className="text-xs text-muted-foreground mt-3 font-medium leading-relaxed tracking-wide">{benefit.desc}</p>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  )
}
