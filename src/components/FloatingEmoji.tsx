"use client";

import { motion } from "framer-motion";

interface FloatingEmojiProps {
    emoji: string;
    size?: number;
    className?: string;
    duration?: number;
    blur?: boolean;
}

export default function FloatingEmoji({
    emoji,
    size = 80,
    className = "",
    duration = 6,
    blur = true,
}: FloatingEmojiProps) {
    return (
        <motion.div
            className={`absolute pointer-events-none select-none ${className}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
                opacity: blur ? 0.15 : 0.4,
                scale: 1,
                y: [0, -20, 0],
                rotateY: [0, 360],
                rotateZ: [-5, 5, -5],
            }}
            transition={{
                opacity: { duration: 1 },
                scale: { duration: 1 },
                y: {
                    repeat: Infinity,
                    duration: duration,
                    ease: "easeInOut",
                },
                rotateY: {
                    repeat: Infinity,
                    duration: duration * 2,
                    ease: "linear",
                },
                rotateZ: {
                    repeat: Infinity,
                    duration: duration * 1.5,
                    ease: "easeInOut",
                },
            }}
            style={{
                fontSize: size,
                filter: blur ? "blur(3px)" : "none",
                transformStyle: "preserve-3d",
            }}
        >
            {emoji}
        </motion.div>
    );
}
