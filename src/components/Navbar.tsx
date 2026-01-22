"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Gift, Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
    { href: "#about", label: "About" },
    { href: "#categories", label: "Collections" },
    { href: "#customization", label: "Corporate" },
    { href: "#contact", label: "Contact" },
];

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();

    // Transform based on scroll
    const logoScale = useTransform(scrollY, [0, 100], [1, 0.85]);
    const navPadding = useTransform(scrollY, [0, 100], [24, 16]);
    const bgOpacity = useTransform(scrollY, [0, 100], [0, 0.95]);
    const blurAmount = useTransform(scrollY, [0, 100], [0, 12]);

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        return scrollY.on("change", (latest) => {
            setIsScrolled(latest > 30);
        });
    }, [scrollY]);

    return (
        <motion.nav
            className="fixed top-0 left-0 w-full z-50"
            style={{
                paddingTop: navPadding,
                paddingBottom: navPadding,
            }}
        >
            {/* Background */}
            <motion.div
                className="absolute inset-0 bg-cream-50"
                style={{
                    opacity: bgOpacity,
                    backdropFilter: `blur(${blurAmount}px)`,
                }}
            />

            {/* Shadow line on scroll */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 h-[1px] bg-brown-300/20"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isScrolled ? 1 : 0 }}
                transition={{ duration: 0.3 }}
            />

            <div className="relative max-w-[1400px] mx-auto px-6 md:px-16 flex justify-between items-center">
                {/* Logo with shrink effect */}
                <Link href="/" className="flex items-center gap-2 group">
                    <motion.div
                        className="flex items-center gap-2"
                        style={{ scale: logoScale }}
                    >
                        <motion.div
                            whileHover={{ rotate: 15, scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            <Gift
                                className="w-6 h-6 text-brown-800"
                                strokeWidth={1.5}
                            />
                        </motion.div>
                        <motion.span
                            className="font-heading text-xl font-semibold text-brown-900 tracking-tight"
                            initial={{ opacity: 1 }}
                            animate={{ opacity: isScrolled ? 0.9 : 1 }}
                        >
                            {isScrolled ? "FC." : "FaveCurations."}
                        </motion.span>
                    </motion.div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link, index) => (
                        <motion.div
                            key={link.href}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link
                                href={link.href}
                                className="relative text-brown-800 font-body text-sm font-medium group py-2"
                            >
                                {link.label}
                                {/* Animated underline */}
                                <motion.span
                                    className="absolute bottom-0 left-0 h-[2px] bg-gold origin-left"
                                    initial={{ scaleX: 0 }}
                                    whileHover={{ scaleX: 1 }}
                                    transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
                                    style={{ width: "100%" }}
                                />
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile Menu Toggle */}
                <motion.button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden text-brown-900 p-2 relative z-50"
                    aria-label="Toggle menu"
                    whileTap={{ scale: 0.9 }}
                >
                    <AnimatePresence mode="wait">
                        {isMobileMenuOpen ? (
                            <motion.div
                                key="close"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <X size={24} />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="menu"
                                initial={{ rotate: 90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: -90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Menu size={24} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
                        className="md:hidden relative bg-cream-50/98 backdrop-blur-xl border-t border-brown-300/20 overflow-hidden"
                    >
                        <div className="flex flex-col py-8 px-6">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -30 }}
                                    transition={{ delay: index * 0.08 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="block py-4 text-brown-900 font-heading text-2xl border-b border-brown-300/10"
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
