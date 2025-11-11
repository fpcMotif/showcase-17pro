
import React from 'react';
import Header from './components/Header';
import LocalNav from './components/LocalNav';
import HeroSection from './components/HeroSection';
import HighlightsSection from './components/HighlightsSection';
import DesignSection from './components/DesignSection';
import ProductViewer from './components/ProductViewer';
import CameraSection from './components/CameraSection';
import PerformanceSection from './components/PerformanceSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black text-white antialiased">
      <Header />
      <LocalNav />
      <main>
        <HeroSection />
        <HighlightsSection />
        <DesignSection />
        <ProductViewer />
        <CameraSection />
        <PerformanceSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
