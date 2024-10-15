import React from "react";
// import ImageSlider from "../ui/ImageSlider";
import dynamic from "next/dynamic";
const ImageSlider = dynamic(() => import("../ui/ImageSlider"));
const Home: React.FC = () => {
  return (
    <>
       <div className="w-full flex justify-center items-center h-[calc(100vh-100px)] lg:h-[90] rounded-3xl">
          <ImageSlider/>

          </div>
    </>
  );
};
Home.displayName = "Hero";
export default React.memo(Home);
