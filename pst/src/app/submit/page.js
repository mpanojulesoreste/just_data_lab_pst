'use client'

import React, { useState } from 'react';
import Link from 'next/link';

export default function SubmitContentPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contentType: '',
    description: '',
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prevState => ({
      ...prevState,
      file: e.target.files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to server)
    console.log(formData);
    alert('Thank you for your submission!');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <div className="text-xl font-semibold text-gray-700">Princeton Solidarity for Palestine</div>
            <div className="flex space-x-4">
              <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
              <Link href="/timeline" className="text-gray-600 hover:text-gray-900">Timeline</Link>
              <Link href="/archive" className="text-gray-600 hover:text-gray-900">Archive</Link>
              <Link href="/submit" className="text-blue-600 font-bold">Contribute</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Submit Content</h1>
        
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Submission Guidelines</h2>
          <ul className="list-disc list-inside mb-6">
            <li>Ensure all content is related to Princeton Solidarity for Palestine activities.</li>
            <li>Images should be in JPG or PNG format, max 5MB each.</li>
            <li>Videos should be in MP4 format, max 100MB.</li>
            <li>Voice memos should be in MP3 format, max 10MB.</li>
            <li>Documents should be in PDF format, max 10MB.</li>
            <li>Please provide a brief description for each submitted item.</li>
          </ul>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1">Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded" required />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded" required />
            </div>
            <div>
              <label htmlFor="contentType" className="block mb-1">Content Type</label>
              <select id="contentType" name="contentType" value={formData.contentType} onChange={handleChange} className="w-full p-2 border rounded" required>
                <option value="">Select a content type</option>
                <option value="image">Image</option>
                <option value="video">Video</option>
                <option value="audio">Voice Memo</option>
                <option value="document">Document</option>
              </select>
            </div>
            <div>
              <label htmlFor="description" className="block mb-1">Description</label>
              <textarea id="description" name="description" value={formData.description} onChange={handleChange} className="w-full p-2 border rounded" rows="4" required></textarea>
            </div>
            <div>
              <label htmlFor="file" className="block mb-1">File Upload</label>
              <input type="file" id="file" name="file" onChange={handleFileChange} className="w-full p-2 border rounded" required />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit - can't work</button>
          </form>
        </div>
      </div>
    </div>
  );
}