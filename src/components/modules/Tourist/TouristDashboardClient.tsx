/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import {
  Calendar,
  MapPin,
  Globe,
  CheckCircle,
  Compass,
  Heart,
  PlusCircle,
  ThumbsUp,
  Search,
  History,
  Award,
  TrendingUp,
} from "lucide-react";

interface TouristDashboardClientProps {
  dashboardData: {
    upcomingBookings?: Array<any>;
    pastExperiences?: Array<any>;
  };
}

export default function TouristDashboardClient({
  dashboardData = {},
}: TouristDashboardClientProps) {
  // Safe data extraction
  const upcomingBookings = dashboardData?.upcomingBookings || [];
  const pastExperiences = dashboardData?.pastExperiences || [];

  const upcomingCount = upcomingBookings.length;
  const pastCount = pastExperiences.length;
  const visitedCities = new Set(
    pastExperiences.map((e) => e?.listing?.city).filter(Boolean)
  ).size;

  const quickActions = [
    { title: "Book New Tour", icon: PlusCircle, link: "/explore", gradient: "from-indigo-500 to-blue-600" },
    { title: "Food Experiences", icon: Heart, link: "/explore?category=food", gradient: "from-rose-500 to-pink-600" },
    { title: "Find Local Guides", icon: Search, link: "/guides", gradient: "from-purple-500 to-indigo-600" },
    { title: "Leave a Review", icon: ThumbsUp, link: "/my-reviews", gradient: "from-amber-500 to-orange-600" },
  ];

  return (
    <div className="min-h-screen bg-gray-50/80">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-teal-600 via-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20 lg:px-8">
          <div className="flex items-center gap-6">
            <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl">
              <Compass className="w-12 h-12" />
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                Welcome back, Explorer!
              </h1>
              <p className="text-xl opacity-90 max-w-2xl">
                Your travel journey continues — see what's next and discover new adventures.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto px-6 py-12 lg:px-8">
        {/* Quick Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-12">
          <Link
            href="/dashboard/tourist/my-trips"
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Upcoming Trips</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">{upcomingCount}</p>
              </div>
              <Calendar className="w-10 h-10 text-blue-600 opacity-80" />
            </div>
          </Link>

          <Link
            href="/dashboard/tourist/my-trips"
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Cities Explored</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">{visitedCities}</p>
              </div>
              <Globe className="w-10 h-10 text-emerald-600 opacity-80" />
            </div>
          </Link>

          <Link
            href="/dashboard/tourist/my-trips?status=completed"
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Past Experiences</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">{pastCount}</p>
              </div>
              <CheckCircle className="w-10 h-10 text-purple-600 opacity-80" />
            </div>
          </Link>

          <Link
            href="/explore"
            className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow text-white"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Ready for More?</p>
                <p className="text-2xl font-bold mt-1">Explore Now</p>
              </div>
              <Compass className="w-10 h-10 opacity-90" />
            </div>
          </Link>
        </div>

        {/* Main Layout - Reordered: Quick Actions first on the side, then content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Quick Actions & Tip */}
          <div className="lg:col-span-1 space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <h3 className="font-semibold text-lg text-gray-900 mb-5">Quick Actions</h3>
              <div className="space-y-3">
                {quickActions.map((action) => {
                  const Icon = action.icon;
                  return (
                    <Link
                      key={action.title}
                      href={action.link}
                      className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group"
                    >
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${action.gradient}`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="font-medium text-gray-800 group-hover:text-gray-900">
                        {action.title}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Travel Tip Card */}
            <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl border border-teal-200 p-6">
              <div className="flex gap-4">
                <div className="p-3 bg-teal-600 rounded-xl">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Travel Tip</h4>
                  <p className="text-sm text-gray-700">
                    Book at least 3 days in advance for the best availability and exclusive group discounts.
                  </p>
                </div>
              </div>
            </div>

            {/* Final CTA */}
            <Link href="/explore" className="block">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-6 text-center hover:from-blue-700 hover:to-indigo-700 transition-all">
                <TrendingUp className="w-10 h-10 mx-auto mb-3 opacity-90" />
                <p className="font-semibold text-lg">Browse All Tours</p>
                <p className="text-sm opacity-90 mt-1">Discover local hidden gems</p>
              </div>
            </Link>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-8">
            {/* Past Experiences First (shuffled order) */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="px-6 py-5 border-b border-gray-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <History className="w-8 h-8 text-gray-600" />
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">Your Travel History</h2>
                    <p className="text-sm text-gray-500">{pastCount} completed experiences</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                {pastExperiences.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {pastExperiences.slice(0, 4).map((exp) => (
                      <div
                        key={exp?._id || Math.random()}
                        className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                          <MapPin className="w-6 h-6 text-gray-600" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-gray-900 line-clamp-1">
                            {exp?.listing?.title || "Unknown Experience"}
                          </p>
                          <p className="text-sm text-gray-600 flex items-center mt-1">
                            <MapPin className="w-4 h-4 mr-1" />
                            {exp?.listing?.city || "Unknown City"}
                          </p>
                        </div>
                        <span className="text-sm text-gray-500">
                          {exp?.date
                            ? new Date(exp.date).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                              })
                            : "--"}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <History className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">No past experiences yet — time to start traveling!</p>
                  </div>
                )}
              </div>
            </div>

            {/* Upcoming Trips */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="px-6 py-5 border-b border-gray-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Calendar className="w-8 h-8 text-blue-600" />
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">Upcoming Adventures</h2>
                    <p className="text-sm text-gray-500">
                      {upcomingCount} {upcomingCount === 1 ? "trip" : "trips"} scheduled
                    </p>
                  </div>
                </div>
                {upcomingCount > 0 && (
                  <Link href="/my-bookings" className="text-blue-600 hover:text-blue-800 font-medium">
                    View all →
                  </Link>
                )}
              </div>

              <div className="p-6">
                {upcomingBookings.length > 0 ? (
                  <div className="space-y-4">
                    {upcomingBookings.slice(0, 3).map((booking) => (
                      <div
                        key={booking?._id || Math.random()}
                        className="flex items-center gap-5 p-5 rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50/30 transition-all"
                      >
                        <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-7 h-7 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900">
                            {booking?.listing?.title || "Unknown Tour"}
                          </h3>
                          <div className="mt-2 flex flex-wrap gap-4 text-sm text-gray-600">
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {booking?.listing?.city || "Unknown City"}
                            </span>
                            <span>{booking?.groupSize || 0} travelers</span>
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
                    <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Calendar className="w-12 h-12 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      No trips planned yet
                    </h3>
                    <p className="text-gray-600 mb-8 max-w-md mx-auto">
                      Your calendar is wide open — perfect time to book an unforgettable experience!
                    </p>
                    <Link
                      href="/explore"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-colors"
                    >
                      <Compass className="w-5 h-5" />
                      Start Exploring
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* Discover Section (moved to bottom) */}
            <div className="bg-gradient-to-r from-purple-600 to-indigo-700 rounded-2xl p-8 text-white">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-bold mb-4">Discover Hidden Gems Around the World</h2>
                <p className="text-lg opacity-90 mb-8">
                  Join authentic local tours — food walks, cultural immersions, photography journeys, and more.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {["Food Tours", "Cultural Walks", "Photography", "Adventure"].map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href="/explore"
                  className="inline-flex items-center gap-3 px-6 py-4 bg-white text-indigo-700 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <Compass className="w-6 h-6" />
                  Find Your Next Adventure
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}