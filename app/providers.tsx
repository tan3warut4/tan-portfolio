'use client'
import { ThemeProvider } from "next-theme";
import { ReactNode, useEffect, useState } from "react";

export function Providers({ children }: { children: ReactNode }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null; // Ensure the theme doesn't apply on the server
    }

    return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}