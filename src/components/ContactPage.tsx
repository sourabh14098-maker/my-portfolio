import React, { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Mail,
  Github,
  Linkedin,
  ChevronRight,
  Check,
  MapPin,
  GraduationCap,
  Briefcase,
  Rocket,
  Clock,
} from 'lucide-react';

const CONTACT_LINKS = {
  email: 'sourabh14098@gmail.com',
  emailHref: 'mailto:sourabh14098@gmail.com',
  github: 'github.com/sourabh14098-maker',
  githubHref: 'https://github.com/sourabh14098-maker',
  linkedin: 'linkedin.com/in/sourabh-raj',
  linkedinHref: 'https://linkedin.com/in/sourabh-raj',
} as const;

const contactCardClass =
  'premium-card rounded-xl p-4 sm:p-5 flex items-center justify-between group bg-[#050505] hover:-translate-y-0.5 active:scale-[0.99]';

const professionalInfo = [
  { icon: MapPin, label: 'India' },
  { icon: GraduationCap, label: 'B.Tech Computer Science Student' },
  { icon: Briefcase, label: 'Open to Internship Opportunities' },
  { icon: Rocket, label: 'Creator of StudyHub & Modern Web Applications' },
] as const;

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formLoading, setFormLoading] = useState(false);

  const handleContactSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormLoading(true);
    setTimeout(() => {
      setFormLoading(false);
      setFormSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="section-page relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-start">
          {/* Left sidebar */}
          <div className="lg:col-span-5 text-left flex flex-col gap-6 sm:gap-8">
            <div>
              <h2
                id="contact-title"
                className="text-[11px] font-mono text-zinc-500 uppercase tracking-[0.2em] font-medium mb-2"
              >
                Inquire
              </h2>
              <p className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold tracking-tight text-white mb-3 sm:mb-4 leading-tight">
                Let&apos;s Build Something Amazing Together
              </p>
              <p className="text-[#a1a1aa] text-sm md:text-base leading-relaxed max-w-md">
                Interested in collaborating, discussing opportunities, internships, freelance
                projects, or innovative ideas? Feel free to reach out. I typically respond within
                24 hours.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:gap-4">
              <motion.a
                href={CONTACT_LINKS.emailHref}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className={contactCardClass}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 shrink-0 rounded-lg bg-[#111111] border border-[#222222] flex items-center justify-center group-hover:border-[#333333] transition-colors duration-300">
                    <Mail className="w-4 h-4 text-zinc-400" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] text-zinc-500 font-mono uppercase">Email</span>
                    <span className="text-xs sm:text-sm font-medium text-white group-hover:text-zinc-200 transition-colors duration-300 truncate">
                      {CONTACT_LINKS.email}
                    </span>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 shrink-0 text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-200" />
              </motion.a>

              <motion.a
                href={CONTACT_LINKS.githubHref}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className={contactCardClass}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 shrink-0 rounded-lg bg-[#111111] border border-[#222222] flex items-center justify-center group-hover:border-[#333333] transition-colors duration-300">
                    <Github className="w-4 h-4 text-zinc-400" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] text-zinc-500 font-mono uppercase">GitHub</span>
                    <span className="text-xs sm:text-sm font-medium text-white group-hover:text-zinc-200 transition-colors duration-300 truncate">
                      {CONTACT_LINKS.github}
                    </span>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 shrink-0 text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-200" />
              </motion.a>

              <motion.a
                href={CONTACT_LINKS.linkedinHref}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className={contactCardClass}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 shrink-0 rounded-lg bg-[#111111] border border-[#222222] flex items-center justify-center group-hover:border-[#333333] transition-colors duration-300">
                    <Linkedin className="w-4 h-4 text-zinc-400" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] text-zinc-500 font-mono uppercase">LinkedIn</span>
                    <span className="text-xs sm:text-sm font-medium text-white group-hover:text-zinc-200 transition-colors duration-300 truncate">
                      {CONTACT_LINKS.linkedin}
                    </span>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 shrink-0 text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-200" />
              </motion.a>

              {/* Professional information card */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="premium-card rounded-xl p-4 sm:p-5 mt-1 sm:mt-2"
              >
                <ul className="flex flex-col gap-3 sm:gap-3.5">
                  {professionalInfo.map(({ icon: Icon, label }) => (
                    <li key={label} className="flex items-start gap-3">
                      <div className="w-8 h-8 shrink-0 rounded-lg bg-[#111111] border border-[#222222] flex items-center justify-center">
                        <Icon className="w-3.5 h-3.5 text-zinc-500" strokeWidth={1.75} />
                      </div>
                      <span className="text-xs sm:text-sm text-[#d4d4d8] leading-snug pt-1">{label}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Right panel form */}
          <div className="lg:col-span-7 w-full relative z-10">
            <div className="premium-card rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 bg-[#0a0a0a] relative">
              <AnimatePresence mode="wait">
                {formSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-[#0a0a0a] rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 flex flex-col items-center justify-center text-center gap-4 z-10"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#10b981]/10 border border-[#10b981]/20 flex items-center justify-center text-[#10b981]">
                      <Check className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-display font-medium text-white">Message Sent</h3>
                    <p className="text-[#a1a1aa] text-sm max-w-sm font-sans">
                      Thank you for reaching out. I&apos;ll get back to you as soon as possible,
                      usually within 24 hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => setFormSubmitted(false)}
                      className="px-5 py-2.5 rounded-full bg-[#111111] hover:bg-[#1a1a1a] border border-[#222222] text-white font-mono text-xs cursor-pointer transition-all duration-200"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : null}
              </AnimatePresence>

              <form onSubmit={handleContactSubmit} className="flex flex-col gap-4 sm:gap-5 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label
                      className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-medium"
                      htmlFor="contact-name"
                    >
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      id="contact-name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your full name"
                      className="w-full bg-[#050505] border border-[rgba(255,255,255,0.08)] rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-all duration-300"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label
                      className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-medium"
                      htmlFor="contact-email"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      id="contact-email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Enter your email address"
                      className="w-full bg-[#050505] border border-[rgba(255,255,255,0.08)] rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-medium"
                    htmlFor="contact-subject"
                  >
                    Discussion Subject
                  </label>
                  <input
                    type="text"
                    required
                    id="contact-subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Project, Internship, Collaboration..."
                    className="w-full bg-[#050505] border border-[rgba(255,255,255,0.08)] rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-all duration-300"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-medium"
                    htmlFor="contact-message"
                  >
                    Message Details
                  </label>
                  <textarea
                    required
                    id="contact-message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project, opportunity, or idea..."
                    className="w-full bg-[#050505] border border-[rgba(255,255,255,0.08)] rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-all duration-300 resize-none min-h-[120px] sm:min-h-[140px]"
                  />
                </div>

                <button
                  type="submit"
                  id="contact-submit"
                  disabled={formLoading}
                  className="btn-primary !w-full mt-1 sm:mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {formLoading ? 'Sending Message...' : 'Send Message'}
                  <ChevronRight className="w-4 h-4" />
                </button>

                <p className="flex items-center justify-center gap-2 text-[11px] sm:text-xs text-zinc-500 font-mono mt-1">
                  <Clock className="w-3.5 h-3.5 text-zinc-600 shrink-0" strokeWidth={1.5} />
                  Response Time: Usually within 24 Hours
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
