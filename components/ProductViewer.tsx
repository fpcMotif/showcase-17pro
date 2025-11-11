import React, { useState } from 'react';
import { Color } from '../App';

interface ProductViewerProps {
    colors: { name: Color; label: string; bg: string; image: string }[];
    activeColor: Color;
    setActiveColor: (color: Color) => void;
}

const ProductViewer: React.FC<ProductViewerProps> = ({ colors, activeColor, setActiveColor }) => {
    const activeImage = colors.find(c => c.name === activeColor)?.image;

    return (
        <section className="bg-black py-20 px-4">
            <div className="max-w-screen-xl mx-auto text-center">
                <header className="mb-12">
                    <h3 className="text-5xl md:text-6xl font-bold">Take a closer look.</h3>
                </header>
                <div className="relative aspect-video">
                     <img src={activeImage} alt={`iPhone 17 Pro in ${activeColor}`} className="w-full h-full object-contain" />
                </div>
                <div className="flex justify-center items-center mt-8 space-x-4">
                    <div className="flex items-center space-x-2 bg-zinc-800 p-2 rounded-full">
                         {colors.map(color => (
                            <button
                                key={color.name}
                                onClick={() => setActiveColor(color.name)}
                                className={`w-8 h-8 rounded-full transition-all duration-300 ${color.bg} ${activeColor === color.name ? 'ring-2 ring-white ring-offset-2 ring-offset-zinc-800' : ''}`}
                                aria-label={`Select ${color.label} color`}
                            >
                            </button>
                        ))}
                    </div>
                     <span className="text-sm text-gray-300">{colors.find(c => c.name === activeColor)?.label}</span>
                </div>
            </div>
        </section>
    );
};

export default ProductViewer;