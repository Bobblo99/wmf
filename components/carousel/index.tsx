import React, { useState } from "react"
import Image from "next/image"

interface ICarousel {
  data: ImagesInterface[]
}

const Carousel = ({ data }: ICarousel) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    )
  }

  if (!data || data.length === 0) {
    return null
  }

  return (
    <div className="relative w-full overflow-hidden h-3/4">
      <div className="flex">
        {data.map((image, index) => (
          <div
            key={index}
            className={`flex w-full flex-shrink-0 transition-opacity duration-1000 ease-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ minHeight: "50vh" }} // Sorgt dafür, dass das Carousel auch bei unterschiedlichen Bildhöhen gut aussieht
          >
          <Image
              className="w-full object-cover"
              src={image.src}
              fill
              quality={80}
              alt={`Slide ${index + 1}`}
              loading="lazy"
            />
          </div>
        ))}
      </div>
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 transform rounded-full bg-black bg-opacity-40 p-2 text-white hover:bg-opacity-80 lg:left-24"
        onClick={prevSlide}
      >
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 transform rounded-full bg-black bg-opacity-40 p-2 text-white hover:bg-opacity-80 lg:right-24"
        onClick={nextSlide}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
      <div className="absolute bottom-5 flex w-full justify-center">
        {data.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`mx-1 h-2 w-2 cursor-pointer rounded-full lg:h-4 lg:w-4 ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-300"
            } transition duration-300 ease-in-out`}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel
