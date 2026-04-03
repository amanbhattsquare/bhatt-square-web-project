"use client"

import { Mail, MapPin, Phone, Cpu, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { ContactForm } from "@/components/contact/ContactForm";
import Batch from "../components/Batch";

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col pt-6">
      {/* Hero Section */}
      <section className="relative py-15 pb-15 overflow-hidden bg-background">
        {/* Hero Background Pattern */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
          style={{ backgroundImage: "url('/images/about-team.png')" }}
        ></div>
        <div className="absolute inset-0 bg-black/85 backdrop-blur-[2px]"></div>

        {/* Background Decor Layer */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[160px] animate-pulse"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.1)_100%)]"></div>
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

      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                
                {/* Contact Info */}
                <div className="space-y-8">
                    <h2 className="text-3xl font-bold">Get in Touch</h2>
                    <p className="text-muted-foreground text-lg">
                        Fill out the form or reach out to us directly. Our team is ready to assist you with your inquiries.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="bg-primary/10 p-3 rounded-full">
                                <Mail className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-semibold">Email</h3>
                                <p className="text-muted-foreground">Support@bhattsquare.com</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="bg-primary/10 p-3 rounded-full">
                                <Phone className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-semibold">Phone</h3>
                                <p className="text-muted-foreground">+91 92059 83996</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="bg-primary/10 p-3 rounded-full">
                                <MapPin className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-semibold">Visit Us</h3>
                                <p className="text-muted-foreground">Bhatt Square Pvt Ltd. 1/Vishesh Khand, Gomti Nagar Lucknow UP-226010</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 rounded-2xl overflow-hidden border border-border shadow-sm">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.361213730052!2d81.0161959742191!3d26.860262562344946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be3a65c97074d%3A0x9cd831d0311dc79b!2sBhatt%20Square!5e0!3m2!1sen!2sin!4v1773227904785!5m2!1sen!2sin"
                            width="100%"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>

                {/* Contact Form */}
                <ContactForm />

            </div>
        </div>
      </section>
    </main>
  );
}