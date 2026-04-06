"use client"

import { Users, Trophy, Target, Shield, Globe2, ArrowRight, Award, TrendingUp, Linkedin, Twitter, Github, Code2, Layers, Smartphone, BarChart3, Cpu } from "lucide-react";
import { motion } from "framer-motion";
import Batch from "../components/Batch";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

const coreValues = [
  {
    icon: Cpu,
    title: "Architectural Excellence",
    description: "We don't just build; we architect. Every line of code is engineered for maximum resilience, scalability, and long-term performance in mission-critical environments.",
    color: "from-primary to-rose-500"
  },
  {
    icon: Layers,
    title: "Strategic Partnership",
    description: "We operate as a technical extension of your team, merging elite-grade engineering with your business vision to drive measurable industrial impact.",
    color: "from-indigo-500 to-purple-500"
  },
  {
    icon: Target,
    title: "Pioneering Logic",
    description: "Our approach is rooted in advanced computational logic. We implement emerging technologies and methodologies that provide a definitive competitive advantage.",
    color: "from-cyan-500 to-blue-500"
  },
  {
    icon: Shield,
    title: "Operational Integrity",
    description: "Trust is built on technical reliability. We prioritize high-level security and protocol compliance at every layer, safeguarding your digital infrastructure.",
    color: "from-emerald-500 to-green-500"
  }
];

const achievements = [
  { year: "2023", milestone: "Official Incorporation", description: "BHATT SQUARE PRIVATE LIMITED was registered on June 30, 2023, establishing its roots in Lucknow, Uttar Pradesh." },
  { year: "2024", milestone: "Strategic Foundation", description: "Successfully held our first Annual General Meeting, solidifying our operational framework and technical roadmap." },
  { year: "2025", milestone: "Market Acceleration", description: "Enhanced our portfolio in professional and technical services, delivering mission-critical solutions to a expanding client base." },
  { year: "2026", milestone: "Global Innovation", description: "Continuing to pioneer industrial-grade digital products and scaling our technical expertise across international markets." }
];
const founders = [
  {
    name: "Akshat Bhatt",
    role: "Managing Director",
    avatar: "/images/Akshat-Bhatt.png",
    description: "As the Managing Director, Akshat drives the company's strategic vision, focusing on innovation and scalable solutions. His leadership ensures that Bhatt Square stays at the forefront of the industry, delivering exceptional value to clients."
  },
  {
    name: "Niraj Bhatt",
    role: "Director",
    avatar: "/images/Niraj-Bhatt.png",
    description: "Niraj plays a key role in shaping the company's operational strategies. His expertise in management and execution helps streamline processes, ensuring efficiency and excellence across all projects."
  },
  {
    name: "Pooja Bhatt",
    role: "Director",
    avatar: "/images/Pooja-Bhatt.png",
    description: "Pooja's focus is on fostering a culture of innovation and collaboration. She is instrumental in guiding the team towards achieving technical excellence and maintaining strong client relationships."
  },
  {
    name: "Anandi Bhatt",
    role: "Director",
    avatar: "/images/Anandi-Bhatt.png",
    description: "Anandi contributes to the company's growth by overseeing key business development initiatives. Her strategic insights help identify new opportunities and drive the company's expansion."
  }
];

function AboutPageContent() {
  const valuesRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (valuesRef.current) {
      gsap.fromTo(
        ".value-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: valuesRef.current,
            start: "top 75%",
          }
        }
      );
    }

    if (timelineRef.current) {
      gsap.fromTo(
        ".timeline-item",
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 75%",
          }
        }
      );
    }

    if (teamRef.current) {
      gsap.fromTo(
        ".team-card",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: teamRef.current,
            start: "top 80%",
          }
        }
      );
    }
  }, []);

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
              OUR STORY
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1, ease: "circOut" }}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.9] mb-8 text-white"
            >
              Building the <span className="text-primary italic text-red-glow">Digital Future</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl text-white/80 font-medium max-w-2xl mx-auto leading-relaxed"
            >
              We're a team of passionate innovators, engineers, and designers dedicated to transforming ambitious ideas into production-ready digital products that drive real business impact.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-15">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="section-heading">
                Who We Are
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Incorporated on <strong className="text-foreground">June 30, 2023</strong>, <strong className="text-foreground">BHATT SQUARE PRIVATE LIMITED</strong> is a premier Indian legal entity registered under the Registrar of Companies in Kanpur. Headquartered in the vibrant hub of Gomti Nagar, Lucknow, we embody a culture of technical rigor and industrial-grade excellence.
                </p>
                <p>
  Our expertise spans the <strong className="text-foreground">Professional, Scientific, and Technical sectors</strong>, where precision and performance are non-negotiable. We are driven by a singular mission — to engineer robust, high-performance digital solutions that enable modern enterprises to operate smarter and scale with confidence. By uniting advanced engineering principles with purposeful design, we translate complex business challenges into streamlined, future-ready systems.
</p>
                <p>
  As a <strong className="text-foreground">forward-thinking</strong> organization, we are committed to delivering enduring value through disciplined innovation. Our approach is grounded in a steadfast dedication to excellence — ensuring every solution we architect adheres to the highest standards of reliability, security, and technical integrity.
