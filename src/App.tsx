/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { Github, Twitter, Linkedin, Palette, Globe, Mail, ExternalLink, Lightbulb, Menu, X, Send, Loader2, CheckCircle2 } from "lucide-react";
import React, { useState, useEffect } from "react";

// --- Components ---

const BackgroundBlobs = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[10%] right-[-5%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px]" />
      <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-[100px]" />
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 md:px-12 md:py-8">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold tracking-tighter z-50">
          Samclef Hub<span className="text-brand">.</span>
        </div>
        
        <div className="hidden md:flex space-x-10 text-xs font-medium tracking-[0.2em] uppercase text-white/50">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className="text-white/50 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex gap-4 items-center">
          <div className="hidden sm:flex gap-4 items-center">
            <a href="#" className="p-2 hover:text-brand transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 hover:text-brand transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </div>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md hover:bg-white/10 transition-colors cursor-pointer z-50"
          >
            {isOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <>
                <div className="hidden md:block w-4 h-[1px] bg-white relative before:content-[''] before:absolute before:top-[-4px] before:w-4 before:h-[1px] before:bg-white after:content-[''] after:absolute after:top-[4px] after:w-4 after:h-[1px] after:bg-white" />
                <Menu className="md:hidden w-5 h-5" />
              </>
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 w-full h-screen bg-bg-deep/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-4xl font-bold tracking-tighter uppercase italic hover:text-brand transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="flex gap-8 mt-8">
              <Twitter className="w-8 h-8 text-white/50" />
              <Github className="w-8 h-8 text-white/50" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const RotatingBadge = () => {
  return (
    <div className="absolute -bottom-6 -left-6 md:-left-12 w-32 h-32 flex items-center justify-center group pointer-events-none md:pointer-events-auto">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full fill-white/40 text-[10px] font-medium tracking-widest uppercase">
          <path
            id="circlePath"
            d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
            fill="transparent"
          />
          <text>
            <textPath href="#circlePath">
              Web Developer • Designer • UI/UX •
            </textPath>
          </text>
        </svg>
      </motion.div>
      <div className="z-10 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-xl">
        Hire
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 px-8 md:px-12 flex flex-col md:flex-row items-center">
      {/* Right Content Side */}
      <div className="w-full md:w-3/5 flex flex-col justify-center gap-8 z-10 mb-20 md:mb-0">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-brand font-mono text-sm uppercase tracking-[0.3em] mb-4">Crafting Digital Excellence</h2>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-[0.9] mb-6">
            Turning <br/> Vision Into <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Reality.</span>
          </h1>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg text-white/50 max-w-xl leading-relaxed"
        >
          As a full-stack designer, I bridge the gap between aesthetics and functionality. 
          Dedicated to building innovative web applications with a focus on minimalist design.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center gap-8"
        >
          <button className="px-10 py-4 rounded-xl bg-white text-black font-bold text-sm uppercase tracking-widest hover:bg-zinc-200 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.1)]">
            Explore Work
          </button>
          <a
            href="#"
            className="text-white/70 font-mono text-xs uppercase tracking-widest hover:text-white transition-colors flex items-center gap-2"
          >
            Contact me <span className="text-lg">→</span>
          </a>
        </motion.div>
      </div>

      {/* Hero Card Side */}
      <div className="w-full md:w-2/5 flex justify-center items-center relative">
         <motion.div 
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1 }}
           className="w-full max-w-[380px] glass-card p-6 rounded-[2.5rem] relative group"
         >
            <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 mb-6 flex items-center justify-center overflow-hidden border border-white/5">
              <div className="w-48 h-48 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center relative">
                <div className="w-24 h-24 rounded-full bg-brand shadow-[0_0_50px_rgba(129,140,248,0.4)]" />
                <motion.div 
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border border-brand/20 rounded-full scale-125 border-dashed"
                />
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">The Portfolio</h3>
                <span className="text-[10px] bg-brand/20 text-brand px-2 py-1 rounded border border-brand/30 font-mono uppercase">2024 Edition</span>
              </div>
              <p className="text-white/40 text-sm leading-relaxed">
                Exploring the boundaries of spatial computing and glassmorphism.
              </p>
              <div className="h-[1px] w-full bg-white/10" />
              <div className="flex justify-between text-[10px] font-mono text-white/30 tracking-widest uppercase">
                <span>Core Stack</span>
                <span className="text-white/60">React • Motion • TS</span>
              </div>
            </div>
            
            <RotatingBadge />
         </motion.div>

         {/* Lightbulb Sticker */}
         <motion.div 
           animate={{ y: [0, -10, 0] }}
           transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
           className="absolute -bottom-10 right-0 md:-right-4"
         >
           <div className="bg-brand/20 backdrop-blur-xl rounded-full p-6 border border-white/10 shadow-2xl relative overflow-hidden group">
             <div className="absolute inset-0 bg-brand/10 opacity-0 group-hover:opacity-100 transition-opacity" />
             <Lightbulb className="w-10 h-10 text-white relative z-10" />
           </div>
         </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="px-8 md:px-12 py-32 border-t border-white/5 relative bg-white/[0.01]">
      <div className="flex flex-col md:flex-row gap-16">
        <div className="w-full md:w-1/3">
          <h2 className="text-sm font-mono tracking-[0.3em] uppercase text-white/30 flex items-center gap-4">
            <span className="w-12 h-[1px] bg-white/20" /> 01. Context
          </h2>
        </div>
        <div className="w-full md:w-2/3 flex flex-col gap-10">
          <p className="text-3xl md:text-5xl font-medium tracking-tight leading-[1.1] text-white/90">
            I craft immersive digital products that balance <span className="text-white">technical complexity</span> with <span className="text-white/40 italic">visual elegance</span>.
          </p>
          <div className="grid grid-cols-2 gap-12 mt-4">
            <div className="glass-card p-8 rounded-3xl">
              <h4 className="text-[10px] font-mono text-brand uppercase tracking-[0.3em] mb-6">Strategy</h4>
              <p className="text-white/50 text-sm leading-relaxed">
                Defining core pillars and user journey maps to ensure every pixel serves a purpose.
              </p>
            </div>
            <div className="glass-card p-8 rounded-3xl">
              <h4 className="text-[10px] font-mono text-cyan-400 uppercase tracking-[0.3em] mb-6">Execution</h4>
              <p className="text-white/50 text-sm leading-relaxed">
                Building robust, type-safe architectures with seamless motion design and high performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    { title: "Lumina OS", category: "Spatial Computing", img: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800" },
    { title: "Nexus Proto", category: "AI Dashboard", img: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=800" },
    { title: "Glass UI Kit", category: "Design System", img: "https://images.unsplash.com/photo-1620121692029-d088224efc74?auto=format&fit=crop&q=80&w=800" },
  ];

  return (
    <section id="projects" className="px-8 md:px-12 py-32 border-t border-white/5">
      <div className="flex justify-between items-end mb-20">
        <div>
          <h2 className="text-sm font-mono tracking-[0.3em] uppercase text-white/30 mb-4 flex items-center gap-4">
            <span className="w-12 h-[1px] bg-white/20" /> 02. Output
          </h2>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase italic">Selected Works</h3>
        </div>
        <div className="flex gap-4">
           <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 cursor-pointer backdrop-blur-md transition-all">
             <span className="text-lg">←</span>
           </div>
           <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 cursor-pointer backdrop-blur-md transition-all">
             <span className="text-lg">→</span>
           </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="group cursor-pointer"
          >
            <div className="glass-card p-4 rounded-[2rem] overflow-hidden">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 relative">
                <img 
                  src={p.img} 
                  alt={p.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand/20 opacity-0 group-hover:opacity-40 transition-opacity" />
              </div>
              <div className="px-2 pb-2">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="text-xl font-bold uppercase tracking-tight">{p.title}</h4>
                  <ExternalLink className="w-4 h-4 text-white/20 group-hover:text-brand transition-colors" />
                </div>
                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/30">{p.category}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [responseMsg, setResponseMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setResponseMsg(data.message);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setResponseMsg(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setResponseMsg("Connection error. Is the server running?");
    }
  };

  return (
    <section id="contact" className="px-8 md:px-12 py-32 border-t border-white/5 bg-white/[0.005]">
      <div className="flex flex-col md:flex-row gap-16">
        <div className="w-full md:w-1/3">
          <h2 className="text-sm font-mono tracking-[0.3em] uppercase text-white/30 flex items-center gap-4 mb-8">
            <span className="w-12 h-[1px] bg-white/20" /> 03. Connection
          </h2>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase italic mb-8">Get In <br/> Touch</h3>
          <p className="text-white/40 text-sm leading-relaxed max-w-xs transition-all">
            Ready to bring your vision to life? Let's collaborate on your next project.
          </p>
          
          <div className="mt-12 space-y-6">
            <div className="flex items-center gap-4 text-white/50 hover:text-white transition-colors cursor-pointer group">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-brand/40 group-hover:bg-brand/5 transition-all">
                <Mail className="w-4 h-4" />
              </div>
              <span className="text-xs font-mono tracking-widest uppercase">hello@sam.studio</span>
            </div>
            <div className="flex items-center gap-4 text-white/50 hover:text-white transition-colors cursor-pointer group">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-indigo-400/40 group-hover:bg-indigo-400/5 transition-all">
                <Globe className="w-4 h-4" />
              </div>
              <span className="text-xs font-mono tracking-widest uppercase">Remote / Worldwide</span>
            </div>
          </div>
        </div>

        <div className="w-full md:w-2/3">
          <div className="glass-card p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-brand/20 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-brand" />
                  </div>
                  <h4 className="text-2xl font-bold uppercase italic mb-4">Message Sent!</h4>
                  <p className="text-white/50 max-w-sm mb-8">{responseMsg}</p>
                  <button 
                    onClick={() => setStatus("idle")}
                    className="px-8 py-3 rounded-xl border border-white/10 hover:bg-white/5 text-[10px] font-mono uppercase tracking-[0.2em] transition-all"
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-8"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/30 ml-2">Name</label>
                      <input 
                        required
                        type="text" 
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your Name"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-brand/40 focus:bg-white/[0.08] transition-all text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/30 ml-2">Email</label>
                      <input 
                        required
                        type="email" 
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@example.com"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-brand/40 focus:bg-white/[0.08] transition-all text-sm"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/30 ml-2">How can I help?</label>
                    <textarea 
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your project details..."
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-6 outline-none focus:border-brand/40 focus:bg-white/[0.08] transition-all text-sm resize-none"
                    />
                  </div>

                  {status === "error" && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-xs font-mono px-4"
                    >
                      {responseMsg}
                    </motion.p>
                  )}

                  <button 
                    disabled={status === "loading"}
                    className="w-full md:w-auto px-10 py-5 rounded-2xl bg-white text-black font-bold text-xs uppercase tracking-[0.2em] hover:bg-zinc-200 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                  >
                    {status === "loading" ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand selection:text-white">
      <BackgroundBlobs />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      
      <footer className="px-8 md:px-12 py-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 relative z-10 text-white/30 uppercase font-mono text-[10px] tracking-[0.3em]">
        <div>
          Available for projects — Q2 2026
        </div>
        <div className="flex space-x-12">
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">Github</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
        </div>
        <div>
          Sam Portfolio &copy;
        </div>
      </footer>
    </div>
  );
}
