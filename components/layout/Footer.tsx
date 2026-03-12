"use client"

import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, Mail, MapPin, Phone, ArrowUpRight, Heart, Code2 } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="inline-block group">
              <span className="text-2xl font-extrabold tracking-tight text-foreground">
                Bhatt<span className="text-primary group-hover:underline decoration-primary underline-offset-4">Square</span>
              </span>
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Pioneering digital transformation with scalable SaaS architectures and immersive web experiences. We build the technology that powers tomorrow.
            </p>
            <div className="flex items-center space-x-4">
               <SocialLink href="#" icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" />
               <SocialLink href="#" icon={<Twitter className="w-5 h-5" />} label="Twitter" />
               <SocialLink href="#" icon={<Instagram className="w-5 h-5" />} label="Instagram" />
               <SocialLink href="#" icon={<Facebook className="w-5 h-5" />} label="Facebook" />
            </div>
          </div>

          {/* Solution Column */}
          <div>
            <h4 className="font-bold text-foreground mb-6">Solutions</h4>
            <ul className="space-y-4 text-muted-foreground">
              <FooterLink href="/services">Enterprise Platforms</FooterLink>
              <FooterLink href="/services">SaaS Development</FooterLink>
              <FooterLink href="/services">Cloud Infrastructure</FooterLink>
              <FooterLink href="/services">UI/UX Strategy</FooterLink>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-bold text-foreground mb-6">Company</h4>
            <ul className="space-y-4 text-muted-foreground">
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/careers">Careers <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full ml-2">Hiring</span></FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="font-bold text-foreground mb-6">Stay Updated</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to our newsletter for the latest tech insights and company updates.
            </p>
            <form className="flex flex-col space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-muted/50 border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
              <button className="bg-primary text-primary-foreground font-medium rounded-lg px-4 py-3 text-sm hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            &copy; {currentYear} Bhatt Square Pvt. Ltd. All rights reserved.
            <Link href="https://www.linkedin.com/in/amanktyr" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors ml-2" aria-label="Developed by Aman Ktyr, a software developer. View profile on LinkedIn. developer Aman Ktyr" title="Developed by Aman Ktyr, a software developer.">
              <Code2 className="w-4 h-4 text-primary/60 group-hover:text-primary group-hover:rotate-3 transition-all inline" />
            </Link>
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
             <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
             <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
             <Link href="/cookies" className="hover:text-foreground transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) {
  return (
    <Link href={href} className="w-10 h-10 flex items-center justify-center rounded-full bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary hover:scale-110 transition-all duration-300" aria-label={label}>
      {icon}
    </Link>
  )
}

function FooterLink({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="group inline-flex items-center hover:text-primary transition-colors">
        {children}
        <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
      </Link>
    </li>
  )
}