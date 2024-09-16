import Image from 'next/image';

const MediaViewer = ({ type, src, title }) => {
  switch (type) {
    case 'image':
      return (
        <div className="relative w-full h-96">
          <Image src={src} alt={title} layout="fill" objectFit="contain" />
        </div>
      );
    case 'audio':
      return (
        <audio controls className="w-full">
          <source src={src} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      );
    case 'document':
      return (
        <iframe src={src} title={title} className="w-full h-96" />
      );
    case 'video':
      return (
        <video controls className="w-full">
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    default:
      return <p>Unsupported media type</p>;
  }
};

export default MediaViewer;