"use client";

import { motion } from "framer-motion";
import { Instagram, Music2, MessageCircle, Mail } from "lucide-react";
import MagneticButton from "./MagneticButton";
import StaggeredText from "./StaggeredText";

const socialLinks = [
    {
        href: "https://instagram.com/favecurations",
        icon: Instagram,
        label: "@favecurations",
    },
    {
        href: "https://tiktok.com/@favecurations",
        icon: Music2,
        label: "@favecurations",
    },
];

export default function ContactSection() {
    return (
        <section id="contact" className="section-padding bg-cream-50 overflow-hidden">
            <div className="container">
                <motion.div
                    className="relative rounded-[2.5rem] p-12 md:p-16 lg:p-20 overflow-hidden"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
                >
                    {/* Glassmorphism Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-beige/80 via-cream-100/90 to-beige/70 backdrop-blur-xl" />

                    {/* Animated Gradient Orbs */}
                    <motion.div
                        className="absolute -top-20 -right-20 w-80 h-80 bg-gold/20 rounded-full blur-3xl"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                        className="absolute -bottom-20 -left-20 w-60 h-60 bg-brown-400/10 rounded-full blur-3xl"
                        animate={{
                            scale: [1.2, 1, 1.2],
                            opacity: [0.2, 0.4, 0.2],
                        }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    />

                    {/* Shimmering Border */}
                    <motion.div
                        className="absolute inset-0 rounded-[2.5rem] pointer-events-none"
                        style={{
                            background: "linear-gradient(135deg, transparent 20%, rgba(198,168,124,0.4) 40%, rgba(198,168,124,0.6) 50%, rgba(198,168,124,0.4) 60%, transparent 80%)",
                            backgroundSize: "300% 300%",
                        }}
                        animate={{
                            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />

                    {/* Inner Border */}
                    <div className="absolute inset-[1px] rounded-[2.5rem] bg-gradient-to-br from-white/50 via-cream-50/80 to-beige/60 backdrop-blur-xl" />

                    {/* Content */}
                    <div className="relative z-10 text-center max-w-2xl mx-auto">
                        {/* Header */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] text-brown-900 mb-4">
                                <StaggeredText text="Let's Create Something" />
                                <br />
                                <StaggeredText text="Beautiful" italic delay={0.3} />
                            </h2>
                            <p className="text-brown-500 text-lg mb-10 max-w-md mx-auto">
                                Ready to curate the perfect gift? Reach out to us directly.
                            </p>
                        </motion.div>

                        {/* Email & WhatsApp */}
                        <motion.div
                            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            <MagneticButton
                                href="https://wa.me/2349016552913"
                                variant="primary"
                            >
                                <MessageCircle className="w-4 h-4 mr-2" />
                                Chat on WhatsApp
                            </MagneticButton>

                            <MagneticButton
                                href="mailto:hello@favecurations.com"
                                variant="secondary"
                            >
                                <Mail className="w-4 h-4 mr-2" />
                                Send Email
                            </MagneticButton>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            className="flex justify-center gap-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                        >
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-col items-center gap-3 group"
                                    whileHover={{ y: -5 }}
                                    whileTap={{ scale: 0.95 }}
                                    data-cursor-hover
                                >
                                    {/* Icon Circle */}
                                    <motion.div
                                        className="w-14 h-14 rounded-full border border-brown-300/40 flex items-center justify-center transition-all duration-300 group-hover:bg-brown-800 group-hover:border-brown-800"
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <social.icon
                                            className="w-5 h-5 text-brown-600 group-hover:text-white transition-colors"
                                        />
                                    </motion.div>

                                    <span className="text-sm text-brown-500 group-hover:text-brown-800 transition-colors">
                                        {social.label}
                                    </span>
                                </motion.a>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
