"use client"

import { useEffect, useRef } from "react";
import { 
    Briefcase, 
    Dumbbell, 
    ShoppingCart, 
    TrendingUp, 
    Users, 
    BrainCircuit, 
    Building, 
    GraduationCap, 
    Home, 
    ArrowRight, 
    ExternalLink, 
    Cpu, 
    Plus,
    ShieldCheck,
    Globe,
    Zap,
    Search,
    Palette,
    Code,
    Rocket
} from "lucide-react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const products = [
  {
    icon: Dumbbell,
    title: "GYM Management Software",
    description: "A comprehensive solution to manage your fitness center, from member billing to class scheduling and trainer management.",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&h=600&fit=crop",
    tags: ["Fitness", "SaaS", "ERP"],
    status: "v2.8.4 Stable",
    features: ["Member Fingerprint/RF ID Integration", "Automated Billing & GST Support", "Mobile App for Members"]
  },
  {
    icon: Briefcase,
    title: "Business Management Software",
    description: "An all-in-one platform to streamline your business operations, including CRM, project management, and financial tracking.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    tags: ["Business", "CRM", "Efficiency"],
    status: "v3.1.0 Enterprise",
    features: ["Multi-Branch Resource Sync", "Real-time Financial Dashboards", "Strategic Resource Planning"]
  },
  {
    icon: Users,
    title: "Social Media Growth Platform",
    description: "A unique platform designed to boost your social media presence and create new earning opportunities for influencers.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=600&fit=crop",
    tags: ["Social", "Growth", "Influencer"],
    status: "v1.2.0 Active",
    features: ["Influencer Matching Engine", "Performance-Based Payouts", "Global Audience Analytics"]
  },
  {
    icon: TrendingUp,
    title: "Crypto Market Analysis Tool",
    description: "Stay ahead of the market with our advanced crypto analysis tool, offering real-time data and trend prediction.",
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=600&fit=crop",
    tags: ["Crypto", "Analysis", "Data"],
    status: "v4.0.0 Pro",
    features: ["Neural Trend Prediction", "Zero-Latency Order Book", "DeFi Liquidity Mapping"]
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Platform",
    description: "A scalable and customizable e-commerce solution to build and grow your online store with payment integration.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    tags: ["E-commerce", "Retail", "Scale"],
    status: "v5.2.0 Enterprise",
    features: ["Headless Commerce Architecture", "Omnichannel Inventory Management", "AI-Powered Recommender"]
  },
  {
    icon: BrainCircuit,
    title: "AI Content Creation Tool",
    description: "Leverage artificial intelligence to generate high-quality marketing copy and blog posts in seconds.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    tags: ["AI", "Content", "Automation"],
    status: "v2.0.0 Alpha",
    features: ["LLM-Powered Copywriting", "Contextual Brand Voice Tone", "Multi-Language SEO Exports"]
  },
  {
    icon: Building,
    title: "Custom ERP Solutions",
    description: "Tailor-made Enterprise Resource Planning systems to integrate and manage your core business processes.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tags: ["Enterprise", "ERP", "Custom"],
    status: "Industrial Core",
    features: ["Legacy Data Migration Services", "IoT Hardware Sync Core", "Regulatory Compliance Module"]
  },
  {
    icon: GraduationCap,
    title: "Online Learning Platform",
    description: "Create, market, and sell online courses with our feature-rich Learning Management System.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
    tags: ["Education", "LMS", "E-learning"],
    status: "v3.5.0 Stable",
    features: ["Interactive Certification Engine", "Gamified Learning Pathways", "Advanced Student Progress Tracker"]
  },
  {
    icon: Home,
    title: "Real Estate Management",
    description: "A complete tool for real estate agencies to manage listings, track leads, and automate sales workflows.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    tags: ["PropTech", "Leads", "CRM"],
    status: "v2.1.0 Active",
    features: ["Automated Property Lead Feed", "Virtual Tour Embedding", "Legal Document Generation"]
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
              OUR SOLUTIONS
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1, ease: "circOut" }}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.9] mb-8 text-white"
            >
              Our <span className="text-primary italic text-red-glow">Advanced</span> Products
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl text-white/80 font-medium max-w-2xl mx-auto leading-relaxed"
            >
              Industrial-grade software designed to elevate every aspect of your enterprise.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section ref={sectionRef} className="py-24 relative dot-grid bg-background/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="product-card group relative industrial-border bg-card p-8 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 min-h-[660px]"
              >
                <div className="relative h-48 mb-8 overflow-hidden rounded-lg">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <a 
                          href="#" 
                          className="px-5 py-2.5 bg-background/90 backdrop-blur-md border border-primary/20 text-[10px] font-display font-black uppercase tracking-[0.3em] text-primary hover:bg-primary hover:text-white transition-all flex items-center gap-3 shadow-xl"
                        >
                            VIEW PROJECT
                            <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                    </div>
                </div>

                <div className="relative z-10 flex justify-between items-start mb-10">
                   <div className="p-3 rounded-full bg-primary/5 border border-primary/10 transition-colors group-hover:bg-primary/10">
                      <product.icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" />
                   </div>
                   <div className="flex flex-col items-end gap-3 text-right">
                      <div className="px-2 py-1 bg-foreground text-background text-[8px] font-display font-black uppercase tracking-widest rounded-sm">
                         {product.status}
                      </div>
                      <div className="flex flex-wrap items-center justify-end gap-2 max-w-[150px]">
                        {product.tags.slice(0, 2).map((tag, i) => (
                          <div key={i} className="flex items-center gap-1.5 text-[9px] font-display font-black uppercase tracking-[0.2em] text-foreground/70">
                             <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                             {tag}
                          </div>
                        ))}
                      </div>
                   </div>
                </div>

                <div className="relative z-10 space-y-6 flex-grow">
                  <h2 className="text-xl md:text-2xl font-display font-black tracking-tighter uppercase leading-[1.1] text-foreground group-hover:text-primary transition-colors">
                    {product.title}
                  </h2>
                  
                  <p className="text-muted-foreground text-xs font-semibold leading-relaxed line-clamp-2">
                    {product.description}
                  </p>

                  <div className="space-y-3 pt-4">
                     <p className="text-[9px] font-black uppercase tracking-[0.3em] text-primary/60">Key Highlights</p>
                     <ul className="space-y-3">
                        {product.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-3 text-[10px] font-display font-bold uppercase tracking-wider text-foreground/80">
                             <Plus className="w-3 h-3 text-primary" />
                             {feature}
                          </li>
                        ))}
                     </ul>
                  </div>
                </div>

                <div className="relative z-10 mt-10 pt-8 border-t border-border/50">
                   <a 
                      href="#"
                      className="inline-flex items-center gap-4 text-xs font-display font-black uppercase tracking-[0.3em] text-foreground hover:text-primary transition-all group/link"
                    >
                      EXPLORE SOLUTION
                      <div className="p-1.5 border border-border rounded-lg group-hover/link:border-primary transition-colors">
                          <ArrowRight className="w-3 h-3 transition-transform group-hover/link:translate-x-1" />
                      </div>
                    </a>
                </div>

                <span className="card-num select-none pointer-events-none mb-2">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process Blueprint */}
      <section className="py-32 relative overflow-hidden bg-background border-t border-border/50">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-6">
               <Cpu className="w-3 h-3" />
               OUR BLUEPRINT
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-black tracking-tighter uppercase mb-6">
              Precision <span className="text-primary italic">Development</span> Process
            </h2>
            <p className="text-muted-foreground text-sm font-semibold leading-relaxed max-w-xl mx-auto">
              Our streamlined architectural pipeline ensures industry-standard precision from initial discovery to final deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                step: "01",
                label: "STRATEGIC DISCOVERY", 
                title: "Research & Analysis",
                icon: Search, 
                detail: "Deep-dive into business goals and user requirements to establish a technical foundation." 
              },
              { 
                step: "02",
                label: "ARCHITECTURAL DESIGN", 
                title: "UI/UX & Prototypes",
                icon: Palette, 
                detail: "Crafting beautiful, intuitive interfaces synchronized with your brand's digital identity." 
              },
              { 
                step: "03",
                label: "PERFORMANCE ENGINEERING", 
                title: "Development & QA",
                icon: Code, 
                detail: "Building high-scale solutions with modular codebases and rigorous testing protocols." 
              },
              { 
                step: "04",
                label: "ZERO-DEFECT DEPLOYMENT", 
                title: "Launch & Monitoring",
                icon: Rocket, 
                detail: "Seamless cloud distribution with real-time performance tracking and scaling." 
              }
            ].map((item, i) => (
              <div key={i} className="group relative industrial-border bg-card p-10 transition-all hover:bg-primary/5 flex flex-col justify-between min-h-[350px]">
                <div className="relative z-10 flex flex-col items-start gap-12">
                   <div className="p-3 rounded-full bg-primary/5 border border-primary/10 group-hover:bg-primary/10 transition-colors">
                      <item.icon className="w-6 h-6 text-primary" />
                   </div>
                   
                   <div className="space-y-4">
                      <div className="text-[10px] font-display font-black uppercase tracking-[0.4em] text-primary">
                         {item.label}
                      </div>
                      <h3 className="text-2xl font-display font-black tracking-tighter uppercase leading-tight">
                         {item.title}
                      </h3>
                      <p className="text-[11px] font-semibold text-muted-foreground leading-relaxed">
                         {item.detail}
                      </p>
                   </div>
                </div>
                
                <span className="absolute top-8 right-8 text-6xl font-display font-black italic opacity-[0.04] group-hover:opacity-[0.08] transition-opacity">
                  {item.step}
                </span>
                
                {/* Connector for horizontal flow on desktop */}
                {i < 3 && (
                   <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-[1px] bg-border z-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
