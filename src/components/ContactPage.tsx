import React, { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Mail,
  Github,
  Linkedin,
  ChevronRight,
  Check,
  Clock,
  MapPin,
  GraduationCap,
  Briefcase,
  Rocket,
} from 'lucide-react';

const CONTACT_LINKS = {
  email: 'sourabh14098@gmail.com',
  emailHref: 'mailto:sourabh14098@gmail.com',
  github: 'github.com/sourabh14098-maker',
  githubHref: 'https://github.com/sourabh14098-maker',
  linkedin: 'linkedin.com/in/sourabh-raj',
  linkedinHref: 'https://linkedin.com/in/sourabh-raj',
} as const;

const professionalInfo = [
  { icon: MapPin, label: 'India' },
  { icon: GraduationCap, label: 'B.Tech Computer Science Student' },
  { icon: Briefcase, label: 'Open to Internship Opportunities' },
  { icon: Rocket, label: 'Creator of StudyHub' },
] as const;

const contactCardClass =
  'glass-panel rounded-xl p-4 sm:p-5 flex items-center justify-between group border-[#222222] bg-[#050505] hover:border-white/20 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)]';

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
    <section id="contact" className="py-16 md:py-24 px-4 sm:px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5 flex flex-col gap-10">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2
                id="contact-title"
                className="text-xs font-mono text-zinc-500 uppercase tracking-widest font-medium mb-4"
              >
                Contact
              </h2>
              <p className="text-2xl sm:text-3xl md:text-4xl font-display font-medium tracking-tight text-white mb-5 leading-tight">
                Let&apos;s Build Something Amazing Together
              </p>
              <p className="text-zinc-500 text-sm md:text-base leading-relaxed max-w-md">
                Interested in collaborating, discussing opportunities, internships, freelance
                projects, or innovative ideas? Feel free to reach out.
              </p>
            </motion.div>

            <div className="flex flex-col gap-3">
              <motion.a
                href={CONTACT_LINKS.emailHref}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 }}
                whileHover={{ scale: 1.01 }}
                className={contactCardClass}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 shrink-0 rounded-lg bg-[#111111] border border-[#222222] flex items-center justify-center">
                    <Mail className="w-4 h-4 text-zinc-400" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] text-zinc-600 font-mono uppercase">Email</span>
                    <span className="text-xs sm:text-sm font-medium text-white truncate">
                      {CONTACT_LINKS.email}
                    </span>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 shrink-0 text-zinc-600 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-200" />
              </motion.a>

              <motion.a
                href={CONTACT_LINKS.githubHref}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12 }}
                whileHover={{ scale: 1.01 }}
                className={contactCardClass}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 shrink-0 rounded-lg bg-[#111111] border border-[#222222] flex items-center justify-center">
                    <Github className="w-4 h-4 text-zinc-400" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] text-zinc-600 font-mono uppercase">GitHub</span>
                    <span className="text-xs sm:text-sm font-medium text-white truncate">
                      {CONTACT_LINKS.github}
                    </span>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 shrink-0 text-zinc-600 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-200" />
              </motion.a>

              <motion.a
                href={CONTACT_LINKS.linkedinHref}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.16 }}
                whileHover={{ scale: 1.01 }}
                className={contactCardClass}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 shrink-0 rounded-lg bg-[#111111] border border-[#222222] flex items-center justify-center">
                    <Linkedin className="w-4 h-4 text-zinc-400" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] text-zinc-600 font-mono uppercase">LinkedIn</span>
                    <span className="text-xs sm:text-sm font-medium text-white truncate">
                      {CONTACT_LINKS.linkedin}
                    </span>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 shrink-0 text-zinc-600 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-200" />
              </motion.a>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="glass-panel rounded-xl p-4 sm:p-5 border-[#222222] bg-[#050505] mt-1"
              >
                <ul className="flex flex-col gap-3">
                  {professionalInfo.map(({ icon: Icon, label }) => (
                    <li key={label} className="flex items-center gap-3">
                      <div className="w-8 h-8 shrink-0 rounded-lg bg-[#111111] border border-[#222222] flex items-center justify-center">
                        <Icon className="w-3.5 h-3.5 text-zinc-500" strokeWidth={1.75} />
                      </div>
                      <span className="text-xs sm:text-sm text-zinc-400">{label}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>

          <div className="lg:col-span-7 w-full">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 bg-[#050505] border-[#222222] relative"
            >
              <AnimatePresence mode="wait">
                {formSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-[#050505] rounded-2xl sm:rounded-3xl p-6 flex flex-col items-center justify-center text-center gap-4 z-10"
                  >
                    <div className="w-14 h-14 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-white">
                      <Check className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-display font-medium text-white">Message Sent</h3>
                    <p className="text-zinc-500 text-sm max-w-sm">
                      Thank you for reaching out. I&apos;ll get back to you soon.
                    </p>
                    <button
                      type="button"
                      onClick={() => setFormSubmitted(false)}
                      className="px-5 py-2.5 rounded-full bg-[#111111] border border-[#222222] text-white font-mono text-xs cursor-pointer hover:border-[#333333] transition-colors duration-200"
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
                      className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest"
                      htmlFor="contact-name"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      id="contact-name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your full name"
                      className="w-full bg-black border border-[#222222] rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-700 focus:outline-none focus:border-white/20 transition-all duration-200"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label
                      className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest"
                      htmlFor="contact-email"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      id="contact-email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Enter your email address"
                      className="w-full bg-black border border-[#222222] rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-700 focus:outline-none focus:border-white/20 transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest"
                    htmlFor="contact-subject"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    id="contact-subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Project, Internship, Collaboration..."
                    className="w-full bg-black border border-[#222222] rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-700 focus:outline-none focus:border-white/20 transition-all duration-200"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest"
                    htmlFor="contact-message"
                  >
                    Message
                  </label>
                  <textarea
                    required
                    id="contact-message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project, opportunity, or idea..."
                    className="w-full bg-black border border-[#222222] rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-700 focus:outline-none focus:border-white/20 transition-all duration-200 resize-none min-h-[120px]"
                  />
                </div>

                <button
                  type="submit"
                  id="contact-submit"
                  disabled={formLoading}
                  className="w-full py-3.5 rounded-xl bg-white hover:bg-zinc-200 text-black font-display font-medium text-sm transition-colors duration-200 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {formLoading ? 'Sending...' : 'Send Message'}
                  <ChevronRight className="w-4 h-4" />
                </button>

                <p className="flex items-center justify-center gap-2 text-[11px] text-zinc-600 font-mono">
                  <Clock className="w-3.5 h-3.5 shrink-0" strokeWidth={1.5} />
                  Response Time: Usually within 24 Hours
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
