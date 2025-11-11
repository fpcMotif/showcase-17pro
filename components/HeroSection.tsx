// FIX: Create the HeroSection component to resolve module not found errors.
import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
    return (
        <section id="hero" className="relative h-screen bg-black overflow-hidden">
            <div className="absolute inset-0 z-0">
                <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    playsInline
                    loop
                    src="https://www.apple.com/105/media/us/iphone-17-pro/2025/704d4474-8e63-4ce7-9917-bb47b1ca4ba0/anim/hero/large_2x.mp4"
                    aria-label="iPhone 17 Pro animation"
                />
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                >
                    <h1 className="text-6xl md:text-8xl font-bold mb-4">iPhone 17 Pro</h1>
                    <p className="text-2xl md:text-3xl font-semibold">Pro. Beyond powerful.</p>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
