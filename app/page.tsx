import { Hero } from "@/components/landing/Hero";
import { ServicesGrid } from "@/components/landing/ServicesGrid";
import { AboutBrief } from "@/components/landing/AboutBrief";
import { CallToAction } from "@/components/landing/CallToAction";
import { TechStackMarquee } from "@/components/landing/TechStackMarquee";
import { Testimonials } from "@/components/landing/Testimonials";
import { StatsMetrics } from "@/components/landing/StatsMetrics";
import { ProcessTimeline } from "@/components/landing/ProcessTimeline";
import { ProjectsShowcase } from "@/components/landing/ProjectsShowcase";
import { FAQ } from "@/components/landing/FAQ";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <TechStackMarquee />
      <StatsMetrics />
      <AboutBrief />
      <ServicesGrid />
      <ProcessTimeline />
      <ProjectsShowcase />
      <Testimonials />
      <FAQ />
      <CallToAction />
    </main>
  );
}
