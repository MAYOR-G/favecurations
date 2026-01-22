"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Gift } from "lucide-react";

const footerLinks = [
    { href: "#about", label: "About" },
    { href: "#categories", label: "Collections" },
    { href: "#contact", label: "Contact" },
];

export default function Footer() {
    return (
        <footer className="py-12 border-t border-brown-300/10 bg-cream-50">
            <div className="container text-center">
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 font-heading text-lg font-semibold text-brown-700 mb-6 opacity-90"
                    >
                        <Gift size={20} strokeWidth={1.5} />
                        FaveCurations.
                    </Link>
                </motion.div>

                {/* Links */}
                <motion.div
                    className="flex justify-center gap-8 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    {footerLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-brown-600 text-sm hover:text-brown-900 transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </motion.div>

                {/* Copyright */}
                <motion.p
                    className="text-brown-500 text-sm opacity-70"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.7 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    © 2026 FaveCurations. All rights reserved.
                </motion.p>
            </div>
        </footer>
    );
}
