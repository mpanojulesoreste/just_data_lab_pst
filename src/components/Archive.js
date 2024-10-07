import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from './Navigation';

export default function Archive() {
  const [archiveData, setArchiveData] = useState(null);

  useEffect(() => {
    async function fetchArchiveData() {
      const response = await fetch('/archive-thumbnails.json');
      const data = await response.json();
      setArchiveData(data);
    }
    fetchArchiveData();
  }, []);

  if (!archiveData) return <div>Loading...</div>;

  return (
    < div className="min-h-screen bg-white" >
    <Navigation />
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Archive</h1>
      {Object.entries(archiveData).map(([category, items]) => (
        <div key={category} className="mb-8">
          <h2 className="text-2xl font-bold mb-4 capitalize">{category}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {items.map((item) => (
              <Link href={`/view/${category}/${item.id}`} key={item.id}>
                <div className="border rounded-lg overflow-hidden">
                  <div className="relative h-40">
                    <Image
                      src={item.thumbnail}
                      alt={item.description}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="p-2">
                    <p className="text-sm font-bold">{item.folder}</p>
                    <p className="text-sm">{item.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}