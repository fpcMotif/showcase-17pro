import React, { useState } from 'react';
import Header from './components/Header';
import LocalNav from './components/LocalNav';
import HeroSection from './components/HeroSection';
import HighlightsSection from './components/HighlightsSection';
import DesignSection from './components/DesignSection';
import ProductViewer from './components/ProductViewer';
import CameraSection from './components/CameraSection';
import PerformanceSection from './components/PerformanceSection';
import Footer from './components/Footer';

export type Color = 'Orange' | 'Blue' | 'Silver';

export const colors: { name: Color; label: string; bg: string; image: string }[] = [
    { name: 'Orange', label: 'Cosmic Orange', bg: 'bg-[#ff8b3d]', image: 'https://www.apple.com/v/iphone-17-pro/d/images/overview/product-viewer/colors_orange__f2ug4x6ry8uq_large.jpg'},
    { name: 'Blue', label: 'Deep Blue', bg: 'bg-[#1e2c4c]', image: 'https://www.apple.com/v/iphone-17-pro/d/images/overview/product-viewer/colors_blue__ct0n7mo30vwy_large.jpg' },
    { name: 'Silver', label: 'Silver', bg: 'bg-[#e3e4e6]', image: 'https://www.apple.com/v/iphone-17-pro/d/images/overview/product-viewer/colors_silver__52ec2bh9xaqe_large.jpg' }
];

function App() {
  const [activeColor, setActiveColor] = useState<Color>('Orange');

  return (
    <div className="bg-black text-white antialiased">
      <Header />
      <LocalNav colors={colors} activeColor={activeColor} setActiveColor={setActiveColor} />
      <main>
        <HeroSection />
        <HighlightsSection />
        <DesignSection />
        <ProductViewer colors={colors} activeColor={activeColor} setActiveColor={setActiveColor} />
        <CameraSection />
        <PerformanceSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;