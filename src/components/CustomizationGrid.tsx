"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, MessageCircle, ChevronRight } from "lucide-react";
import MagneticButton from "./MagneticButton";
import StaggeredText from "./StaggeredText";

// Data Structure
const CUSTOMIZATION_ITEMS = [
    {
        id: 1,
        image: "https://i.ibb.co/rGJwybXY/Gemini-Generated-Image-jb2hokjb2hokjb2h.png",
        title: "Custom Mugs",
        subtitle: "Monograms & Quotes",
        detail:
            "From morning coffee to office culture. Perfect for corporate welcome kits or personalized wedding favors.",
        features: ["Ceramic & Stainless Steel", "Full-color printing", "Minimum 25 units for bulk"],
    },
    {
        id: 2,
        image: "https://i.ibb.co/nqx5L5sS/Gemini-Generated-Image-1a3p241a3p241a3p.png",
        title: "Custom Jotters",
        subtitle: "Leather & Hardcover",
        detail:
            "Elevate note-taking with embossed leather or premium hardcovers. Ideal for conferences and executive retreats.",
        features: ["Gold foil embossing", "Premium paper quality", "Custom page layouts available"],
    },
    {
        id: 3,
        image: "https://i.ibb.co/tT6cWQ7P/Gemini-Generated-Image-fsd51gfsd51gfsd5.png",
        title: "Custom Clothing",
        subtitle: "Tees & Hoodies",
        detail:
            "High-GSM fabric that feels like luxury fashion, not cheap merch. Screen printed or embroidered with precision.",
        features: ["280gsm premium cotton", "DTG & Screen printing", "Full size run available"],
    },
    {
        id: 4,
        image: "https://i.ibb.co/Y45wygt6/Gemini-Generated-Image-l38qn5l38qn5l38q.png",
        title: "Custom Gifts",
        subtitle: "Birthdays & Anniversaries",
        detail:
            "One-of-a-kind treasures. We source specific items to match the recipient's exact personality.",
        features: ["Curated selection", "Personal consultation", "Luxury gift wrapping"],
    },
    {
        id: 5,
        image: "https://i.ibb.co/8n0wTh3N/Gemini-Generated-Image-n3y16on3y16on3y1.png",
        title: "Signature Boxes",
        subtitle: "Curated & Themed",
        detail:
            "The full unboxing experience. Color-coordinated ribbons, scented filler, and a handwritten note.",
        features: ["Custom box design", "Themed curation", "White-label available"],
    },
    {
        id: 6,
        image: "https://i.ibb.co/VpBFm1nB/Gemini-Generated-Image-tcjb2qtcjb2qtcjb.png",
        title: "Thermal Flasks",
        subtitle: "Engraved Names",
        detail:
            "Keep it hot or cold in style. Laser-engraved hydration that lasts a lifetime.",
        features: ["24hr insulation", "Laser engraving", "Corporate branding"],
    },
];

// Animation Variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: "spring" as const, stiffness: 80, damping: 15 },
    },
};

const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 100, scale: 0.9 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: "spring" as const, stiffness: 300, damping: 25, delay: 0.1 },
    },
    exit: {
        opacity: 0,
        y: 50,
        scale: 0.95,
        transition: { duration: 0.2 },
    },
};

