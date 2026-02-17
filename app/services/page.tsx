import { ServicesGrid } from "@/components/landing/ServicesGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Bhatt Square Pvt. Ltd.",
  description: "Explore our wide range of IT services including Web Development, SaaS, Mobile Apps, and more.",
};

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col pt-16">
      <div className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology solutions tailored to your business needs.
          </p>
        </div>
      </div>
      
      <ServicesGrid />
      
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Need a Custom Solution?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                We understand that every business is unique. Contact us to discuss your specific requirements.
            </p>
        </div>
      </section>
    </main>
  );
}
