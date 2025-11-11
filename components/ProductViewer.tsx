
import React from 'react';
import { motion } from 'framer-motion';
import { Color } from '../App';

interface ProductViewerProps {
    colors: { name: Color; label: string; bg: string; image: string }[];
    activeColor: Color;
    setActiveColor: (color: Color) => void;
}

const ProductViewer: React.FC<ProductViewerProps> = ({ colors, activeColor, setActiveColor }) => {
    return (
        <section id="product-viewer" className="bg-black py-20 px-4">
            <div className="max-w-screen-xl mx-auto text-center">
                <motion.h2
                    className="text-5xl md:text-7xl font-bold mb-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                >
                    Pro. Beyond powerful.
                </motion.h2>

                <div className="relative h-[75vh] mb-12">
                    {colors.map(color => (
                        <motion.img
                            key={color.name}
                            src={color.image}
                            alt={`iPhone 17 Pro in ${color.label}`}
                            className="absolute inset-0 w-full h-full object-contain"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{
                                opacity: activeColor === color.name ? 1 : 0,
                                scale: activeColor === color.name ? 1 : 0.95,
                            }}
                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                            style={{ zIndex: activeColor === color.name ? 10 : 1 }}
                        />
                    ))}
                </div>

                <div className="flex flex-col items-center">
                     <p className="mb-4 text-gray-400">
                        Available in Cosmic Orange, Deep Blue, and Silver.
                    </p>
                    <div className="flex items-center space-x-4">
                        {colors.map(color => (
                            <div key={color.name} className="flex flex-col items-center space-y-2">
                                <button
                                    onClick={() => setActiveColor(color.name)}
                                    className={`w-8 h-8 rounded-full transition-all duration-300 ring-2 ring-offset-4 ring-offset-black ${color.bg} ${activeColor === color.name ? 'ring-white' : 'ring-transparent'}`}
                                    aria-label={`Select ${color.label} color`}
                                />
                                <span className={`text-xs transition-colors ${activeColor === color.name ? 'text-white' : 'text-gray-500'}`}>{color.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductViewer;
