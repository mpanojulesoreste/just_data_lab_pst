import Link from 'next/link'
import BackgroundSlider from '@/components/BackgroundSlider'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <BackgroundSlider />
      <header className="bg-black bg-opacity-50 text-white p-4">
        <h1 className="text-2xl font-bold text-left">Princeton Solidarity for Palestine</h1>
      </header>
      <main className="flex-grow flex flex-col justify-center items-center text-white px-4">
        <div className="bg-black bg-opacity-50 p-6 rounded-lg w-full max-w-4xl">
          <h2 className="text-3xl font-bold mb-4 text-center">Welcome to Ida B. Wells Just Data Lab&apos;s Timeline and Archive for the Princeton Solidarity for Palestine</h2>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/timeline" className="bg-black text-white px-6 py-2 rounded text-center hover:bg-gray-800">
              View Timeline
            </Link>
            <Link href="/archive" className="bg-gray-500 text-white px-6 py-2 rounded text-center hover:bg-gray-600">
              Browse Archive
            </Link>
            <Link href="/submit" className="bg-green-600 text-white px-6 py-2 rounded text-center hover:bg-green-700">
              Submit Content
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}