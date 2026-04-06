"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const clients = [
  { name: "A-Traders", logo: "/images/clients-1.png" },
  { name: "Client 2", logo: "/images/clients-2.jpeg" },
  { name: "Client 3", logo: "/images/clients-3.jpeg" },
  { name: "Client 4", logo: "/images/clients-4.png" },
  { name: "Client 5", logo: "/images/clients-5.jpg" },
  { name: "Client 6", logo: "/images/clients-6.jpg" },
  { name: "Client 7", logo: "/images/clients-7.jpg" },
  { name: "Client 8", logo: "/images/clients-8.png" },
];

export function ClientShowcase() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const content = marquee.querySelector(".marquee-content");
    if (!content) return;

    // Pause animation on hover
    const pauseAnimation = () => gsap.to(marquee.querySelectorAll(".marquee-content"), { timeScale: 0.2 });
    const resumeAnimation = () => gsap.to(marquee.querySelectorAll(".marquee-content"), { timeScale: 1 });

    marquee.addEventListener("mouseenter", pauseAnimation);
    marquee.addEventListener("mouseleave", resumeAnimation);

    const clone = content.cloneNode(true);
    marquee.appendChild(clone);

    const animation = gsap.to(marquee.querySelectorAll(".marquee-content"), {
      xPercent: -100,
      repeat: -1,
      duration: 35,
      ease: "linear",
    });

    return () => {
      animation.kill();
      if (marquee && clone.parentNode === marquee) {
        marquee.removeChild(clone);
      }
      marquee.removeEventListener("mouseenter", pauseAnimation);
      marquee.removeEventListener("mouseleave", resumeAnimation);
    };
  }, []);

  return (
    <section className="py-20 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            Trusted by <span className="text-primary">Industry Leaders</span>
          </h2>
          <p className="section-subheading">
            We are proud to partner with innovative companies worldwide.
          </p>
        </div>

        <div 
          ref={marqueeRef} 
          className="flex relative overflow-hidden select-none group w-full py-6"
          style={{ 
            maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)'
          }}
        >
          <div className="marquee-content flex shrink-0 items-center justify-center gap-6 sm:gap-8 px-4">
            {clients.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center group/logo px-2"
              >
                <div className="relative flex items-center justify-center w-40 h-28 sm:w-52 sm:h-32 rounded-xl border border-border/50 bg-background/50 backdrop-blur-md overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 hover:bg-muted/80 hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.2)]">
                  {/* Subtle inner light effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover/logo:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  {/* Glow orb */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-primary/20 rounded-full blur-2xl opacity-0 group-hover/logo:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  
                  <img 
                    src={client.logo} 
                    alt={client.name} 
                    className="max-h-16 sm:max-h-20 w-auto object-contain transition-all duration-500 cursor-pointer drop-shadow-sm relative z-10 group-hover/logo:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}