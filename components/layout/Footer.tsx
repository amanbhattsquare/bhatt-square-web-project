"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Twitter, ArrowUpRight, Code2, Send } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background relative border-t border-border overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
      
      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 mb-20">
          
          {/* Brand Column */}
          <div className="md:col-span-12 lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center group mb-6 inline-flex">
              <div className="relative overflow-hidden bg-primary/10 p-1 border border-primary/20 transition-all duration-300">
                <Image
                  src="/images/BhattSqureLogo2.png"
                  alt="Bhatt Square Logo"
                  width={34}
                  height={34}
                  className="object-contain"
                />
              </div>
              <div className="ml-3 block border-l border-border/50 pl-3">
                <span className="text-xl font-display font-black tracking-tighter text-foreground group-hover:text-primary transition-colors leading-[0.8] block uppercase">
                  BHATT<span className="text-primary group-hover:text-foreground transition-colors">SQUARE</span>
                </span>
                <span className="text-[7px] font-black text-muted-foreground uppercase tracking-[0.3em] leading-none mt-1.5 block">
                  Innovate . Scale . Succeed
                </span>
              </div>
            </Link>

            <p className="text-muted-foreground text-sm font-medium leading-relaxed max-w-sm">
              Pioneering digital transformation with scalable SaaS architectures and immersive web experiences. We build the technology that powers tomorrow.
            </p>
            
            <div className="flex items-center space-x-3 pt-2">
               <SocialLink href="https://in.linkedin.com/company/bhatt-square" icon={<Linkedin className="w-4 h-4" />} label="LinkedIn" />
               <SocialLink href="https://twitter.com/bhattsquare" icon={<Twitter className="w-4 h-4" />} label="Twitter" />
               <SocialLink href="https://www.instagram.com/bhattsquare" icon={<Instagram className="w-4 h-4" />} label="Instagram" />
               <SocialLink href="https://www.facebook.com/BhattSquareIT" icon={<Facebook className="w-4 h-4" />} label="Facebook" />
            </div>
          </div>

          {/* Solutions Column */}
          <div className="md:col-span-4 lg:col-span-2">
            <h4 className="text-[10px] font-black tracking-[0.3em] text-primary/60 uppercase mb-6 flex items-center">
              <span className="w-2 h-2 rounded-sm bg-primary/20 border border-primary/40 mr-2"></span>
              SOLUTIONS
            </h4>
            <ul className="space-y-3">
              <FooterLink href="/services">Enterprise Platforms</FooterLink>
              <FooterLink href="/services">SaaS Development</FooterLink>
              <FooterLink href="/services">Cloud Infrastructure</FooterLink>
              <FooterLink href="/services">UI/UX Strategy</FooterLink>
            </ul>
          </div>

          {/* Company Column */}
          <div className="md:col-span-4 lg:col-span-2">
             <h4 className="text-[10px] font-black tracking-[0.3em] text-primary/60 uppercase mb-6 flex items-center">
              <span className="w-2 h-2 rounded-sm bg-primary/20 border border-primary/40 mr-2"></span>
              COMPANY
            </h4>
            <ul className="space-y-3">
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/careers">Careers <span className="inline-block text-[8px] border border-primary/40 bg-primary/10 text-primary px-1.5 py-0.5 ml-2 font-black uppercase tracking-widest">Hiring</span></FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="md:col-span-4 lg:col-span-4">
             <h4 className="text-[10px] font-black tracking-[0.3em] text-primary/60 uppercase mb-6 flex items-center">
              <span className="w-2 h-2 rounded-sm bg-primary/20 border border-primary/40 mr-2"></span>
              COMMUNICATIONS
            </h4>
            <p className="text-sm font-semibold text-muted-foreground mb-4">
              Subscribe to our developer broadcast for architectural insights and system updates.
            </p>
            <form className="flex flex-col space-y-3" onSubmit={(e) => e.preventDefault()}>
              <div className="relative group">
                <input 
                  type="email" 
                  placeholder="name@company.com" 
                  className="w-full bg-background border border-border/80 text-sm font-medium px-4 py-3 placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all duration-300 rounded-none"
                />
                <div className="absolute top-0 right-0 bottom-0 w-1 bg-primary/20 group-hover:bg-primary transition-colors duration-300"></div>
              </div>
              <button className="w-full flex items-center justify-center gap-2 py-3 bg-primary text-primary-foreground text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 group">
                SUBSCRIBE
                <Send className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        {/* Certifications & Recognitions */}
        <div className="py-10 border-t border-border/50">
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
            <Link href="https://www.mca.gov.in/" target="_blank" rel="noopener noreferrer" className="bg-white/90 hover:bg-white transition-colors p-3 rounded flex items-center justify-center w-[140px] h-[60px] grayscale hover:grayscale-0 duration-300 border border-white/20 group hover:shadow-lg hover:-translate-y-1">
              <img src="/images/mca-logo.jpg" alt="Ministry of Corporate Affairs" className="max-h-[45px] object-contain group-hover:scale-105 transition-all duration-300 px-1" />
            </Link>
            
            <Link href="https://gem.gov.in/" target="_blank" rel="noopener noreferrer" className="bg-white/90 hover:bg-white transition-colors p-3 rounded flex items-center justify-center w-[140px] h-[60px] grayscale hover:grayscale-0 duration-300 border border-white/20 group hover:shadow-lg hover:-translate-y-1">
              <img src="/images/gem-logo.jpg" alt="GeM - Government e Marketplace" className="max-h-[45px] object-contain group-hover:scale-105 transition-all duration-300 px-1" />
            </Link>

            <Link href="https://www.iso.org/iso-9001-quality-management.html" target="_blank" rel="noopener noreferrer" className="bg-white/90 hover:bg-white transition-colors p-3 rounded flex items-center justify-center w-[160px] h-[60px] grayscale hover:grayscale-0 duration-300 border border-white/20 group hover:shadow-lg hover:-translate-y-1">
              <img src="/images/iso-logo.jpg" alt="ISO 9001:2015 Certified" className="max-h-[45px] object-contain group-hover:scale-105 transition-all duration-300 px-1" />
            </Link>

            <Link href="https://www.startupindia.gov.in/" target="_blank" rel="noopener noreferrer" className="bg-white/90 hover:bg-white transition-colors p-3 rounded flex items-center justify-center w-[140px] h-[60px] grayscale hover:grayscale-0 duration-300 border border-white/20 group hover:shadow-lg hover:-translate-y-1">
              <img src="/images/startup-india-logo.jpg" alt="Startup India" className="max-h-[45px] object-contain group-hover:scale-105 transition-all duration-300 px-1" />
            </Link>

            <Link href="https://msme.gov.in/" target="_blank" rel="noopener noreferrer" className="bg-white/90 hover:bg-white transition-colors p-3 rounded flex items-center justify-center w-[140px] h-[60px] grayscale hover:grayscale-0 duration-300 border border-white/20 group hover:shadow-lg hover:-translate-y-1">
              <img src="/images/msme-logo.jpg" alt="MSME" className="max-h-[45px] object-contain group-hover:scale-105 transition-all duration-300 px-1" />
            </Link>

            <Link href="https://digitalindia.gov.in/" target="_blank" rel="noopener noreferrer" className="bg-white/90 hover:bg-white transition-colors p-3 rounded flex items-center justify-center w-[140px] h-[60px] grayscale hover:grayscale-0 duration-300 border border-white/20 group hover:shadow-lg hover:-translate-y-1">
              <img src="/images/digital-india-logo.jpg" alt="Digital India" className="max-h-[45px] object-contain group-hover:scale-105 transition-all duration-300 px-1" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase text-center md:text-left flex flex-wrap items-center justify-center md:justify-start gap-1">
            &copy; {currentYear} BHATT SQUARE PVT. LTD. <span className="opacity-50">||</span> ALL RIGHTS RESERVED.
            <Link href="https://www.linkedin.com/in/amanktyr" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors ml-1 inline-flex items-center" aria-label="Developed by Aman Ktyr">
              <Code2 className="w-3 h-3 text-primary/60 hover:text-primary transition-all inline" />
            </Link>
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-[9px] font-black tracking-[0.2em] uppercase text-muted-foreground">
             <Link href="/terms" className="hover:text-primary transition-colors">TERMS</Link>
             <Link href="/privacy" className="hover:text-primary transition-colors">PRIVACY</Link>
             <Link href="/cookies" className="hover:text-primary transition-colors">COOKIES</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) {
  return (
    <Link 
      href={href} 
      className="w-8 h-8 flex items-center justify-center border border-border/50 bg-background text-muted-foreground hover:border-primary/50 hover:bg-primary/5 hover:text-primary transition-all duration-300" 
      aria-label={label}
    >
      {icon}
    </Link>
  )
}

function FooterLink({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="group inline-flex items-center text-xs font-bold text-foreground/70 hover:text-primary transition-colors duration-300">
        <ArrowUpRight className="w-3 h-3 mr-2 opacity-50 text-primary group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
        <span className="uppercase tracking-wider">{children}</span>
      </Link>
    </li>
  )
}