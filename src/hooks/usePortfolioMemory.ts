import { useEffect, useState } from "react";
const SESSION_KEY = "portfolio-session";

export interface PortfolioMemory {
    visits: number;
    lastVisit: string;
    lastProject?: string;
}

export function usePortfolioMemory() {
    const [memory, setMemory] = useState<PortfolioMemory | null>(null);

    useEffect(() => {
        const saved = localStorage.getItem("portfolio-memory");

        if (!saved) {
            const firstVisit = {
                visits: 1,
                lastVisit: new Date().toLocaleDateString(),
                lastProject: "",
            };

            localStorage.setItem(
                "portfolio-memory",
                JSON.stringify(firstVisit)
            );

            setMemory(firstVisit);
        } else {
            const data = JSON.parse(saved);
            const alreadyCounted = sessionStorage.getItem(SESSION_KEY);

            if (!alreadyCounted) {
                data.visits += 1;
                sessionStorage.setItem(SESSION_KEY, "true");
            }

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

export function saveLastProject(projectName: string) {
    const saved = localStorage.getItem("portfolio-memory");

    if (!saved) return;

    const data = JSON.parse(saved);

    data.lastProject = projectName;

    localStorage.setItem(
        "portfolio-memory",
        JSON.stringify(data)
    );
}