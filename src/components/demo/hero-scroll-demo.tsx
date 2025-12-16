import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden bg-slate-950">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Scroll Animations
              </span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl mt-4 max-w-2xl mx-auto">
              Experience smooth, beautiful animations that respond to your
              scroll
            </p>
          </>
        }
      >
        <img
          src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5"
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}

export function HeroScrollWithMultipleImages() {
  return (
    <div className="flex flex-col overflow-hidden bg-slate-950">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Modern Web Development
            </h1>
            <p className="text-slate-400 text-lg mt-4">
              Build stunning websites with the latest technologies
            </p>
          </>
        }
      >
        <div className="grid grid-cols-2 gap-4 p-4">
          <img
            src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
            alt="demo 1"
            className="rounded-xl object-cover w-full h-full"
            draggable={false}
          />
          <img
            src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
            alt="demo 2"
            className="rounded-xl object-cover w-full h-full"
            draggable={false}
          />
        </div>
      </ContainerScroll>
    </div>
  );
}
