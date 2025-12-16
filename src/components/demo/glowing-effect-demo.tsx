import React from "react";
import { GlowingEffect, GlowingCard } from "@/components/ui/glowing-effect";
import { Sparkles, Zap, Rocket, Star } from "lucide-react";

export function GlowingEffectDemo() {
  return (
    <div className="min-h-screen bg-slate-950 p-8 md:p-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          Glowing Effect Components
        </h2>
        <p className="text-slate-400 text-center mb-12 text-lg">
          Hover over the cards to see the magical glow effect
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <GlowingCard
            title="Lightning Fast"
            description="Built with performance in mind. Experience blazing fast load times and smooth interactions."
            icon={<Zap size={32} />}
            glowColor="rgba(234, 179, 8, 0.5)"
          />

          <GlowingCard
            title="Beautiful Design"
            description="Crafted with attention to detail. Every pixel is perfectly placed for a stunning visual experience."
            icon={<Sparkles size={32} />}
            glowColor="rgba(168, 85, 247, 0.5)"
          />

          <GlowingCard
            title="Ready to Launch"
            description="Deploy in minutes. All the tools you need to get your project off the ground quickly."
            icon={<Rocket size={32} />}
            glowColor="rgba(59, 130, 246, 0.5)"
          />

          <GlowingCard
            title="Premium Quality"
            description="Top-tier components built with modern best practices and industry standards."
            icon={<Star size={32} />}
            glowColor="rgba(236, 72, 153, 0.5)"
          />

          <GlowingEffect
            className="md:col-span-2"
            glowColor="rgba(99, 102, 241, 0.6)"
          >
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-4">
                Custom Glow Effect
              </h3>
              <p className="text-slate-400 mb-6">
                The GlowingEffect component can wrap any content and apply a
                beautiful radial gradient that follows your cursor. Perfect for
                adding that extra touch of interactivity to your UI.
              </p>
              <div className="flex gap-4">
                <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors">
                  Get Started
                </button>
                <button className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </GlowingEffect>
        </div>
      </div>
    </div>
  );
}

export function GlowingEffectSimple() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-8">
      <GlowingEffect glowColor="rgba(99, 102, 241, 0.7)">
        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-12 max-w-2xl">
          <h1 className="text-5xl font-bold text-white mb-6">
            Welcome to the Future
          </h1>
          <p className="text-slate-300 text-xl leading-relaxed">
            Experience the next generation of web interactions with our glowing
            effect component. Move your cursor around this card to see the
            magic.
          </p>
        </div>
      </GlowingEffect>
    </div>
  );
}
