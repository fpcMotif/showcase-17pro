
import React, { useState, useEffect } from 'react';

const highlights = [
  {
    video: "https://www.apple.com/105/media/us/iphone-17-pro/2025/704d4474-8e63-4ce7-9917-bb47b1ca4ba0/anim/highlights-design/large_2x.mp4",
    text: "Heat-forged aluminum unibody design for exceptional pro capability."
  },
  {
    video: "https://www.apple.com/105/media/us/iphone-17-pro/2025/704d4474-8e63-4ce7-9917-bb47b1ca4ba0/anim/highlights-chip/large_2x.mp4",
    text: "A19 Pro, vapor cooled for lightning-fast performance. Breakthrough battery life."
  },
  {
    video: "https://www.apple.com/105/media/us/iphone-17-pro/2025/704d4474-8e63-4ce7-9917-bb47b1ca4ba0/anim/highlights-zoom/large_2x.mp4",
    text: "The ultimate pro camera system. All 48MP Fusion rear cameras. And the longest zoom ever on an iPhone."
  },
   {
    video: "https://www.apple.com/105/media/us/iphone-17-pro/2025/704d4474-8e63-4ce7-9917-bb47b1ca4ba0/anim/highlights-camera/large_2x.mp4",
    text: "New Center Stage front camera. Flexible ways to frame your shot. Smarter group selfies. And so much more."
  },
];


const HighlightsSection: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);

    useEffect(() => {
        if (isPlaying) {
            const timer = setTimeout(() => {
                setActiveIndex((prevIndex) => (prevIndex + 1) % highlights.length);
            }, 5000); // Change slide every 5 seconds
            return () => clearTimeout(timer);
        }
    }, [activeIndex, isPlaying]);

    return (
        <section id="highlights" className="bg-zinc-900 py-20 px-4">
            <div className="max-w-screen-xl mx-auto">
                <header className="mb-12 text-center">
                    <h2 className="text-5xl md:text-6xl font-bold mb-4">Get the highlights.</h2>
                    <a href="#" className="text-blue-500 hover:underline inline-flex items-center space-x-2">
                        <span>Watch the film</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                    </a>
                </header>
                <div className="relative h-[75vh] rounded-3xl overflow-hidden">
                    {highlights.map((highlight, index) => (
                         <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}>
                            <video
                                className="w-full h-full object-cover"
                                autoPlay
                                muted
                                playsInline
                                loop
                                src={highlight.video}
                            ></video>
                             <div className="absolute top-8 left-8 right-8">
                                 <p className="text-white text-xl md:text-2xl font-semibold max-w-md">{highlight.text}</p>
                             </div>
                         </div>
                    ))}
                </div>
                <div className="flex justify-center items-center mt-6 space-x-3">
                    {highlights.map((_, index) => (
                        <button key={index} onClick={() => setActiveIndex(index)} className={`w-2 h-2 rounded-full transition-colors ${activeIndex === index ? 'bg-white' : 'bg-gray-500'}`}></button>
                    ))}
                     <button onClick={() => setIsPlaying(!isPlaying)} className="ml-4 text-white">
                        {isPlaying ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        )}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HighlightsSection;
