"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const products = [
    {
        image: "https://i.ibb.co/rGJwybXY/Gemini-Generated-Image-jb2hokjb2hokjb2h.png",
        title: "Customized Mugs",
        subtitle: "Monograms & Quotes",
    },
    {
        image: "https://i.ibb.co/nqx5L5sS/Gemini-Generated-Image-1a3p241a3p241a3p.png",
        title: "Customised Jotters",
        subtitle: "Leather & Hardcover",
    },
    {
        image: "https://i.ibb.co/tT6cWQ7P/Gemini-Generated-Image-fsd51gfsd51gfsd5.png",
        title: "Customised Clothing",
        subtitle: "Tee-Shirts & Hoodies",
    },
    {
        image: "https://i.ibb.co/Y45wygt6/Gemini-Generated-Image-l38qn5l38qn5l38q.png",
        title: "Customised Gifts",
        subtitle: "Birthday & Anniversary",
    },
    {
        image: "https://i.ibb.co/8n0wTh3N/Gemini-Generated-Image-n3y16on3y16on3y1.png",
        title: "Signature Gift Boxes",
        subtitle: "Curated & Themed",
    },
    {
        image: "https://i.ibb.co/VpBFm1nB/Gemini-Generated-Image-tcjb2qtcjb2qtcjb.png",
        title: "Thermal Flasks",
        subtitle: "Engraved Names",
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
    hidden: { opacity: 0, y: 50 },
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

export default function ProductGrid() {
    return (
        <section id="customization" className="section-padding bg-cream-50">
            <div className="container">
                {/* Section Header */}
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
                >
                    <h2 className="font-heading text-brown-900">Make It Personal</h2>
                    <div className="section-divider" />
                    <p className="text-brown-500">Personalize your gifts with names, messages, or logos.</p>
                </motion.div>

                {/* Product Grid */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {products.map((product, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{
                                y: -12,
                                transition: { type: "spring", stiffness: 300, damping: 25 },
                            }}
                            whileTap={{ scale: 0.98 }}
                            className="group relative bg-white rounded-2xl overflow-hidden shadow-[var(--shadow-soft)] cursor-pointer"
                            data-cursor-hover
                        >
                            {/* Image Container with "Alive" Effect */}
                            <div className="relative h-80 overflow-hidden">
                                {/* Slow Ken Burns Zoom - Makes images feel alive */}
                                <motion.div
                                    className="w-full h-full"
                                    animate={{
                                        scale: [1, 1.05, 1],
                                    }}
                                    transition={{
                                        duration: 12,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    whileHover={{
                                        scale: 1.1,
                                        transition: { duration: 0.8, ease: [0.2, 0.8, 0.2, 1] },
                                    }}
                                >
                                    <Image
                                        src={product.image}
                                        alt={product.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                </motion.div>

                                {/* Hover Overlay */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-t from-brown-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                />

                                {/* Quick View Button on Hover */}
                                <motion.div
                                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    initial={{ y: 20 }}
                                    whileHover={{ y: 0 }}
                                >
                                    <span className="px-6 py-2 bg-white/90 backdrop-blur-sm rounded-full text-brown-800 text-sm font-medium">
                                        View Details
                                    </span>
                                </motion.div>
                            </div>

                            {/* Info */}
                            <div className="p-6 text-center bg-white relative z-10">
                                <h3 className="font-heading text-lg text-brown-900 mb-1">
                                    {product.title}
                                </h3>
                                <span className="text-xs uppercase tracking-[0.15em] text-brown-500 font-medium">
                                    {product.subtitle}
                                </span>
                            </div>

                            {/* Shimmer Border on Hover */}
                            <motion.div
                                className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                style={{
                                    background: "linear-gradient(135deg, transparent 30%, rgba(198,168,124,0.3) 50%, transparent 70%)",
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
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
