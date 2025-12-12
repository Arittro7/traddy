
"use client";
import Link from "next/link";

export default function Minimal404() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-6">
      {/* Main Message */}
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="mt-4 text-lg text-gray-600">
        Oops! The page you&apos;re looking for doesn&apos;t exist.
      </p>

      {/* Action Buttons */}
      <div className="mt-6 flex gap-4">
        <Link
          href="/"
          className="rounded-md bg-blue-600 px-5 py-2 text-white shadow hover:bg-blue-700"
        >
          Go Home
        </Link>
        <Link
          href="/explore"
          className="rounded-md border border-blue-600 px-5 py-2 text-blue-600 hover:bg-blue-50"
        >
          Explore
        </Link>
      </div>
    </div>
  );
}