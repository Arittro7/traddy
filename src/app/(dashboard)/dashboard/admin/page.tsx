/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import {
  getAdminDashboardStats,
  getChartData,
} from "@/services/meta/meta.service";
import AdminDashboardClient from "@/components/modules/Admin/AdminDashboardClient";

export default function AdminDashboardPage() {
  // State management
  const [dashboardStats, setDashboardStats] = useState<any>(null);
  const [dashboardCharts, setDashboardCharts] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Fetch data on mount
  useEffect(() => {
    const loadDashboard = async () => {
      setIsLoading(true);
      setErrorMessage(null);

      try {
        const [statsResponse, chartsResponse] = await Promise.all([
          getAdminDashboardStats(),
          getChartData(),
        ]);

        setDashboardStats(statsResponse);
        setDashboardCharts(chartsResponse);
      } catch (err) {
        console.error("Dashboard fetch failed:", err);
        setErrorMessage(
          err instanceof Error ? err.message : "Unable to fetch dashboard data"
        );
      } finally {
        setIsLoading(false);
      }
    };

    loadDashboard();
  }, []);

  // Loading skeleton
  if (isLoading) {
    return (
      <div className="p-6 space-y-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/3"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
            >
              <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="h-10 bg-gray-200 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Error state
  if (errorMessage || !dashboardStats) {
    return (
      <div className="p-6">
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="w-6 h-6 text-red-600">⚠️</span>
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Error Loading Dashboard
          </h2>
          <p className="text-gray-600 mb-4">
            {errorMessage || "Failed to load dashboard data"}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  // Transform chart data
  const bookingChartData =
    dashboardCharts?.barChartData?.map((entry: any) => ({
      month: entry.month.split("-")[1],
      count: entry.count,
    })) ?? [];

  const categoryChartData =
    dashboardCharts?.pieChartData?.listingCategories?.map((entry: any) => ({
      name: entry._id,
      value: entry.count,
    })) ?? [];

  const userRoleData =
    dashboardCharts?.pieChartData?.userRoles?.map((entry: any) => ({
      name: entry._id,
      value: entry.count,
    })) ?? [];

  // Render client component
  return (
    <AdminDashboardClient
      stats={dashboardStats}
      bookingChartData={bookingChartData}
      categoryChartData={categoryChartData}
      userRoleData={userRoleData}
      hasChartData={!!dashboardCharts}
    />
  );
}