import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { usePortfolioMemory } from "../hooks/usePortfolioMemory";
import { Link } from "react-router-dom";

export default function MemoryBanner() {
    const memory = usePortfolioMemory();

    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    console.log(memory);

    if (!memory || !visible) return null;

    let title = "";
    let subtitle = "";

    if (memory.visits === 1) {
        title = "👋 Welcome to NYXO";
        subtitle = "Enjoy exploring my portfolio.";
    } else if (memory.visits === 2) {
        title = "👋 Welcome Back";
        subtitle = "Glad to see you again.";
    } else {
        title = `👋 Welcome Back (${memory.visits} visits)`;

        if (memory.lastProject) {
            subtitle = `Continue working on ${memory.lastProject} →`;
        } else {
            subtitle = "Your portfolio journey continues.";
        }
    }


    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{
                    opacity: visible ? 1 : 0,
                    y: visible ? 0 : -20,
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5"
            >
                <h3 className="text-white text-xl font-semibold">
                    {title}
                </h3>

                {memory.lastProject ? (
                    <Link
                        to="/projects"
                        className="mt-2 inline-block text-zinc-300 hover:text-white transition-colors"
                    >
                        Continue working on {memory.lastProject} →
                    </Link>
                ) : (
                    <p className="text-gray-400 mt-2">
                        {subtitle}
                    </p>
                )}
                {subtitle}

            </motion.div>
        </AnimatePresence>
    );
}