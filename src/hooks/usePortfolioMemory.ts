import { useEffect, useState } from "react";

export interface PortfolioMemory {
    visits: number;
    lastVisit: string;
}

export function usePortfolioMemory() {
    const [memory, setMemory] = useState<PortfolioMemory | null>(null);

    useEffect(() => {
        const saved = localStorage.getItem("portfolio-memory");

        if (!saved) {
            const firstVisit = {
                visits: 1,
                lastVisit: new Date().toLocaleDateString(),
            };

            localStorage.setItem(
                "portfolio-memory",
                JSON.stringify(firstVisit)
            );

            setMemory(firstVisit);
        } else {
            const data = JSON.parse(saved);

            data.visits += 1;
            data.lastVisit = new Date().toLocaleDateString();

            localStorage.setItem(
                "portfolio-memory",
                JSON.stringify(data)
            );

            setMemory(data);
        }
    }, []);

    return memory;
}