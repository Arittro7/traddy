/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import {
  Users,
  MapPin,
  Calendar,
  Star,
  Package,
  Clock,
  CheckCircle,
  UserCheck,
} from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { DashboardStats } from "@/services/meta/meta.service";
import { useEffect, useState } from "react";

// ---------- dynamic charts (unchanged) ----------
const BarChart = dynamic(() => import("@/components/shared/Charts/BarChart"), {
  ssr: false,
  loading: () => <div className="h-64 bg-gray-100 rounded-lg animate-pulse" />,
});
const PieChart = dynamic(() => import("@/components/shared/Charts/PieChart"), {
  ssr: false,
  loading: () => <div className="h-64 bg-gray-100 rounded-lg animate-pulse" />,
});

// ---------- types (unchanged) ----------
interface AdminDashboardClientProps {
  stats: DashboardStats;
  bookingChartData: Array<{ month: string; count: number }>;
  categoryChartData: Array<{ name: string; value: number }>;
  userRoleData: Array<{ name: string; value: number }>;
  hasChartData: boolean;
}

// ---------- component ----------
export default function AdminDashboardClient({
  stats,
  bookingChartData = [],
  categoryChartData = [],
  userRoleData = [],
  hasChartData = false,
}: AdminDashboardClientProps) {
  const [lastUpdated, setLastUpdated] = useState("");

  useEffect(() => {
    setLastUpdated(new Date().toLocaleTimeString());
  }, []);

  /* -------------------------------------------------
   1.  Re-ordered & re-described stat cards
  -------------------------------------------------- */
  const statCards = [
    {
      title: "Total Users",
      value: stats.totalUsers,
      icon: Users,
      color: "from-blue-500 to-cyan-400",
      secondaryValue: `${stats.totalGuides} guides, ${stats.totalTourists} tourists`,
      link: "/dashboard/admin/users",
      description: "Community members exploring and hosting experiences.",
    },
    {
      title: "Pending Bookings",
      value: stats.pendingBookings,
      icon: Clock,
      color: "from-amber-500 to-orange-400",
      secondaryValue: "Awaiting your confirmation",
      link: "/dashboard/admin/bookings?status=pending",
      description: "Quick actions needed to keep travellers happy.",
    },
    {
      title: "Total Tours",
      value: stats.totalListings,
      icon: MapPin,
      color: "from-emerald-500 to-teal-400",
      secondaryValue: `${stats.activeListings} live right now`,
      link: "/dashboard/admin/listings",
      description: "Curated adventures ready for booking.",
    },
    {
      title: "Completed Bookings",
      value: stats.totalBookings - stats.pendingBookings,
      icon: CheckCircle,
      color: "from-green-500 to-lime-400",
      secondaryValue: `${stats.pendingBookings} still pending`,
      link: "/dashboard/admin/bookings?status=completed",
      description: "Successful trips delivered this season.",
    },
    {
      title: "Average Rating",
      value: stats.averageRating.toFixed(1),
      icon: Star,
      color: "from-rose-500 to-pink-400",
      secondaryValue: `Based on ${stats.recentReviews.length} recent reviews`,
      link: "/dashboard/admin/reviews",
      description: "Overall satisfaction across all experiences.",
    },
    {
      title: "Verified Guides",
      value: stats.totalGuides,
      icon: UserCheck,
      color: "from-violet-500 to-purple-400",
      secondaryValue: `${stats.totalTourists} travellers registered`,
      link: "/dashboard/admin/guides",
      description: "Trusted local experts ready to host.",
    },
    {
      title: "Active Tours",
      value: stats.activeListings,
      icon: Package,
      color: "from-indigo-500 to-blue-400",
      secondaryValue: `${stats.totalListings} total in system`,
      link: "/dashboard/admin/listings?status=active",
      description: "Tours travellers can book today.",
    },
    {
      title: "Total Bookings",
      value: stats.totalBookings,
      icon: Calendar,
      color: "from-slate-500 to-gray-400",
      secondaryValue: `${stats.pendingBookings} pending confirmation`,
      link: "/dashboard/admin/bookings",
      description: "All-time reservations on the platform.",
    },
  ];

  /* -------------------------------------------------
   2.  Management quick-links (unchanged data)
  -------------------------------------------------- */
  const managementSections = [
    {
      title: "User Management",
      description: `Manage ${stats.totalUsers} user accounts`,
      icon: Users,
      link: "/dashboard/admin/users",
      linkText: "Manage Users",
      color: "bg-blue-50 border-blue-100",
    },
    {
      title: "Tour Management",
      description: `Manage ${stats.totalListings} tour listings`,
      icon: MapPin,
      link: "/dashboard/admin/listings",
      linkText: "Manage Tours",
      color: "bg-green-50 border-green-100",
    },
    {
      title: "Booking Management",
      description: `Manage ${stats.totalBookings} bookings`,
      icon: Calendar,
      link: "/dashboard/admin/bookings",
      linkText: "View Bookings",
      color: "bg-amber-50 border-amber-100",
    },
  ];

  /* -------------------------------------------------
   3.  Helpers for the staggered grid
  -------------------------------------------------- */
  const reorder = [0, 4, 2, 6, 1, 5, 3, 7]; // simple Z-pattern shuffle

  /* -------------------------------------------------
   4.  Render
  -------------------------------------------------- */
  return (
    <div className="p-6 space-y-8">
      {/* ------- header ------- */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Admin Dashboard
        </h1>
        <p className="text-sm text-gray-500">
          Real-time platform overview • Last updated: {lastUpdated}
        </p>
      </div>

      {/* ------- stat cards – masonry style ------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {reorder.map((idx) => {
          const card = statCards[idx];
          const Icon = card.icon;
          return (
            <Link
              key={card.title}
              href={card.link}
              className="group relative block p-6 rounded-2xl bg-white/60 backdrop-blur-lg border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* gradient shine on hover */}
              <span
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />
              <div className="relative flex items-start justify-between">
                <div>
                  <p className="text-sm font-semibold text-gray-500">
                    {card.title}
                  </p>
                  <p className="text-3xl font-bold mt-1 text-gray-900">
                    {card.value}
                  </p>
                  <p className="text-xs text-gray-400 mt-2">
                    {card.description}
                  </p>
                </div>
                <div
                  className={`shrink-0 w-14 h-14 grid place-items-center rounded-xl bg-gradient-to-br ${card.color} shadow-md group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100">
                <span className="text-sm font-medium text-gray-600">
                  {card.secondaryValue}
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      {/* quick management */}
      <div className="grid grid-cols-3 gap-6">
        {managementSections.map((s) => (
          <Link
            key={s.title}
            href={s.link}
            className="group h-full block p-6 rounded-2xl border-2 bg-[#213448] text-white hover:border-yellow-400 transition-all duration-300"
          >
            <div className="flex flex-col h-full justify-between">
              {/* Top content */}
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-blue-600/30">
                  <s.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold">{s.title}</h4>
                  <p className="text-sm mt-1 opacity-80">{s.description}</p>
                </div>
              </div>

              {/* Bottom link */}
              <div className="mt-6 flex items-center text-blue-300 group-hover:text-blue-200">
                <span className="text-sm font-medium">{s.linkText}</span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* ------- charts (unchanged logic) ------- */}
      {hasChartData && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* bookings bar chart */}
          <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow border border-gray-100">
            <div className="mb-4">
              <h3 className="text-lg font-bold text-gray-900">
                Monthly Bookings
              </h3>
              <p className="text-sm text-gray-500">
                {bookingChartData.length
                  ? `Showing ${bookingChartData.length} months of data`
                  : "No booking data available"}
              </p>
            </div>
            <div className="h-64">
              {bookingChartData.length ? (
                <BarChart
                  data={bookingChartData}
                  xKey="month"
                  bars={[{ key: "count", color: "#3b82f6", label: "Bookings" }]}
                />
              ) : (
                <div className="h-full grid place-items-center text-gray-400">
                  No booking data available yet
                </div>
              )}
            </div>
          </div>

          {/* categories pie chart */}
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
            {/* Header */}
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-bold text-gray-900">
                Tour Categories
              </h3>
              <p className="text-sm text-gray-500">
                {categoryChartData.length
                  ? `${categoryChartData.length} categories`
                  : "No category data"}
              </p>
            </div>

            {/* Chart */}
            <div className="h-64 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
              {categoryChartData.length ? (
                <PieChart
                  data={categoryChartData}
                  colors={[
                    "#3b82f6", // blue
                    "#10b981", // green
                    "#f59e0b", // amber
                    "#8b5cf6", // purple
                    "#ef4444", // red
                    "#ec4899", // pink
                  ]}
                />
              ) : (
                <div className="h-full grid place-items-center text-gray-400">
                  No category data available
                </div>
              )}
            </div>

            {/* Legend */}
            <div className="mt-6 space-y-3">
              {categoryChartData.slice(0, 3).map((item, i) => {
                const colors = [
                  "bg-blue-500",
                  "bg-green-500",
                  "bg-amber-500",
                  "bg-purple-500",
                  "bg-red-500",
                  "bg-pink-500",
                ];
                return (
                  <div
                    key={i}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center space-x-2">
                      <span
                        className={`inline-block w-3 h-3 rounded-full ${colors[i]}`}
                      ></span>
                      <span className="text-sm text-gray-700">{item.name}</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">
                      {item.value} tours
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ------- recent activity & quick links (unchanged logic) ------- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* recent bookings */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Recent Bookings
              </h3>
              <p className="text-sm text-gray-500">
                {stats.recentBookings?.length || 0} recent bookings
              </p>
            </div>
            <Link
              href="/dashboard/admin/bookings"
              className="text-sm text-blue-600 hover:text-blue-800 font-medium"
            >
              View all →
            </Link>
          </div>

          <div className="space-y-4">
            {stats.recentBookings?.length ? (
              stats.recentBookings.slice(0, 3).map((b) => (
                <div
                  key={b._id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-blue-50/70 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-blue-100 text-blue-600">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-medium text-gray-900 truncate">
                        {b.listing?.title || "Unknown Tour"}
                      </p>
                      <p className="text-sm text-gray-500 truncate">
                        {b.user?.name || "Unknown User"} • ${b.totalPrice || 0}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {b.status || "UNKNOWN"}
                    </span>
                    <p className="text-xs text-gray-500 mt-1">
                      {b.date
                        ? new Date(b.date).toLocaleDateString()
                        : "No date"}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-gray-400">
                No recent bookings found
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
