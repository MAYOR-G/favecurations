"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const eventTypes = ["Weddings", "Tech Events", "Retreats", "Conferences"];

export default function EventsSection() {
    return (
        <section id="events" className="section-padding bg-cream-50">
            <div className="container">
                <motion.div
                    className="relative bg-beige rounded-[30px] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-12 overflow-hidden"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
                >
                    {/* Decorative gradient */}
                    <div className="absolute -top-12 -right-12 w-72 h-72 bg-gradient-radial from-brown-400/5 to-transparent rounded-full pointer-events-none" />

                    {/* Text Content */}
                    <div className="flex-1 relative z-10">
                        <motion.h2
                            className="font-heading text-[clamp(2rem,4vw,3rem)] text-brown-900 mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            Events & Large Scale
                        </motion.h2>

                        <motion.p
                            className="text-brown-600 text-lg leading-relaxed mb-8 max-w-lg"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            From intimate weddings to large corporate conferences, we ensure consistent branding,
                            premium packaging, and timely delivery.
                        </motion.p>

                        {/* Event Type Pills */}
                        <motion.ul
                            className="flex flex-wrap gap-3 mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            {eventTypes.map((event, index) => (
                                <motion.li
                                    key={index}
                                    className="bg-white/80 px-4 py-2 rounded-full text-sm text-brown-700 border border-brown-300/20"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {event}
                                </motion.li>
                            ))}
                        </motion.ul>

                        {/* CTA Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                        >
                            <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>
                                <Link href="#contact" className="btn btn-primary">
                                    Inquire for Bulk Orders
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Image */}
                    <motion.div
                        className="flex-1 relative h-80 lg:h-[450px] w-full rounded-2xl overflow-hidden shadow-[var(--shadow-soft)]"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        whileHover={{ scale: 1.02 }}
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=1200&auto=format&fit=crop"
                            alt="Premium Event Gifting"
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />

                        {/* Glass Overlay Card */}
                        <motion.div
                            className="absolute bottom-4 left-4 right-4 glass rounded-xl p-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                        >
                            <p className="text-brown-800 text-sm font-medium">
                                ✨ Premium packaging for every scale
                            </p>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
