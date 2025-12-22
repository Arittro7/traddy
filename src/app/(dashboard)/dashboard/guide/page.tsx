/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import { fetchDashboard } from "@/services/meta/meta.service";
import GuideDashboardClient from "@/components/modules/Guide/GuideDashboardClient";

export default function GuideDashboardPage() {
  // State
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Fetch dashboard data
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      setErrorMsg(null);

      try {
        const response = await fetchDashboard();
        setData(response);
      } catch (err) {
        console.error("Guide dashboard fetch failed:", err);
        setErrorMsg(
          err instanceof Error ? err.message : "Unable to fetch guide dashboard data"
        );
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  // Loading skeleton
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-emerald-50/50 to-white p-6">
        <div className="animate-pulse mx-auto">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {Array.from({ length: 4 }).map((_, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm">
                <div className="h-5 bg-gray-200 rounded w-1/2 mb-3"></div>
                <div className="h-8 bg-gray-200 rounded w-1/4"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (errorMsg || !data) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-emerald-50/50 to-white flex items-center justify-center p-6">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="w-8 h-8 text-amber-600">⚠️</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Unable to load dashboard
            </h2>
            <p className="text-gray-600 mb-8">{errorMsg || "Please try again"}</p>
            <div className="space-y-3">
              <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors w-full"
              >
                Try Again
              </button>
              <a
                href="/dashboard/guide/my-listings"
                className="block px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors w-full"
              >
                Manage Listings
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Success state
  return <GuideDashboardClient dashboardData={data} />;
}