"use client";

import { motion } from "framer-motion";
import { Sparkles, Gift, Palette, Handshake } from "lucide-react";

const features = [
    {
        icon: Sparkles,
        title: "Thoughtfully Curated",
        description: "Every item is chosen with purpose.",
        emoji: "✨",
    },
    {
        icon: Gift,
        title: "Premium Packaging",
        description: "Unboxing that feels like a warm embrace.",
        emoji: "🎀",
    },
    {
        icon: Palette,
        title: "Fully Customizable",
        description: "Your brand, your words, your unique style.",
        emoji: "🎨",
    },
    {
        icon: Handshake,
        title: "Reliable Service",
        description: "Trust us to deliver excellence.",
        emoji: "🤝",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring" as const,
            stiffness: 100,
            damping: 15,
        },
    },
};

export default function FeaturesSection() {
    return (
        <section className="section-padding bg-cream-50">
            <div className="container">
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                            className="text-center p-6"
                        >
                            {/* Icon Circle */}
                            <motion.div
                                className="w-20 h-20 bg-beige rounded-full flex items-center justify-center mx-auto mb-4 text-3xl"
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                {feature.emoji}
                            </motion.div>

                            <h4 className="font-heading text-lg text-brown-900 mb-2">
                                {feature.title}
                            </h4>

                            <p className="text-brown-500 text-sm leading-relaxed max-w-full">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
