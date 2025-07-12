import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/32958964/pexels-photo-32958964.jpeg" 
          alt="Industrial facility" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            Turning Waste Into
            <span className="gradient-text block"> Wealth</span>
          </h1>
          
          <p className="hero-subtitle text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light">
            South Africa's leading innovator in transforming post-consumer soft plastics 
            into premium food-grade plastic pellets for a sustainable future.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#mission"
              className="btn-primary text-lg px-8 py-4"
            >
              Discover Our Mission
            </a>
            <a
              href="#process"
              className="text-white border-2 border-white/30 hover:border-white/60 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-white/10"
            >
              See Our Process
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;