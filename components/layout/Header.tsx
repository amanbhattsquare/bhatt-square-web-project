"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { Menu, Moon, Sun, X, ChevronRight } from "lucide-react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "SERVICES", href: "/services" },
  { name: "PRODUCTS", href: "/products" },
  { name: "ABOUT", href: "/about" },
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
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled 
          ? "py-3" 
          : "py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav 
          className={`relative flex items-center justify-between transition-all duration-500 rounded-[2rem] px-6 py-2 ${
            scrolled 
              ? "bg-background border border-border shadow-xl shadow-black/10" 
              : "bg-background/90 backdrop-blur-xl border border-border/40 shadow-sm"
          }`}
        >
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center group">
              <div className="relative overflow-hidden rounded-xl bg-primary/10 p-1 group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/images/BhattSqureLogo2.png"
                  alt="Bhatt Square Logo"
                  width={34}
                  height={34}
                  className="rounded-lg object-contain"
                />
              </div>
              <div className="ml-2.5 sm:ml-3 block">
                <span className="text-base sm:text-xl font-black tracking-tighter text-foreground group-hover:text-primary transition-colors leading-none block">
                  BHATT<span className="text-primary group-hover:text-foreground"> SQUARE</span>
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
                  className={`relative px-4 py-2 text-sm font-bold transition-all duration-300 rounded-full ${
                    isActive 
                      ? "text-primary" 
                      : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div 
                      layoutId="nav-active"
                      className="absolute inset-0 bg-primary/5 rounded-full -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              )
            })}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
              className="relative h-10 w-10 flex items-center justify-center rounded-xl bg-muted/50 border border-border/50 hover:bg-muted transition-all duration-300 overflow-hidden"
              aria-label="Toggle theme"
            >
              <div className="relative h-5 w-5">
                <motion.div
                  initial={false}
                  animate={{ 
                    y: currentTheme === "dark" ? 0 : 40,
                    opacity: currentTheme === "dark" ? 1 : 0 
                  }}
                  className="absolute inset-0 text-amber-400"
                >
                  <Sun className="h-5 w-5" />
                </motion.div>
                <motion.div
                  initial={false}
                  animate={{ 
                    y: currentTheme === "light" ? 0 : -40,
                    opacity: currentTheme === "light" ? 1 : 0 
                  }}
                  className="absolute inset-0 text-indigo-600"
                >
                  <Moon className="h-5 w-5" />
                </motion.div>
              </div>
            </button>
            <Link 
              href="/contact" 
              className="inline-flex items-center h-10 px-6 rounded-xl bg-primary text-primary-foreground text-sm font-bold transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 active:scale-95"
            >
              GET STARTED
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="lg:hidden flex items-center space-x-2">
             <button
              onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
              className="p-2.5 rounded-xl bg-muted/50 border border-border/50 transition-colors"
              aria-label="Toggle theme"
            >
              {currentTheme === "dark" ? <Sun className="h-5 w-5 text-amber-400" /> : <Moon className="h-5 w-5 text-indigo-600" />}
            </button>
            <button
              onClick={toggleMenu}
              className={`inline-flex items-center justify-center p-2.5 rounded-xl transition-all duration-300 ${
                isMenuOpen ? "bg-primary text-white" : "bg-muted/50 text-foreground border border-border/50 hover:bg-muted"
              }`}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
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
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            />
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 h-screen w-[85%] max-w-sm bg-card border-l border-border z-50 lg:hidden p-6 shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center">
                  <Image
                    src="/images/BhattSqureLogo2.png"
                    alt="Logo"
                    width={32}
                    height={32}
                    className="rounded-lg"
                  />
                  <span className="ml-2 font-black tracking-tighter text-lg">BHATT SQUARE</span>
                </div>
                <button onClick={toggleMenu} className="p-2 rounded-lg bg-muted hover:bg-muted/80">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-2 mb-auto">
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
                      className={`flex items-center justify-between p-4 rounded-2xl text-lg font-bold transition-all ${
                        pathname === link.href ? "bg-primary/10 text-primary" : "hover:bg-muted"
                      }`}
                    >
                      {link.name}
                      <ChevronRight className={`w-5 h-5 ${pathname === link.href ? "text-primary" : "text-muted-foreground/50"}`} />
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <Link 
                  href="/contact" 
                  onClick={toggleMenu}
                  className="w-full flex items-center justify-center p-4 bg-primary text-white rounded-2xl font-black text-center shadow-lg shadow-primary/20"
                >
                  START YOUR PROJECT
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
