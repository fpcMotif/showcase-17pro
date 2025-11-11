import React from 'react';
import { motion } from 'framer-motion';

const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
        },
    },
};

const DesignSection: React.FC = () => {
    return (
        <section id="design" className="bg-black py-20 px-4 overflow-hidden">
            <div className="max-w-screen-xl mx-auto text-center">
                 <motion.header 
                    className="mb-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ staggerChildren: 0.2 }}
                 >
                    <motion.h2 variants={textVariants} className="text-gray-400 font-semibold">Design</motion.h2>
                    <motion.p variants={textVariants} className="text-5xl md:text-7xl font-bold mt-2">Unibody enclosure.<br/>Makes a strong case for itself.</motion.p>
                    <motion.p variants={textVariants} className="max-w-3xl mx-auto mt-6 text-lg text-gray-300">
                        Introducing iPhone 17 Pro and iPhone 17 Pro Max, designed from the inside out to be the most powerful iPhone models ever made. At the core of the new design is a heat-forged aluminum unibody enclosure that maximizes performance, battery capacity, and durability.
                    </motion.p>
                </motion.header>
                <div className="relative rounded-3xl overflow-hidden aspect-video">
                     <video
                        className="w-full h-full object-cover"
                        autoPlay
                        muted
                        playsInline
                        loop
                        src="https://www.apple.com/105/media/us/iphone-17-pro/2025/704d4474-8e63-4ce7-9917-bb47b1ca4ba0/anim/design/large_2x.mp4"
                        aria-label="iPhone 17 Pro, back exterior, forged aluminum unibody enclosure"
                    ></video>
                </div>
            </div>
        </section>
    );
};

export default DesignSection;