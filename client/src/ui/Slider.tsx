import React, { useState, useEffect, ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import { getData } from "../lib";
import { config } from "../config";

interface SliderImage {
  id: string | number;
  // add other properties as needed
}

interface CarouselProps {
  children: ReactNode[]; // array of React nodes (slides)
  autoSlide?: boolean;
  autoSlideInterval?: number;
}

const Carousel: React.FC<CarouselProps> = ({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000
}) => {
  const [ setSliderImages] = useState<SliderImage[]>([]);
  const [curr, setCurr] = useState<number>(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;

    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval, next]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const endpoint = `${config?.baseURL}/sliderImages`;
        const data = await getData(endpoint);
        setSliderImages(data);
      } catch (error) {
        console.error("Error fetching slider images", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
          aria-label="Previous Slide"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
          aria-label="Next Slide"
        >
          <ChevronRight />
        </button>
      </div>
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`transition-all w-1.5 h-1.5 rounded-full bg-white ${
                curr === index ? "p-0.5" : "bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
