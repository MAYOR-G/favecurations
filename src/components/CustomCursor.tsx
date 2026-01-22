"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
    const [isMounted, setIsMounted] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 400 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        // Check for touch device after mount
        setIsTouchDevice("ontouchstart" in window);
        setIsMounted(true);

        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            setIsVisible(true);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isClickable =
                target.tagName === "A" ||
                target.tagName === "BUTTON" ||
                target.closest("a") ||
                target.closest("button") ||
                target.classList.contains("cursor-pointer") ||
                target.closest("[data-cursor-hover]");
            setIsHovering(!!isClickable);
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleMouseOver);
        document.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
            document.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [cursorX, cursorY]);

    // Don't render until mounted (prevents hydration mismatch)
    if (!isMounted) return null;

    // Hide on touch devices
    if (isTouchDevice) return null;

    return (
        <>
            {/* CSS to hide default cursor */}
            <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>

            {/* Main cursor dot */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                }}
            >
                <motion.div
                    className="relative -translate-x-1/2 -translate-y-1/2"
                    animate={{
                        opacity: isVisible ? 1 : 0,
                    }}
                    transition={{ duration: 0.15 }}
                >
                    {/* Inner dot */}
                    <motion.div
                        className="bg-white rounded-full"
                        animate={{
                            width: isHovering ? 8 : 8,
                            height: isHovering ? 8 : 8,
                        }}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />

                    {/* Outer ring */}
                    <motion.div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white"
                        animate={{
                            width: isHovering ? 48 : 0,
                            height: isHovering ? 48 : 0,
                            opacity: isHovering ? 1 : 0,
                        }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    />
                </motion.div>
            </motion.div>
        </>
    );
}
