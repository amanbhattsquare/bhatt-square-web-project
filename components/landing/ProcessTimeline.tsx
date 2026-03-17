"use client"

import { motion } from "framer-motion"
import { Check, ClipboardList, Code, Palette, Rocket } from "lucide-react"

const processSteps = [
  {
    icon: ClipboardList,
    title: "Discovery & Strategy",
    description: "We dive deep into your vision, goals, and requirements to craft the perfect strategy.",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Our designers create stunning, user-centric interfaces that captivate and convert.",
    color: "text-sky-500",
    bgColor: "bg-sky-500/10",
    borderColor: "border-sky-500/20"
  },
  {
    icon: Code,
    title: "Development & Testing",
    description: "Clean, scalable code built with modern technologies and best practices.",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20"
  },
  {
    icon: Rocket,
    title: "Deployment & Launch",
    description: "Seamless deployment, testing, and ongoing support to ensure your success.",
    color: "text-rose-500",
    bgColor: "bg-rose-500/10",
    borderColor: "border-rose-500/20"
  }
]

export function ProcessTimeline() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants: import("framer-motion").Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
      },
    },
  }

  const lineVariants: import("framer-motion").Variants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 1,
        ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
        delay: 0.5
      }
    }
  }

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="section-heading"
          >
            Our Streamlined <span className="text-primary">Process</span>
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="section-subheading"
          >
            From initial idea to final launch, we follow a structured and transparent process to ensure your project's success.
          </motion.p>
        </div>

        <div className="relative">
          <motion.div 
            className="absolute left-4 md:left-1/2 top-12 bottom-12 w-1 bg-border/50 rounded-full md:-translate-x-1/2"
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            style={{ originY: 0 }}
          />
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16"
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="relative flex flex-col items-center md:items-start text-center md:text-left"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background hidden lg:block" />
                
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-16 h-16 rounded-full ${step.bgColor} border-2 ${step.borderColor} flex items-center justify-center ${step.color}`}>
                    <step.icon className="w-8 h-8" />
                  </div>
                  <span className="text-5xl font-bold text-muted-foreground/20">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}