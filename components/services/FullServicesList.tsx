"use client"

import { motion } from "framer-motion"
import { 
  Code2, 
  Globe, 
  Smartphone, 
  Palette, 
  Cloud, 
  ShieldCheck, 
  BarChart, 
  Cpu, 
  Users,
  Settings,
  Layers,
  ArrowUpRight,
  Plus,
  Zap
} from "lucide-react"
import React from "react"

interface ServiceCategory {
  title: string
  icon: any
  description: string
  services: string[]
  colSpan?: string
  rowSpan?: string
  accentText?: string
}

const serviceCategories: ServiceCategory[] = [
  {
    title: "Software Development",
    icon: Code2,
    description: "Custom enterprise solutions engineered with scalable architectures and modular code.",
    services: [
      "Custom Software Development",
      "ERP Software Development",
      "CRM Software Development",
      "Inventory Management Software",
      "Billing & Accounting Software",
      "Furniture Management Software",
      "School / Hospital / Hotel Management",
      "POS (Point of Sale) Software"
    ],
    accentText: "ENTERPRISE READY"
  },
  {
    title: "Web Development",
    icon: Globe,
    description: "Modern, responsive web ecosystems built using high-performance frameworks.",
    services: [
      "Website Design & Development",
      "Static Website Development",
      "Dynamic Website Development",
      "E-commerce Website Development",
      "Corporate Websites",
      "Web Portals & Dashboards",
      "Maintenance & Redesign"
    ],
    accentText: "0.1s RESPONSE"
  },
  {
    title: "Mobile App Development",
    icon: Smartphone,
    description: "Seamless mobile performance across iOS and Android with intuitive user experiences.",
    services: [
      "Android App Development",
      "iOS App Development",
      "Hybrid App (Flutter / React Native)",
      "Business Apps",
      "E-commerce Mobile Apps"
    ],
    accentText: "NATIVE CORE"
  },
  {
    title: "UI / UX & Graphics",
    icon: Palette,
    description: "Designing beautiful digital interfaces and compelling visual identities.",
    services: [
      "UI / UX Design",
      "Website & App Design",
      "Logo Design",
      "Banner & Poster Design",
      "Brochure / Pamphlet Design",
      "Social Media Creatives"
    ],
    accentText: "DESIGN FIRST"
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    description: "Optimizing infrastructure with secure hosting and automated deployment pipelines.",
    services: [
      "Cloud Hosting Services",
      "AWS / Azure / Google Cloud Setup",
      "Server Setup & Management",
      "Backup & Recovery Solutions",
      "DevOps & CI/CD Pipelines"
    ],
    accentText: "99.9% UPTIME"
  },
  {
    title: "Cyber security Services",
    icon: ShieldCheck,
    description: "Protecting digital assets with advanced security protocols and real-time audits.",
    services: [
      "Website Security",
      "SSL Certificate Setup",
      "Data Protection & Encryption",
      "Malware Removal",
      "Security Audits"
    ],
    accentText: "GLOBAL SECURITY"
  },
  {
    title: "Digital Marketing",
    icon: BarChart,
    description: "Strategic growth frameworks and performance marketing to dominate your sector.",
    services: [
      "SEO (Search Engine Optimization)",
      "Social Media Marketing",
      "Google Ads & Facebook Ads",
      "Lead Generation Campaigns",
      "Email & WhatsApp Marketing",
      "Reputation Management"
    ],
    accentText: "GROWTH FOCUSED"
  },
  {
    title: "AI & Automation",
    icon: Cpu,
    description: "Leveraging intelligence and automation to unlock business efficiency.",
    services: [
      "AI Chatbot Development",
      "Business Automation",
      "Data Analytics & Reporting",
      "Machine Learning Solutions"
    ],
    accentText: "NEURAL COMPUTE"
  },
  {
    title: "IT Support & Maintenance",
    icon: Settings,
    description: "Providing 24/7 technical support to keep your operations running smoothly.",
    services: [
      "AMC (Annual Maintenance)",
      "Software Support",
      "Website Maintenance",
      "Server Monitoring",
      "Technical Helpdesk"
    ],
    accentText: "SYSTEM ACTIVE"
  },
  {
    title: "Consulting & Training",
    icon: Users,
    description: "Strategic advisory and comprehensive training programs for digital empowerment.",
    services: [
      "IT Consulting",
      "Process Automation Advisory",
      "Software Training",
      "Corporate IT Training"
    ],
    accentText: "STRATEGIC ADVICE"
  },
  {
    title: "Other Services",
    icon: Layers,
    description: "Essential business services including hosting, domains, and API integrations.",
    services: [
      "Domain Registration",
      "Web Hosting",
      "Email Hosting",
      "SMS & WhatsApp API Integration",
      "Payment Gateway Integration"
    ],
    accentText: "FULL STACK SOLUTIONS"
  }
]

export function FullServicesList() {
  return (
    <section className="py-24 relative dot-grid bg-background/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {serviceCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group relative industrial-border bg-card p-8 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 min-h-[480px]"
            >
              <div className="flex flex-col flex-grow">
                {/* Card Header Profile */}
                <div className="relative z-10 flex justify-between items-start mb-6">
                   <div className="p-3 rounded-full bg-primary/5 border border-primary/10 transition-colors group-hover:bg-primary/10">
                      <category.icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" />
                   </div>
                   <div className="flex items-center gap-2 text-[10px] font-display font-black uppercase tracking-[0.25em] text-foreground/70">
                      <Zap className="w-3 h-3 text-primary" />
                      {category.accentText}
                   </div>
                </div>

                {/* Main Content */}
                <div className="relative z-10 space-y-4">
                  <h2 className="text-2xl md:text-3xl font-black tracking-tighter uppercase leading-[1.1] text-foreground group-hover:text-primary transition-colors">
                    {category.title}
                  </h2>
                  
                  <p className="text-muted-foreground text-sm font-semibold leading-relaxed">
                    {category.description}
                  </p>

                  <div className="space-y-3 pt-4">
                    <p className="text-[9px] font-black uppercase tracking-[0.3em] text-primary/60">Key Highlights</p>
                    <ul className="space-y-3">
                      {category.services.map((service, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-[10px] font-display font-bold uppercase tracking-wider text-foreground/80">
                          <Plus className="w-3 h-3 text-primary flex-shrink-0" />
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="relative z-10 mt-auto pt-8 border-t border-border/50">
                 <motion.a 
                    href="/contact"
                    className="inline-flex items-center gap-4 text-xs font-black uppercase tracking-[0.3em] text-foreground hover:text-primary transition-all group/link"
                  >
                    CONFIGURE PROJECT
                    <div className="p-1.5 border border-border rounded-lg group-hover/link:border-primary transition-colors">
                        <ArrowUpRight className="w-3 h-3" />
                    </div>
                  </motion.a>
              </div>

              {/* Background Numbering */}
              <span className="card-num select-none pointer-events-none mb-2">
                {String(index + 1).padStart(2, '0')}
              </span>

              {/* Subtle hover background accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
