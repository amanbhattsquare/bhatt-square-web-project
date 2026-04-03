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
    icon: Target,
    title: "Innovation First",
    description: "We constantly push boundaries, exploring emerging technologies and methodologies to deliver cutting-edge solutions that give our clients a competitive advantage.",
    color: "from-primary to-rose-500"
  },
  {
    icon: Users,
    title: "Client Partnership",
    description: "Your success is our success. We build lasting relationships through transparent communication, collaborative problem-solving, and unwavering commitment to your goals.",
    color: "from-indigo-500 to-purple-500"
  },
  {
    icon: Trophy,
    title: "Excellence Driven",
    description: "We maintain the highest standards in every aspect of our work—from code quality to user experience—ensuring exceptional results that exceed expectations.",
    color: "from-cyan-500 to-blue-500"
  },
  {
    icon: Shield,
    title: "Trust & Security",
    description: "We prioritize data protection and security compliance, implementing industry best practices to safeguard your digital assets and maintain user privacy.",
    color: "from-emerald-500 to-green-500"
  }
];

const achievements = [
  { year: "2019", milestone: "Company Founded", description: "Started with a vision to democratize enterprise technology" },
  { year: "2020", milestone: "50+ Projects Delivered", description: "Successfully launched solutions across 5 industries" },
  { year: "2022", milestone: "Reached 100 Clients", description: "Expanded team to 25+ technical experts" },
  { year: "2024", milestone: "International Expansion", description: "Opened offices in 3 countries, serving global enterprises" }
];

