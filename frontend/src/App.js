import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useScrollAnimation from "./hooks/useScrollAnimation";

// Components
import Header from "./components/Header";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Process from "./components/Process";
import Certifications from "./components/Certifications";
import Products from "./components/Products";
import Partners from "./components/Partners";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Initialize scroll animations
  useScrollAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header isScrolled={isScrolled} />
      <Hero />
      <Mission />
      <Process />
      <Certifications />
      <Products />
      <Partners />
      <CTA />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;