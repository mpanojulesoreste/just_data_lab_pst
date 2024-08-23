'use client'

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ArchiveStack = ({ title, color }) => (
  <motion.div 
    className={`bg-${color}-500 p-6 rounded-lg shadow-lg text-white text-center cursor-pointer`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <h3 className="text-xl font-bold">{title}</h3>
  </motion.div>
);

export default function ArchivePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <div className="text-xl font-semibold text-gray-700">Princeton Solidarity for Palestine</div>
            <div className="flex space-x-4">
              <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
              <Link href="/timeline" className="text-gray-600 hover:text-gray-900">Timeline</Link>
              <Link href="/archive" className="text-blue-600 font-bold">Archive</Link>
              <Link href="/submit" className="text-gray-600 hover:text-gray-900">Contribute</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Archive - under development</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ArchiveStack title="Encampment Images" color="red" />
          <ArchiveStack title="Videos" color="blue" />
          <ArchiveStack title="Voice Memos" color="green" />
          <ArchiveStack title="Documents" color="yellow" />
        </div>
      </div>
    </div>
  );
}