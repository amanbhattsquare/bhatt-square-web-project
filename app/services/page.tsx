import { ServicesGrid } from "@/components/landing/ServicesGrid";
import { Metadata } from "next";
import Batch from "../components/Batch";

export const metadata: Metadata = {
  title: "Services | Bhatt Square Pvt. Ltd.",
  description: "Explore our wide range of IT services including Web Development, SaaS, Mobile Apps, and more.",
};

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col pt-16">
      <div className="relative h-[50vh] md:h-[60vh] flex items-center justify-center text-center text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/about-team.png')" }}
        ></div>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

        <div className="relative z-10 p-4">
          <Batch title="OUR SERVICES" />
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight text-shadow-lg">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
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