import React from 'react';
import { Color } from '../App';
import { motion } from 'framer-motion';

interface LocalNavProps {
    colors: { name: Color; label: string; bg: string; image: string }[];
    activeColor: Color;
    setActiveColor: (color: Color) => void;
}

const LocalNav: React.FC<LocalNavProps> = ({ colors, activeColor, setActiveColor }) => {
    return (
        <nav className="sticky top-11 z-40 bg-black/80 backdrop-blur-md">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-12">
                    <a href="#" className="text-xl font-semibold text-white">
                        iPhone 17 Pro
                    </a>
                    <div className="flex items-center gap-x-6">
                        <a href="#highlights" className="hidden md:block text-xs text-gray-300 hover:text-white transition-colors">Highlights</a>
                        <a href="#design" className="hidden md:block text-xs text-gray-300 hover:text-white transition-colors">Design</a>
                        <a href="#cameras" className="hidden md:block text-xs text-gray-300 hover:text-white transition-colors">Cameras</a>
                        <a href="#performance" className="hidden md:block text-xs text-gray-300 hover:text-white transition-colors">Performance</a>
                        <div className="hidden md:flex items-center gap-x-3 pl-2">
                           {colors.map(color => (
                            <div key={color.name} className="relative w-4 h-4 flex items-center justify-center">
                                <button
                                    onClick={() => setActiveColor(color.name)}
                                    className={`w-full h-full rounded-full transition-all duration-300 ${color.bg}`}
                                    aria-label={`Select ${color.label} color`}
                                />
                                {activeColor === color.name && (
                                     <motion.div
                                        className="absolute inset-0 rounded-full border-2 border-white/80"
                                        aria-hidden="true"
                                        animate={{
                                            scale: [1.2, 1.4, 1.2],
                                            opacity: [0.7, 1, 0.7],
                                        }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                        style={{ pointerEvents: 'none' }}
                                    />
                                )}
                            </div>
                        ))}
                        </div>
                        <a href="https://www.apple.com/us/shop/goto/buy_iphone/iphone_17_pro" className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold hover:bg-blue-500 transition-colors">
                            Buy
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default LocalNav;