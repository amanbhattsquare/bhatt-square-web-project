"use client"

import { motion } from "framer-motion"
import Batch from "@/app/components/Batch"

export function ServicesHero() {
  return (
    <div className="relative h-[50vh] md:h-[60vh] flex items-center justify-center text-center text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
        style={{ backgroundImage: "url('/images/about-team.png')" }}
      ></div>
      <div className="absolute inset-0 bg-black/85 backdrop-blur-[2px]"></div>

      <div className="relative z-10 p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Batch title="OUR SERVICES" />
          <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-tight text-shadow-lg">
            Our <span className="text-primary italic">Expertise</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed font-light">
            End-to-end technology solutions tailored for business transformation and digital success.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
