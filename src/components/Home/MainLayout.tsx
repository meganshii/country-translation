"use client";
import React from "react";
import dynamic from "next/dynamic";
import Hero from "@/components/Home/Home";
const FeatureNews = dynamic(() => import("@/components/Home/FeatureNews"), { ssr: true });
import data from "../Constants/hero.json";
const AnnouncementSection = dynamic(() => import("@/components/Home/AnnouncementSection"));
const MarqueeSection = dynamic(() => import("@/components/Home/MarqueeSection"), { ssr: true });
const KnowMore = dynamic(() => import("@/components/Home/KnowMore"), { ssr: true });
const HomeMachine = dynamic(() => import("@/components/Home/HomeMachine"), { ssr: true });
const HomeTestimonial = dynamic(() => import("@/components/Home/TestimonialsSection"), { ssr: true });

export default function MainLayout() {


  return (
    <main className="relative bg-[#f2f2f2] top-14 gap-2 h-full">
      <div className="top-2 relative">
        <Hero />
      </div>
      
      <div className="h-full font-poppins py-20">
        <div id="machines" className="flex space-y-6 flex-col" >
          <div className="flex justify-center text-3xl items-center space-x-2">
            <h2 className="bg-gradient-to-r text-3xl from-[#483d73] to-red-700 bg-clip-text text-transparent font-medium">
              {data[0].homeMachineSection?.title.trim().replace(/\s+\S+$/, "")}
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
        <div className="h-auto max-w-screen-2xl mx-auto lg:py-8">
          <AnnouncementSection />
        </div>
        <div id="clientele" className="max-w-screen-2xl mx-auto">
          <MarqueeSection />
        </div>
        <div id="knowMore" className="h-auto" >
          <KnowMore />
        </div>
        <div id="news" >
          <FeatureNews />
        </div>
        <div
          id="testimonials"
          className="relative bg-gradient-to-l via-purple-200 to-transparent h-screen overflow-hidden"
          
        >
          <HomeTestimonial />
        </div>
      </div>
    </main>
  );
}
