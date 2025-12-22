/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import {
  Calendar,
  MapPin,
  Star,
  DollarSign,
  Users,
  Package,
  MessageCircle,
  CheckCircle,
  Award,
  Edit,
  Eye,
  Compass,
} from "lucide-react";

interface GuideDashboardClientProps {
  dashboardData: {
    activeListings?: Array<any>;
    upcomingBookings?: Array<any>;
    recentReviews?: Array<any>;
    stats?: {
      totalListings: number;
      activeListings: number;
      totalBookings: number;
      pendingBookings: number;
      completedBookings: number;
      totalEarnings: number;
      averageRating: number;
      totalReviews: number;
    };
  };
}

export default function GuideDashboardClient({
  dashboardData = {},
}: GuideDashboardClientProps) {
  /* ---------- data extraction (unchanged) ---------- */
  const stats = dashboardData?.stats || {
    totalListings: 0,
    activeListings: 0,
    totalBookings: 0,
    pendingBookings: 0,
    completedBookings: 0,
    totalEarnings: 0,
    averageRating: 0,
    totalReviews: 0,
  };

  const upcomingBookings = dashboardData?.upcomingBookings || [];
  const recentReviews = dashboardData?.recentReviews || [];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700 text-white">
        <div className="mx-auto px-6 py-16 lg:px-8">
          <div className="flex items-center gap-6">
            <div className="p-4 bg-white/20 backdrop-blur-md rounded-2xl">
              <Compass className="w-12 h-12" />
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                Welcome back, Guide!
              </h1>
              <p className="text-xl opacity-90 max-w-2xl">
                Manage your tours, track earnings, and grow your guiding journey.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" mx-auto px-6 py-12 lg:px-8">
        {/* Key Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <Link href="/dashboard/guide" className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Earnings</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  ${stats.totalEarnings.toLocaleString()}
                </p>
              </div>
              <DollarSign className="w-10 h-10 text-amber-600 opacity-80" />
            </div>
          </Link>

          <Link href="/dashboard/guide/my-listings" className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Tours</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stats.activeListings}</p>
              </div>
              <MapPin className="w-10 h-10 text-emerald-600 opacity-80" />
            </div>
          </Link>

          <Link href="/dashboard/guide/upcoming-bookings" className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Upcoming Bookings</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stats.pendingBookings}</p>
              </div>
              <Calendar className="w-10 h-10 text-indigo-600 opacity-80" />
            </div>
          </Link>

          <Link href="/dashboard/guide" className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Average Rating</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {stats.averageRating.toFixed(1)} ★
                </p>
                <p className="text-xs text-gray-500 mt-1">{stats.totalReviews} reviews</p>
              </div>
              <Star className="w-10 h-10 text-purple-600 opacity-80" />
            </div>
          </Link>
        </div>

        {/* Main Layout – Reordered: Recent Reviews first, then Upcoming Bookings */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <h3 className="font-semibold text-lg text-gray-900 mb-5">Your Stats</h3>
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-gray-100">
                      <Package className="w-6 h-6 text-gray-700" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Total Tours</p>
                      <p className="text-sm text-gray-500">{stats.totalListings} created</p>
                    </div>
                  </div>
                  <Link href="/dashboard/guide/my-listings" className="text-emerald-600 hover:text-emerald-800">
                    <Eye className="w-5 h-5" />
                  </Link>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-blue-100">
                      <CheckCircle className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Completed</p>
                      <p className="text-sm text-gray-500">{stats.completedBookings} tours</p>
                    </div>
                  </div>
                  <Link href="/dashboard/guide/upcoming-bookings?status=completed" className="text-blue-600 hover:text-blue-800">
                    <Eye className="w-5 h-5" />
                  </Link>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-amber-100">
                      <MessageCircle className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Response Rate</p>
                      <p className="text-sm text-gray-500">Reply fast to inquiries</p>
                    </div>
                  </div>
                  <span className="font-semibold text-amber-600">100%</span>
                </div>
              </div>
            </div>

            {/* Guide Level */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border border-emerald-200 p-6">
              <div className="flex items-center gap-4 mb-5">
                <div className="p-3 rounded-xl bg-emerald-600">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Guide Level</h4>
                  <p className="text-sm text-gray-600">Rising Star</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-700 mb-2">
                  <span>Progress to next level</span>
                  <span className="font-medium">65%</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-emerald-500 to-teal-600 h-3 rounded-full"
                    style={{ width: "65%" }}
                  />
                </div>
              </div>
              <p className="text-sm text-gray-700">
                Complete 4 more tours to unlock <span className="font-medium">Experienced Guide</span> perks.
              </p>
            </div>

            {/* Help CTA */}
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl border border-cyan-200 p-6 text-center">
              <div className="inline-flex p-4 rounded-full bg-cyan-100 mb-4">
                <MessageCircle className="w-8 h-8 text-cyan-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Need Help?</h4>
              <p className="text-sm text-gray-600">
                Our team is ready to support your success.
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Recent Reviews First (shuffled order) */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="px-6 py-5 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <Star className="w-8 h-8 text-purple-600" />
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">Recent Reviews</h2>
                    <p className="text-sm text-gray-500">
                      {recentReviews.length} {recentReviews.length === 1 ? "review" : "reviews"} received
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                {recentReviews.length > 0 ? (
                  <div className="space-y-6">
                    {recentReviews.slice(0, 2).map((review) => (
                      <div key={review?._id || Math.random()} className="flex gap-5">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg">
                          {review?.user?.name?.charAt(0)?.toUpperCase() || "U"}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium text-gray-900">
                              {review?.user?.name || "Anonymous"}
                            </h4>
                            <span className="text-sm text-gray-500">
                              {review?.createdAt
                                ? new Date(review.createdAt).toLocaleDateString()
                                : "No date"}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 mb-3">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-5 h-5 ${
                                  i < (review?.rating || 0)
                                    ? "text-amber-500 fill-amber-500"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <p className="text-gray-700 italic">
                            "{review?.comment || "No comment provided"}"
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16">
                    <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Star className="w-12 h-12 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      No reviews yet
                    </h3>
                    <p className="text-gray-600 max-w-md mx-auto">
                      Reviews will appear here after you complete your first tours.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Upcoming Bookings */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="px-6 py-5 border-b border-gray-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Calendar className="w-8 h-8 text-indigo-600" />
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">Upcoming Bookings</h2>
                    <p className="text-sm text-gray-500">
                      {upcomingBookings.length} pending {upcomingBookings.length === 1 ? "booking" : "bookings"}
                    </p>
                  </div>
                </div>
                {upcomingBookings.length > 0 && (
                  <Link
                    href="/dashboard/guide/upcoming-bookings"
                    className="text-indigo-600 hover:text-indigo-800 font-medium"
                  >
                    Manage all →
                  </Link>
                )}
              </div>

              <div className="p-6">
                {upcomingBookings.length > 0 ? (
                  <div className="space-y-4">
                    {upcomingBookings.slice(0, 3).map((booking) => (
                      <div
                        key={booking?._id || Math.random()}
                        className="flex items-center gap-5 p-5 rounded-xl border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/30 transition-all"
                      >
                        <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center">
                          <Users className="w-7 h-7 text-indigo-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900">
                            {booking?.listing?.title || "Unknown Tour"}
                          </h3>
                          <div className="mt-2 flex flex-wrap gap-4 text-sm text-gray-600">
                            <span className="flex items-center gap-1">
                              <Users className="w-4 h-4" />
                              {booking?.user?.name || "Unknown"}
                            </span>
                            <span>{booking?.groupSize || 0} people</span>
                            <span className="font-medium text-gray-900">
                              ${booking?.totalPrice || 0}
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <span
                            className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                              booking?.status === "CONFIRMED"
                                ? "bg-green-100 text-green-800"
                                : "bg-amber-100 text-amber-800"
                            }`}
                          >
                            {booking?.status || "PENDING"}
                          </span>
                          <p className="mt-2 text-sm text-gray-500">
                            {booking?.date
                              ? new Date(booking.date).toLocaleDateString()
                              : "No date"}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16">
                    <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Calendar className="w-12 h-12 text-indigo-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      No upcoming bookings
                    </h3>
                    <p className="text-gray-600 mb-8 max-w-md mx-auto">
                      Promote your tours to attract travelers and fill your schedule.
                    </p>
                    <Link
                      href="/dashboard/guide/my-listings"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-medium rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-colors"
                    >
                      <Edit className="w-5 h-5" />
                      Edit Tours
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}