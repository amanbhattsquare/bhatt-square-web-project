import { FullServicesList } from "@/components/services/FullServicesList";
import { ServicesHero } from "@/components/services/ServicesHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Bhatt Square Pvt. Ltd.",
  description: "Explore our wide range of IT services including Web Development, SaaS, Mobile Apps, and more.",
};

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col pt-6">
      <ServicesHero />
      
      <div id="full-services" className="bg-background">
        <div className="container mx-auto px-4 pt-24 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Comprehensive IT <span className="text-primary">Catalog</span></h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-12">
                Explore our full suite of professional services across various tech domains.
            </p>
        </div>
        <FullServicesList />
      </div>
      
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-black mb-8 tracking-tight">Need a Custom Solution?</h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto font-medium">
                We understand that every business is unique. We're here to help you navigate your digital transformation journey.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-bold transition-all hover:bg-primary/90 hover:scale-105 shadow-xl shadow-primary/20"
            >
              Contact Us Today
            </a>
        </div>
      </section>
    </main>
  );
}

