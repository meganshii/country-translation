"use client";
import React, { useEffect, useRef } from "react";
import  Page3Data  from "../Constants/Sustainability/Sustainability-Data.json";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Page3 = () => {
  const globeRef = useRef(null);
  const screen = useRef(null);
  const data = Page3Data;
  
  useEffect(() => {
    gsap.fromTo(globeRef.current, { x: -120 }, { x: 0, duration: 3 });
    // Scroll animation
    gsap.fromTo(
      globeRef.current,
      { x: 0 },
      {
        x: -120,
        duration: 3,
        scrollTrigger: {
          trigger: screen.current,
          start: "30% bottom",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <>
      <div className="flex items-center justify-center h-full overflow-hidden lg:mt-[10rem] mt-[10rem] md:mt-0 font-poppins lg:mb-5">
        <div
          className="bg-[#388E3C] lg:h-[29rem] h-[43rem] relative lg:w-full w-[22rem] md:w-full mx-4 mt-[10rem] lg:mx-[5rem] lg:ounded-[2rem] rounded-2xl"
          ref={screen}
        >
          {/* <Image
            src={data.Sustainability[3].Data?.branchLeaves}
            alt="branchLeaves"
            className="absolute lg:-top-[9.1rem] lg:-left-[5rem] -top-10 -left-5 z-[300]"
          /> */}

          <div className="flex absolute lg:left-[3.3rem] lg:top-[1.5rem] top-16 font-poppins">
            <h2 className="lg:text-[3.3rem] md:text-6xl font-extrabold md:font-bold text-white z-[301] text-4xl pl-16 lg:pl-0">
              {data.Sustainability[3].Data?.titleWhite}
            </h2>
            <h2 className="absolute top-[4.5rem] whitespace-nowrap lg:text-[3.3rem] md:text-3xl text-2xl lg:pl-0 pl-5 md:pl-16 font-extrabold text-black z-[301]">
              {data.Sustainability[3].Data?.titleBlack}
            </h2>
          </div>
          <div className=" flex absolute top-[12rem] lg:left-[3.3rem] font-poppins text-center lg:text-left">
            <p className="w-full max-w-[50rem] text-white font-light md:font-medium md:text-xl leading-[1.3rem] lg:text-[1rem] text-sm z-[301] md:px-4">
              {data.Sustainability[3].Data?.description}
            </p>
          </div>
          {/* <Image
            src={data.Sustainability[3].Data?.globe}
            alt="globe"
            className="absolute -bottom-[0.5rem] lg:-right-[5.5rem] -right-[7rem] lg:w-[22rem] w-[15rem]"
            ref={globeRef}
          /> */}
        </div>
      </div>
    </>
  );
};

export default Page3;
