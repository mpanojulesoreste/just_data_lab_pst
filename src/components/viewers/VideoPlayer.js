import { useState, useRef } from 'react';

export default function VideoPlayer({ data }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h2 className="text-xl font-bold mb-2">{data.title}</h2>
      <div className="relative">
        <video 
          ref={videoRef} 
          src={data.videoUrl} 
          className="w-full"
          onClick={togglePlay}
        />
        <button 
          onClick={togglePlay} 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded"
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      </div>
      <p className="mt-4">{data.description}</p>
      <p className="mt-2 text-sm text-gray-600">Duration: {data.duration}</p>
    </div>
  );
}