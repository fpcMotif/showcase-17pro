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

const CameraSection: React.FC = () => {
    return (
        <section id="cameras" className="bg-zinc-900 py-20 px-4 overflow-hidden">
            <div className="max-w-screen-xl mx-auto text-center">
                 <motion.header 
                    className="mb-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ staggerChildren: 0.2 }}
                 >
                    <motion.h2 variants={textVariants} className="text-gray-400 font-semibold">Cameras</motion.h2>
                    <motion.p variants={textVariants} className="text-5xl md:text-7xl font-bold mt-2">A big zoom forward.</motion.p>
                </motion.header>

                <div className="mb-20">
                    <img 
                        src="https://www.apple.com/v/iphone-17-pro/d/images/overview/cameras/intro/hero_camera__0ggzvjy8m0ya_large.jpg" 
                        alt="iPhone 17 Pro Camera System"
                        className="rounded-3xl"
                    />
                    <motion.div 
                        className="flex justify-center space-x-12 mt-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ staggerChildren: 0.2 }}
                    >
                         <motion.div variants={textVariants} className="text-center">
                             <p className="text-4xl font-bold gradient-text bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">8x</p>
                             <p className="text-sm text-gray-300">optical-quality zoom</p>
                         </motion.div>
                         <motion.div variants={textVariants} className="text-center">
                             <p className="text-4xl font-bold gradient-text bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">48MP</p>
                             <p className="text-sm text-gray-300">rear cameras</p>
                         </motion.div>
                    </motion.div>
                </div>

                <motion.div 
                    className="max-w-3xl mx-auto mb-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={textVariants}
                >
                     <p className="text-lg text-gray-300">
                        Across the iPhone 17 Pro camera system, you’ll find innovation that goes to great lengths. The telephoto features the next generation of our tetraprism design and a 56 percent larger sensor. With an equivalent 200 mm focal length, the 8x optical-quality zoom makes this <strong className="text-white">the longest iPhone Telephoto ever</strong> — offering 16x total optical zoom range.
                    </p>
                </motion.div>
                 <motion.h3 
                    className="text-4xl md:text-5xl font-bold mb-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={textVariants}
                 >Pro results down to the pixel.</motion.h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="rounded-3xl overflow-hidden">
                        <img src="https://www.apple.com/v/iphone-17-pro/d/images/overview/cameras/photo/night_mode__dksu23l8q2eu_large.jpg" alt="Night mode photo" className="w-full h-full object-cover"/>
                    </div>
                    <div className="rounded-3xl overflow-hidden">
                        <img src="https://www.apple.com/v/iphone-17-pro/d/images/overview/cameras/photo/48mp__ef1q7ifdp9yu_large.jpg" alt="48MP photo" className="w-full h-full object-cover"/>
                    </div>
                 </div>
            </div>
        </section>
    );
};

export default CameraSection;