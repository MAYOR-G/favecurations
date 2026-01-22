"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
    return (
        <section id="about" className="section-padding bg-cream-50">
            <div className="container">
                {/* Section Header */}
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
                >
                    <h2 className="font-heading text-brown-900">Gifting, Thoughtfully curated</h2>
                    <div className="section-divider" />
                </motion.div>

                {/* Quote Text */}
                <motion.p
                    className="font-heading text-xl md:text-2xl text-center max-w-3xl mx-auto text-brown-700 leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
                >
                    At FaveCurations, we specialise in thoughtfully curated gift experiences designed to express love, appreciation, and celebration.
                    Every gift is intentionally selected, beautifully packaged, and tailored to suit the occasion, whether it’s personal, corporate, or “just because" moments.
                    We believe gifting should feel effortless, meaningful, memorable. A physical representation of your emotions, from selection to delivery we help convey that feeling with elegance and intention.
                </motion.p>
            </div>
        </section>
    );
}