</p>
              </div>
              
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">100+</div>
                  <div className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Projects Shipped</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">Active</div>
                  <div className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Entity Status</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                  <div className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Elite Support</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square lg:aspect-[4/3] bg-gradient-to-br from-primary/10 via-indigo-500/10 to-rose-500/10 rounded-3xl overflow-hidden relative border border-border">
                <img
                  src="https://images.pexels.com/photos/7652039/pexels-photo-7652039.jpeg"
                  alt="Global Impact"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section ref={valuesRef} className="py-15 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-heading">
              Our Core <span className="text-primary">Values</span>
            </h2>
            <p className="section-subheading">
              The principles that guide everything we do and shape our culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="value-card group relative p-7 industrial-border bg-card overflow-hidden transition-all duration-400 hover:shadow-2xl hover:shadow-primary/5"
              >
                <div className="absolute inset-0 dot-grid opacity-30 group-hover:opacity-50 transition-opacity" />
                
                <div className="relative z-10 space-y-5">
                  {/* Icon + Number Row */}
                  <div className="flex items-center justify-between">
                    <div className="p-3 w-max rounded-xl bg-primary/5 border border-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                      <value.icon className="w-6 h-6" />
                    </div>
                    <span className="font-display font-black italic text-5xl text-foreground opacity-[0.07] group-hover:opacity-[0.15] transition-opacity leading-none select-none">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-display font-black tracking-tighter uppercase group-hover:text-primary transition-colors leading-tight">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-xs font-semibold max-w-sm">
                      {value.description}
                    </p>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

     

      <section className="py-15 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square lg:aspect-[4/3] bg-gradient-to-br from-primary/10 via-indigo-500/10 to-rose-500/10 rounded-3xl overflow-hidden relative border border-border">
                <img
                  src="/images/Akshat-Bhatt.png"
                  alt="CEO"
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="section-heading">
                Message from Our <span className="text-primary">CEO</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  It is my privilege to lead a team of dedicated professionals who are committed to pushing the boundaries of what's possible. At Bhatt Square, we believe in the power of technology to transform industries and create a better future for all.
                </p>
                <p>
                  Our success is built on a foundation of innovation, integrity, and a relentless pursuit of excellence. We are passionate about helping our clients achieve their goals and are proud of the impact we've made together.
                </p>
                <p>
                  Thank you for your trust in us. We are excited about the journey ahead and look forward to continuing to serve you with the highest standards of quality and service.
                </p>
              </div>
              <div className="pt-6 border-t border-border">
                <h3 className="text-xl font-bold text-foreground">Akshat Bhatt</h3>
                <p className="text-sm text-muted-foreground">CEO & Founder, Bhatt Square Pvt Ltd.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


       {/* Founders Section */}
      <section ref={teamRef} className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-heading">
              Meet Our <span className="text-primary">Founders</span>
            </h2>
            <p className="section-subheading">
              The visionary leaders driving our mission forward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {founders.map((founder, index) => (
              <div
                key={index}
                className="team-card group relative flex flex-col p-6 industrial-border bg-card overflow-hidden transition-all duration-400 hover:shadow-2xl hover:shadow-primary/5"
              >
                <div className="absolute inset-0 dot-grid opacity-30 group-hover:opacity-50 transition-opacity" />
                <div className="relative z-10">
                  <h3 className="text-xl font-display font-black tracking-tighter uppercase text-foreground group-hover:text-primary transition-colors">
                    {founder.name}
                  </h3>
                  <p className="text-sm text-muted-foreground font-medium mb-4">{founder.role}</p>
                  <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                    {founder.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline/Milestones */}
      <section ref={timelineRef} className="py-15 bg-muted/30 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="section-heading">
              Our <span className="text-primary">Journey</span>
            </h2>
            <p className="section-subheading">
              Key milestones that shaped our growth and success story.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((item, index) => (
                <div key={index} className="timeline-item group relative">
                  {index < achievements.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/20 to-transparent z-0 group-hover:from-primary/50 transition-colors duration-500">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary/20 group-hover:bg-primary transition-colors"></div>
                    </div>
                  )}
                  
                  <div className="relative z-10 h-full p-7 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <div className="flex flex-col h-full">
                      <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-primary/80 to-primary/30 mb-5">
                        {item.year}
                      </span>
                      <div className="w-10 h-0.5 bg-primary/20 rounded-full mb-5 group-hover:w-16 group-hover:bg-primary transition-all duration-300"></div>
                      <h3 className="text-base font-bold mb-2 group-hover:text-primary transition-colors">
                        {item.milestone}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                       <TrendingUp className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-card border border-border">
                <Award className="w-4 h-4 text-primary" />
                <span className="font-medium text-sm">Still Growing Strong & Expanding Globally</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          <div className="max-w-3xl mx-auto space-y-6 flex flex-col items-center">
            <h2 className="section-heading">
              Ready to Build Something <span className="text-primary">Amazing?</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Let's discuss how we can help transform your vision into reality. Our team is ready to partner with you on your next big project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/contact" className="btn-primary">
                Start a Conversation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/services" className="btn-secondary">
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutPageContent;