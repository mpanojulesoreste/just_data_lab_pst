"use client"

import { useParams } from 'next/navigation';
import MediaViewer from '@/components/MediaViewer';
import Navigation from '@/components/Navigation';

export default function ViewPage() {
  const params = useParams();
  const { id } = params;

  // This is a placeholder. In a real application, you'd fetch the item data based on the id.
  const item = {
    type: id.split('-')[0],
    src: `/pictures/Bag Materials/${id}.jpg`, // This path should point to your actual media files
    title: `This is ${id.split('-')[0]} ${id.split('-')[1]}`
  };

  return (
    <div className="min-h-screen bg-white">
        <Navigation />
    <div className="container mx-auto px-6 py-3">
      <h1 className="text-3xl font-bold mb-8">Material: {item.title}</h1>
      <MediaViewer type={item.type} src={item.src} title={item.title} />
    </div>
    </div>
  );
}