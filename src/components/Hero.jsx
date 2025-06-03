import React, { useEffect, useState } from "react";
import slide1 from "../assets/slider/1.png";
import slide2 from "../assets/slider/2.png";
const slides = [
  {
    id: 1,
    url: slide1,
  },
  {
    id: 2,
    url: slide2,
  },
];
const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  });
  return (
    <div className="bg-primary w-screen flex items-center justify-center">
      <div className="max-w-[1200px] h-[500px] w-full m-auto py-10 px-4 relative group">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        ></div>
        {/* Left Arrow */}
        <div
          className="hidden group-hover:block absolute top-1/2 left-5 text-2xl rounded-full p-2 bg-black/30 text-white cursor-pointer"
          onClick={prevSlide}
        >
          ❮
        </div>
        {/* Right Arrow */}
        <div
          className="hidden group-hover:block absolute top-1/2 right-5 text-2xl rounded-full p-2 bg-black/30 text-white cursor-pointer"
          onClick={nextSlide}
        >
          ❯
        </div>
      </div>
    </div>
  );
};

export default Hero;
