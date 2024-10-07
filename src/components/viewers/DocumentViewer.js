import { useState, useEffect } from 'react';

export default function DocumentViewer({ data }) {
  const [isPdfSupported, setIsPdfSupported] = useState(true);

  useEffect(() => {
    // Check if the browser supports PDF embedding
    setIsPdfSupported(checkPdfSupport());
  }, []);

  const checkPdfSupport = () => {
    return !!window.navigator.mimeTypes['application/pdf'];
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h2 className="text-xl font-bold mb-2">{data.title}</h2>
      {isPdfSupported && data.documentUrl.endsWith('.pdf') ? (
        <iframe 
          src={`${data.documentUrl}#view=FitH`} 
          className="w-full h-screen mb-4"
          title={data.title}
        />
      ) : (
        <div className="mb-4">
          <p>PDF viewing is not supported in your browser or this is not a PDF file.</p>
          <a 
            href={data.documentUrl} 
            download 
            className="bg-blue-500 text-white px-4 py-2 rounded inline-block mt-2"
          >
            Download Document
          </a>
        </div>
      )}
      <p>{data.description}</p>
    </div>
  );
}