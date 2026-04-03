"use client"

import { useEffect, useRef } from "react";
import { Metadata } from "next";
import { Briefcase, Dumbbell, ShoppingCart, TrendingUp, Users, BrainCircuit, Building, GraduationCap, Home, ArrowRight, ExternalLink } from "lucide-react";
import Batch from "../components/Batch";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const products = [
  {
    icon: Dumbbell,
    title: "GYM Management Software",
    description: "A comprehensive solution to manage your fitness center, from member billing to class scheduling and trainer management.",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&h=600&fit=crop",
    tags: ["Fitness", "SaaS", "ERP"]
  },
  {
    icon: Briefcase,
    title: "Business Management Software",
    description: "An all-in-one platform to streamline your business operations, including CRM, project management, and financial tracking.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    tags: ["Business", "CRM", "Efficiency"]
  },
  {
    icon: Users,
    title: "Social Media Growth Platform",
    description: "A unique platform designed to boost your social media presence and create new earning opportunities for influencers.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=600&fit=crop",
    tags: ["Social", "Growth", "Influencer"]
  },
  {
    icon: TrendingUp,
    title: "Crypto Market Analysis Tool",
    description: "Stay ahead of the market with our advanced crypto analysis tool, offering real-time data and trend prediction.",
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=600&fit=crop",
    tags: ["Crypto", "Analysis", "Data"]
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Platform",
    description: "A scalable and customizable e-commerce solution to build and grow your online store with payment integration.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    tags: ["E-commerce", "Retail", "Scale"]
  },
  {
    icon: BrainCircuit,
    title: "AI Content Creation Tool",
    description: "Leverage artificial intelligence to generate high-quality marketing copy and blog posts in seconds.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    tags: ["AI", "Content", "Automation"]
  },
  {
    icon: Building,
    title: "Custom ERP Solutions",
    description: "Tailor-made Enterprise Resource Planning systems to integrate and manage your core business processes.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tags: ["Enterprise", "ERP", "Custom"]
  },
  {
    icon: GraduationCap,
    title: "Online Learning Platform",
    description: "Create, market, and sell online courses with our feature-rich Learning Management System.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
    tags: ["Education", "LMS", "E-learning"]
  },
  {
    icon: Home,
    title: "Real Estate Management",
    description: "A complete tool for real estate agencies to manage listings, track leads, and automate sales workflows.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    tags: ["PropTech", "Leads", "CRM"]
  },
];

export default function ProductsPage() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    const ctx = gsap.context(() => {
      gsap.fromTo(".product-card",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <main className="flex min-h-screen flex-col pt-16">
      <div className="relative h-[40vh] md:h-[50vh] flex items-center justify-center text-center text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/about-team.png')" }}
        ></div>
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>

        <div className="relative z-10 p-4">
          <Batch title="OUR SOLUTIONS" />
          <h1 className="section-heading text-white">
            Our <span className="text-primary">Products</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Industrial-grade software designed to elevate every aspect of your enterprise.
          </p>
        </div>
      </div>

      <section ref={sectionRef} className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div 
                key={index} 
                className="product-card group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 flex flex-col"
              >
                {/* Image Section */}
                <div className="relative h-56 overflow-hidden bg-muted">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Icon over image */}
                    <div className="absolute top-4 left-4 p-2 rounded-xl bg-background/80 backdrop-blur-md border border-white/20">
                        <product.icon className="w-5 h-5 text-primary" />
                    </div>

                    {/* Hover Detail */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="btn-glass text-[10px] py-1.5 px-4 scale-90 group-hover:scale-100 transition-transform duration-300 font-bold uppercase tracking-widest">
                            Learn More <ArrowRight className="w-3 h-3 ml-1" />
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6 line-clamp-2">
                    {product.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="mt-auto flex flex-wrap gap-2">
                    {product.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-[9px] font-black uppercase tracking-widest rounded-full bg-primary/5 text-primary border border-primary/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hidden Link Area */}
                <a href="#" className="absolute inset-0 z-20"></a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
