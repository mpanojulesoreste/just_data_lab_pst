"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import Navigation from './Navigation';

const MediaSection = ({ title, items }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center bg-gray-200 p-3 rounded-t-lg">
        <h2 className="text-xl font-bold">{title}</h2>
        <button onClick={() => setIsExpanded(!isExpanded)} className="focus:outline-none">
          {isExpanded ? (
            <ChevronUpIcon className="h-6 w-6" />
          ) : (
            <ChevronDownIcon className="h-6 w-6" />
          )}
        </button>
      </div>
      <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 p-4 bg-gray-100 rounded-b-lg ${isExpanded ? '' : 'max-h-96 overflow-hidden'}`}>
        {items.map((item, index) => (
          <Link href={`/view/${item.id}`} key={index} className="block">
            <div className="bg-gray-300 aspect-square relative overflow-hidden rounded">
              <Image
                src={item.thumbnail}
                alt={item.description}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <p className="mt-2 text-center text-sm text-gray-600">{item.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

const Archive = () => {
  const getUniqueDescriptions = (prefix, count) => {
    const descriptions = [
      "Encampment Demands",
      "Encampment Posters",
      "Posters by Young Children",
      "Encampment Art",
      "Encanmpment Daily Life",
      "Rallies and Marches on Campus",
      "Clio Hall Occupation",
      "Hunger Strike",
      "Lectures at the Encampment",
      "Last Day of the Encampment",
      "Reunions"
    ];
    return descriptions.slice(0, count).map(desc => `${prefix}: ${desc}`);
  };

  const mediaTypes = [
    {
      title: 'Pictures',
      items: getUniqueDescriptions("Pictures", 11).map((description, i) => ({
        id: `picture-${i}`,
        description,
        thumbnail: `/placeholders/picture-${i + 1}.jpg`
      }))
    },
    {
      title: 'Audio',
      items: getUniqueDescriptions("Audio", 6).map((description, i) => ({
        id: `audio-${i}`,
        description,
        thumbnail: `/placeholders/audio-${i + 1}.jpg`
      }))
    },
    {
      title: 'Documents',
      items: getUniqueDescriptions("Doc", 6).map((description, i) => ({
        id: `document-${i}`,
        description,
        thumbnail: `/placeholders/document-${i + 1}.jpg`
      }))
    },
    {
      title: 'Videos',
      items: getUniqueDescriptions("Video", 6).map((description, i) => ({
        id: `video-${i}`,
        description,
        thumbnail: `/placeholders/video-${(i % 6) + 1}.jpg`
      }))
    }
  ];

  return (
    <div className="min-h-screen bg-white">
        <Navigation />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Archive - Under Development</h1>
        {mediaTypes.map((mediaType, index) => (
          <MediaSection key={index} title={mediaType.title} items={mediaType.items} />
        ))}
      </div>
    </div>
  );
};

export default Archive;