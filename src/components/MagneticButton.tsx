"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface MagneticButtonProps {
    children: React.ReactNode;
    href?: string;
    variant?: "primary" | "secondary";
    className?: string;
    onClick?: () => void;
}

export default function MagneticButton({
    children,
    href,
    variant = "primary",
    className = "",
    onClick,
}: MagneticButtonProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current!.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    const baseClasses =
        variant === "primary"
            ? "bg-brown-800 text-white border-brown-800 hover:bg-transparent hover:text-brown-800"
            : "bg-transparent text-brown-800 border-brown-300/50 hover:border-brown-800 hover:bg-brown-800/5";

    const ButtonContent = (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 350, damping: 15, mass: 0.5 }}
            className={`
        inline-flex items-center justify-center px-8 py-4
        rounded-md font-body font-medium text-sm tracking-wide
        border cursor-pointer relative overflow-hidden
        transition-colors duration-300
        ${baseClasses} ${className}
      `}
            whileTap={{ scale: 0.96 }}
            onClick={onClick}
        >
            {/* Shimmer effect on hover */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                whileHover={{ translateX: "200%" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
            />
            <span className="relative z-10">{children}</span>
        </motion.div>
    );

    if (href) {
        return (
            <Link href={href} className="inline-block">
                {ButtonContent}
            </Link>
        );
    }

    return ButtonContent;
}
