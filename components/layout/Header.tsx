"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { Menu, Moon, Sun, X, ChevronRight, Cpu } from "lucide-react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about" },
  { name: "SERVICES", href: "/services" },
  { name: "PRODUCTS", href: "/products" },
  
  { name: "CONTACT", href: "/contact" },
]

export function Header() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  React.useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const currentTheme = mounted ? resolvedTheme : "light"

  return (
    <header 
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? "bg-background/95 backdrop-blur-md border-b border-border/60 shadow-md" 
          : "bg-gradient-to-b from-background/90 to-transparent border-b border-border/10"
      }`}
    >
      {/* Top accent bar to convey structural/industrial vibe */}
      <div className="h-1 w-full bg-primary origin-left scale-x-100" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center group">
              <div className="relative overflow-hidden bg-primary/10 p-1 border border-primary/20 transition-all duration-300">
                <Image
                  src="/images/BhattSqureLogo2.png"
                  alt="Bhatt Square Logo"
                  width={34}
                  height={34}
                  className="object-contain"
                />
              </div>
              <div className="ml-3 sm:ml-4 block border-l border-border/40 pl-3">
                <span className="text-xl sm:text-2xl font-display font-black tracking-tighter text-foreground group-hover:text-primary transition-colors leading-[0.8] block uppercase">
                  BHATT<span className="text-primary group-hover:text-foreground">SQUARE</span>
                </span>
                <span className="text-[8px] sm:text-[10px] font-bold text-muted-foreground uppercase tracking-widest leading-none mt-1 block">
                  Innovate . Scale . Succeed
                </span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link 
                  key={link.name}
                  href={link.href} 
                  className={`relative px-5 py-2 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 overflow-hidden group ${
                    isActive ? "text-primary" : "text-foreground/60 hover:text-foreground"
                  }`}
                >
                  {/* Hover background */}
                  <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  
                  <span className="relative z-10">{link.name}</span>
                  
                  {/* Active Indicator Line */}
                  {isActive && (
                    <motion.div 
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"
                    />
                  )}
                </Link>
              )
            })}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
              className="relative h-10 w-10 flex items-center justify-center bg-transparent border border-border/50 hover:border-primary/50 transition-all duration-300 overflow-hidden"
              aria-label="Toggle theme"
            >
              <div className="relative h-4 w-4">
                <motion.div
                  initial={false}
                  animate={{ y: currentTheme === "dark" ? 0 : 30, opacity: currentTheme === "dark" ? 1 : 0 }}
                  className="absolute inset-0 text-amber-400"
                >
                  <Sun className="h-4 w-4" />
                </motion.div>
                <motion.div
                  initial={false}
                  animate={{ y: currentTheme === "light" ? 0 : -30, opacity: currentTheme === "light" ? 1 : 0 }}
                  className="absolute inset-0 text-indigo-400"
                >
                  <Moon className="h-4 w-4" />
                </motion.div>
              </div>
            </button>
            <Link 
              href="/contact" 
              className="inline-flex items-center h-10 px-6 bg-primary text-primary-foreground text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(244,63,94,0.2)] hover:-translate-y-0.5"
            >
               {/* <Cpu className="w-3 h-3 mr-2" /> */}
               GET IN TOUCH
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="lg:hidden flex items-center space-x-3">
             <button
              onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
              className="p-2.5 border border-border/50 transition-colors"
            >
              {currentTheme === "dark" ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4 text-indigo-400" />}
            </button>
            <button
              onClick={toggleMenu}
              className={`p-2.5 transition-all duration-300 ${
                isMenuOpen ? "bg-primary text-white" : "border border-border/50 text-foreground hover:border-primary/50"
              }`}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
            />
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-screen w-full max-w-sm bg-background border-l border-border/50 z-50 lg:hidden flex flex-col"
            >
              <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none" />
              
              <div className="relative z-10 flex items-center justify-between p-6 border-b border-border/50">
                <div className="flex items-center">
                  <div className="bg-primary/10 p-1 border border-primary/20">
                    <Image src="/images/BhattSqureLogo2.png" alt="Logo" width={28} height={28} />
                  </div>
                  <span className="ml-3 font-display font-black tracking-tighter text-lg uppercase">BHATT SQUARE</span>
                </div>
                <button onClick={toggleMenu} className="p-2 bg-muted/50 hover:bg-muted border border-border/50 transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative z-10 flex flex-col p-6 space-y-2 mb-auto">
                <p className="text-[9px] font-black uppercase tracking-[0.3em] text-primary mb-4">SYSTEM DIRECTORY</p>
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link 
                      href={link.href} 
                      onClick={toggleMenu}
                      className={`group flex items-center justify-between p-4 border transition-all duration-300 ${
                        pathname === link.href 
                          ? "border-primary/50 bg-primary/5 text-primary" 
                          : "border-border/30 hover:border-primary/50 hover:bg-primary/5"
                      }`}
                    >
                      <span className="text-sm font-black uppercase tracking-[0.1em]">{link.name}</span>
                      <ChevronRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${pathname === link.href ? "text-primary" : "text-muted-foreground"}`} />
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="relative z-10 p-6 border-t border-border/50 bg-muted/20">
                <Link 
                  href="/contact" 
                  onClick={toggleMenu}
                  className="w-full flex items-center justify-center p-4 bg-primary text-primary-foreground font-black text-[10px] uppercase tracking-[0.2em] shadow-lg shadow-primary/20 hover:bg-primary/90 transition-colors"
                >
                  <Cpu className="w-3 h-3 mr-2" />
                  GET IN TOUCH
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
