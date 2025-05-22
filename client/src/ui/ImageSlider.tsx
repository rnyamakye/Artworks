import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  id: number;
  src: string;
}

const sliderImages: Slide[] = [
  {
    id: 1,
    src: "/Artist-holding-commissioned-portrait-1.JPG"
  },
  {
    id: 2,
    src: "/satisfied-costumer-5.jpg"
  },
  {
    id: 3,
    src: "/satisfied-costumer-3.jpg"
  },
  {
    id: 4,
    src: "/satisfied-costumer-6.jpg"
  },
  {
    id: 5,
    src: "/satisfied-customer-7.jpg"
  }
];

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    if (sliderImages.length === 0) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const handlePrev = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + sliderImages.length) % sliderImages.length
    );
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchStartX - touchEndX;

    if (deltaX > 50) handleNext();
    if (deltaX < -50) handlePrev();
  };

  if (sliderImages.length === 0) {
    return <div className="text-center p-0"></div>;
  }

  return (
    <div className="relative w-[90vw] md:w-full h-full overflow-hidden rounded-lg">
      {/* Slides container */}
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {sliderImages.map((slide) => (
          <div key={slide.id} className="w-full h-96 flex-shrink-0 relative">
            <img
              src={slide.src}
              alt={`Slide ${slide.id}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Previous button */}
      <div className="absolute bottom-0 flex items-center gap-5">
        <button
          onClick={handlePrev}
          className="relative -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        {/* Next button */}
        <button
          onClick={handleNext}
          className="relative top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full"
          aria-label="Next Slide"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {sliderImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 w-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
