import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Sparkles, ArrowUpRight } from 'lucide-react';
import { easePremium } from '../lib/motion';

/* ─────────────────────── Knowledge Base ─────────────────────── */

const PORTFOLIO_KNOWLEDGE: Record<string, string> = {
  about:
    `NYXO is a portfolio by Sourabh — a passionate Computer Science student and Software Developer from India. He focuses on building modern, responsive, and highly interactive web applications. He's currently learning the MERN stack and building real-world projects. He's open to internship opportunities and exciting collaborations.`,
  projects:
    `Sourabh has built 5+ projects including:\n\n• **StudyHub** — A student notes sharing platform with file uploads, search, and a clean modern interface. Built with React, Node.js, Express, MongoDB & Tailwind. Live at studyhub-notes.netlify.app\n\n• **Aura Fitness** — A modern workout and fitness tracking platform with fluid animations and responsive design. Built with React, Tailwind & Framer Motion. Live at aura-fitness.netlify.app\n\n• **NYXO Portfolio** — This premium portfolio website itself, built with React, TypeScript, Framer Motion & Tailwind CSS.`,
  skills:
    `Sourabh's technical stack includes:\n\n**Frontend:** HTML (90%), CSS (88%), JavaScript (82%), React (78%), Next.js (70%), Tailwind CSS (84%)\n\n**Backend:** Node.js (68%), Express (64%)\n\n**Database:** MongoDB (66%)\n\n**Tools:** Git (76%), GitHub (78%), VS Code (88%), Postman (62%), Netlify (72%)`,
  java:
    `Sourabh is a Java developer with knowledge in core Java concepts, object-oriented programming, data structures & algorithms. Java is one of his development pillars alongside web technologies.`,
  ai:
    `Sourabh is exploring AI and machine learning projects. He's interested in integrating AI capabilities into web applications, building intelligent interfaces, and leveraging modern AI tools to enhance developer productivity and user experiences.`,
  contact:
    `You can reach Sourabh through:\n\n• **Email:** sourabh14098@gmail.com\n• **GitHub:** github.com/sourabh14098-maker\n• **LinkedIn:** linkedin.com/in/sourabh-raj\n\nHe typically responds within 24 hours. Feel free to reach out for internships, collaborations, freelance projects, or innovative ideas!`,
  experience:
    `Sourabh started his programming journey in 2025, exploring HTML, CSS, JavaScript and frontend fundamentals. In 2026, he built the StudyHub platform — a complete notes sharing platform with search, uploads and modern UI. Currently, he's focused on learning the MERN stack and building real, scalable web applications.`,
  studyhub:
    `**StudyHub** is a peer-to-peer web application for students to search, upload, and download community study resources. It features file uploads, search functionality, and a clean modern interface. Built with React, Node.js, Express, MongoDB & Tailwind CSS. It's live at studyhub-notes.netlify.app`,
  fitness:
    `**Aura Fitness** is a modern workout and fitness tracking platform. It helps users view schedules, track workouts, and explore a premium dark UI fitness experience. Built with React, Tailwind CSS & Framer Motion. It features fluid animations and responsive design. Live at aura-fitness.netlify.app`,
  technologies:
    `The primary technologies Sourabh works with include React, JavaScript, TypeScript, Node.js, Express, MongoDB, Tailwind CSS, Framer Motion, Next.js, Git, and GitHub. He's proficient in the MERN stack (MongoDB, Express, React, Node.js).`,
};

const GREETING = `Hey there! 👋 I'm NYXO AI — your personal guide to this portfolio. Ask me anything about Sourabh's projects, skills, experience, or how to get in touch!`;

/* ─────────────────────── Helpers ─────────────────────── */

function findBestAnswer(query: string): string {
  const q = query.toLowerCase();

  // Direct keyword mapping
  const keywordMap: [string[], string][] = [
    [['studyhub', 'study hub', 'notes', 'sharing platform'], 'studyhub'],
    [['fitness', 'aura', 'workout', 'gym'], 'fitness'],
    [['project', 'built', 'portfolio work', 'show me', 'show my', 'what have you built', 'work'], 'projects'],
    [['skill', 'stack', 'tech', 'technologies', 'language', 'framework', 'tool'], 'skills'],
    [['java', 'oop', 'object oriented'], 'java'],
    [['ai', 'artificial', 'machine learning', 'ml', 'intelligent'], 'ai'],
    [['contact', 'email', 'reach', 'hire', 'connect', 'linkedin', 'github', 'mail'], 'contact'],
    [['experience', 'journey', 'timeline', 'background', 'history', 'started'], 'experience'],
    [['about', 'who', 'nyxo', 'sourabh', 'tell me', 'introduce', 'yourself'], 'about'],
    [['mern', 'react', 'node', 'express', 'mongodb', 'tailwind', 'next'], 'technologies'],
  ];

  for (const [keywords, key] of keywordMap) {
    if (keywords.some((kw) => q.includes(kw))) {
      return PORTFOLIO_KNOWLEDGE[key];
    }
  }

  // Greeting patterns
  if (/^(hi|hello|hey|sup|yo|greetings|howdy)/i.test(q.trim())) {
    return `Hello! 👋 Great to have you here. I can tell you about Sourabh's projects, skills, tech stack, experience, or contact information. What would you like to know?`;
  }

  // Thank you
  if (/thank|thanks|thx/i.test(q)) {
    return `You're welcome! 😊 Feel free to ask anything else about the portfolio. I'm here to help!`;
  }

  // Fallback
  return `That's an interesting question! While I'm specialized in answering questions about this portfolio, I can help with info about Sourabh's **projects**, **skills**, **experience**, **technologies**, or **contact details**. Try asking about any of those!`;
}

