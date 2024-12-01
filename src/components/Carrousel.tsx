'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const images = [
  { src: '/Sliderimg/SliderImg.png', alt: 'Pijaos 1', caption: '1' },
  // { src: '/Sliderimg/SliderImg.jpg', alt: 'Imagen 2', caption: 'Caption 2' },
  // { src: '/Sliderimg/SliderImg.jpg', alt: 'Imagen 3', caption: 'Caption 3' },
];
export default function Carrousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  return (
    <div className="relative w-full  mx-auto overflow-hidden">
      {/* Images */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <Image
              src={image.src}
              alt={image.alt}
              width={1000}
              height={500}
              className="w-full object-cover"
            />
            <div className="text-center text-white bg-black bg-opacity-50 py-2">
              {image.caption}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75"
      >
        &#10095;
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-gray-400'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
