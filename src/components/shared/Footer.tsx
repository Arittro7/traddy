import React from "react";
import { MapPin, Facebook, Twitter, Instagram, Mail, Globe, Heart, Compass } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-gray-950 text-gray-300 overflow-hidden">
      {/* Subtle vintage map background overlay */}
      <div
        className="absolute inset-0 opacity-15 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1488375634201-b85b28653a79?q=80&w=1729&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Inspirational Hero Section with Quote */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <div
              className="h-64 w-full max-w-4xl mx-auto rounded-3xl bg-cover bg-center shadow-2xl bg-no-repeat"
              style={{
                backgroundImage: `url('https://media.cntraveller.com/photos/611bece34e09f53b43732f58/16:9/w_3200,h_1800,c_limit/beautiful.jpg')`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/50 via-gray-950/40 to-transparent rounded-3xl" />
            </div>
            <div className="inset-0 flex flex-col items-center justify-center px-8">
              <blockquote className="text-3xl md:text-4xl font-bold text-white max-w-5xl leading-tight text-balance">
              {/* <blockquote className="text-3xl md:text-4xl font-bold text-white max-w-5xl leading-tight text-balance"> */}
                "The world is full of magic things, patiently waiting for our senses to grow sharper."
              </blockquote>
              <div className="mt-6 text-center">
                <footer className="text-lg text-white">— W.B. Yeats</footer>
                <p className="text-lg text-white mt-2">
                  Discover authentic experiences with Traddy
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-blue-600 rounded-xl">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <span className="text-3xl font-bold text-white">Traddy</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Connecting passionate travelers with local experts for unforgettable, authentic adventures around the globe.
            </p>
            <div className="flex space-x-5">
              <a href="#" aria-label="Facebook" className="hover:text-blue-500 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-blue-500 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-blue-500 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" aria-label="Email" className="hover:text-blue-500 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* For Travelers */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5 flex items-center gap-2">
              <Compass className="w-5 h-5 text-blue-500" />
              For Travelers
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-blue-400 transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Browse Experiences</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Popular Destinations</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Travel Inspiration</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Trust & Safety</a></li>
            </ul>
          </div>

          {/* For Guides */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5 flex items-center gap-2">
              <Heart className="w-5 h-5 text-blue-500" />
              For Guides
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Become a Local Guide</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Guide Dashboard</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Community Forum</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Resources & Tips</a></li>
            </ul>
          </div>

          {/* Company & Newsletter */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5 flex items-center gap-2">
              <Globe className="w-5 h-5 text-blue-500" />
              Company
            </h3>
            <ul className="space-y-3 mb-8">
              <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Press & Media</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Contact Us</a></li>
            </ul>

            {/* Newsletter Signup */}
            <div>
              <p className="text-white font-medium mb-3">Stay Inspired</p>
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Subscribe
                </button>
              </form>
              <p className="text-xs text-gray-500 mt-2">Get exclusive deals & travel tips weekly.</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-gray-500 mb-4 md:mb-0">
            © 2025 Traddy. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Cookie Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Sustainability</a>
          </div>
        </div>
      </div>
    </footer>
  );
}