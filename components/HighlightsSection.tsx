// FIX: Create the HighlightsSection component to resolve module not found errors.
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

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

const HighlightsSection: React.FC = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ['start end', 'end start']
    });

    const videoScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1]);
    const videoY = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']);


    return (
        <section id="highlights" className="bg-black py-20 px-4 overflow-hidden">
            <div className="max-w-screen-xl mx-auto">
                <motion.header
                    className="text-center mb-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ staggerChildren: 0.2 }}
                >
                    <motion.h2 variants={textVariants} className="text-gray-400 font-semibold">Highlights</motion.h2>
                    <motion.p variants={textVariants} className="text-5xl md:text-7xl font-bold mt-2">Get the highlights.</motion.p>
                </motion.header>

                <div className="relative h-[120vh]" ref={targetRef}>
                    <div className="sticky top-0 h-screen flex items-center justify-center">
                         <motion.div 
                            className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden"
                            style={{ scale: videoScale, y: videoY }}
                         >
                            <video
                                className="w-full h-full object-cover"
                                autoPlay
                                muted
                                playsInline
                                loop
                                src="https://www.apple.com/105/media/us/iphone-17-pro/2025/704d4474-8e63-4ce7-9917-bb47b1ca4ba0/anim/highlights/large_2x.mp4"
                                aria-label="iPhone 17 Pro highlights video"
                            />
                        </motion.div>
                    </div>
                </div>

                <motion.div
                    className="mt-20 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ staggerChildren: 0.2 }}
                >
                    <motion.div variants={textVariants}>
                        <h3 className="text-3xl font-bold mb-4">A19 Pro Chip</h3>
                        <p className="text-lg text-gray-300">A monster win for gaming. And for everything else. The A19 Pro chip is an entirely new class of iPhone chip that delivers our best graphics performance by far.</p>
                    </motion.div>
                    <motion.div variants={textVariants}>
                        <h3 className="text-3xl font-bold mb-4">Forged in Aluminum</h3>
                        <p className="text-lg text-gray-300">iPhone 17 Pro is the first iPhone to feature an aerospace-grade aluminum design, using the same alloy spacecraft use for missions to Mars.</p>
                    </motion.div>
                    <motion.div variants={textVariants}>
                        <h3 className="text-3xl font-bold mb-4">All-New Camera System</h3>
                        <p className="text-lg text-gray-300">From dramatic framing flexibility to next-generation portraits, see what you can do with our most powerful iPhone camera system.</p>
                    </motion.div>
                     <motion.div variants={textVariants}>
                        <h3 className="text-3xl font-bold mb-4">All-Day Battery Life</h3>
                        <p className="text-lg text-gray-300">Even with so many advanced new features, iPhone 17 Pro gives you amazing all-day battery life. Up to 29 hours video playback on iPhone 17 Pro Max.</p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default HighlightsSection;
