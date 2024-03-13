import "@/styles/globals.css"; // Importiere globale CSS-Stile
import type { AppProps } from "next/app";
import React from "react";
import { Roboto } from "next/font/google"; // Importiere die Schriftart
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

// Definiere die Schriftart
const inter = Roboto({
  subsets: ["latin"],
  weight: "400",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        body {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}