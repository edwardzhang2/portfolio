import React from "react";
import {
  DisplayCard,
  DisplayCardGrid,
  StackedCard,
} from "@/components/ui/display-cards";
import { Code, Palette, Zap, Globe, Database, Smartphone } from "lucide-react";

export function DisplayCardsDemo() {
  return (
    <div className="min-h-screen bg-slate-950 p-8 md:p-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          Display Cards Showcase
        </h2>
        <p className="text-slate-400 text-center mb-12 text-lg">
          Beautiful card components with hover effects and gradients
        </p>

        <DisplayCardGrid>
          <DisplayCard
            title="Web Development"
            description="Build modern, responsive websites with the latest technologies and frameworks. Create stunning user experiences that work seamlessly across all devices."
            image="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5"
            icon={<Code size={28} />}
            tags={["React", "TypeScript", "Tailwind"]}
          />

          <DisplayCard
            title="UI/UX Design"
            description="Design beautiful and intuitive interfaces that users love. Focus on usability, accessibility, and aesthetic appeal in every project."
            image="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
            icon={<Palette size={28} />}
            tags={["Figma", "Design Systems", "Prototyping"]}
          />

          <DisplayCard
            title="Performance"
            description="Optimize your applications for speed and efficiency. Deliver lightning-fast experiences that keep users engaged."
            image="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
            icon={<Zap size={28} />}
            tags={["Optimization", "Core Web Vitals", "SEO"]}
          />

          <DisplayCard
            title="Global Reach"
            description="Deploy your applications worldwide with confidence. Scale effortlessly to serve users across the globe."
            icon={<Globe size={28} />}
            tags={["CDN", "Internationalization", "Scaling"]}
          />

          <DisplayCard
            title="Database Solutions"
            description="Implement robust and scalable database architectures. Handle millions of records with ease and reliability."
            icon={<Database size={28} />}
            tags={["PostgreSQL", "MongoDB", "Redis"]}
          />

          <DisplayCard
            title="Mobile First"
            description="Design and develop with mobile users in mind. Create responsive experiences that work perfectly on any screen size."
            image="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61"
            icon={<Smartphone size={28} />}
            tags={["Responsive", "PWA", "Mobile UX"]}
          />
        </DisplayCardGrid>
      </div>
    </div>
  );
}

export function DisplayCardsWithImages() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured online store with payment integration, inventory management, and real-time analytics.",
      image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5",
      tags: ["Next.js", "Stripe", "Prisma"],
    },
    {
      title: "Social Media Dashboard",
      description:
        "Manage all your social media accounts from one place. Schedule posts, track analytics, and engage with your audience.",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
      tags: ["React", "GraphQL", "TailwindCSS"],
    },
    {
      title: "AI-Powered Analytics",
      description:
        "Leverage machine learning to gain insights from your data. Predictive analytics and intelligent recommendations.",
      image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
      tags: ["Python", "TensorFlow", "FastAPI"],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 p-8 md:p-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Featured Projects
        </h2>
        <DisplayCardGrid>
          {projects.map((project, index) => (
            <DisplayCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
            />
          ))}
        </DisplayCardGrid>
      </div>
    </div>
  );
}

export function StackedCardsDemo() {
  return (
    <div className="min-h-screen bg-slate-950 p-8 md:p-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Stacked Card Layout
        </h2>
        <div
          className="grid gap-4 h-[600px]"
          style={{ gridTemplateAreas: '"stack"' }}
        >
          <StackedCard
            title="Creative Solutions"
            description="Transform your ideas into reality with cutting-edge technology and innovative design."
            image="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5"
            className="h-full"
          />
        </div>
      </div>
    </div>
  );
}
