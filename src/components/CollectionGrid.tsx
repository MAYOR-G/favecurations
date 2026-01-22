"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import StaggeredText from "./StaggeredText";

const categories = [
    {
        title: "Birthday Gifting",
        description: "Make their special day unforgettable with a box of joy.",
        emoji: "🎁",
        image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=600",
    },
    {
        title: "Valentine & Love",
        description: "Romantic gestures wrapped in elegance and warmth.",
        emoji: "❤️",
        image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=600",
    },
    {
        title: "Self-Care & Self-Love",
        description: "Pause, breathe, and treat yourself to moments of calm.",
        emoji: "🤎",
        image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=600",
    },
    {
        title: "Friendship Gifts",
        description: "Thoughtful tokens to celebrate the bonds that matter.",
        emoji: "✨",
        image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?q=80&w=600",
    },
    {
        title: "Festive Gifting",
        description: "Seasonal joy, curated to spread warmth and cheer.",
        emoji: "🎄",
        image: "https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=600",
    },
    {
        title: "Corporate & Event",
        description: "Professional appreciation, branded with distinction.",
        emoji: "🏢",
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=600",
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
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring" as const,
            stiffness: 80,
            damping: 15,
        },
    },
};

export default function CollectionGrid() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    return (
        <section id="categories" ref={containerRef} className="section-padding bg-cream-50 overflow-hidden">
            <div className="container">
                {/* Section Header */}
                <motion.div
                    className="section-header mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
                >
                    <h2 className="font-heading text-[clamp(2.2rem,4vw,3.2rem)] text-brown-900">
                        <StaggeredText text="Curated Collections" />
                    </h2>
                    <div className="section-divider" />
                    <p className="text-brown-500">Designed for every meaningful occasion.</p>
                </motion.div>

                {/* Grid with Parallax */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {categories.map((category, index) => (
                        <CategoryCard
                            key={index}
                            category={category}
                            index={index}
                            scrollProgress={scrollYProgress}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

interface CategoryCardProps {
    category: typeof categories[0];
    index: number;
    scrollProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}

function CategoryCard({ category, index, scrollProgress }: CategoryCardProps) {
    // Parallax offset based on card position
    const offset = (index % 3) * 20;
    const y = useTransform(scrollProgress, [0, 1], [offset, -offset]);

    return (
        <motion.div
            variants={itemVariants}
            style={{ y }}
            whileHover={{
                y: -12,
                transition: { type: "spring", stiffness: 300, damping: 25 },
            }}
            whileTap={{ scale: 0.98 }}
            className="group relative rounded-2xl overflow-hidden cursor-pointer h-[380px]"
            data-cursor-hover
        >
            {/* Background Image with Parallax */}
            <motion.div
                className="absolute inset-0"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
            >
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${category.image})` }}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brown-900/90 via-brown-900/40 to-brown-900/10" />
            </motion.div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                {/* Floating Emoji */}
                <motion.span
                    className="text-4xl mb-4"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                    {category.emoji}
                </motion.span>

                {/* Title */}
                <h3 className="font-heading text-2xl text-white mb-2 group-hover:text-gold transition-colors duration-300">
                    {category.title}
                </h3>

                {/* Description - Revealed on Hover */}
                <motion.p
                    className="text-white/70 text-sm leading-relaxed max-w-full"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    {category.description}
                </motion.p>

                {/* Explore Link */}
                <motion.div
                    className="mt-4 flex items-center gap-2 text-gold text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                >
                    <span>Explore</span>
                    <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        →
                    </motion.span>
                </motion.div>
            </div>

            {/* Shimmer Border on Hover */}
            <motion.div
                className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                    background: "linear-gradient(135deg, transparent 30%, rgba(198,168,124,0.4) 50%, transparent 70%)",
                    backgroundSize: "200% 200%",
                }}
                animate={{
                    backgroundPosition: ["0% 0%", "200% 200%"],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />
        </motion.div>
    );
}
