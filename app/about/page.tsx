"use client"

import { CheckCircle2, Users, Trophy, Target, Lightbulb, Heart, Shield, Zap, Award, TrendingUp, Globe2, ArrowRight } from "lucide-react";
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

function AboutPageContent() {
  const valuesRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate values cards
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

    // Animate timeline items
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
  }, []);

  return (
    <main className="flex min-h-screen flex-col pt-6">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-muted/30 via-background to-background py-6 md:py-6 overflow-hidden">
        {/* Enhanced Background decorations */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-500/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 via-indigo-500/10 to-rose-500/10 border border-primary/20 text-primary text-sm font-semibold mb-6 backdrop-blur-sm">
            <Heart className="w-4 h-4" />
            OUR STORY
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
            Building the <span className="text-primary">Digital Future</span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-12">
            We're a team of passionate innovators, engineers, and designers dedicated to transforming ambitious ideas into production-ready digital products that drive real business impact.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
            <div className="p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border hover:border-primary/50 transition-all hover:shadow-lg">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">200+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border hover:border-primary/50 transition-all hover:shadow-lg">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">150+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border hover:border-primary/50 transition-all hover:shadow-lg">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border hover:border-primary/50 transition-all hover:shadow-lg">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Company Story */}
      <section className="py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
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
              
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">200+</div>
                  <div className="text-sm text-muted-foreground">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">150+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">98%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square lg:aspect-[4/3] bg-gradient-to-br from-primary/20 via-indigo-500/20 to-rose-500/20 rounded-3xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center bg-card/80 backdrop-blur-sm">
                  <div className="text-center p-8">
                    <Globe2 className="w-24 h-24 text-primary mx-auto mb-4" />
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
      <section ref={valuesRef} className="py-6 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Our Core <span className="text-primary">Values</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and shape our culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="value-card group relative p-8 rounded-3xl bg-card/80 backdrop-blur-sm border-2 border-border hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
              >
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className={`mb-6 p-4 rounded-2xl bg-gradient-to-br ${value.color} w-fit shadow-lg`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline/Milestones - Redesigned */}
      <section ref={timelineRef} className="py-6 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Our <span className="text-primary">Journey</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key milestones that shaped our growth and success story.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((item, index) => (
                <div key={index} className="timeline-item group relative">
                  {/* Connecting Line (Desktop) */}
                  {index < achievements.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/20 to-transparent z-0 group-hover:from-primary/50 transition-colors duration-500">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary/20 group-hover:bg-primary transition-colors"></div>
                    </div>
                  )}
                  
                  {/* Card Content */}
                  <div className="relative z-10 h-full p-8 rounded-3xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group-hover:bg-muted/50">
                    <div className="flex flex-col h-full">
                      {/* Year */}
                      <span className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-primary/80 to-primary/20 mb-6 group-hover:scale-110 origin-left transition-transform duration-500">
                        {item.year}
                      </span>
                      
                      {/* Divider */}
                      <div className="w-12 h-1 bg-primary/20 rounded-full mb-6 group-hover:w-20 group-hover:bg-primary transition-all duration-300"></div>

                      {/* Details */}
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {item.milestone}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Decorative Corner */}
                    <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                       <TrendingUp className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Achievement summary */}
            <div className="mt-16 text-center">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-muted border border-border">
                <Award className="w-5 h-5 text-primary" />
                <span className="font-medium text-sm">Still Growing Strong & Expanding Globally</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-6 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold">
              Ready to Build Something <span className="text-primary">Amazing?</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Let's discuss how we can help transform your vision into reality. Our team is ready to partner with you on your next big project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all"
              >
                Start a Conversation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-border hover:border-primary/50 rounded-full font-semibold hover:bg-muted transition-all"
              >
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
