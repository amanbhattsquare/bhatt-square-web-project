"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight, Code2, Globe, Laptop, Zap, ChevronDown, Command, Terminal, Cpu } from "lucide-react"
import gsap from "gsap"
import { motion } from "framer-motion"

const useTypewriter = (words: string[], typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000) => {
  const [displayText, setDisplayText] = useState("")
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [text, setText] = useState("")

  useEffect(() => {
    const currentWord = words[wordIndex]
    
    const timeout = setTimeout(() => {
      if (isDeleting) {
        setText(currentWord.substring(0, text.length - 1))
      } else {
        setText(currentWord.substring(0, text.length + 1))
      }

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), pauseTime)
      } else if (isDeleting && text === "") {
        setIsDeleting(false)
        setWordIndex((prev) => (prev + 1) % words.length)
      }

    }, isDeleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(timeout)
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime])

  return text
}

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const visualRef = useRef<HTMLDivElement>(null)
  const btnRef = useRef<HTMLAnchorElement>(null)
  
  const typewriterText = useTypewriter([
    "Digital Future",
    "Scalable SaaS",
    "Modern Apps",
    "User Experience"
  ]);

  // Mouse Interaction for parallax
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!contentRef.current || !visualRef.current) return
    const { clientX, clientY } = e
    const { innerWidth, innerHeight } = window
    
    const x = (clientX / innerWidth - 0.5) * 2 // -1 to 1
    const y = (clientY / innerHeight - 0.5) * 2 // -1 to 1

    gsap.to(contentRef.current, {
        x: x * 10,
        y: y * 10,
        duration: 1,
        ease: "power2.out"
    })

    gsap.to(visualRef.current, {
        rotationY: x * 5,
        rotationX: -y * 5,
        x: -x * 20,
        y: -y * 20,
        duration: 1.2,
        ease: "power2.out"
    })
    
    // Magnetic Button Effect
    if (btnRef.current) {
         const rect = btnRef.current.getBoundingClientRect();
         const btnX = clientX - (rect.left + rect.width / 2);
         const btnY = clientY - (rect.top + rect.height / 2);
         
         if (Math.abs(btnX) < 100 && Math.abs(btnY) < 100) {
             gsap.to(btnRef.current, {
                 x: btnX * 0.15,
                 y: btnY * 0.15,
                 duration: 0.3
             })
         } else {
             gsap.to(btnRef.current, { x: 0, y: 0, duration: 0.3 })
         }
    }
  }

  // Entrance Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
        const tl = gsap.timeline();
        
        tl.from(".hero-badge", { y: -20, opacity: 0, duration: 0.8, ease: "power3.out" })
          .from(".hero-title-line", {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out"
          }, "-=0.4")
          .from(".hero-desc", { y: 20, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.6")
          .from(".hero-btns", { y: 20, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.6")
          .from(".code-window", {
            scale: 0.95,
            opacity: 0,
            y: 30,
            duration: 1.2,
            ease: "power3.out"
          }, "-=0.8")
          .from(".floating-icon", {
              scale: 0,
              opacity: 0,
              duration: 0.6,
              stagger: 0.1,
              ease: "back.out(1.7)"
          }, "-=0.5")
          .from(".scroll-indicator", { opacity: 0, y: -10, duration: 1, repeat: -1, yoyo: true })

    }, heroRef)

    return () => ctx.revert()
  }, [])

  const scrollToContent = () => {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
  }

  return (
    <section 
        ref={heroRef} 
        onMouseMove={handleMouseMove}
        className="relative py-15 pb-15 flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Hero Background System */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Base Background with slight gradient */}
          <div className="absolute inset-0 bg-background"></div>
          
          {/* Main Hero Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-100"
            style={{ backgroundImage: "url('/images/hero-bg.png')" }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
          
          {/* Animated Gradient Orbs */}
          <motion.div 
            animate={{ 
                x: [0, 30, 0],
                y: [0, -50, 0],
                scale: [1, 1.1, 1] 
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-[10%] -left-[10%] w-[60vw] h-[60vw] bg-primary/10 rounded-full blur-[120px]" 
          />
          <motion.div 
            animate={{ 
                x: [0, -40, 0],
                y: [0, 60, 0],
                scale: [1, 1.2, 1] 
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute -bottom-[20%] -right-[10%] w-[50vw] h-[50vw] bg-primary/5 rounded-full blur-[100px]" 
          />
          
          {/* Interactive Layer (moves with mouse) */}
          <div ref={visualRef} className="absolute inset-0 overflow-hidden opacity-30">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.08)_0%,transparent_70%)]"></div>
          </div>

          {/* Industrial Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
          
          {/* Parallax Floating Elements */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                  <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ 
                          opacity: [0, 0.4, 0],
                          y: [0, -100 - (i * 20)],
                          x: [0, (i % 2 === 0 ? 50 : -50)]
                      }}
                      transition={{ 
                          duration: 8 + (i * 2), 
                          repeat: Infinity, 
                          delay: i * 1.5,
                          ease: "linear"
                      }}
                      className="absolute w-1 h-1 bg-primary rounded-full shadow-[0_0_10px_rgba(244,63,94,0.8)]"
                      style={{ 
                          left: `${15 + (i * 15)}%`, 
                          top: `${60 + (i * 5)}%` 
                      }}
                  />
              ))}
          </div>

          {/* Noise & Scanlines Overlay */}
          <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3C/rect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[size:100%_4px,3px_100%] pointer-events-none opacity-[0.2]"></div>

          {/* Darkening layer to ensure text readability */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>

          {/* Technical Geometric Accents */}
          <div className="absolute inset-0 z-0 pointer-events-none">
              {/* Corner Brackets */}
              <div className="absolute top-10 left-10 w-20 h-20 border-t-2 border-l-2 border-primary/20 rounded-tl-3xl"></div>
              <div className="absolute top-10 right-10 w-20 h-20 border-t-2 border-r-2 border-primary/20 rounded-tr-3xl"></div>
              <div className="absolute bottom-10 left-10 w-20 h-20 border-b-2 border-l-2 border-primary/20 rounded-bl-3xl"></div>
              <div className="absolute bottom-10 right-10 w-20 h-20 border-b-2 border-r-2 border-primary/20 rounded-br-3xl"></div>

              {/* Technical Labels */}
              <div className="absolute top-1/2 -left-4 -translate-y-1/2 rotate-90 flex items-center gap-4 opacity-20">
                  <span className="text-[10px] font-mono tracking-[0.5em] text-primary uppercase">System.Core.Initialize</span>
                  <div className="w-12 h-px bg-primary/40"></div>
              </div>
              <div className="absolute top-1/2 -right-4 -translate-y-1/2 -rotate-90 flex items-center gap-4 opacity-20">
                  <span className="text-[10px] font-mono tracking-[0.5em] text-primary uppercase">Bhatt.Square.v2.0</span>
                  <div className="w-12 h-px bg-primary/40"></div>
              </div>
          </div>
      </div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
            
            {/* Text Content */}
            <div ref={contentRef} className="space-y-8">
                 <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-4 shadow-lg shadow-primary/5"
                 >
                    <Cpu className="w-4 h-4 fill-current" />
                    Available for New Projects
                 </motion.div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.9] text-white">
                    <span className="block text-red-glow">
                        We Build
                    </span>
                    <span className="block bg-clip-text text-transparent bg-red-400 animate-gradient bg-[length:200%_auto] min-h-[1.1em]">
                       {typewriterText}
                       <span className="animate-pulse ml-1 text-foreground">|</span>
                    </span>
                </h1>

                <p className="hero-desc text-lg md:text-xl text-white/80 font-medium max-w-2xl mx-auto leading-relaxed">
                    Premium software development services for forward-thinking companies. We combine aesthetic excellence with engineering precision.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                    <Link ref={btnRef} href="/contact" className="btn-primary group">
                        Start a Project <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link href="/services" className="btn-secondary">
                        Our Expertise
                    </Link>
                </div>
            </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        onClick={scrollToContent} 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer group scroll-indicator z-20"
      >
          <div className="flex flex-col items-center gap-2">
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 group-hover:text-primary transition-colors">Scroll</span>
              <ChevronDown className="w-4 h-4 text-muted-foreground/60 group-hover:text-primary transition-colors" />
          </div>
      </div>
    </section>
  )
}