const teamMembers = [
  {
    name: "Arjun Bhatt",
    role: "Founder & CEO",
    bio: "Visionary technologist with 10+ years building scalable software. Former lead engineer at Fortune 500 companies, driving product strategy and company direction.",
    expertise: ["Product Strategy", "Architecture", "Team Leadership"],
    icon: Layers,
    gradient: "from-primary/15 to-rose-500/10",
    accent: "text-primary",
    social: { linkedin: "#", twitter: "#", github: "#" }
  },
  {
    name: "Priya Sharma",
    role: "CTO & Lead Architect",
    bio: "Full-stack architect specializing in cloud-native systems and microservices. Passionate about building resilient, high-performance infrastructure.",
    expertise: ["Cloud Architecture", "DevOps", "Backend Systems"],
    icon: Code2,
    gradient: "from-indigo-500/15 to-purple-500/10",
    accent: "text-indigo-500",
    social: { linkedin: "#", twitter: "#", github: "#" }
  },
  {
    name: "Rohan Mehta",
    role: "Head of Design",
    bio: "Award-winning UX/UI designer with a deep understanding of user psychology. Transforms complex workflows into intuitive, beautiful digital experiences.",
    expertise: ["UX Research", "UI Design", "Design Systems"],
    icon: Smartphone,
    gradient: "from-cyan-500/15 to-blue-500/10",
    accent: "text-cyan-600",
    social: { linkedin: "#", twitter: "#", github: "#" }
  },
  {
    name: "Kiran Patel",
    role: "Head of Growth",
    bio: "Data-driven growth strategist who has scaled multiple B2B SaaS products from 0 to $10M ARR. Focused on product-led growth and GTM strategies.",
    expertise: ["Growth Strategy", "Analytics", "B2B SaaS"],
    icon: BarChart3,
    gradient: "from-emerald-500/15 to-green-500/10",
    accent: "text-emerald-600",
    social: { linkedin: "#", twitter: "#", github: "#" }
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
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="section-heading">
                Who We Are
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2019, <strong className="text-foreground">Bhatt Square Pvt. Ltd.</strong> emerged from a simple yet powerful vision: to make enterprise-grade technology accessible to businesses of all sizes. What started as a small team of developers has grown into a full-service digital agency serving clients across the globe.
                </p>
                <p>
                  We specialize in crafting bespoke software solutions that solve complex business challenges. From startups building their first MVP to enterprises modernizing legacy systems, we bring technical expertise, strategic thinking, and a relentless focus on user experience to every project.
                </p>
                <p>
                  Our multidisciplinary team combines deep technical knowledge with creative problem-solving. We don't just write code—we partner with you to understand your business, identify opportunities, and deliver solutions that drive measurable results.
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">200+</div>
                  <div className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">150+</div>
                  <div className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">98%</div>
                  <div className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Success Rate</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square lg:aspect-[4/3] bg-gradient-to-br from-primary/10 via-indigo-500/10 to-rose-500/10 rounded-3xl overflow-hidden relative border border-border">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Globe2 className="w-12 h-12 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Global Impact</h3>
                    <p className="text-muted-foreground">Serving clients across 3 continents</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section ref={valuesRef} className="py-20 bg-muted/30">
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
                className="value-card group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-400 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="relative z-10">
                  <div className={`mb-6 p-4 rounded-xl bg-gradient-to-br ${value.color} w-fit shadow-md`}>
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-heading">
              Meet the <span className="text-primary">Team</span>
            </h2>
            <p className="section-subheading">
              A collective of industry veterans, creative builders, and strategic thinkers united by a passion for impactful technology.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="team-card group relative flex flex-col rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/40 hover:shadow-xl hover:-translate-y-2 transition-all duration-400"
              >
                {/* Gradient Header */}
                <div className={`relative h-36 bg-gradient-to-br ${member.gradient} flex items-center justify-center`}>
                  {/* Decorative grid pattern */}
                  <div className="absolute inset-0 opacity-[0.04]" style={{
                    backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
                    backgroundSize: "18px 18px"
                  }}></div>
                  <div className="relative w-20 h-20 rounded-2xl bg-background/80 border border-border/50 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300">
                    <member.icon className={`w-9 h-9 ${member.accent}`} />
                  </div>
                  {/* Index badge */}
                  <div className="absolute top-3 right-3 text-xs font-bold text-muted-foreground/60 font-mono">
                    0{index + 1}
                  </div>
                </div>

                {/* Card Body */}
                <div className="flex flex-col flex-1 p-5">
                  <div className="mb-4">
                    <h3 className="text-base font-bold text-foreground mb-0.5">{member.name}</h3>
                    <p className={`text-xs font-semibold uppercase tracking-widest ${member.accent} mb-3`}>
                      {member.role}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {member.bio}
                    </p>
                  </div>

                  {/* Expertise Tags */}
                  <div className="mt-auto pt-4 border-t border-border space-y-2">
                    <div className="flex flex-wrap gap-1.5">
                      {member.expertise.map((skill, i) => (
                        <span
                          key={i}
                          className="inline-block text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-md bg-muted text-muted-foreground border border-border"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex items-center gap-2 mt-4">
                    <a
                      href={member.social.linkedin}
                      className="p-1.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/8 transition-all duration-200"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="p-1.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/8 transition-all duration-200"
                      aria-label={`${member.name} Twitter`}
                    >
                      <Twitter className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={member.social.github}
                      className="p-1.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/8 transition-all duration-200"
                      aria-label={`${member.name} GitHub`}
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Team Culture Banner */}
          <div className="mt-16 rounded-2xl bg-gradient-to-r from-primary/8 via-indigo-500/5 to-primary/8 border border-primary/15 p-8 md:p-12 text-center">
            <div className="max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-widest mb-6">
                <Users className="w-3.5 h-3.5" />
                Join Our Team
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                We're Always Looking for <span className="text-primary">Exceptional Talent</span>
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We believe great products are built by great people. If you're passionate about building impactful technology and want to work in a culture of excellence, we'd love to hear from you.
              </p>
              <Link href="/contact" className="btn-primary">
                View Open Roles
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline/Milestones */}
      <section ref={timelineRef} className="py-20 bg-muted/30 relative overflow-hidden">
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