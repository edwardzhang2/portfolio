import React, { useState } from "react";
import {
  HeroScrollDemo,
  HeroScrollWithMultipleImages,
} from "@/components/demo/hero-scroll-demo";
import {
  GlowingEffectDemo,
  GlowingEffectSimple,
} from "@/components/demo/glowing-effect-demo";
import {
  DisplayCardsDemo,
  DisplayCardsWithImages,
  StackedCardsDemo,
} from "@/components/demo/display-cards-demo";

/**
 * Interactive Component Showcase with Tabs
 *
 * This page allows users to switch between different component demos
 * using a tabbed interface.
 */
const ComponentShowcaseSeparate = () => {
  const [activeTab, setActiveTab] = useState("scroll");

  const tabs = [
    { id: "scroll", name: "Scroll Animation", component: <HeroScrollDemo /> },
    { id: "glowing", name: "Glowing Effect", component: <GlowingEffectDemo /> },
    { id: "cards", name: "Display Cards", component: <DisplayCardsDemo /> },
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Tab Navigation */}
      <div className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  relative py-4 px-1 font-medium text-sm transition-colors
                  ${
                    activeTab === tab.id
                      ? "text-indigo-400"
                      : "text-slate-400 hover:text-slate-200"
                  }
                `}
              >
                {tab.name}
                {activeTab === tab.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-500" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Active Tab Content */}
      <div className="transition-opacity duration-300">
        {tabs.find((tab) => tab.id === activeTab)?.component}
      </div>
    </div>
  );
};

export default ComponentShowcaseSeparate;
