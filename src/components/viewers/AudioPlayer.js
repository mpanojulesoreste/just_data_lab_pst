import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

export default function AudioPlayer({ data }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', () => setDuration(audio.duration));
    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', () => setDuration(audio.duration));
    };
  }, []);

  const updateTime = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
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
      <h2 className="text-xl font-bold mb-2">{data.title}</h2>
      <audio ref={audioRef} src={data.audioUrl} />
      <div className="flex items-center justify-between mb-2">
        <button 
          onClick={togglePlay} 
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <div>
          {formatTime(currentTime)} / {formatTime(duration)}
        </div>
      </div>
      <input 
        type="range" 
        min="0" 
        max={duration} 
        value={currentTime}
        onChange={(e) => {
          audioRef.current.currentTime = e.target.value;
          setCurrentTime(e.target.value);
        }}
        className="w-full"
      />
      <p className="mt-4">{data.description}</p>
    </div>
  );
}