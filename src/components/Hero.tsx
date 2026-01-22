"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import GlitterCanvas from "./GlitterCanvas";
import MagneticButton from "./MagneticButton";
import StaggeredText from "./StaggeredText";
import FloatingEmoji from "./FloatingEmoji";
import InfiniteMarquee from "./InfiniteMarquee";

const trustedItems = [
    "Corporate Events",
    "Private Celebrations",
    "Wedding Gifting",
    "Tech Conferences",
    "Luxury Brands",
    "Executive Gifts",
];

export default function Hero() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    // Parallax transforms
    const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const quoteY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

    return (
        <section
            ref={containerRef}
            className="min-h-screen relative overflow-hidden bg-cream-50"
        >
            {/* Glitter Canvas */}
            <GlitterCanvas />

            {/* Floating 3D Emojis */}
            <FloatingEmoji emoji="🎁" size={120} className="top-20 right-[15%]" duration={7} />
            <FloatingEmoji emoji="✨" size={60} className="top-40 left-[10%]" duration={5} blur={false} />
            <FloatingEmoji emoji="💝" size={80} className="bottom-40 right-[25%]" duration={8} />

            {/* Main Grid */}
            <div className="min-h-screen grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] relative z-10">
                {/* Text Column */}
                <motion.div
                    className="flex flex-col justify-center px-6 md:px-16 lg:pl-20 lg:pr-12 py-32 lg:py-0"
                    style={{ y: textY }}
                >
                    {/* Tag */}
                    <motion.span
                        className="text-[0.65rem] tracking-[0.25em] uppercase text-brown-400 font-semibold mb-8 block"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        EST. 2024 • GLOBAL GIFTING
                    </motion.span>

                    {/* Main Heading with Staggered Text */}
                    <h1 className="font-heading text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.1] tracking-tight text-brown-900 mb-8">
                        <StaggeredText text="Thoughtfully" delay={0.3} />
                        <br />
                        <StaggeredText text="Curated Gifts" italic delay={0.5} />
                        <br />
                        <StaggeredText text="for Moments that Matter." delay={0.7} />
                    </h1>

                    {/* Description */}
                    <motion.p
                        className="text-lg text-brown-600 font-light max-w-[460px] leading-relaxed mb-12 border-l-2 border-gold/30 pl-6"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                    >
                        More than just gifts — we curate meaningful experiences with care, intention, and elegance for personal and corporate occasions.
                    </motion.p>

                    {/* Magnetic Buttons */}
                    <motion.div
                        className="flex flex-wrap gap-4 mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                    >
                        <MagneticButton href="#categories" variant="primary">
                            Explore Collections
                        </MagneticButton>
                        <MagneticButton href="#contact" variant="secondary">
                            Talk to a Gifting Expert
                        </MagneticButton>
                    </motion.div>
                </motion.div>

                {/* Visual Column - 3D Floating Image */}
                <div className="relative h-[60vh] lg:h-screen order-first lg:order-last flex items-center justify-center">
                    {/* 3D Perspective Container */}
                    <motion.div
                        className="relative w-[85%] h-[80%] lg:w-[90%] lg:h-[85%]"
                        initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        transition={{ duration: 1.2, delay: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
                        style={{
                            perspective: "1000px",
                            y: imageY,
                            scale: imageScale,
                        }}
                    >
                        {/* Floating Shadow */}
                        <motion.div
                            className="absolute -bottom-8 left-[10%] right-[10%] h-16 bg-brown-900/10 blur-2xl rounded-full"
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        />

                        {/* Main Image with 3D Float */}
                        <motion.div
                            className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl"
                            animate={{
                                y: [0, -15, 0],
                                rotateY: [-2, 2, -2],
                                rotateX: [1, -1, 1],
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1513885535751-8b9238bd345a?q=80&w=1200&auto=format&fit=crop"
                                alt="Premium Gift Box with Elegant Packaging"
                                fill
                                className="object-cover"
                                priority
                                sizes="(max-width: 1024px) 85vw, 50vw"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-cream-50/40 via-transparent to-transparent" />
                        </motion.div>

                        {/* Floating Quote Card - Glassmorphism 2.0 */}
                        <motion.div
                            className="absolute -bottom-4 -left-6 lg:-left-16 z-20"
                            style={{ y: quoteY }}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.4 }}
                        >
                            <motion.div
                                className="relative p-8 min-w-[260px] max-w-[300px] rounded-2xl overflow-hidden group"
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                            >
                                {/* Glass Background */}
                                <div className="absolute inset-0 bg-white/80 backdrop-blur-xl" />

                                {/* Shimmering Border */}
                                <motion.div
                                    className="absolute inset-0 rounded-2xl opacity-50"
                                    style={{
                                        background: "linear-gradient(135deg, transparent 40%, rgba(198,168,124,0.5) 50%, transparent 60%)",
                                        backgroundSize: "200% 200%",
                                    }}
                                    animate={{
                                        backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                                    }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                />

                                {/* Content */}
                                <p className="relative font-heading italic text-xl text-brown-900 leading-snug">
                                    &quot;Elevating the art of giving.&quot;
                                </p>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Infinite Marquee */}
            <div className="absolute bottom-0 left-0 right-0 py-6 bg-gradient-to-t from-cream-50 to-transparent">
                <InfiniteMarquee items={trustedItems} speed={25} />
            </div>
        </section>
    );
}
