"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronDown } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We specialize in full-stack web development, mobile app development, SaaS platforms, cloud infrastructure, and custom software solutions. Our team handles everything from initial concept to deployment and ongoing maintenance."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity and scope. A simple website might take 4-6 weeks, while a complex SaaS platform could take 3-6 months. We provide detailed timelines during the discovery phase and keep you updated throughout development."
  },
  {
    question: "What is your development process?",
    answer: "We follow an agile methodology with four main phases: Discovery (requirements gathering), Design (UI/UX creation), Development (coding and testing), and Launch (deployment and support). You'll have regular check-ins and demos throughout the process."
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes! We offer comprehensive maintenance and support packages including bug fixes, security updates, performance optimization, and feature enhancements. We're committed to your long-term success."
  },
  {
    question: "What technologies do you use?",
    answer: "We use modern, industry-standard technologies including React, Next.js, Node.js, TypeScript, PostgreSQL, MongoDB, AWS, and more. We select the best tech stack for each project based on your specific requirements."
  },
  {
    question: "How do you handle project pricing?",
    answer: "We offer both fixed-price and time-and-materials pricing models. After understanding your requirements, we provide a detailed proposal with transparent pricing. We can also work within your budget to prioritize features."
  }
]

export function FAQ() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    const ctx = gsap.context(() => {
      gsap.fromTo(".faq-item",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
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

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="section-subheading">
            Got questions? We've got answers. Find everything you need to know about working with us.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="faq-item rounded-xl border border-border bg-card overflow-hidden transition-all duration-300 hover:border-primary/50"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left transition-colors hover:bg-muted/50"
              >
                <span className="font-semibold text-lg pr-8">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
