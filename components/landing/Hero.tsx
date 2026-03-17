"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight, Code2, Globe, Laptop, Zap, ChevronDown, Command, Terminal, Cpu } from "lucide-react"
import gsap from "gsap"

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
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-5 pb-10 bg-background perspective-1000"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[100px] mix-blend-screen animate-pulse-slow delay-1000"></div>
          <div className="absolute top-[40%] left-[20%] w-[300px] h-[300px] bg-rose-500/5 rounded-full blur-[80px] mix-blend-screen"></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Text Content */}
            <div ref={contentRef} className="space-y-8 max-w-2xl relative z-20">
                 <div className="hero-badge inline-flex items-center px-3 py-1 rounded-full border border-border bg-muted/50 backdrop-blur-md text-foreground/80 text-xs font-medium uppercase tracking-wider shadow-sm">
                   <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                   Available for New Projects
                 </div>

                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
                    <span className="hero-title-line block">
                        We Build
                    </span>
                    <span className="hero-title-line block bg-clip-text text-transparent bg-gradient-to-r from-primary via-indigo-500 to-rose-500 animate-gradient bg-[length:200%_auto] min-h-[1.1em]">
                       {typewriterText}
                       <span className="animate-pulse ml-1 text-foreground">|</span>
                    </span>
                </h1>

                <p className="hero-desc text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
                    Premium software development services for forward-thinking companies. We combine aesthetic excellence with engineering precision.
                </p>

                <div className="hero-btns flex flex-wrap gap-4 pt-2">
                    <Link ref={btnRef} href="/contact" className="btn-primary">
                        Start a Project <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link href="/services" className="btn-secondary">
                        Our Expertise
                    </Link>
                </div>
                
                <div className="hero-desc flex items-center gap-8 pt-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Trust indicators/Logos could go here */}
                    {/* Placeholder for now */}
                    <div className="text-xs font-mono text-muted-foreground">TRUSTED BY INNOVATORS WORLDWIDE</div>
                </div>
            </div>

            {/* Visual Content */}
            <div ref={visualRef} className="relative hidden lg:flex items-center justify-center transform-style-3d">
                
                {/* Main Code Window */}
                <div className="code-window relative z-10 w-full max-w-lg bg-[#0d1117]/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl shadow-black/20 overflow-hidden ring-1 ring-white/5">
                    {/* Window Header */}
                    <div className="flex items-center px-4 py-3 border-b border-white/5 bg-white/5">
                        <div className="flex space-x-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                        </div>
                        <div className="mx-auto text-xs text-rose-600 font-mono text-muted-foreground flex items-center gap-2">
                            <Command className="w-3 h-3" /> bhatt_square_engine.tsx
                        </div>
                    </div>

                    {/* Window Body */}
                    <div className="p-6 font-mono text-sm leading-relaxed overflow-hidden text-white">
                        <div className="flex text-blue-400">
                            <span className="text-purple-400 mr-2">import</span> 
                            {"{ Future }"} 
                            <span className="text-purple-400 mx-2">from</span> 
                            <span className="text-green-400">'@bhatt-square/core'</span>;
                        </div>
                        <div className="h-4"></div>
                        <div>
                            <span className="text-purple-400">export const</span> 
                            <span className="text-yellow-400 ml-2">App</span> 
                            <span className="text-white"> = </span>
                            <span className="text-blue-400">async</span>
                             {" () => {"}
                        </div>
                        <div className="pl-4 border-l border-white/5 ml-1">
                             <span className="text-purple-400">const</span> solution = 
                             <span className="text-rose-400"> await</span> Future.build({"{"}
                        </div>
                        <div className="pl-8 text-gray-400">
                            performance: <span className="text-green-400">'100%'</span>,
                        </div>
                        <div className="pl-8 text-gray-400">
                            design: <span className="text-green-400">'Award-Winning'</span>,
                        </div>
                        <div className="pl-8 text-gray-400">
                            scalability: <span className="text-blue-400">Infinity</span>,
                        </div>
                        <div className="pl-4 border-l border-white/5 ml-1">
                            {"});"}
                        </div>
                        <div className="pl-4 border-l border-white/5 ml-1 h-4"></div>
                        <div className="pl-4 border-l border-white/5 ml-1">
                            <span className="text-purple-400">return</span> solution.launch();
                        </div>
                        <div>{"}"}</div>
                    </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -right-8 -top-8 floating-icon p-4 bg-background/80 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl animate-float" style={{ animationDelay: '0s' }}>
                    <div className="bg-indigo-500/20 p-3 rounded-xl">
                        <Globe className="w-6 h-6 text-indigo-500" />
                    </div>
                </div>
                
                <div className="absolute -left-12 bottom-12 floating-icon p-4 bg-background/80 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl animate-float" style={{ animationDelay: '1.5s' }}>
                    <div className="bg-rose-500/20 p-3 rounded-xl">
                        <Cpu className="w-6 h-6 text-rose-500" />
                    </div>
                </div>

                <div className="absolute right-0 bottom-[-20px] floating-icon px-5 py-3 bg-background/80 backdrop-blur-md rounded-full border border-white/10 shadow-xl animate-float flex items-center gap-3" style={{ animationDelay: '0.8s' }}>
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-xs font-bold">System Nominal</span>
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