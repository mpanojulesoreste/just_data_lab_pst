import dynamic from 'next/dynamic'

const Timeline = dynamic(() => import('@/components/Timeline'), { ssr: false })

export default function TimelinePage() {
  return <Timeline />
}