"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { Code2, Cpu, Database, Globe, Layers, Layout, Server, Smartphone } from "lucide-react"

const techRow1 = [
  { name: "React", icon: Code2 },
  { name: "Next.js", icon: Globe },
  { name: "TypeScript", icon: Code2 },
  { name: "TailwindCSS", icon: Layout },
  { name: "Framer Motion", icon: Layers },
  { name: "GSAP", icon: Layers },
]

const techRow2 = [
  { name: "Node.js", icon: Server },
  { name: "PostgreSQL", icon: Database },
  { name: "Docker", icon: Cpu },
  { name: "AWS", icon: Cloud },
  { name: "GraphQL", icon: Database },
  { name: "MongoDB", icon: Database },
]

// Lucide doesn't have Cloud, so let's import it or use Server
import { Cloud } from "lucide-react"

export function TechStackMarquee() {
  const row1Ref = useRef<HTMLDivElement>(null)
  const row2Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let clone1: Node | undefined;
    let clone2: Node | undefined;

    const ctx = gsap.context(() => {
      // Row 1 Animation (Left)
      const container1 = row1Ref.current
      const content1 = container1?.querySelector(".marquee-content")
      if (container1 && content1) {
        clone1 = content1.cloneNode(true)
        container1.appendChild(clone1)
        gsap.to(container1.querySelectorAll(".marquee-content"), {
          xPercent: -100,
          repeat: -1,
          duration: 40,
          ease: "linear",
        })
      }

      // Row 2 Animation (Right)
      const container2 = row2Ref.current
      const content2 = container2?.querySelector(".marquee-content")
      if (container2 && content2) {
        clone2 = content2.cloneNode(true)
        container2.appendChild(clone2)
        gsap.fromTo(container2.querySelectorAll(".marquee-content"), 
          { xPercent: -100 },
          { xPercent: 0, repeat: -1, duration: 50, ease: "linear" }
        )
      }
    })

    return () => {
      ctx.revert()
      if (clone1) {
        row1Ref.current?.removeChild(clone1)
      }
      if (clone2) {
        row2Ref.current?.removeChild(clone2)
      }
    }
  }, [])

  return (
    <section className="py-6 bg-muted/10 overflow-hidden space-y-12">
      <div className="container mx-auto px-4 text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Powered by <span className="text-primary">Modern Tech</span>
        </h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Our stack is built for performance, scalability, and developer experience.
        </p>
      </div>
      
      <div className="space-y-8 relative">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10"></div>

        {/* Row 1 */}
        <div ref={row1Ref} className="flex relative overflow-hidden select-none">
          <div className="marquee-content flex shrink-0 gap-4 px-2">
            {techRow1.map((tech, index) => (
              <TechBadge key={index} name={tech.name} icon={tech.icon} />
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div ref={row2Ref} className="flex relative overflow-hidden select-none">
          <div className="marquee-content flex shrink-0 gap-4 px-2">
             {techRow2.map((tech, index) => (
              <TechBadge key={index} name={tech.name} icon={tech.icon} />
             ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TechBadge({ name, icon: Icon }: { name: string, icon: any }) {
    return (
        <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-secondary/30 border border-border/50 backdrop-blur-md hover:bg-primary/10 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 w-max group cursor-default">
            <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            <span className="font-semibold text-foreground/80 group-hover:text-foreground transition-colors">{name}</span>
        </div>
    )
}
