import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="text-xl font-semibold text-gray-700">Princeton Solidarity for Palestine</div>
          <div className="flex space-x-4">
            <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
            <Link href="/timeline" className="text-gray-600 hover:text-gray-900">Timeline</Link>
            <Link href="/archive" className="text-gray-600 hover:text-gray-900">Archive</Link>
            <Link href="/submit" className="text-gray-600 hover:text-gray-900">Contribute</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;