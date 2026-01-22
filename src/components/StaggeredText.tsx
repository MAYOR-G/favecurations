"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface StaggeredTextProps {
    text: string;
    className?: string;
    as?: "h1" | "h2" | "h3" | "h4" | "span" | "p";
    italic?: boolean;
    delay?: number;
}

export default function StaggeredText({
    text,
    className = "",
    as: Component = "span",
    italic = false,
    delay = 0,
}: StaggeredTextProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.025,
                delayChildren: delay,
            },
        },
    };

    const letterVariants = {
        hidden: {
            y: 100,
            opacity: 0,
            rotateX: -90,
        },
        visible: {
            y: 0,
            opacity: 1,
            rotateX: 0,
            transition: {
                type: "spring" as const,
                stiffness: 100,
                damping: 12,
            },
        },
    };

    const words = text.split(" ");

    return (
        <motion.span
            ref={ref}
            className={`inline-block ${className}`}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            style={{ perspective: "1000px" }}
        >
            {words.map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block whitespace-nowrap">
                    {word.split("").map((char, charIndex) => (
                        <motion.span
                            key={`${wordIndex}-${charIndex}`}
                            variants={letterVariants}
                            className={`inline-block ${italic ? "italic font-normal" : ""}`}
                            style={{ transformOrigin: "bottom" }}
                        >
                            {char}
                        </motion.span>
                    ))}
                    {wordIndex < words.length - 1 && (
                        <span className="inline-block">&nbsp;</span>
                    )}
                </span>
            ))}
        </motion.span>
    );
}
