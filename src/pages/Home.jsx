// src/pages/Home.jsx
import React from "react";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import Navbar from "../components/Navbar";
import Hero from "../components/Section1";
import About from "../components/About";
import Features from "../components/Features";
import Story from "../components/Story";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const HomeContent = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Story />
      <Contact />
      <Footer />
    </main>
  );
};

const Home = () => {
  return (
    <ReactLenis root options={{ lerp: 0.1, smooth: true }}>
      <HomeContent />
    </ReactLenis>
  );
};

export default Home;
