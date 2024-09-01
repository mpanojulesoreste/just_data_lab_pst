'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const TimelineEvent = ({ date, description, align }) => (
  <motion.div
    className={`flex ${align === 'left' ? 'flex-row-reverse' : 'flex-row'} mb-8`}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className={`w-5/12 ${align === 'left' ? 'text-right pr-8' : 'pl-8'}`}>
      <h3 className="font-bold text-lg">{date}</h3>
      <p>{description}</p>
    </div>
    <div className="w-2/12 flex justify-center relative">
      <div className="absolute top-0 w-1 h-full bg-gray-300"></div>
      <div className="w-4 h-4 bg-blue-500 rounded-full z-10"></div>
    </div>
    <div className="w-5/12"></div>
  </motion.div>
);

const TimelineSection = ({ title, events }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-8">
      <button
        className="w-full text-left font-bold text-xl mb-4 bg-gray p-4 rounded shadow-md hover:bg-gray-100 transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
      </button>
      {isOpen && (
        <div>
          {events.map((event, index) => (
            <TimelineEvent
              key={index}
              date={event.date}
              description={event.description}
              align={index % 2 === 0 ? 'left' : 'right'}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const Timeline = () => {
  const timelineData = [
    {
      title: "Divestment Movements at Princeton Before 2023",
      events: [
        {
          date: "August 14th, 2014",
          description: "Over 600 protesters gather in Scudder Plaza after a march down Nassau St. organized by Princeton for Palestine protesting"
        },
        {
          date: "Oct 13th, 2014",
          description: "Commemoration of all those who perished during Israel's conduct of Operation Cast Lead (flags put on Frist North lawn)"
        },
        // ... add more events
      ]
    },
    {
      title: "Planning Encampment and Planning Documents Leak",
      events: [
        {
          date: "April 17th, 2024",
          description: "Columbia University Gaza Solidarity Encampment goes live"
        },
        {
          date: "April 18th & 19th, 2024",
          description: "Members of Princeton Israeli Apartheid Divest (PIAD) visit the Columbia University Gaza Solidarity Encampment."
        },
        // ... add more events
      ]
    },
    {
      title: "First Part of Encampment (and Clio Hall Occupation) until Bargaining Team Met with the Administration",
      events: [
        {
          date: "Placeholder",
          description: "Placeholder"
        },
        {
          date: "Placeholder",
          description: "Placeholder"
        },
        // ... add more events
      ]
    },
    {
      title: "Nakba Day and Encampment Closure",
      events: [
        {
          date: "Placeholder",
          description: "Placeholder"
        },
        {
          date: "Placeholder",
          description: "Placeholder"
        },
        // ... add more events
      ]
    },
    {
      title: "Reunions",
      events: [
        {
          date: "Placeholder",
          description: "Placeholder"
        },
        {
          date: "Placeholder",
          description: "Placeholder"
        },
        // ... add more events
      ]
    },

    // ... add more sections
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <div className="text-xl font-semibold text-gray-700">Princeton Solidarity for Palestine</div>
            <div className="flex space-x-4">
              <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
              <Link href="/timeline" className="text-blue-600 font-bold">Timeline</Link>
              <Link href="/archive" className="text-gray-600 hover:text-gray-900">Archive</Link>
              <Link href="/submit" className="text-gray-600 hover:text-gray-900">Contribute</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Princeton Palestine Solidarity Timeline</h1>
        {timelineData.map((section, index) => (
          <TimelineSection key={index} title={section.title} events={section.events} />
        ))}
      </div>
    </div>
  );
};

export default Timeline;