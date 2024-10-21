import Image from "next/image";
import { HomeData, NewsFeatureItem } from "./types/constant";
import { Key } from "react";

interface FeatureNewsLayoutProps {
  heroData: HomeData;
}

export default function FeatureNews({ heroData }: FeatureNewsLayoutProps) {
  const newsfData = heroData?.home[7].data?.newsData;

  return (
    <div className="max-w-screen-2xl mx-auto p-10 mb-12 font-poppins">
      <h2 className="text-2xl md:text-3xl  text-center">
        <span className="font-medium bg-gradient-to-r from-[#483d73] to-red-700 bg-clip-text text-transparent">
          {newsfData.heading}
        </span>{" "}
        <span className="font-semibold bg-gradient-to-r from-[#483d73] to-red-700 bg-clip-text text-transparent">
          {newsfData.subheading}
        </span>
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Left side large article */}
        <div className="lg:col-span-1">
          <article className="bg-white shadow-lg rounded-2xl h-[80vh] overflow-hidden">
            <div className="p-4 relative">
              <h2 className="text-lg md:text-xl font-medium mb-2 pr-8">
                {newsfData[0]?.title}
              </h2>
              <p className="text-sm text-gray-600 mb-2">
                {newsfData[0]?.description}
              </p>
              <span className="absolute top-4 right-4 bg-black text-white w-6 h-6 rounded-full text-center leading-6 text-sm">
                +
              </span>
            </div>
            <div className=" px-4">
              <div className="relative h-[55vh] rounded-2xl overflow-hidden">
                <Image
                  src={newsfData[0].image}
                  alt={newsfData[0].alt}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl"
                />
              </div>
            </div>
          </article>
        </div>
        {/* Right side smaller articles in 2x2 grid */}
        <div className="lg:col-span-1 grid grid-cols-2 gap-4">
          {newsfData.slice(1).map((news: NewsFeatureItem, index: Key) => (
            <article
              key={index}
              className="bg-white shadow-lg rounded-2xl overflow-hidden"
            >
              <div className="p-3 relative">
                <h3 className="text-sm font-medium mb-1 pr-6">{news.title}</h3>
                <p className="text-xs text-gray-600 line-clamp-2">
                  {news.description}
                </p>
                <span className="absolute top-3 right-3 bg-black text-white w-5 h-5 rounded-full text-center leading-5 text-xs">
                  +
                </span>
              </div>
              <div className="p-4">
                <div className="relative h-24 md:h-32 rounded-2xl overflow-hidden">
                  <Image
                    src={news.image}
                    alt={news.alt}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
