
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CallToAction() {
  return (
    <section className="py-15 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -z-10"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-primary/5 blur-3xl -z-10 rounded-full opacity-50"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <h2 className="section-heading">Ready to Transform Your Business?</h2>
        <p className="section-subheading">
          Let's discuss how we can help you build the perfect solution for your needs.
        </p>
        <Link href="/contact" className="btn-primary">
          Get in Touch
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </section>
  )
}
