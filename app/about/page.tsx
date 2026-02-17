import { Metadata } from "next";
import { CheckCircle2, Users, Trophy, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Bhatt Square Pvt. Ltd.",
  description: "Learn more about Bhatt Square Pvt. Ltd., our mission, vision, and the team driving innovation.",
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col pt-16">
       <div className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Driving digital transformation through innovation and excellence.
          </p>
        </div>
      </div>

      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold">Our Mission</h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        At Bhatt Square Pvt. Ltd., our mission is to empower businesses with cutting-edge technology solutions. We strive to bridge the gap between complex problems and simple, effective digital answers. We believe in building long-term partnerships based on trust, transparency, and results.
                    </p>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-start gap-4">
                            <div className="bg-primary/10 p-3 rounded-lg"><Target className="h-6 w-6 text-primary" /></div>
                            <div>
                                <h3 className="font-semibold text-lg">Innovation First</h3>
                                <p className="text-muted-foreground">Constantly exploring new technologies to stay ahead.</p>
                            </div>
                        </div>
                         <div className="flex items-start gap-4">
                            <div className="bg-rose-500/10 p-3 rounded-lg"><Users className="h-6 w-6 text-rose-500" /></div>
                            <div>
                                <h3 className="font-semibold text-lg">Client Centric</h3>
                                <p className="text-muted-foreground">Your success is our success. We listen, adapt, and deliver.</p>
                            </div>
                        </div>
                         <div className="flex items-start gap-4">
                            <div className="bg-indigo-500/10 p-3 rounded-lg"><Trophy className="h-6 w-6 text-indigo-500" /></div>
                            <div>
                                <h3 className="font-semibold text-lg">Excellence Driven</h3>
                                <p className="text-muted-foreground">Committed to the highest standards of quality in every line of code.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <div className="aspect-square bg-gradient-to-tr from-primary/20 to-rose-500/20 rounded-3xl overflow-hidden relative">
                         {/* Placeholder for an office image or team photo */}
                         <div className="absolute inset-0 flex items-center justify-center bg-muted/50">
                            Navigate the Future
                         </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </main>
  );
}
