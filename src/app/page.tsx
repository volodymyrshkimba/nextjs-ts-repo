import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4">
      <Image className="mb-8" width={122} height={25} src="/icons/logo.svg" alt="logo" />

      <h1 className="text-3xl font-semibold mb-6">Welcome to the Home Page</h1>

      <nav className="flex space-x-12">
        <Link href="/dashboard">
          <span className="px-4 py-2 border border-white rounded-md hover:bg-white hover:text-gray-900 transition-colors font-medium">
            Go to Dashboard
          </span>
        </Link>
        <Link href="/companies">
          <span className="px-4 py-2 border border-white rounded-md hover:bg-white hover:text-gray-900 transition-colors font-medium">
            Go to Companies
          </span>
        </Link>
      </nav>
    </main>
  );
}
