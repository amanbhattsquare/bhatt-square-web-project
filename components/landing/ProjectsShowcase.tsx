"use client"

import { useEffect, useRef } from "react"
import { ExternalLink, ArrowUpRight, Plus } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const projects = [
  {
    title: "FitStack - GYM Management Software",
    description: "An enterprise-grade solution engineered to streamline fitness center operations. This comprehensive platform features automated billing, intuitive class scheduling, and robust trainer management.",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&h=600&fit=crop",
    tags: ["Python", "Django", "PostgreSQL"],
    link: "https://fitstack.nextgenapplication.com/",
    status: "LIVE"
  },
  {
    title: "mydbs - Business Management Software",
    description: "A unified, all-in-one platform designed to scale with your business. It integrates CRM, agile project management, and real-time financial tracking.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tags: ["Next.js", "Stripe", "MongoDB"],
    link: "https://mydbs.nextgenapplication.com/",
    status: "LIVE"
  },
  {
    title: "Mediamuni - Social Media Growth Platform",
    description: "A revolutionary platform that empowers influencers and brands to achieve exponential growth through advanced analytics and monetization tools.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=600&fit=crop",
    tags: ["TypeScript", "AWS", "GraphQL"],
    link: "https://mediamuni.com/",
    status: "LIVE"
  },
  {
    title: "E-Commerce Platform",
    description: "A feature-rich online store with seamless checkout, inventory management, and secure payment integration designed to maximize sales.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
    tags: ["Next.js", "Redux", "Stripe"],
    link: "/products",
    status: "SHIPPED"
  }
]

export function ProjectsShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    const ctx = gsap.context(() => {
      gsap.fromTo(".project-card",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-15 bg-muted/20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-6">
              <Plus className="w-3 h-3" />
              PORTFOLIO
          </div>
          <h2 className="section-heading">
            Featured <span className="text-primary italic">Projects</span>
          </h2>
          <p className="section-subheading">
            Explore our portfolio of successful projects that showcase our expertise and commitment to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card group relative overflow-hidden bg-card border border-border/80 rounded-2xl hover:border-primary/40 transition-all duration-500 hover:shadow-lg hover:-translate-y-1"
            >
              {/* Image */}
              <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`View project ${project.title}`}>
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-black/60 backdrop-blur-sm rounded-lg text-[9px] font-black uppercase tracking-[0.2em] text-white border border-white/10">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 animate-pulse"></span>
                    {project.status}
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full border border-white/40 bg-white/10 backdrop-blur-sm flex items-center justify-center text-white scale-75 group-hover:scale-100 transition-transform duration-300">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </a>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-base font-black uppercase tracking-tight leading-tight group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-xs font-medium leading-relaxed line-clamp-2">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2.5 py-1 text-[9px] font-black uppercase tracking-widest bg-muted/60 border border-border rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}