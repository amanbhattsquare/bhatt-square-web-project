"use client"

import Link from 'next/link';
import { ArrowRight, Home, Search, Compass, AlertTriangle, Ghost, Rocket, Mail } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function NotFound() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const glitchRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<{ top: string; left: string; delay: string; duration: string }[]>([]);

  useEffect(() => {
    // Generate particles only on the client
    const newParticles = [...Array(30)].map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${5 + Math.random() * 5}s`
    }));
    setParticles(newParticles);

    // Mouse move parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div 
          className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translate(${mousePosition.x * -0.5}px, ${mousePosition.y * -0.5}px)` }}
        />
        <div 
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse animation-delay-2000"
          style={{ transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)` }}
        />
        
        {/* Grid Overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, rgba(99, 102, 241, 0.1) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(99, 102, 241, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Floating Particles */}
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float"
            style={{
              top: particle.top,
              left: particle.left,
              animationDelay: particle.delay,
              animationDuration: particle.duration
            }}
          />
        ))}

        {/* Decorative Elements */}
        <div className="absolute top-20 left-20 opacity-20">
          <Compass className="w-32 h-32 text-primary animate-spin-slow" />
        </div>
        <div className="absolute bottom-20 right-20 opacity-20">
          <Ghost className="w-32 h-32 text-primary animate-bounce-slow" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Glitch Effect 404 */}
        <div ref={glitchRef} className="relative mb-8">
          <div className="text-9xl md:text-[12rem] font-black text-primary opacity-20 select-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div 
                className="text-9xl md:text-[12rem] font-black text-primary animate-glitch-1"
                style={{ 
                  textShadow: '2px 0 #ff00ff, -2px 0 #00ffff',
                  transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px)`
                }}
              >
                404
              </div>
              <div 
                className="absolute inset-0 text-9xl md:text-[12rem] font-black text-primary animate-glitch-2 opacity-70"
                style={{ 
                  textShadow: '2px 0 #ff00ff, -2px 0 #00ffff',
                  clipPath: 'inset(20% 0 30% 0)',
                  transform: `translate(${mousePosition.x * -0.2 + 2}px, ${mousePosition.y * -0.2 + 2}px)`
                }}
              >
                404
              </div>
            </div>
          </div>
        </div>

        {/* Error Icon with Animation */}
        <div className="flex justify-center mb-2">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-ping" />
            <div className="relative p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full border border-primary/20 backdrop-blur-sm">
              <AlertTriangle className="w-12 h-12 text-primary animate-bounce" />
            </div>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent bg-300% animate-gradient-shift">
          Lost in Space?
        </h1>
        
        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4 max-w-2xl mx-auto">
          The page you're looking for has vanished into the digital void. 
          It might have been moved, deleted, or never existed in the first place.
        </p>

        {/* Search Suggestions */}
        <div className="mb-10">
          <p className="text-sm text-muted-foreground mb-3">You might want to check:</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {['Home', 'Services', 'About', 'Contact'].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                className="px-4 py-2 text-sm bg-white/5 backdrop-blur-sm border border-border rounded-full hover:border-primary/50 hover:bg-primary/5 transition-all hover:-translate-y-0.5"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>Back to Home</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-sm border-2 border-border hover:border-primary/50 rounded-full font-semibold transition-all hover:-translate-y-1 hover:bg-primary/5"
          >
            <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>Contact Support</span>
          </Link>
        </div> */}

       
      </div>

      {/* Decorative Bottom Bar */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 text-xs text-muted-foreground">
        <Search className="w-3 h-3" />
        <span>Error Code: 404 | Page Not Found</span>
      </div>

      <style jsx>{`
        @keyframes glitch-1 {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
        }

        @keyframes glitch-2 {
          0%, 100% { transform: translate(0); opacity: 0.7; }
          20% { transform: translate(2px, -2px); opacity: 0.5; }
          40% { transform: translate(2px, 2px); opacity: 0.3; }
          60% { transform: translate(-2px, -2px); opacity: 0.5; }
          80% { transform: translate(-2px, 2px); opacity: 0.3; }
        }

        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(0) translateX(20px); }
          75% { transform: translateY(20px) translateX(10px); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        .animate-glitch-1 {
          animation: glitch-1 3s infinite;
        }

        .animate-glitch-2 {
          animation: glitch-2 3s infinite;
        }

        .animate-gradient-shift {
          background-size: 300% 300%;
          animation: gradient-shift 8s ease infinite;
        }

        .animate-float {
          animation: float 10s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .bg-300\% {
          background-size: 300% 300%;
        }
      `}</style>
    </div>
  );
}