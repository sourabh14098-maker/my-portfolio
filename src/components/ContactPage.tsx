import React, { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Github, Linkedin, ChevronRight, Check } from 'lucide-react';

export default function ContactPage() {
  // Contact Form state management
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formLoading, setFormLoading] = useState(false);

  const handleContactSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormLoading(true);
    // Simulate premium backend ingestion delay
    setTimeout(() => {
      setFormLoading(false);
      setFormSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <section 
      id="contact" 
      className="py-12 px-6 relative z-10"
    >
      <div className="max-w-6xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left sidebar instructions block */}
          <div className="lg:col-span-5 text-left flex flex-col gap-6">
            
            <div>
              <h2 id="contact-title" className="text-sm font-mono text-[#3b82f6] uppercase tracking-widest font-semibold mb-2">Inquire</h2>
              <p className="text-3xl md:text-4xl font-display font-extrabold tracking-tight text-white mb-4">Let's craft something premium together</p>
              <p className="text-[#a1a1aa] text-xs md:text-sm leading-relaxed">
                Have a challenging project, full-stack requirement, or interesting internship brief? Drop me a direct message and I will reply within 24 working hours.
              </p>
            </div>

            {/* Direct access card options */}
            <div className="flex flex-col gap-3">
              
              <a 
                href="mailto:hello@nyxo.dev" 
                className="glass-panel rounded-xl p-4 flex items-center justify-between group border-[#222222] bg-[#000000] hover:border-[#3b82f6]/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#111111] border border-[#222222] flex items-center justify-center text-zinc-350">
                    <Mail className="w-4.5 h-4.5 text-[#3b82f6]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-zinc-500 font-mono uppercase">Direct Mail</span>
                    <span className="text-xs font-semibold text-white group-hover:text-[#3b82f6] transition-colors duration-200">hello@nyxo.dev</span>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors duration-200" />
              </a>

              <a 
                href="https://github.com/nyxodev" 
                target="_blank" 
                rel="noreferrer" 
                className="glass-panel rounded-xl p-4 flex items-center justify-between group border-[#222222] bg-[#000000] hover:border-[#3b82f6]/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#111111] border border-[#222222] flex items-center justify-center text-zinc-350">
                    <Github className="w-4.5 h-4.5 text-[#3b82f6]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-zinc-500 font-mono uppercase">Open Source Repository</span>
                    <span className="text-xs font-semibold text-white group-hover:text-[#3b82f6] transition-colors duration-200">github.com/nyxodev</span>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors duration-200" />
              </a>

              <a 
                href="https://linkedin.com/in/#" 
                target="_blank" 
                rel="noreferrer" 
                className="glass-panel rounded-xl p-4 flex items-center justify-between group border-[#222222] bg-[#000000] hover:border-[#3b82f6]/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#111111] border border-[#222222] flex items-center justify-center text-zinc-350">
                    <Linkedin className="w-4.5 h-4.5 text-[#3b82f6]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-zinc-500 font-mono uppercase">Professional Profile</span>
                    <span className="text-xs font-semibold text-white group-hover:text-[#3b82f6] transition-colors duration-200">NYXO on LinkedIn</span>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors duration-200" />
              </a>

            </div>

          </div>

          {/* Right panel interactive glassmorphism form */}
          <div className="lg:col-span-7 w-full relative z-10">
            <div className="glass-panel rounded-3xl p-6 md:p-8 bg-[#0a0a0a] border-[#222222] relative">
              
              {/* Simulated Success banner layer */}
              <AnimatePresence mode="wait">
                {formSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-[#0a0a0a] rounded-3xl p-6 md:p-8 flex flex-col items-center justify-center text-center gap-4 z-10"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#10b981]/10 border border-[#10b981]/20 flex items-center justify-center text-[#10b981]">
                      <Check className="w-8 h-8" />
                    </div>
                    
                    <h3 className="text-2xl font-display font-medium text-white">Message Sent</h3>
                    <p className="text-[#a1a1aa] text-xs md:text-sm max-w-sm font-sans">
                      Thank you! Your message has been sent directly to NYXO. Expect a response shortly.
                    </p>

                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="px-5 py-2.5 rounded-full bg-[#111111] hover:bg-[#1a1a1a] border border-[#222222] text-white font-mono text-xs cursor-pointer transition-all duration-200"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : null}
              </AnimatePresence>

              {/* Main input form */}
              <form onSubmit={handleContactSubmit} className="flex flex-col gap-4 text-left">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-medium" htmlFor="contact-name">Your Full Name</label>
                    <input
                      type="text"
                      required
                      id="contact-name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full bg-black border border-[#222222] rounded-xl px-4 py-3 text-xs md:text-sm text-white focus:outline-none focus:border-[#3b82f6]/50 focus:ring-1 focus:ring-[#3b82f6]/30 transition-all duration-200"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-medium" htmlFor="contact-email">Email Address</label>
                    <input
                      type="email"
                      required
                      id="contact-email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="johndoe@gmail.com"
                      className="w-full bg-black border border-[#222222] rounded-xl px-4 py-3 text-xs md:text-sm text-white focus:outline-none focus:border-[#3b82f6]/50 focus:ring-1 focus:ring-[#3b82f6]/30 transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-medium" htmlFor="contact-subject">Discussion Subject</label>
                  <input
                    type="text"
                    required
                    id="contact-subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Opportunity representation or collaboration details"
                    className="w-full bg-black border border-[#222222] rounded-xl px-4 py-3 text-xs md:text-sm text-white focus:outline-none focus:border-[#3b82f6]/50 focus:ring-1 focus:ring-[#3b82f6]/30 transition-all duration-200"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-medium" htmlFor="contact-message">Message Details</label>
                  <textarea
                    required
                    id="contact-message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Specify project goals, stack integrations, schedule timing or queries here..."
                    className="w-full bg-black border border-[#222222] rounded-xl px-4 py-3 text-xs md:text-sm text-white focus:outline-none focus:border-[#3b82f6]/50 focus:ring-1 focus:ring-[#3b82f6]/30 transition-all duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  id="contact-submit"
                  disabled={formLoading}
                  className="w-full mt-4 py-3 rounded-xl bg-white hover:bg-zinc-200 text-black font-display font-semibold transition-colors duration-200 text-xs tracking-tight cursor-pointer flex items-center justify-center gap-2 border border-transparent shadow-sm"
                >
                  {formLoading ? 'Sending Message...' : 'Send Message'}
                  <ChevronRight className="w-4 h-4" />
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