/* ─────────────────────── Types ─────────────────────── */

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

/* ─────────────────────── Suggestion Chips ─────────────────────── */

const SUGGESTIONS = [
  'Tell me about NYXO',
  'Show my projects',
  'My skills',
  'Java projects',
  'AI projects',
  'Contact me',
];

/* ─────────────────────── AI Icon SVG ─────────────────────── */

function AiIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
      <circle cx="12" cy="12" r="3" strokeWidth="1" />
    </svg>
  );
}

/* ─────────────────────── Typing Indicator ─────────────────────── */

function TypingIndicator() {
  return (
    <div className="flex items-center gap-1.5 px-4 py-3">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="w-[5px] h-[5px] rounded-full bg-zinc-500"
          animate={{ opacity: [0.3, 1, 0.3], scale: [0.85, 1.15, 0.85] }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            delay: i * 0.2,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

/* ─────────────────────── Main Component ─────────────────────── */

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 'greeting', role: 'assistant', content: GREETING },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Focus input when panel opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 400);
    }
  }, [isOpen]);

  const sendMessage = useCallback(
    (text: string) => {
      if (!text.trim() || isTyping) return;

      const userMsg: ChatMessage = {
        id: `u-${Date.now()}`,
        role: 'user',
        content: text.trim(),
      };

      setMessages((prev) => [...prev, userMsg]);
      setInput('');
      setShowSuggestions(false);
      setIsTyping(true);

      // Simulate thinking delay (400–900ms)
      const delay = 400 + Math.random() * 500;
      setTimeout(() => {
        const answer = findBestAnswer(text);
        const assistantMsg: ChatMessage = {
          id: `a-${Date.now()}`,
          role: 'assistant',
          content: answer,
        };
        setMessages((prev) => [...prev, assistantMsg]);
        setIsTyping(false);
      }, delay);
    },
    [isTyping],
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleSuggestionClick = (suggestion: string) => {
    sendMessage(suggestion);
  };

  /* ─── Render helpers ─── */

  function renderMarkdown(text: string) {
    // Very lightweight markdown: bold **text** and line breaks
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={i} className="text-white font-semibold">
            {part.slice(2, -2)}
          </strong>
        );
      }
      // Convert \n to <br>
      return part.split('\n').map((line, j) => (
        <React.Fragment key={`${i}-${j}`}>
          {j > 0 && <br />}
          {line}
        </React.Fragment>
      ));
    });
  }

  return (
    <>
      {/* ─────── Floating AI Button ─────── */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            id="ai-chatbot-trigger"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ type: 'spring', stiffness: 400, damping: 24 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 sm:bottom-10 right-4 sm:right-8 lg:right-20 z-50 w-14 h-14 rounded-full cursor-pointer flex items-center justify-center group transition-all duration-300"
            style={{
              background: 'rgba(10, 10, 10, 0.7)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              border: '1px solid rgba(255,255,255,0.12)',
              boxShadow:
                '0 0 30px rgba(255,255,255,0.04), 0 8px 32px rgba(0,0,0,0.4)',
            }}
            title="Ask NYXO AI"
            type="button"
          >
            {/* Soft outer glow ring */}
            <motion.span
              className="absolute inset-2 rounded-full pointer-events-none"
              style={{
                border: '1px solid rgba(255,255,255,0.04)',
              }}
              animate={{
                boxShadow: [
                  '0 0 8px rgba(255,255,255,0.02)',
                  '0 0 14px rgba(255,255,255,0.04)',
                  '0 0 8px rgba(255,255,255,0.02)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
            <Sparkles className="w-5 h-5 text-white/80 group-hover:text-white transition-colors duration-300" />
          </motion.button>
        )}
      </AnimatePresence >

      {/* ─────── Chat Panel ─────── */}
      <AnimatePresence>
        {
          isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none md:pointer-events-none"
                onClick={() => setIsOpen(false)}
              />

              {/* Panel */}
              <motion.div
                id="ai-chatbot-panel"
                initial={{ x: '100%', opacity: 0.5 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: '100%', opacity: 0 }}
                transition={{ duration: 0.45, ease: easePremium }}
                className="fixed top-0 right-0 z-50 h-full w-full sm:w-[420px] flex flex-col pointer-events-auto"
                style={{
                  background: 'rgba(8, 8, 8, 0.85)',
                  backdropFilter: 'blur(40px)',
                  WebkitBackdropFilter: 'blur(40px)',
                  borderLeft: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                {/* ── Header ── */}
                <div
                  className="flex items-center justify-between px-6 py-5 shrink-0"
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                      }}
                    >
                      <Sparkles className="w-4 h-4 text-white/70" />
                    </div>
                    <div>
                      <h3 className="text-sm font-display font-semibold text-white tracking-tight">
                        Ask NYXO AI
                      </h3>
                      <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.15em]">
                        Portfolio Guide
                      </p>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(false)}
                    className="w-8 h-8 rounded-lg flex items-center justify-center cursor-pointer transition-colors duration-200 hover:bg-white/[0.06]"
                    style={{ border: '1px solid rgba(255,255,255,0.06)' }}
                    type="button"
                  >
                    <X className="w-4 h-4 text-zinc-400" />
                  </motion.button>
                </div>

                {/* ── Messages ── */}
                <div className="flex-1 overflow-y-auto px-5 py-5 space-y-4 scrollbar-thin">
                  {messages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
                      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                      transition={{ duration: 0.35, ease: easePremium }}
                      className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[85%] rounded-2xl px-4 py-3 text-[13px] leading-relaxed ${msg.role === 'user'
                          ? 'bg-white text-black rounded-br-md'
                          : 'text-zinc-300 rounded-bl-md'
                          }`}
                        style={
                          msg.role === 'assistant'
                            ? {
                              background: 'rgba(255,255,255,0.03)',
                              border: '1px solid rgba(255,255,255,0.06)',
                            }
                            : undefined
                        }
                      >
                        {renderMarkdown(msg.content)}
                      </div>
                    </motion.div>
                  ))}

                  {/* Typing indicator */}
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-start"
                    >
                      <div
                        className="rounded-2xl rounded-bl-md"
                        style={{
                          background: 'rgba(255,255,255,0.03)',
                          border: '1px solid rgba(255,255,255,0.06)',
                        }}
                      >
                        <TypingIndicator />
                      </div>
                    </motion.div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* ── Suggestion Chips ── */}
                <AnimatePresence>
                  {showSuggestions && messages.length <= 1 && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.3, ease: easePremium }}
                      className="px-5 pb-3 flex flex-wrap gap-2"
                    >
                      {SUGGESTIONS.map((s) => (
                        <motion.button
                          key={s}
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          onClick={() => handleSuggestionClick(s)}
                          className="px-3.5 py-2 rounded-full text-[11px] font-mono text-zinc-400 cursor-pointer transition-all duration-200 hover:text-white hover:bg-white/[0.06]"
                          style={{
                            background: 'rgba(255,255,255,0.02)',
                            border: '1px solid rgba(255,255,255,0.06)',
                          }}
                          type="button"
                        >
                          {s}
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* ── Input Bar ── */}
                <form
                  onSubmit={handleSubmit}
                  className="px-5 py-4 shrink-0"
                  style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <div
                    className="flex items-center gap-2 rounded-xl px-4 py-2.5 transition-all duration-300 focus-within:border-white/15"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.06)',
                    }}
                  >
                    <input
                      ref={inputRef}
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Ask me anything…"
                      className="flex-1 bg-transparent text-sm text-white placeholder:text-zinc-600 focus:outline-none"
                      disabled={isTyping}
                    />
                    <motion.button
                      type="submit"
                      disabled={!input.trim() || isTyping}
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.92 }}
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 cursor-pointer transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
                      style={{
                        background:
                          input.trim() && !isTyping
                            ? 'rgba(255,255,255,0.9)'
                            : 'rgba(255,255,255,0.04)',
                      }}
                    >
                      <Send
                        className={`w-3.5 h-3.5 ${input.trim() && !isTyping ? 'text-black' : 'text-zinc-600'
                          }`}
                      />
                    </motion.button>
                  </div>
                  <p className="text-center text-[9px] font-mono text-zinc-600 mt-2 tracking-wider uppercase">
                    Powered by NYXO Intelligence
                  </p>
                </form>
              </motion.div>
            </>
          )
        }
      </AnimatePresence >
    </>
  );
}
