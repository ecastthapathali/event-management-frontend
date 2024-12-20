"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/images-slider";
import { FlipWords } from "./ui/flip-words";

export default function ImagesSliderDemo() {
  const images = [
    "/images/image_1.jpg",
    "/images/image_2.jpg",
    "/images/image_3.jpg",
    "/images/image_4.jpg",
    "/images/image_5.jpg",
    "/images/image_6.jpg",
    "/images/image_7.jpg",
    "/images/image_8.jpg",
    "/images/image_9.jpg",
  ];
  const words = [
    "Exciting",
    "Insightful",
    "Engaging",
    "Innovative",
    "Interactive",
    "Vibrant",
    "Motivating",
  ];
  return (
    <ImagesSlider className="h-[43rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-6xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          Regsiter Now! <br /> For <FlipWords words={words} />
          Events
        </motion.p>
        <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 hover:bg-gray-900/10 border-white text-white mx-auto text-center rounded-full relative mt-6">
          <span>Subscribe →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
}
