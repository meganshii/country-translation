"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import Image from "next/image";
import { HomeData } from "./types/constant";

interface KnowMoreLayoutProps {
  heroData: HomeData;
}

export default function Component({ heroData }: KnowMoreLayoutProps) {
  const knowMoreData = heroData?.home[6]?.data?.knowmore;
  const [openModal, setOpenModal] = useState<number | null>(null);

  return (
    <div className="container h-screen mb-32 mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
        {knowMoreData.map((item, index) => (
          <div
            key={index}
            className={`relative ${index % 2 !== 0 ? "md:top-1/2" : ""}`}
          >
            {index % 2 !== 0 && (
              <div className="absolute -top-8 left-4 right-4 bg-white p-2 rounded-2xl shadow-lg">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm ml-6">{item.title}</h3>
                  <svg
                    className="h-10 w-10 bg-black p-1.5 rounded-full text-white transform transition-transform duration-300 ease-in-out hover:rotate-45"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 17L17 7M17 7H8M17 7V16"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            )}
            <Card
              className={`bg-white rounded-xl shadow-md w-full max-w-[280px] h-[320px] mx-auto relative ${
                index % 2 !== 0 ? "mt-8" : ""
              }`}
            >
              <CardContent className="p-3">
                {index % 2 === 0 ? (
                  <>
                    <Image
                      src={item.src}
                      alt={item.title}
                      width={200}
                      height={200}
                      className="w-full h-36 object-cover rounded-2xl"
                    />
                    <div className="p-1">
                      <p className="text-sm text-gray-600 line-clamp-3">
                        {item.description}
                      </p>
                      {item.description.split(" ").length > 20 && (
                        <Dialog
                          open={openModal === index}
                          onOpenChange={(isOpen) =>
                            setOpenModal(isOpen ? index : null)
                          }
                        >
                          <DialogTrigger asChild>
                            <Button variant="link" className="mt-1 p-0 h-auto">
                              More
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>{item.title}</DialogTitle>
                            </DialogHeader>
                            <p className="text-sm text-gray-600">
                              {item.description}
                            </p>
                          </DialogContent>
                        </Dialog>
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                      {item.description}
                    </p>
                    {item.description.split(" ").length > 40 && (
                      <Dialog
                        open={openModal === index}
                        onOpenChange={(isOpen) =>
                          setOpenModal(isOpen ? index : null)
                        }
                      >
                        <DialogTrigger asChild>
                          <Button variant="link" className="mt-1 p-0 h-auto">
                            More
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>{item.title}</DialogTitle>
                          </DialogHeader>
                          <p className="text-sm text-gray-600">
                            {item.description}
                          </p>
                        </DialogContent>
                      </Dialog>
                    )}
                    <Image
                      src={item.src}
                      alt={item.title}
                      width={200}
                      height={200}
                      className="w-full h-40 object-cover rounded-2xl mt-4"
                    />
                  </>
                )}
              </CardContent>
            </Card>
            {index % 2 === 0 && (
              <div className="absolute -bottom-10 left-4 right-4 text-black rounded-2xl shadow-lg">
                <div className="flex items-center justify-between p-2 bg-white rounded-2xl shadow-2xl">
                  <h3 className="text-sm font-medium ml-6">{item.title}</h3>
                  <svg
                    className="h-10 w-10 bg-black p-1.5 rounded-full text-white transform transition-transform duration-300 ease-in-out hover:rotate-45"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 17L17 7M17 7H8M17 7V16"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
