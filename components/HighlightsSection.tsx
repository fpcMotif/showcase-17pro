import React, { useState, useEffect, useRef } from 'react';

const highlights = [
  {
    video: "https://www.apple.com/105/media/us/iphone-17-pro/2025/704d4474-8e63-4ce7-9917-bb47b1ca4ba0/anim/highlights-design/large_2x.mp4",
    text: "Heat-forged aluminum unibody design for exceptional pro capability.",
    label: "Design",
  },
  {
    video: "https://www.apple.com/105/media/us/iphone-17-pro/2025/704d4474-8e63-4ce7-9917-bb47b1ca4ba0/anim/highlights-chip/large_2x.mp4",
    text: "A19 Pro, vapor cooled for lightning-fast performance. Breakthrough battery life.",
    label: "A19 Pro chip",
  },
  {
    video: "https://www.apple.com/105/media/us/iphone-17-pro/2025/704d4474-8e63-4ce7-9917-bb47b1ca4ba0/anim/highlights-zoom/large_2x.mp4",
    text: "The ultimate pro camera system. All 48MP Fusion rear cameras. And the longest zoom ever on an iPhone.",
    label: "Pro Fusion camera system",
  },
   {
    video: "https://www.apple.com/105/media/us/iphone-17-pro/2025/704d4474-8e63-4ce7-9917-bb47b1ca4ba0/anim/highlights-camera/large_2x.mp4",
    text: "New Center Stage front camera. Flexible ways to frame your shot. Smarter group selfies. And so much more.",
    label: "Center Stage front camera"
  },
];


const HighlightsSection: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [progress, setProgress] = useState(0);
    const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

    useEffect(() => {
        // Pause non-active videos, and handle the active one
        videoRefs.current.forEach((video, index) => {
            if (video) {
                if (index === activeIndex) {
                    // Reset and play if isPlaying is true
                    video.currentTime = 0;
                    if (isPlaying) {
                        video.play().catch(() => setIsPlaying(false)); // Handle autoplay block
                    }
                } else {
                    video.pause();
                }
            }
        });
    }, [activeIndex]);

     useEffect(() => {
        const activeVideo = videoRefs.current[activeIndex];
        if (activeVideo) {
            if (isPlaying) {
                activeVideo.play().catch(() => setIsPlaying(false));
            } else {
                activeVideo.pause();
            }
        }
    }, [isPlaying, activeIndex]);
    
    useEffect(() => {
        const activeVideo = videoRefs.current[activeIndex];
        if (activeVideo) {
            const handleTimeUpdate = () => {
                if (activeVideo.duration) {
                    setProgress(activeVideo.currentTime / activeVideo.duration);
                }
            };
            const handleEnded = () => {
                setActiveIndex(i => (i + 1) % highlights.length);
            };

            activeVideo.addEventListener('timeupdate', handleTimeUpdate);
            activeVideo.addEventListener('ended', handleEnded);

            return () => {
                activeVideo.removeEventListener('timeupdate', handleTimeUpdate);
                activeVideo.removeEventListener('ended', handleEnded);
            };
        }
    }, [activeIndex]);

    const handleScrub = (e: React.MouseEvent<HTMLDivElement>) => {
        const activeVideo = videoRefs.current[activeIndex];
        const scrubbableArea = e.currentTarget;
        if (activeVideo) {
            const scrubPosition = e.nativeEvent.offsetX / scrubbableArea.offsetWidth;
            activeVideo.currentTime = scrubPosition * activeVideo.duration;
        }
    };

    const handleDotClick = (index: number) => {
      setActiveIndex(index);
    }
    
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
                         <div key={index} className={`absolute inset-0 transition-opacity duration-500 ${index === activeIndex ? 'opacity-100 z-10' : 'opacity-0'}`}>
                            <video
                                // FIX: The ref callback function should not return a value. Using a block body ensures it returns void.
                                ref={el => { videoRefs.current[index] = el; }}
                                className="w-full h-full object-cover"
                                playsInline
                                muted
                                src={highlight.video}
                                aria-label={highlight.text}
                            ></video>
                             <div className="absolute top-8 left-8 right-8">
                                 <p className="text-white text-xl md:text-2xl font-semibold max-w-md">{highlight.text}</p>
                             </div>
                         </div>
                    ))}
                </div>
                <div className="flex justify-center items-center mt-6 space-x-3 w-full max-w-lg mx-auto">
                    <button onClick={() => setIsPlaying(!isPlaying)} className="mr-4 text-white" aria-label={isPlaying ? "Pause" : "Play"}>
                        {isPlaying ? (
                             <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56">
                                <path d="m21.7334 36.67h2.5342c1.1483 0 1.7324-.5796 1.7324-1.7193v-13.9015c0-1.12-.5841-1.6898-1.7324-1.7193h-2.5342c-1.1483 0-1.7324.5698-1.7324 1.7193v13.9015c-.0297 1.1396.5544 1.7193 1.7324 1.7193zm9.9992 0h2.5347c1.1485 0 1.7327-.5796 1.7327-1.7193v-13.9015c0-1.12-.5842-1.7193-1.7327-1.7193h-2.5347c-1.1485 0-1.7327.5698-1.7327 1.7193v13.9015c0 1.1396.5545 1.7193 1.7327 1.7193z" fill="currentColor"></path>
                            </svg>
                        ) : (
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56">
                                <path d="m23.7555 36.6237c.4478 0 .8598-.1343 1.4241-.4568l10.9178-6.3322c.8598-.5016 1.3614-1.021 1.3614-1.8361 0-.8061-.5016-1.3255-1.3614-1.8271l-10.9178-6.3322c-.5643-.3314-.9762-.4657-1.4241-.4657-.9315 0-1.7555.7165-1.7555 1.9435v13.3629c0 1.227.824 1.9435 1.7555 1.9435z" fill="currentColor"></path>
                            </svg>
                        )}
                    </button>
                    <div className="flex items-center space-x-3">
                        {highlights.map((_, index) => (
                            <button key={index} onClick={() => handleDotClick(index)} className={`w-2 h-2 rounded-full transition-all duration-300 ${activeIndex === index ? 'bg-white scale-125' : 'bg-gray-500'}`} aria-label={`Go to slide ${index + 1}: ${highlights[index].label}`}></button>
                        ))}
                    </div>
                    <div className="relative flex-grow h-1 bg-white/20 rounded-full cursor-pointer ml-4 group" onClick={handleScrub}>
                        <div className="absolute top-0 left-0 bg-white h-1 rounded-full" style={{ width: `${progress * 100}%` }}></div>
                         <div className="absolute top-1/2 -translate-y-1/2 h-2.5 w-2.5 bg-white rounded-full transition-transform group-hover:scale-110" style={{ left: `calc(${progress * 100}% - 5px)` }}></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HighlightsSection;