"use client"

import { Mail, MapPin, Phone, Cpu, Clock, ArrowUpRight, Zap, Globe, MessageSquare, FileSearch, Rocket, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { ContactForm } from "@/components/contact/ContactForm";

const contactInfo = [
  {
    icon: Mail,
    label: "EMAIL",
    value: "support@bhattsquare.com",
    href: "mailto:support@bhattsquare.com",
  },
  {
    icon: Phone,
    label: "PHONE",
    value: "+91 92059 83996",
    href: "tel:+919205983996",
  },
  {
    icon: MapPin,
    label: "HEADQUARTERS",
    value: "1/4, Vishesh khand, gomti nagar, lucknow",
  },
  {
    icon: Clock,
    label: "WORKING HOURS",
    value: "Mon - Sat : 10:00 AM - 7:00 PM",
  },
];

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col pt-6">
      {/* Hero Section */}
      <section className="relative py-15 pb-15 overflow-hidden bg-background">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
          style={{ backgroundImage: "url('/images/about-team.png')" }}
        ></div>
        <div className="absolute inset-0 bg-black/85 backdrop-blur-[2px]"></div>

        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[160px] animate-pulse"></div>
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
              GET IN TOUCH
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1, ease: "circOut" }}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.9] mb-8 text-white"
            >
              Contact <span className="text-primary italic text-red-glow">Us</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl text-white/80 font-medium max-w-2xl mx-auto leading-relaxed"
            >
              Have a project in mind? We'd love to hear from you. Our team is ready to assist you with your inquiries.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-25 pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left: Contact Info + Map */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Contact Info Cards */}
              <div className="space-y-4">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/60 mb-2">DIRECT CHANNELS</p>
                
                {contactInfo.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i + 0.5 }}
                    className="group industrial-border bg-card p-5 flex items-start gap-4 overflow-hidden transition-all duration-500 hover:shadow-lg hover:shadow-primary/5 relative"
                  >
                    <div className="absolute inset-0 dot-grid opacity-15 group-hover:opacity-30 transition-opacity pointer-events-none" />
                    
                    <div className="relative z-10 flex-shrink-0 p-3 rounded-xl bg-primary/5 border border-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div className="relative z-10 min-w-0">
                      <p className="text-[9px] font-black uppercase tracking-[0.3em] text-primary/50 mb-1">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-sm font-bold text-foreground hover:text-primary transition-colors break-all">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm font-bold text-foreground">{item.value}</p>
                      )}
                    </div>
                    
                    {item.href && (
                      <div className="relative z-10 ml-auto flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowUpRight className="w-4 h-4 text-primary" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Response Promise */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="industrial-border bg-card p-6 overflow-hidden relative"
              >
                <div className="absolute inset-0 dot-grid opacity-15 pointer-events-none" />
                <div className="relative z-10 flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-[0.3em] text-emerald-500/60 mb-0.5">RESPONSE TIME</p>
                    <p className="text-sm font-black text-foreground">Within 24 Hours Guaranteed</p>
                  </div>
                </div>
              </motion.div>

              {/* Map */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="industrial-border overflow-hidden"
              >
                <div className="p-4 bg-card border-b border-border/50">
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-primary" />
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground">LOCATION MAP</p>
                  </div>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.361213730052!2d81.0161959742191!3d26.860262562344946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be3a65c97074d%3A0x9cd831d0311dc79b!2sBhatt%20Square!5e0!3m2!1sen!2sin!4v1773227904785!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="transition-all duration-700"
                />
              </motion.div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* What Happens Next — Trust Section */}
      <section className="py-20 bg-muted/20 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-6">
              <ShieldCheck className="w-3 h-3" />
              OUR COMMITMENT
            </div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase">
              What Happens <span className="text-primary italic">Next?</span>
            </h2>
            <p className="text-muted-foreground text-sm font-semibold max-w-lg mx-auto mt-3">
              Once you reach out, here's exactly how we move forward — transparent, fast, and professional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: MessageSquare,
                step: "01",
                title: "Discovery Call",
                desc: "We schedule a free 30-minute consultation to understand your goals, challenges, and project scope in detail.",
                time: "Within 24 hrs"
              },
              {
                icon: FileSearch,
                step: "02",
                title: "Proposal & Roadmap",
                desc: "Our team prepares a detailed project proposal with scope, timeline, tech stack, and transparent pricing.",
                time: "2-3 Business Days"
              },
              {
                icon: Rocket,
                step: "03",
                title: "Project Kickoff",
                desc: "Upon approval, we assign a dedicated team and commence sprint-based development with weekly progress updates.",
                time: "Immediate Start"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="group relative industrial-border bg-card p-8 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5"
              >
                <div className="absolute inset-0 dot-grid opacity-15 group-hover:opacity-30 transition-opacity pointer-events-none" />
                
                <div className="relative z-10 space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-primary/5 border border-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <span className="font-display font-black italic text-5xl text-foreground opacity-[0.06] group-hover:opacity-[0.12] transition-opacity leading-none select-none">
                      {item.step}
                    </span>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-display font-black tracking-tighter uppercase group-hover:text-primary transition-colors leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-xs font-semibold leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-border/50">
                    <p className="text-[9px] font-black uppercase tracking-[0.3em] text-primary/60">
                      <Zap className="w-3 h-3 inline mr-1.5 -mt-0.5" />
                      {item.time}
                    </p>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}