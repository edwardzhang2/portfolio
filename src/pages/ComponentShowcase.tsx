import React from "react";
import { HeroScrollDemo } from "@/components/demo/hero-scroll-demo";
import { GlowingEffectDemo } from "@/components/demo/glowing-effect-demo";
import { DisplayCardsDemo } from "@/components/demo/display-cards-demo";

/**
 * Component Showcase Page
 *
 * This page demonstrates all three integrated UI components:
 * 1. ContainerScroll Animation - Scroll-triggered 3D transforms
 * 2. GlowingEffect - Interactive cursor-following glow
 * 3. DisplayCards - Beautiful card layouts with hover effects
 *
 * Usage:
 * Import this component into your App.jsx or routing configuration
 * to display all demos in one place.
 */
const ComponentShowcase = () => {
  return (
    <div className="bg-slate-950 min-h-screen">
      {/* Hero Scroll Demo Section */}
      <section id="hero-scroll">
        <HeroScrollDemo />
      </section>

      {/* Glowing Effect Demo Section */}
      <section id="glowing-effect">
        <GlowingEffectDemo />
      </section>

      {/* Display Cards Demo Section */}
      <section id="display-cards">
        <DisplayCardsDemo />
      </section>
    </div>
  );
};

export default ComponentShowcase;
