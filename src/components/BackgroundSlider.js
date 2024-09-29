"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'

const images = [
  '/image1.jpg',
  '/image2.jpg',
  '/image3.png',
]

export default function BackgroundSlider() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="fixed inset-0 z-[-1]">
      {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={`Slide ${index + 1}`}
          fill
          style={{ objectFit: 'cover' }}
          className={`transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentImage ? 'bg-white' : 'bg-gray-400'
            }`}
            onClick={() => setCurrentImage(index)}
          />
        ))}
      </div>
    </div>
  )
}