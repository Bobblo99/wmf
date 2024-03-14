import React, { useEffect, useRef } from "react"
import Image from "next/image"

import Header from "../../../components/header"
import Main from "../../../components/mainContainer"

// const ParallaxSection = () => {
//   const backgroundRef = useRef<any>(null);
//   const foregroundRef = useRef<any>(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       const offset = window.pageYOffset;
//       if (backgroundRef.current) {
//         backgroundRef.current.style.transform = `translateY(${offset * 0.5}px)`;
//       }
//       if (foregroundRef.current) {
//         foregroundRef.current.style.transform = `translateY(${offset * 0.2}px)`;
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="relative overflow-hidden h-screen">
//       {/* Hintergrund-Ebene mit Bild */}
//       <div
//         ref={backgroundRef}
//         className="absolute inset-0 bg-[url('/test4.jpg')] bg-cover"
//       ></div>

//       <div className="relative z-10 flex justify-center items-center h-full">
//         {/* Mittlerer Inhalt */}
//         test
//         <p className="text-white text-xl">Scrollen Sie, um den Parallax-Effekt zu sehen!</p>
//       </div>

//       {/* Vordergrund-Ebene mit Bild */}
//       <div
//         ref={foregroundRef}
//         className="absolute inset-0 bg-[url('/test1.jpg')] bg-cover bg-center"
//         style={{ zIndex: 2 }} // Stellt sicher, dass der Vordergrund über dem Inhalt liegt
//       ></div>
//     </div>
//   );
// };

// const Formenbau = () => {
//   return (
//     <main className="flex flex-col items-center justify-center min-h-screen">
//       <Header displayText="Kontakt" />
//       <ParallaxSection />
//       {/* Weitere Sektionen... */}
//       <ParallaxSection />
//     </main>
//   );
// };

export default function Formenbau() {
  return (
    <Main>
      <div className="container mx-auto flex flex-col items-center px-4 py-12">
        <Header displayText="Formenbau" />
        <div className="mt-8 bg-backgroundColor p-6 text-center shadow-lg dark:bg-gray-800">
          <p className="mt-4 text-center text-lg text-gray-800 dark:text-gray-300">
            Schäumwerkzeuge aus Aluminium sind das Kernstück unseres Formenbaus.
            Wir fertigen Werkzeuge zur Herstellung von EPP- und EPS-Teilen. Zum
            Kundenkreis zählen namhafte Schäumteile - Hersteller.
            <br />
            Holz- und Kunststoffmodelle runden die Produktpalette ab.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-4 text-gray-800 dark:text-gray-300 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              src: "/Formenbau/Form1.jpg",
              alt: "Formenbau Bild 1",
              description:
                "Haube und Kern eines 6-fach Schäumwerkzeugs zur Herstellung von EPP-Schäumteilen",
            },
            {
              src: "/Formenbau/Form2.jpg",
              alt: "Formenbau Bild 2",
              description: "Bildbeschreibung 2",
            },
            {
              src: "/Formenbau/Form3.jpg",
              alt: "Formenbau Bild 3",
              description: "Bildbeschreibung 3",
            },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center p-2">
              <div className="relative h-48 w-full">
                <Image
                  src={item.src}
                  alt={item.alt}
                  layout="fill"
                  objectFit="cover"
                  className="shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
                />
              </div>
              <p className="mt-2 text-center">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-backgroundColor p-6 text-center shadow-lg dark:bg-gray-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Ausstattung:
          </h2>
          <p className="mt-4 text-gray-800 dark:text-gray-300">
            3 CNC-Maschinen für Werkstücke bis zu einer Größe von 2.000 x 1.000
            mm.
            <br />
            Wir arbeiten mit den CAD-Systemen: TEBIS, VISICAD
          </p>
        </div>
      </div>
    </Main>
  )
}
