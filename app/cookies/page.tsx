"use client"

import { motion } from "framer-motion";
import { Cookie, Shield, Info, ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function CookiePolicy() {
  return (
    <main className="flex min-h-screen flex-col pt-6 bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-20 pb-20 overflow-hidden bg-background">
        <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-10 shadow-lg shadow-primary/5"
            >
              <Cookie className="w-4 h-4" />
              USER PREFERENCES
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1, ease: "circOut" }}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.9] mb-8"
            >
              Cookie <span className="text-primary italic text-red-glow">Policy</span>
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex items-center justify-center gap-4 text-sm font-bold uppercase tracking-widest text-muted-foreground"
            >
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                LAST UPDATED: APRIL 13, 2026
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-muted/30 flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="p-12 industrial-border bg-card space-y-8">
              <div className="flex items-center gap-4 mb-8 border-b border-border pb-6">
                <div className="w-12 h-12 bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Info className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-black uppercase tracking-tight">Cookie Usage</h3>
                  <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">How we use telemetry and local storage</p>
                </div>
              </div>

              <div className="space-y-6 text-muted-foreground font-medium leading-relaxed">
                <p>
                  At <strong className="text-foreground">Bhatt Square</strong>, we use cookies and similar tracking technologies to enhance your experience, analyze our site traffic, and understand where our visitors are coming from.
                </p>
                
                <div className="space-y-4">
                  <h4 className="text-sm font-black text-foreground uppercase tracking-widest">1. Essential Cookies</h4>
                  <p className="text-xs">These are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services.</p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-sm font-black text-foreground uppercase tracking-widest">2. Performance Cookies</h4>
                  <p className="text-xs">These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular.</p>
                </div>

                <div className="p-6 bg-primary/5 border border-primary/20 italic text-xs">
                  Note: You can set your browser to block or alert you about these cookies, but some parts of the site will not then work.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
