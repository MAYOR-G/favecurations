"use client";

import { motion } from "framer-motion";

interface InfiniteMarqueeProps {
    items: string[];
    speed?: number;
    className?: string;
}

export default function InfiniteMarquee({
    items,
    speed = 30,
    className = "",
}: InfiniteMarqueeProps) {
    // Duplicate items for seamless loop
    const duplicatedItems = [...items, ...items, ...items, ...items];

    return (
        <div className={`overflow-hidden ${className}`}>
            <motion.div
                className="flex whitespace-nowrap"
                animate={{
                    x: ["0%", "-50%"],
                }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: speed,
                        ease: "linear",
                    },
                }}
            >
                {duplicatedItems.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center mx-8 text-brown-400/60 text-sm tracking-[0.2em] uppercase font-medium"
                    >
                        <span>{item}</span>
                        <span className="mx-8 text-gold">✦</span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
