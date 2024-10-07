import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ImageViewer({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === data.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? data.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <div className="text-xl font-semibold text-gray-700">Princeton Solidarity for Palestine</div>
            <div className="flex space-x-4">
              <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
              <Link href="/timeline" className="text-gray-600 hover:text-gray-900">Timeline</Link>
              <Link href="/archive" className="text-gray-600 hover:text-gray-900">Archive</Link>
              <Link href="/contribute" className="text-gray-600 hover:text-gray-900">Contribute</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <div className="flex-grow flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
        
        <div className="relative w-full max-w-4xl h-[calc(100vh-200px)]">
          <Image
            src={data.images[currentIndex]}
            alt={data.descriptions[currentIndex]}
            layout="fill"
            objectFit="contain"
            quality={100}
          />
          
          {data.images.length > 1 && (
            <>
              <button 
                onClick={prevImage} 
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-r hover:bg-opacity-75"
                aria-label="Previous image"
              >
                Prev
              </button>
              <button 
                onClick={nextImage} 
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-l hover:bg-opacity-75"
                aria-label="Next image"
              >
                Next
              </button>
            </>
          )}
        </div>
        
        <p className="mt-4 text-center max-w-2xl">{data.descriptions[currentIndex]}</p>
      </div>
    </div>
  );
}