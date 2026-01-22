"use client";

import { useRef, useEffect } from "react";

interface Particle {
    x: number;
    y: number;
    size: number;
    speedY: number;
    speedX: number;
    color: string;
    rotation: number;
    rotationSpeed: number;
    oscillationSpeed: number;
}

export default function GlitterCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const animationRef = useRef<number>(0);
    const dimensionsRef = useRef({ width: 0, height: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resize = () => {
            const parent = canvas.parentElement;
            if (!parent) return;

            dimensionsRef.current = {
                width: parent.offsetWidth,
                height: parent.offsetHeight,
            };

            canvas.width = dimensionsRef.current.width;
            canvas.height = dimensionsRef.current.height;

            initParticles();
        };

        const initParticles = () => {
            const { width, height } = dimensionsRef.current;
            particlesRef.current = [];

            // Reduced particle count for better performance
            const particleCount = Math.min(60, Math.floor((width * height) / 20000));

            for (let i = 0; i < particleCount; i++) {
                particlesRef.current.push({
                    x: Math.random() * width,
                    y: Math.random() * height - height,
                    size: Math.random() * 4 + 2,
                    speedY: Math.random() * 1.5 + 0.5,
                    speedX: Math.random() * 0.5 - 0.25,
                    color: `rgba(198, 168, 124, ${Math.random() * 0.5 + 0.3})`,
                    rotation: Math.random() * 360,
                    rotationSpeed: Math.random() * 2 - 1,
                    oscillationSpeed: Math.random() * 0.05 + 0.02,
                });
            }
        };

        const animate = () => {
            const { width, height } = dimensionsRef.current;

            ctx.clearRect(0, 0, width, height);

            particlesRef.current.forEach((p) => {
                // Update position
                p.y += p.speedY;
                p.x += Math.sin(p.y * p.oscillationSpeed) * 0.5;
                p.rotation += p.rotationSpeed;

                // Reset particle when it goes off screen
                if (p.y > height) {
                    p.y = -10;
                    p.x = Math.random() * width;
                }

                // Draw diamond-shaped glitter
                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate((p.rotation * Math.PI) / 180);
                ctx.fillStyle = p.color;
                ctx.beginPath();
                ctx.moveTo(0, -p.size / 2);
                ctx.lineTo(p.size / 2, 0);
                ctx.lineTo(0, p.size / 2);
                ctx.lineTo(-p.size / 2, 0);
                ctx.closePath();
                ctx.fill();
                ctx.restore();
            });

            animationRef.current = requestAnimationFrame(animate);
        };

        resize();
        animate();

        window.addEventListener("resize", resize);

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationRef.current);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none z-10"
            aria-hidden="true"
        />
    );
}
