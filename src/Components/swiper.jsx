import React, { useState, useEffect } from "react";

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    "/images/slide1.webp",
    "/images/slide2.webp",
    "/images/slide3.webp",
  ];

  // Automatically slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex < slides.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
