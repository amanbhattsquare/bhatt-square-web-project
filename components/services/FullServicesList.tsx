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
  Settings, 
  Users, 
  Layers,
  CheckCircle2
} from "lucide-react"

const serviceCategories = [
  {
    title: "Software Development",
    icon: Code2,
    description: "Tailored software solutions designed to solve your complex business problems with scalable and efficient code.",
    services: [
      "Custom Software Development",
      "ERP Software Development",
      "CRM Software Development",
      "Inventory Management Software",
      "Billing & Accounting Software",
      "Furniture Management Software",
      "School / Hospital / Hotel Management Software",
      "POS (Point of Sale) Software"
    ],
    color: "bg-blue-500/10 text-blue-500"
  },
  {
    title: "Web Development",
    icon: Globe,
    description: "Modern, responsive websites and complex web applications built using the latest technologies and frameworks.",
    services: [
      "Website Design & Development",
      "Static Website Development",
      "Dynamic Website Development",
      "E-commerce Website Development",
      "Corporate Websites",
      "Web Portals & Dashboards",
      "Website Redesign & Maintenance"
    ],
    color: "bg-emerald-500/10 text-emerald-500"
  },
  {
    title: "Mobile App Development",
    icon: Smartphone,
    description: "Creating seamless mobile experiences across Android and iOS with high performance and intuitive UX.",
    services: [
      "Android App Development",
      "iOS App Development",
      "Hybrid App Development (Flutter / React Native)",
      "Business Apps",
      "E-commerce Mobile Apps"
    ],
    color: "bg-purple-500/10 text-purple-500"
  },
  {
    title: "UI / UX & Graphics",
    icon: Palette,
    description: "Crafting beautiful interfaces and compelling visual designs that enhance user engagement and brand identity.",
    services: [
      "UI / UX Design",
      "Website & App Design",
      "Logo Design",
      "Banner & Poster Design",
      "Brochure / Pamphlet Design",
      "Social Media Creatives"
    ],
    color: "bg-pink-500/10 text-pink-500"
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    description: "Optimizing your infrastructure with secure cloud hosting, seamless deployments, and scalable server management.",
    services: [
      "Cloud Hosting Services",
      "AWS / Azure / Google Cloud Setup",
      "Server Setup & Management",
      "Backup & Recovery Solutions",
      "DevOps & CI/CD Pipelines"
    ],
    color: "bg-cyan-500/10 text-cyan-500"
  },
  {
    title: "Cyber Security Services",
    icon: ShieldCheck,
    description: "Protecting your digital assets with advanced security protocols, audits, and real-time threat detection.",
    services: [
      "Website Security",
      "SSL Certificate Setup",
      "Data Protection & Encryption",
      "Malware Removal",
      "Security Audits"
    ],
    color: "bg-rose-500/10 text-rose-500"
  },
  {
    title: "Digital Marketing",
    icon: BarChart,
    description: "Boosting your online presence and driving growth through data-driven marketing strategies and SEO.",
    services: [
      "SEO (Search Engine Optimization)",
      "Social Media Marketing",
      "Google Ads & Facebook Ads",
      "Lead Generation Campaigns",
      "Email & WhatsApp Marketing",
      "Online Reputation Management"
    ],
    color: "bg-orange-500/10 text-orange-500"
  },
  {
    title: "AI & Automation",
    icon: Cpu,
    description: "Leveraging artificial intelligence and automation to streamline operations and unlock business insights.",
    services: [
      "AI Chatbot Development",
      "Business Automation",
      "Data Analytics & Reporting",
      "Machine Learning Solutions"
    ],
    color: "bg-indigo-500/10 text-indigo-500"
  },
  {
    title: "IT Support & Maintenance",
    icon: Settings,
    description: "Providing 24/7 technical support and proactive maintenance to keep your systems running smoothly.",
    services: [
      "AMC (Annual Maintenance Contract)",
      "Software Support",
      "Website Maintenance",
      "Server Monitoring",
      "Technical Helpdesk"
    ],
    color: "bg-amber-500/10 text-amber-500"
  },
  {
    title: "Consulting & Training",
    icon: Users,
    description: "Expert IT consulting and comprehensive training programs to empower your team and optimize processes.",
    services: [
      "IT Consulting",
      "Business Process Automation",
      "Software Training",
      "Corporate IT Training"
    ],
    color: "bg-teal-500/10 text-teal-500"
  },
  {
    title: "Other Services",
    icon: Layers,
    description: "Essential business services including hosting, domain registration, and API integrations.",
    services: [
      "Domain Registration",
      "Web Hosting",
      "Email Hosting",
      "SMS & WhatsApp API Integration",
      "Payment Gateway Integration"
    ],
    color: "bg-slate-500/10 text-slate-500"
  }
]

export function FullServicesList() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="p-8 rounded-[2rem] border border-border bg-card hover:border-primary/30 transition-all duration-300 group shadow-md hover:shadow-xl"
            >
              <div className={`mb-6 p-4 rounded-2xl w-fit ${category.color}`}>
                <category.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{category.title}</h3>
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                {category.description}
              </p>
              <ul className="space-y-3">
                {category.services.map((service, idx) => (
                  <li key={idx} className="flex items-start gap-3 group/item">
                    <CheckCircle2 className="w-5 h-5 text-primary/40 group-hover/item:text-primary transition-colors shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/80">{service}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
