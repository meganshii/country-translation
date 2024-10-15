"use client";

import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from "react";
import data from "../Constants/hero.json"; // Assuming this holds the 'homefeaturedata'

const FeatureProjects: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const borderRef = useRef<HTMLDivElement | null>(null);
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);
  const [borderWidth, setBorderWidth] = useState("10%");

  // Memoize relatedProduct to prevent recalculation on every render
  const relatedProduct = useMemo(() => {
    return data.find((item) => item.category === "homefeaturedata")?.data;
  }, []);

  // Memoized scroll functions to avoid re-creation on every render
  const scrollLeft = useCallback(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  }, []);

  const scrollRight = useCallback(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const scrollPosition = window.scrollY;
        const triggerStart =
          carouselRef.current.offsetTop - window.innerHeight * 0.8;
        const triggerEnd =
          carouselRef.current.offsetTop +
          carouselRef.current.offsetHeight * 0.7;

        if (scrollPosition >= triggerStart && scrollPosition <= triggerEnd) {
          const progress =
            (scrollPosition - triggerStart) / (triggerEnd - triggerStart);
          const newWidth = 10 + progress * 85;
          setBorderWidth(`${Math.min(95, Math.max(10, newWidth))}%`);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full h-[35vh] px-10 font-poppins max-w-screen-2xl mx-auto">
      <div
        ref={borderRef}
        className="border-t-[0.1rem] border-solid border-[#f2f2f2] lg:mx-[2rem] mx-[1rem] transition-all duration-300 ease-linear"
        style={{ width: borderWidth }}
      />

      <div className="flex flex-row rounded-2xl lg:my-[1vh] bg-white p-2">
        {/* Left Section with Title and Buttons */}
       

        {/* Carousel Section */}
        <div className="w-full h-[28vh] flex items-center overflow-hidden">
          <div className="overflow-auto scrollbar-hide px-1" ref={carouselRef}>
            <div className="w-max flex items-center justify-center space-x-2">
              {relatedProduct?.imageWithDescription?.map((item, idx) => (
                <div
                  key={idx}
                  className={`relative h-[28vh] lg:w-[13vw] w-[70vw] bg-gradient-to-b from-[#f5f5f5] to-[#f2f2f2] rounded-lg transition-all duration-300 ${
                    hoveredCardIndex === idx ? "bg-[#f0f0f0]" : ""
                  }`}
                  onMouseEnter={() => setHoveredCardIndex(idx)}
                  onMouseLeave={() => setHoveredCardIndex(null)}
                >
                 
                
                  Title
                  <div className="p-2 font-poppins">
                    <h3 className="lg:text-xs font-semibold w-[65%]">
                      {item.h1}
                    </h3>
                  </div>
                
                  {/* View Machine Button */}
                  {hoveredCardIndex === idx && (
                    <div className="flex w-full items-center justify-center absolute bottom-[5%]">
                      <button
                        aria-label="View Machine"
                        className="text-[0.6rem] font-medium mr-1"
                      >
                        View Machine
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(FeatureProjects);
