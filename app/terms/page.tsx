"use client"

import { motion } from "framer-motion";
import { 
  FileText, 
  Shield, 
  Handshake, 
  Scale, 
  ShoppingCart, 
  CreditCard, 
  AlertTriangle, 
  Gavel, 
  Ban, 
  Info, 
  ArrowRight, 
  Mail, 
  MapPin, 
  Phone,
  Cpu,
  RefreshCw,
  Clock,
  ExternalLink
} from "lucide-react";
import Link from "next/link";

const sections = [
  { id: "agreement", title: "Agreement to Terms", icon: Handshake },
  { id: "services", title: "1. Our Services", icon: Cpu },
  { id: "ip", title: "2. Intellectual Property", icon: Shield },
  { id: "representations", title: "3. User Representations", icon: Info },
  { id: "registration", title: "4. User Registration", icon: FileText },
  { id: "purchases", title: "5. Purchases & Payment", icon: ShoppingCart },
  { id: "subscriptions", title: "6. Subscriptions", icon: RefreshCw },
  { id: "prohibited", title: "7. Prohibited Activities", icon: Ban },
  { id: "termination", title: "13. Term & Termination", icon: Clock },
  { id: "governing", title: "15. Governing Law", icon: Gavel },
  { id: "disclaimer", title: "18. Disclaimer", icon: AlertTriangle },
  { id: "contact", title: "25. Contact Us", icon: Mail },
];

