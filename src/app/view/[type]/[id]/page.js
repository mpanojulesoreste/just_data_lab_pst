'use client'

import { useParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import ImageViewer from '@/components/viewers/ImageViewer'
import AudioPlayer from '@/components/viewers/AudioPlayer'
import VideoPlayer from '@/components/viewers/VideoPlayer'
import DocumentViewer from '@/components/viewers/DocumentViewer'

export default function ViewMedia() {
  const params = useParams()
  const { type, id } = params
  const [mediaData, setMediaData] = useState(null)

  useEffect(() => {
    async function fetchMediaData() {
      const response = await fetch(`/${type}-viewer.json`)
      const data = await response.json()
      setMediaData(data[id])
    }
    fetchMediaData()
  }, [type, id])

  if (!mediaData) return <div>Loading...</div>

  const renderViewer = () => {
    switch (type) {
      case 'images':
        return <ImageViewer data={mediaData} />
      case 'audio':
        return <AudioPlayer data={mediaData} />
      case 'videos':
        return <VideoPlayer data={mediaData} />
      case 'documents':
        return <DocumentViewer data={mediaData} />
      default:
        return <div>Unsupported media type</div>
    }
  }

  return (
    <div className="min-h-screen">
      {renderViewer()}
    </div>
  )
}