
import { Metadata } from "next";
import { Briefcase, Dumbbell, ShoppingCart, TrendingUp, Users, BrainCircuit, Building, GraduationCap, Home, ArrowRight } from "lucide-react";
import Batch from "../components/Batch";

export const metadata: Metadata = {
  title: "Our Products | Bhatt Square Pvt. Ltd.",
  description: "Explore our suite of software solutions, including GYM management, business management, social media platforms, and more.",
};

const products = [
  {
    icon: Dumbbell,
    title: "GYM Management Software",
    description: "A comprehensive solution to manage your fitness center, from member billing to class scheduling and trainer management.",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Briefcase,
    title: "Business Management Software",
    description: "An all-in-one platform to streamline your business operations, including CRM, project management, and financial tracking.",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: Users,
    title: "Social Media Growth & Earn Platform",
    description: "A unique platform designed to boost your social media presence and create new earning opportunities for influencers.",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: TrendingUp,
    title: "Crypto Market Analysis Tool",
    description: "Stay ahead of the market with our advanced crypto analysis tool, offering real-time data, trend prediction, and portfolio tracking.",
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Platform",
    description: "A scalable and customizable e-commerce solution to build and grow your online store, complete with payment gateway integration.",
    color: "text-red-500",
    bgColor: "bg-red-500/10",
  },
  {
    icon: BrainCircuit,
    title: "AI-Powered Content Creation Tool",
    description: "Leverage artificial intelligence to generate high-quality marketing copy, blog posts, and social media updates in seconds.",
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
  },
  {
    icon: Building,
    title: "Custom ERP Solutions",
    description: "Tailor-made Enterprise Resource Planning systems to integrate and manage your core business processes for optimal efficiency.",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
  {
    icon: GraduationCap,
    title: "Online Learning Platform (LMS)",
    description: "Create, market, and sell online courses with our feature-rich Learning Management System, designed for educators and institutions.",
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
  },
  {
    icon: Home,
    title: "Real Estate Management Platform",
    description: "A complete tool for real estate agencies to manage listings, track leads, and automate sales workflows from a single dashboard.",
    color: "text-teal-500",
    bgColor: "bg-teal-500/10",
  },
];

export default function ProductsPage() {
  return (
    <main className="flex min-h-screen flex-col pt-16">
      <div className="relative h-[50vh] md:h-[60vh] flex items-center justify-center text-center text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/about-team.png')" }}
        ></div>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

        <div className="relative z-10 p-4">
          <Batch title="OUR PRODUCTS" />
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight text-shadow-lg">
            Our Innovative Products
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            We build cutting-edge software solutions to empower businesses and individuals in a rapidly evolving digital landscape.
          </p>
        </div>
      </div>

      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col">
                <div className={`p-4 rounded-full w-fit ${product.bgColor}`}>
                  <product.icon className={`h-8 w-8 ${product.color}`} />
                </div>
                <h3 className="text-2xl font-bold mt-6 mb-3">{product.title}</h3>
                <p className="text-muted-foreground flex-grow">{product.description}</p>
                <div className="mt-8">
                  <a href="#" className="btn-secondary">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
