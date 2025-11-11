import React from 'react';
import { Color, colors } from '../App';

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
                    <div className="flex items-center space-x-4">
                        <a href="#highlights" className="hidden md:block text-xs text-gray-300 hover:text-white transition-colors">Highlights</a>
                        <a href="#design" className="hidden md:block text-xs text-gray-300 hover:text-white transition-colors">Design</a>
                        <a href="#cameras" className="hidden md:block text-xs text-gray-300 hover:text-white transition-colors">Cameras</a>
                        <a href="#performance" className="hidden md:block text-xs text-gray-300 hover:text-white transition-colors">Performance</a>
                        <div className="hidden md:flex items-center space-x-2">
                           {colors.map(color => (
                            <button
                                key={color.name}
                                onClick={() => setActiveColor(color.name)}
                                className={`w-4 h-4 rounded-full transition-all duration-300 ${color.bg} ${activeColor === color.name ? 'ring-2 ring-white/80 ring-offset-2 ring-offset-black' : ''}`}
                                aria-label={`Select ${color.label} color`}
                            />
                        ))}
                        </div>
                        <a href="#" className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold hover:bg-blue-500 transition-colors">
                            Buy
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default LocalNav;