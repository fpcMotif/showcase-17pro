import React from 'react';
import { motion } from 'framer-motion';

const gridContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const gridItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: 'easeOut',
        },
    },
};


const PerformanceSection: React.FC = () => {
    return (
        <section id="performance" className="bg-black py-20 px-4">
             <div className="max-w-screen-xl mx-auto text-center">
                <header className="mb-12">
                    <h2 className="text-gray-400 font-semibold">Performance</h2>
                    <p className="text-5xl md:text-7xl font-bold mt-2">New dimensions<br/> in power.</p>
                     <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-300">
                       An Apple-designed laser-welded vapor chamber works with the aluminum unibody structure to efficiently move heat away from the A19 Pro chip, allowing for even <strong className="text-white">higher sustained performance</strong>.
                    </p>
                </header>

                <div className="relative rounded-3xl overflow-hidden aspect-video mb-20">
                    <video
                        className="w-full h-full object-cover"
                        autoPlay
                        muted
                        playsInline
                        loop
                        src="https://www.apple.com/105/media/us/iphone-17-pro/2025/704d4474-8e63-4ce7-9917-bb47b1ca4ba0/anim/performance-hero/xlarge_2x.mp4"
                        aria-label="A19 Pro chip performance demonstration"
                    ></video>
                </div>

                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 text-left"
                    variants={gridContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.div variants={gridItemVariants}>
                        <h3 className="text-xl font-semibold mb-2 text-white">A19 Pro chip</h3>
                        <p className="text-gray-400">The Apple silicon powering iPhone 17 Pro delivers the highest iPhone performance ever.</p>
                    </motion.div>
                     <motion.div variants={gridItemVariants}>
                        <h3 className="text-xl font-semibold mb-2 text-white">Graphics and speed</h3>
                        <p className="text-gray-400">The GPU and CPU deliver up to <strong className="text-white">40 percent better</strong> sustained performance.</p>
                    </motion.div>
                     <motion.div variants={gridItemVariants}>
                        <h3 className="text-xl font-semibold mb-2 text-white">Neural Accelerators</h3>
                        <p className="text-gray-400">More powerful than ever when working with local AI models.</p>
                    </motion.div>
                </motion.div>

                <div className="relative rounded-3xl overflow-hidden">
                    <img src="https://www.apple.com/v/iphone-17-pro/d/images/overview/performance/battery/battery__fc7m9oxxh7yy_large.jpg" alt="Battery life demonstration" className="w-full h-full object-cover"/>
                     <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center p-8">
                        <div className="text-center">
                             <h2 className="text-4xl md:text-6xl font-bold">Battery life.<br/>All-time high.</h2>
                             <p className="mt-4 max-w-2xl text-lg">
                                The new internal design creates significant additional room for battery capacity, giving iPhone 17 Pro Max the <strong className="text-white">best-ever iPhone battery life.</strong>
                            </p>
                        </div>
                    </div>
                </div>
             </div>
        </section>
    );
};

export default PerformanceSection;