import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { usePortfolioMemory } from "../hooks/usePortfolioMemory";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { easePremium } from "../lib/motion";

export default function MemoryBanner() {
    const memory = usePortfolioMemory();
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, 6000);

        return () => clearTimeout(timer);
    }, []);

    if (!memory) return null;

    const isFirstVisit = memory.visits === 1;
    const titleText = isFirstVisit ? "Welcome to NYXO" : "Returning Visitor";
    const labelText = isFirstVisit ? "EXPLORE PORTFOLIO" : "WELCOME BACK";

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ opacity: 0, y: -12, filter: "blur(6px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                    transition={{ duration: 0.4, ease: easePremium }}
                    whileHover={{ y: -2 }}
                    className="group relative w-full rounded-[28px] p-4 sm:p-5 transition-all duration-400 cursor-default bg-[#0D0D0D] hover:bg-[#121212]"
                    style={{
                        backdropFilter: "blur(12px)",
                        WebkitBackdropFilter: "blur(12px)",
                        boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.6)",
                    }}
                >
                    <div className="flex flex-row items-center justify-between gap-3 sm:gap-5">
                        {/* Left Side Content */}
                        <div className="flex-1 min-w-0">
                            {/* Tiny Uppercase Muted Label */}
                            <span className="block text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-medium select-none">
                                {labelText}
                            </span>

                            {/* Primary Heading - Bold White */}
                            <h3 className="mt-1 text-base sm:text-lg font-display font-bold text-white tracking-tight leading-snug">
                                {titleText}
                            </h3>

                            {/* Subtitle / Action Link */}
                            {memory.lastProject ? (
                                <Link
                                    to="/projects"
                                    className="group/link mt-1 inline-flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-300 transition-colors duration-300"
                                >
                                    <span>
                                        Resume{" "}
                                        <strong className="text-white font-semibold group-hover/link:underline underline-offset-4 decoration-white/30">
                                            {memory.lastProject}
                                        </strong>
                                    </span>
                                    <ArrowRight className="w-3 h-3 text-zinc-500 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:text-white" />
                                </Link>
                            ) : (
                                <p className="mt-1 text-xs text-zinc-500 leading-relaxed font-normal">
                                    {isFirstVisit ? "Enjoy exploring my projects & experience." : "Your portfolio journey continues."}
                                </p>
                            )}
                        </div>

                        {/* Thin 12% Opacity Vertical Divider */}
                        <div className="h-10 w-[1px] bg-white/[0.12] shrink-0 mx-1" />

                        {/* Right Side Stats Counter */}
                        <div className="flex flex-col items-center justify-center pl-1 shrink-0 select-none">
                            <span className="text-[18px] font-mono font-semibold text-zinc-300 tracking-tight leading-none">
                                {memory.visits}×
                            </span>
                            <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-medium mt-1">
                                VISITS
                            </span>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
