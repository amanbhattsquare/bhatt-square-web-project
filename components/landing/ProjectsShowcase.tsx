"use client"

import { useEffect, useRef } from "react"
import { ExternalLink, Github } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const projects = [
  {
    title: "FitStack - GYM Management Software",
    description: "An enterprise-grade solution engineered to streamline fitness center operations. This comprehensive platform features automated billing, intuitive class scheduling, and robust trainer management, all designed to enhance member experience and optimize administrative efficiency.",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&h=600&fit=crop",
    tags: ["Python", "Django", "PostgreSQL"],
    link: "https://fitstack.nextgenapplication.com/"
  },
  {
    title: "mydbs - Business Management Software",
    description: "A unified, all-in-one platform designed to scale with your business. It integrates CRM, agile project management, and real-time financial tracking to provide a holistic view of your operations and drive data-driven decision-making.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tags: ["Next.js", "Stripe", "MongoDB"],
    link: "https://mydbs.nextgenapplication.com/"
  },
  {
    title: "Mediamuni - Social Media Growth & Earn Platform",
    description: "A revolutionary platform that empowers influencers and brands to achieve exponential growth. Leveraging advanced analytics and monetization tools, it creates a dynamic ecosystem for building and capitalizing on social media presence.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=600&fit=crop",
    tags: ["TypeScript", "AWS", "GraphQL"],
    link: "https://mediamuni.com/"
  },
  {
    title: "E-Commerce Platform",
    description: "A feature-rich online store with seamless checkout, inventory management, and secure payment integration designed to maximize sales and customer satisfaction.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
    tags: ["Next.js", "Redux", "Stripe"],
    link: "/products"
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
    <section ref={sectionRef} className="py-6 bg-muted/20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="section-subheading">
            Explore our portfolio of successful projects that showcase our expertise and commitment to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
            >
              {/* Image */}
              <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`View project ${project.title}`}>
                <div className="relative h-56 overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="btn-glass text-sm py-2 px-5 scale-90 group-hover:scale-100 transition-transform duration-300">
                      View Project <ExternalLink className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </div>
              </a>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
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