export default function CustomizationGrid() {
    const [selectedItem, setSelectedItem] = useState<typeof CUSTOMIZATION_ITEMS[0] | null>(null);

    return (
        <section id="customization" className="section-padding bg-cream-50">
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
                        <StaggeredText text="Make It Personal" />
                    </h2>
                    <div className="section-divider" />
                    <p className="text-brown-500">
                        Click any item to explore customization options.
                    </p>
                </motion.div>

                {/* Grid */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {CUSTOMIZATION_ITEMS.map((item) => (
                        <motion.div
                            key={item.id}
                            variants={itemVariants}
                            whileHover={{
                                y: -10,
                                transition: { type: "spring", stiffness: 300, damping: 25 },
                            }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setSelectedItem(item)}
                            className="group relative bg-white rounded-2xl overflow-hidden shadow-[var(--shadow-soft)] cursor-pointer"
                            data-cursor-hover
                        >
                            {/* Image */}
                            <div className="relative h-72 overflow-hidden">
                                <motion.div
                                    className="w-full h-full"
                                    animate={{ scale: [1, 1.03, 1] }}
                                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                                    whileHover={{
                                        scale: 1.1,
                                        transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] },
                                    }}
                                >
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                </motion.div>

                                {/* Hover Overlay with "View Details" */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-t from-brown-900/70 via-brown-900/30 to-transparent flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                >
                                    <motion.span
                                        className="flex items-center gap-2 px-5 py-2.5 bg-white/95 backdrop-blur-sm rounded-full text-brown-900 text-sm font-medium shadow-lg"
                                        initial={{ y: 20, opacity: 0 }}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        View Details
                                        <ChevronRight className="w-4 h-4" />
                                    </motion.span>
                                </motion.div>
                            </div>

                            {/* Info */}
                            <div className="p-5 text-center">
                                <h3 className="font-heading text-lg text-brown-900 mb-1">
                                    {item.title}
                                </h3>
                                <span className="text-xs uppercase tracking-[0.15em] text-brown-500 font-medium">
                                    {item.subtitle}
                                </span>
                            </div>

                            {/* Shimmer Border */}
                            <motion.div
                                className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                style={{
                                    background:
                                        "linear-gradient(135deg, transparent 30%, rgba(198,168,124,0.3) 50%, transparent 70%)",
                                    backgroundSize: "200% 200%",
                                }}
                                animate={{ backgroundPosition: ["0% 0%", "200% 200%"] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Detail Modal */}
            <AnimatePresence>
                {selectedItem && (
                    <DetailModal item={selectedItem} onClose={() => setSelectedItem(null)} />
                )}
            </AnimatePresence>
        </section>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// DETAIL MODAL COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

interface DetailModalProps {
    item: typeof CUSTOMIZATION_ITEMS[0];
    onClose: () => void;
}

function DetailModal({ item, onClose }: DetailModalProps) {
    return (
        <motion.div
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
        >
            {/* Backdrop */}
            <motion.div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            />

            {/* Modal Card */}
            <motion.div
                className="relative w-full max-w-4xl max-h-[80vh] rounded-3xl"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Glass Background */}
                <div className="absolute inset-0 bg-cream-50/95 backdrop-blur-xl rounded-3xl" />

                {/* Shimmering Gold Border */}
                <motion.div
                    className="absolute inset-0 rounded-3xl pointer-events-none"
                    style={{
                        background:
                            "linear-gradient(135deg, transparent 20%, rgba(198,168,124,0.5) 40%, rgba(198,168,124,0.7) 50%, rgba(198,168,124,0.5) 60%, transparent 80%)",
                        backgroundSize: "300% 300%",
                    }}
                    animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />

                {/* Inner Container - THIS IS THE SCROLLABLE AREA */}
                <div className="relative bg-cream-50/90 m-[1px] rounded-3xl max-h-[80vh] overflow-y-auto overscroll-contain">
                    {/* Close Button */}
                    <motion.button
                        className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-brown-900/10 flex items-center justify-center text-brown-800 hover:bg-brown-900/20 transition-colors"
                        onClick={onClose}
                        whileHover={{ scale: 1.1, rotate: 90 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <X className="w-5 h-5" />
                    </motion.button>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 min-h-[500px]">
                        {/* Left: Image */}
                        <div className="relative h-64 md:h-auto overflow-hidden">
                            <motion.div
                                className="absolute inset-0"
                                initial={{ scale: 1.1 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
                            >
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </motion.div>

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-cream-50/50 hidden md:block" />
                        </div>

                        {/* Right: Content */}
                        <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                            {/* Subtitle */}
                            <motion.span
                                className="text-xs tracking-[0.2em] uppercase text-gold font-semibold mb-3"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                {item.subtitle}
                            </motion.span>

                            {/* Title */}
                            <motion.h3
                                className="font-heading text-3xl md:text-4xl text-brown-900 mb-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                {item.title}
                            </motion.h3>

                            {/* Description */}
                            <motion.p
                                className="text-brown-600 text-lg leading-relaxed mb-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                {item.detail}
                            </motion.p>

                            {/* Features */}
                            <motion.ul
                                className="space-y-2 mb-8"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                {item.features.map((feature, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-3 text-brown-500 text-sm"
                                    >
                                        <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                                        {feature}
                                    </li>
                                ))}
                            </motion.ul>

                            {/* The Pitch */}
                            <motion.div
                                className="bg-beige/50 rounded-xl p-4 mb-8 border border-gold/20"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                            >
                                <p className="text-brown-700 text-sm leading-relaxed">
                                    <span className="font-semibold">Hosting a wedding or corporate event?</span>{" "}
                                    We handle everything from single bespoke pieces to 1,000+ unit bulk orders.
                                </p>
                            </motion.div>

                            {/* CTA Button */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                            >
                                <MagneticButton
                                    href="https://wa.me/2349016552913"
                                    variant="primary"
                                >
                                    <MessageCircle className="w-4 h-4 mr-2" />
                                    Start Customizing
                                </MagneticButton>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
