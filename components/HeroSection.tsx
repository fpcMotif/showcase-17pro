
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      <h1 className="sr-only">iPhone 17 Pro</h1>
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          playsInline
          src="https://www.apple.com/105/media/us/iphone-17-pro/2025/704d4474-8e63-4ce7-9917-bb47b1ca4ba0/anim/hero/xlarge_2x.mp4"
          aria-label="iPhone 17 Pro, cosmic orange, partial back exterior, Pro Fusion camera system in top left corner, 3 lenses, microphone, flash"
        ></video>
      </div>
      <div className="absolute bottom-10 left-0 right-0">
          <div className="text-center">
               <div className="mb-4">
                  <p className="text-sm text-gray-400">
                    From $1099 or $45.79/mo. for 24 mo.*
                  </p>
               </div>
               <a href="#" className="bg-blue-600 text-white px-5 py-2 rounded-full text-md font-semibold hover:bg-blue-500 transition-colors">
                 Buy
               </a>
          </div>
      </div>
    </section>
  );
};

export default HeroSection;
