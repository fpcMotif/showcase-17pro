
import React from 'react';

const DesignSection: React.FC = () => {
    return (
        <section id="design" className="bg-black py-20 px-4">
            <div className="max-w-screen-xl mx-auto text-center">
                 <header className="mb-12">
                    <h2 className="text-gray-400 font-semibold">Design</h2>
                    <p className="text-5xl md:text-7xl font-bold mt-2">Unibody enclosure.<br/>Makes a strong case for itself.</p>
                    <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-300">
                        Introducing iPhone 17 Pro and iPhone 17 Pro Max, designed from the inside out to be the most powerful iPhone models ever made. At the core of the new design is a heat-forged aluminum unibody enclosure that maximizes performance, battery capacity, and durability.
                    </p>
                </header>
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
