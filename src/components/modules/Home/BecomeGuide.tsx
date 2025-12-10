import React from "react";
import { TrendingUp, DollarSign, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BecomeGuide() {
  const benefits = [
    {
      icon: DollarSign,
      title: "Earn Extra Income",
      description: "Set your own rates and schedule",
    },
    {
      icon: Calendar,
      title: "Flexible Schedule",
      description: "Work when it suits you",
    },
    {
      icon: TrendingUp,
      title: "Grow Your Business",
      description: "Build your reputation and client base",
    },
  ];

  return (
    <section
      id="become-guide"
      className="relative py-24 bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 text-white overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Become a Local Guide
            </h2>
            <p className="text-lg text-green-100 mb-10 max-w-xl">
              Share your passion, connect with travelers, and turn your local
              knowledge into rewarding experiences. Join a growing community of
              guides making an impact worldwide.
            </p>

            <div className="space-y-6 mb-10">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start transform transition hover:scale-105"
                >
                  <div className="bg-white/20 rounded-lg p-3 mr-4 shadow-md">
                    <benefit.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-green-100">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="bg-yellow-500 text-black font-semibold rounded-full shadow-lg hover:bg-black "
            >
              Apply Now
            </Button>
          </div>

          {/* Right image */}
          <div className="relative group">
            <img
              src="https://envoys.com/hs-fs/hubfs/happy-tourists-browsing-map.webp?width=1200&height=600&name=happy-tourists-browsing-map.webp"
              alt="Happy local guide with tourists"
              className="rounded-3xl shadow-2xl transform transition group-hover:scale-105"
            />
            <div className="absolute -bottom-6 -right-6 bg-white text-green-700 px-6 py-3 rounded-xl shadow-lg font-semibold">
              🌍 Share Your World
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}