export default function TermsOfService() {
  return (
    <main className="flex min-h-screen flex-col pt-6 bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-20 pb-20 overflow-hidden bg-background">
        <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-10 shadow-lg shadow-primary/5"
            >
              <Scale className="w-4 h-4" />
              LEGAL FRAMEWORK
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1, ease: "circOut" }}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.9] mb-8"
            >
              Terms of <span className="text-primary italic text-red-glow">Service</span>
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm font-bold uppercase tracking-widest text-muted-foreground"
            >
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                LAST UPDATED: DECEMBER 30, 2025
              </span>
              <span className="hidden md:block opacity-30">|</span>
              <span className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-primary" />
                VERSION 2.1.0
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Table of Contents - Sticky Sidebar */}
            <aside className="lg:col-span-4 hidden lg:block">
              <div className="sticky top-24 space-y-8">
                <div className="p-6 industrial-border bg-card">
                  <h3 className="text-sm font-black tracking-[0.2em] uppercase mb-6 flex items-center">
                    <div className="w-2 h-2 bg-primary mr-2" />
                    Agreement Index
                  </h3>
                  <nav className="space-y-1">
                    {sections.map((section) => (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        className="group flex items-center gap-3 py-2 text-[10px] font-bold uppercase tracking-wider text-muted-foreground hover:text-primary transition-all underline-offset-4 hover:underline"
                      >
                        <section.icon className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100" />
                        {section.title}
                      </a>
                    ))}
                  </nav>
                </div>

                <div className="p-6 industrial-border bg-primary/5 border-primary/20">
                  <h4 className="text-xs font-black uppercase tracking-widest mb-3">Compliance</h4>
                  <p className="text-xs text-muted-foreground font-semibold mb-4 leading-relaxed">
                    By accessing Bhatt Square services, you irrevocably agree to these terms.
                  </p>
                  <a href="/contact" className="flex items-center gap-2 text-[10px] font-black text-primary uppercase tracking-widest hover:gap-3 transition-all">
                    GET CLARIFICATION <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </aside>

            {/* Policy Body */}
            <div className="lg:col-span-8 space-y-16">
              
              {/* Introduction */}
              <div id="agreement" className="prose prose-invert max-w-none scroll-mt-24">
                <div className="p-8 industrial-border bg-card mb-12 relative overflow-hidden group">
                  <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-primary/10 border border-primary/20 text-primary">
                        <Handshake className="w-5 h-5" />
                      </div>
                      <h2 className="text-2xl font-black uppercase tracking-tighter m-0">Agreement to Our Legal Terms</h2>
                    </div>
                    <p className="text-muted-foreground font-medium leading-relaxed">
                      We are <strong className="text-foreground">Bhatt Square Pvt. Ltd.</strong>, doing business as Bhatt Square Pvt. Ltd. ("Company," "we," "us," "our"), a company registered in India at Gomti Nagar, Lucknow, Up, India 226022.
                    </p>
                    <p className="text-muted-foreground font-medium leading-relaxed">
                      We operate the website <a href="https://squarefit.alwaysdata.net/" className="text-primary hover:underline">https://squarefit.alwaysdata.net/</a> (the "Site"), as well as any other related products and services that refer or link to these legal terms (the "Legal Terms") (collectively, the "Services").
                    </p>
                    <div className="mt-8 p-6 bg-red-500/5 border border-red-500/20">
                      <h4 className="text-red-500 text-xs font-black uppercase tracking-[0.2em] mb-2">IMPORTANT NOTICE</h4>
                      <p className="text-xs text-muted-foreground font-semibold m-0 leading-relaxed uppercase">
                        These Legal Terms constitute a legally binding agreement made between you and Bhatt Square Pvt. Ltd. concerning your access to and use of the Services. By accessing the Services, you agree to be bound by all of these Legal Terms. If you do not agree, you are expressly prohibited from using the Services.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-muted/20 border-l-4 border-primary">
                  <h4 className="text-xs font-black uppercase tracking-widest mb-2 text-foreground">Minors</h4>
                  <p className="text-xs text-muted-foreground font-medium m-0 leading-relaxed">
                    All users who are minors in the jurisdiction in which they reside (generally under the age of 18) must have the permission of, and be directly supervised by, their parent or guardian to use the Services.
                  </p>
                </div>

                {/* Content Sections */}
                <div className="space-y-20 mt-20">
                  
                  {/* Section 1 */}
                  <div id="services" className="scroll-mt-24">
                    <h3 className="text-2xl font-black uppercase tracking-tighter mb-6 flex items-center gap-3">
                      <span className="text-primary">01.</span> Our Services
                    </h3>
                    <div className="space-y-6 text-muted-foreground font-medium text-sm leading-relaxed">
                      <p>
                        The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement.
                      </p>
                      <p>
                        Accordingly, those persons who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws.
                      </p>
                    </div>
                  </div>

                  {/* Section 2 */}
                  <div id="ip" className="scroll-mt-24">
                    <h3 className="text-2xl font-black uppercase tracking-tighter mb-6 flex items-center gap-3">
                      <span className="text-primary">02.</span> Intellectual Property Rights
                    </h3>
                    <div className="space-y-6 text-muted-foreground font-medium text-sm leading-relaxed">
                      <div className="p-6 bg-card industrial-border">
                        <h4 className="text-sm font-black uppercase tracking-wider text-foreground mb-3">Our Intellectual Property</h4>
                        <p>
                          We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the "Content"), as well as the trademarks, service marks, and logos contained therein (the "Marks").
                        </p>
                      </div>
                      
                      <h4 className="text-sm font-black uppercase tracking-wider text-foreground">Your Use of Our Services</h4>
                      <p>Subject to compliance, we grant you a non-exclusive, non-transferable, revocable license to access the Services and download Content solely for personal, non-commercial use.</p>
                      
                      <div className="p-4 bg-primary/5 border-l-2 border-primary italic text-xs font-semibold">
                        Except as set out in this section, no part of the Services and no Content or Marks may be copied or exploited for any commercial purpose whatsoever without express prior written permission.
                      </div>

                      <h4 className="text-sm font-black uppercase tracking-wider text-foreground">Your Submissions</h4>
                      <p>By directly sending us any feedback or ideas ("Submissions"), you agree to assign to us all intellectual property rights in such Submission. We shall own this Submission and be entitled to its unrestricted use.</p>
                    </div>
                  </div>

                  {/* Section 3 */}
                  <div id="representations" className="scroll-mt-24">
                    <h3 className="text-2xl font-black uppercase tracking-tighter mb-6 flex items-center gap-3">
                      <span className="text-primary">03.</span> User Representations
                    </h3>
                    <div className="space-y-4 text-muted-foreground font-medium text-sm leading-relaxed">
                      <p>By using the Services, you represent and warrant that:</p>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          "Information provided is true and accurate",
                          "You will maintain the accuracy of data",
                          "You have the legal capacity to comply",
                          "You are not a minor (or have permission)",
                          "No use of automated/non-human means",
                          "No illegal or unauthorized purpose"
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-3 p-3 bg-card border border-border text-[11px] font-bold uppercase tracking-wider">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Section 4 & 5 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div id="registration" className="scroll-mt-24 p-6 industrial-border bg-card">
                      <h4 className="text-lg font-black uppercase tracking-tight mb-4 flex items-center gap-2">
                        <FileText className="w-5 h-5 text-primary" />
                        04. User Registration
                      </h4>
                      <p className="text-xs text-muted-foreground font-medium leading-relaxed">
                        You may be required to register. You agree to keep your password confidential and are responsible for all use of your account. We reserve the right to remove obscene or objectionable usernames.
                      </p>
                    </div>
                    <div id="purchases" className="scroll-mt-24 p-6 industrial-border bg-card">
                      <h4 className="text-lg font-black uppercase tracking-tight mb-4 flex items-center gap-2">
                        <ShoppingCart className="w-5 h-5 text-primary" />
                        05. Purchases & Payment
                      </h4>
                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                          {["Visa", "Mastercard", "Amex", "UPI", "Net Banking"].map(m => (
                            <span key={m} className="px-2 py-1 bg-muted border border-border text-[9px] font-black uppercase tracking-tighter">{m}</span>
                          ))}
                        </div>
                        <p className="text-xs text-muted-foreground font-medium leading-relaxed m-0">
                          All payments shall be in Indian Rupee (INR). Sales tax will be added as required.
                        </p>
                      </div>
                    </div>
                  </div>

                   {/* Section 6 */}
                   <div id="subscriptions" className="scroll-mt-24">
                    <h3 className="text-2xl font-black uppercase tracking-tighter mb-6 flex items-center gap-3">
                      <span className="text-primary">06.</span> Subscriptions
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="p-5 industrial-border bg-muted/20">
                         <h5 className="text-xs font-black uppercase tracking-widest text-foreground mb-2">Billing & Renewal</h5>
                         <p className="text-[11px] text-muted-foreground font-medium leading-relaxed">Subscriptions automatically renew unless canceled. You consent to recurring charges without prior approval for each charge.</p>
                      </div>
                      <div className="p-5 industrial-border bg-primary/5 border-primary/20">
                         <h5 className="text-xs font-black uppercase tracking-widest text-primary mb-2">30-Day Free Trial</h5>
                         <p className="text-[11px] text-muted-foreground font-medium leading-relaxed">Offered to new users. Accounts are charged according to chosen subscription at the end of the trial period.</p>
                      </div>
                    </div>
                    <div className="mt-6 p-6 industrial-border bg-card">
                      <p className="text-[11px] text-muted-foreground font-medium m-0">
                        <strong className="text-foreground uppercase tracking-widest">Cancellation:</strong> Cancel anytime by contacting us. Cancellation takes effect at the end of the current term.
                      </p>
                    </div>
                  </div>

                  {/* Section 7 - Prohibited */}
                  <div id="prohibited" className="scroll-mt-24 industrial-border p-8 bg-black/40">
                    <h3 className="text-xl font-black uppercase tracking-tight mb-6 flex items-center gap-3">
                      <Ban className="w-5 h-5 text-primary" />
                      07. Prohibited Activities
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                       {[
                         "Systematic data retrieval/scraping",
                         "Defrauding or misleading other users",
                         "Circumventing security features",
                         "Tarnishing or harming the company reputation",
                         "Harassing or abusing other persons",
                         "Improper use of support services"
                       ].map((item, i) => (
                         <div key={i} className="flex gap-3 text-[10px] items-start font-bold uppercase tracking-wider text-muted-foreground">
                           <AlertTriangle className="w-3 h-3 text-primary shrink-0" />
                           {item}
                         </div>
                       ))}
                    </div>
                  </div>

                  {/* Termination & Law */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div id="termination" className="scroll-mt-24 p-8 industrial-border bg-red-500/5 border-red-500/10">
                      <h4 className="text-sm font-black uppercase tracking-widest text-red-500 mb-4 flex items-center gap-2">
                        <Clock className="w-4 h-4" /> 13. Term & Termination
                      </h4>
                      <p className="text-xs text-muted-foreground font-medium leading-relaxed">
                        We reserve the right to deny access (including blocking IP addresses) at our sole discretion, without notice or liability, for breach of any representation or warranty.
                      </p>
                    </div>
                    <div id="governing" className="scroll-mt-24 p-8 industrial-border bg-card">
                      <h4 className="text-sm font-black uppercase tracking-widest mb-4 flex items-center gap-2">
                        <Gavel className="w-4 h-4 text-primary" /> 15. Governing Law
                      </h4>
                      <p className="text-xs text-muted-foreground font-medium leading-relaxed">
                        These Legal Terms shall be governed by the laws of <strong className="text-foreground">India</strong>. Exclusive jurisdiction for any dispute resides in the courts of India.
                      </p>
                    </div>
                  </div>

                   {/* Disclaimer */}
                   <div id="disclaimer" className="scroll-mt-24 p-10 industrial-border bg-card/60 relative overflow-hidden text-center">
                    <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none" />
                    <h3 className="text-2xl font-black uppercase tracking-tighter mb-4 text-primary">
                      18. Disclaimer
                    </h3>
                    <p className="text-sm font-bold uppercase tracking-widest max-w-2xl mx-auto leading-relaxed text-muted-foreground">
                      SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. USE OF SERVICES IS AT YOUR SOLE RISK. WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY AND NON-INFRINGEMENT.
                    </p>
                  </div>

                  {/* Section 25 - Contact */}
                  <div id="contact" className="scroll-mt-24 p-12 industrial-border bg-card relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-10">
                      <Mail className="w-24 h-24" />
                    </div>
                    <h3 className="text-2xl font-black uppercase tracking-tighter mb-8">
                      25. <span className="text-primary">Contact</span> Us
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                      <div className="space-y-6">
                        <div className="flex items-start gap-4">
                          <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                          <div>
                            <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-2">Registered Address</h5>
                            <p className="text-sm font-bold m-0 leading-relaxed uppercase">
                              Bhatt Square Pvt. Ltd.<br />
                              Gomti Nagar, Lucknow<br />
                              Uttar Pradesh, India 226022
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div className="flex items-start gap-4">
                          <Mail className="w-5 h-5 text-primary shrink-0 mt-1" />
                          <div>
                            <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-2">System Support</h5>
                            <p className="text-sm font-bold m-0 text-primary uppercase tracking-widest underline decoration-2 underline-offset-4">
                              bhattsquare1@gmail.com
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div className="flex items-start gap-4">
                          <Phone className="w-5 h-5 text-primary shrink-0 mt-1" />
                          <div>
                            <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-2">Direct Line</h5>
                            <p className="text-sm font-bold m-0 uppercase tracking-widest">
                              +91 9205983996
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Footer content */}
                  <div className="pt-10 border-t border-border flex flex-col items-center text-center gap-4">
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-[0.2em]">
                      &copy; 2026 BHATT SQUARE PVT. LTD. ALL RIGHTS RESERVED.
                    </p>
                    <div className="flex gap-4">
                      <Link href="/terms" className="text-[10px] font-black text-primary uppercase tracking-widest">Terms & Conditions</Link>
                      <span className="opacity-20">|</span>
                      <Link href="/privacy" className="text-[10px] font-black text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest">Privacy Policy</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-border/50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-4xl font-black uppercase tracking-tighter">
              Ready to <span className="text-primary">Deploy?</span>
            </h2>
            <p className="text-muted-foreground font-medium leading-relaxed">
              Acceptance of these terms ensures a secure and standardized environment for all your digital transformations.
            </p>
            <div className="flex justify-center gap-4 pt-4">
              <Link href="/contact" className="px-6 py-3 bg-primary text-primary-foreground text-[10px] font-black uppercase tracking-[0.2em] hover:bg-primary/90 transition-all flex items-center gap-2">
                START PARTNERSHIP <ExternalLink className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
