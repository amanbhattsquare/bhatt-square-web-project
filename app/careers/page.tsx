import { Metadata } from "next";
import { CareersHero } from "@/components/careers/CareersHero";
import { ApplicationForm } from "@/components/careers/ApplicationForm";

export const metadata: Metadata = {
  title: "Careers | Bhatt Square - Join Our Elite Engineering Team",
  description: "Join the frontier of industrial SaaS architecture. Architect your legacy with Bhatt Square.",
};

export default function CareersPage() {
  return (
    <main className="flex min-h-screen flex-col pt-6">
      <CareersHero />
      <ApplicationForm />
    </main>
  );
}
