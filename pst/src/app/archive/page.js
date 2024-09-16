"use client"

import { useState, useEffect } from 'react';
import Archive from '@/components/Archive';

export default function ArchivePage() {
  const [mediaTypes, setMediaTypes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchMediaTypes() {
      try {
        const res = await fetch('/api/media');
        const data = await res.json();
        setMediaTypes(data);
      } catch (error) {
        console.error('Failed to fetch media types:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchMediaTypes();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <Archive mediaTypes={mediaTypes} />;
}