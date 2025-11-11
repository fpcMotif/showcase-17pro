import React, { useState, useRef, useEffect } from 'react';

const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
        if (isPlaying) {
            videoRef.current.play().catch(() => setIsPlaying(false));
        } else {
            videoRef.current.pause();
        }
    }
  }, [isPlaying]);

  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current) {
        const scrollY = window.scrollY;
        // Apply parallax effect: move video up at half the scroll speed
        videoRef.current.style.transform = `translateY(${scrollY * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      const currentProgress = (videoRef.current.currentTime / videoRef.current.duration);
      setProgress(currentProgress);
    }
  };

  const handleScrub = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      const scrubbableArea = e.currentTarget;
      const scrubPosition = e.nativeEvent.offsetX / scrubbableArea.offsetWidth;
      videoRef.current.currentTime = scrubPosition * videoRef.current.duration;
      setProgress(scrubPosition);
    }
  };

  return (
    <section 
      className="relative h-screen overflow-hidden"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <h1 className="sr-only">iPhone 17 Pro</h1>
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-[120%] object-cover"
          autoPlay
          muted
          loop
          playsInline
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onTimeUpdate={handleTimeUpdate}
          src="https://www.apple.com/105/media/us/iphone-17-pro/2025/704d4474-8e63-4ce7-9917-bb47b1ca4ba0/anim/hero/xlarge_2x.mp4"
          aria-label="iPhone 17 Pro, cosmic orange, partial back exterior, Pro Fusion camera system in top left corner, 3 lenses, microphone, flash"
        ></video>
      </div>
      
      <div 
        className={`absolute bottom-28 left-1/2 -translate-x-1/2 w-11/12 max-w-lg transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}
        style={{ pointerEvents: showControls ? 'auto' : 'none' }}
      >
        <div className="bg-black/50 backdrop-blur-md rounded-full p-2 flex items-center space-x-3">
           <button onClick={togglePlay} className="text-white focus:outline-none p-1" aria-label={isPlaying ? "Pause video" : "Play video"}>
            {isPlaying ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v4a1 1 0 11-2 0V8z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            )}
          </button>
          <div className="relative flex-grow h-1.5 bg-white/20 rounded-full cursor-pointer group" onClick={handleScrub}>
            <div className="absolute top-0 left-0 bg-white h-1.5 rounded-full" style={{ width: `${progress * 100}%` }}></div>
            <div className="absolute top-1/2 -translate-y-1/2 h-3 w-3 bg-white rounded-full transition-transform group-hover:scale-110" style={{ left: `calc(${progress * 100}% - 6px)` }}></div>
          </div>
        </div>
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