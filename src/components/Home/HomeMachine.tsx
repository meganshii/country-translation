"use client";
import React, { useEffect, useState } from "react";
import cardsData from "../Constants/hero.json"; // Assuming you have your product data in this JSON
import dynamic from "next/dynamic";
import { HomeData } from "./types/constant";
const HomeMachineCarousel = dynamic(
  () => import("./Common/HomeMachineCarousel")
);
const Stepper=dynamic(()=>import("../ui/Stepper"))
// Define the type for each card item
type CardItem = {
  category: string;
  firstname: string;
  secondname: string;
  description: string;
  image: string;
  title: string;
  speed: number;
  unit: string;
  icon: string;
  items: { className: string; text: string }[];
};
interface HomeMachineLayoutProps{
 heroData:HomeData
}
const HomeMachine: React.FC<HomeMachineLayoutProps> = ({heroData}) => {
  const [activeStep, setActiveStep] = useState(0);
  const categories = ["all", "cup", "bowl", "bag", "plate", "straw"];

  // Access the product data from the 'ProductSection'
  const productData = heroData?.home[2].data

  useEffect(()=>{
    console.log("product data",productData);
    
  },[])

  return (
    <div className="h-full w-screen max-w-screen-2xl mx-auto">
      {/* Stepper to switch between categories */}
      <Stepper onStepChange={setActiveStep} />

    </div>
  );
};

export default HomeMachine;
