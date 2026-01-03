import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect } from "react";

import Loading from "./Components/Loading";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import FVideo from "./Components/FVideo";
import Jason from "./Components/Jason";
import SVideo from "./Components/SVideo";
import Lucia from "./Components/Lucia";
import PostCard from "./Components/PostCard";
import Final from "./Components/Final";
import Outro from "./Components/Outro";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
      syncTouch: true, // Add this for better touch sync
      touchInertiaMultiplier: 35, // Add this for better touch physics
    });

    // Connect Lenis with ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    const ticker = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(ticker);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(ticker);
    };
  }, []);

  return (
    <main>
      <Loading />
      <NavBar />
      <Hero />

      <FVideo />
      <Jason />

      <SVideo />
      <Lucia />

      <PostCard />
      <Final />
      <Outro />
    </main>
  );
};

export default App;
