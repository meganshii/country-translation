"use client";
import React from "react";
import Hero from "@/components/Home/Home";
export default function MainLayout() {
  return (
    <main className="relative bg-[#f2f2f2] top-14 gap-2 h-full">
      <div className="top-2 relative">
        <Hero />
      </div>
    </main>
  );
}
