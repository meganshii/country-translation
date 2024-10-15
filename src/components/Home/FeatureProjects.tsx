"use client";

import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from "react";
import Image from "next/image";
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
                  {/* Image with Tooltip */}
                  <div className="absolute top-0 right-2 flex space-x-2">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center relative group">
                      <Image
                        src={item.image}
                        alt={item.h1}
                        width={400}
                        height={400}
                        className="hover:scale-90 transition-all duration-300"
                      />
                      <div className="hidden group-hover:flex absolute top-10 left-5 bg-white border border-gray-300 rounded-md shadow-md px-2 py-1 z-20">
                        <p className="lg:text-[0.7rem] text-[0.7rem] text-black">
                          {item.information}
                        </p>
                      </div>
                    </div>
                  </div>
                  Title
                  <div className="p-2 font-poppins">
                    <h3 className="lg:text-xs font-semibold w-[65%]">
                      {item.h1}
                    </h3>
                  </div>
                  {/* Product Image */}
                  <div className="flex justify-center items-center">
                    <div className="w-full px-2 hover:px-0 transition-all duration-300 lg:h-[14vh] mt-1 flex justify-center items-center">
                      <Image
                        className="object-cover"
                        src={item.img}
                        alt={item.h1}
                        loading="lazy"
                        width={400}
                        height={400}
                      />
                    </div>
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
