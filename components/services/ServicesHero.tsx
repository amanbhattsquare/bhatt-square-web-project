"use client"

import { motion } from "framer-motion"
import { Cpu } from "lucide-react"
import Batch from "@/app/components/Batch"

export function ServicesHero() {
  return (
    <section className="relative py-15 pb-15 overflow-hidden bg-background">
      {/* Hero Background Pattern */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
        style={{ backgroundImage: "url('/images/about-team.png')" }}
      ></div>
      <div className="absolute inset-0 bg-black/85 backdrop-blur-[2px]"></div>

      {/* Background Decor Layer */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[160px] animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.1)_100%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-10 shadow-lg shadow-primary/5"
            >
              <Cpu className="w-4 h-4 fill-current" />
              OUR EXPERTISE
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1, ease: "circOut" }}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.9] mb-8 text-white"
            >
              Our <span className="text-primary italic text-red-glow">Specialized</span> Services
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl text-white/80 font-medium max-w-2xl mx-auto leading-relaxed"
            >
              End-to-end technology solutions tailored for business transformation and digital success.
            </motion.p>
        </div>
      </div>
    </section>
  )
}
