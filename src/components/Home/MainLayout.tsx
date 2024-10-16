"use client";
import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Hero from "@/components/Home/Home";

const NavLinksDemo = dynamic(() => import("@/components/Home/NavLinks"), {
  ssr:true,
});
const FeatureNews = dynamic(() => import("@/components/Home/FeatureNews"), {
  ssr: true,
});
import data from "../Constants/hero.json";
const AnnouncementSection = dynamic(
  () => import("@/components/Home/AnnouncementSection")
);
const ContactIcons = dynamic(() => import("@/components/Contact/ContactIcon"));
const MarqueeSection = dynamic(
  () => import("@/components/Home/MarqueeSection"),
  { ssr: true }
);
const KnowMore = dynamic(() => import("@/components/Home/KnowMore"), {
  ssr: true,
});
const HomeMachine = dynamic(() => import("@/components/Home/HomeMachine"), {
  ssr: true,
});
const HomeTestimonial = dynamic(
  () => import("@/components/Home/TestimonialsSection"),
  { ssr: true }
);

export default function MainLayout() {
  const sectionRefs = {
    aboutUsRef: useRef<HTMLDivElement>(null),
    infiniteCardsRef: useRef<HTMLDivElement>(null),
    knowMoreRef: useRef<HTMLDivElement>(null),
    homeMachineRef: useRef<HTMLDivElement>(null),
    newsFeatureRef: useRef<HTMLDivElement>(null),
    homeTestimonialRef: useRef<HTMLDivElement>(null),
  };

  const navItems = [
    { text: "Machines", ref: sectionRefs.homeMachineRef },
    { text: "About Us", ref: sectionRefs.aboutUsRef },
    { text: "Clientele", ref: sectionRefs.infiniteCardsRef },
    { text: "KnowMore", ref: sectionRefs.knowMoreRef },
    { text: "News", ref: sectionRefs.newsFeatureRef },
    { text: "Testimonials", ref: sectionRefs.homeTestimonialRef },
  ];

  // State to track which sections are loaded
  const [loadedSections, setLoadedSections] = useState([0]); // Start by loading the first section

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              (entry.target as HTMLDivElement).dataset.index!
            ); // Fix #1: Type assertion
            if (!loadedSections.includes(index)) {
              setLoadedSections((prev) => [...prev, index, index + 1]); // Load the next two sections
            }
          }
        });
      },
      { rootMargin: "0px 0px 200px 0px", threshold: 0.1 }
    );

    Object.values(sectionRefs).forEach((ref, index) => {
      if (ref.current) {
        (ref.current as HTMLDivElement).dataset.index = index.toString(); // Fix #2: Convert number to string
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [loadedSections]);

  return (
    <main className="relative bg-[#f2f2f2] top-14 gap-2 h-full">
      <div className="top-2 relative">
        <Hero />
      </div>
      <ContactIcons />
      <NavLinksDemo navItems={navItems} />
      <div className="h-full font-poppins py-20">
        {loadedSections.includes(0) && (
          <div
            id="machines"
            className="flex space-y-6 flex-col"
            ref={sectionRefs.homeMachineRef}
          >
            <div className="flex justify-center text-3xl items-center space-x-2">
              <h2 className="bg-gradient-to-r text-3xl from-[#483d73] to-red-700 bg-clip-text text-transparent font-medium">
                {data[0].homeMachineSection?.title
                  .trim()
                  .replace(/\s+\S+$/, "")}
                <span className="font-semibold ml-1">
                  {data[0].homeMachineSection?.title.trim().match(/\S+$/)}
                </span>
              </h2>
            </div>
            <div className="text-sm w-full lg:w-full flex items-center justify-center">
              <p className="lg:w-[50%] text-sm lg:px-0 px-2 lg:text-base font-regular text-center">
                {data[0].homeMachineSection?.subheading}
              </p>
            </div>
            <HomeMachine />
          </div>
        )}

        {loadedSections.includes(1) && (
          <div className="h-auto max-w-screen-2xl mx-auto lg:py-8">
            <AnnouncementSection />
          </div>
        )}

        {loadedSections.includes(2) && (
          <div
            id="clientele"
            className="max-w-screen-2xl mx-auto"
            ref={sectionRefs.infiniteCardsRef}
          >
            <MarqueeSection />
          </div>
        )}

        {loadedSections.includes(3) && (
          <div id="knowMore" className="h-auto" ref={sectionRefs.knowMoreRef}>
            <KnowMore />
          </div>
        )}

        {loadedSections.includes(4) && (
          <div id="news" ref={sectionRefs.newsFeatureRef}>
            <FeatureNews />
          </div>
        )}

        {loadedSections.includes(5) && (
          <div
            id="testimonials"
            className="relative bg-gradient-to-l via-purple-200 to-transparent h-screen overflow-hidden"
            ref={sectionRefs.homeTestimonialRef}
          >
            <HomeTestimonial />
          </div>
        )}
      </div>
    </main>
  );
}
