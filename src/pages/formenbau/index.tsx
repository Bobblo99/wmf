import React, { useEffect, useRef } from "react";
import Header from "../../../components/header";

const ParallaxSection = () => {
  const backgroundRef = useRef<any>(null);
  const foregroundRef = useRef<any>(null);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.pageYOffset;
      if (backgroundRef.current) {
        backgroundRef.current.style.transform = `translateY(${offset * 0.5}px)`;
      }
      if (foregroundRef.current) {
        foregroundRef.current.style.transform = `translateY(${offset * 0.2}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative overflow-hidden h-screen">
      {/* Hintergrund-Ebene mit Bild */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 bg-[url('/test4.jpg')] bg-cover"
      ></div>
      
      <div className="relative z-10 flex justify-center items-center h-full">
        {/* Mittlerer Inhalt */}
        test
        <p className="text-white text-xl">Scrollen Sie, um den Parallax-Effekt zu sehen!</p>
      </div>

      {/* Vordergrund-Ebene mit Bild */}
      <div
        ref={foregroundRef}
        className="absolute inset-0 bg-[url('/test1.jpg')] bg-cover bg-center"
        style={{ zIndex: 2 }} // Stellt sicher, dass der Vordergrund über dem Inhalt liegt
      ></div>
    </div>
  );
};

const Formenbau = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <Header displayText="Kontakt" />
      <ParallaxSection />
      {/* Weitere Sektionen... */}
      <ParallaxSection />
    </main>
  );
};

export default Formenbau;
