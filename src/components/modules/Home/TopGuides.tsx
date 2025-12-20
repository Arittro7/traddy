/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useEffect } from "react";
import { Star, MapPin, Languages, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function TopGuides() {
  type Guide = {
    _id: string;
    name: string;
    city: string;
    rating: number;
    reviews: number;
    languages: string[];
    specialty: string;
    profilePicture: string;
    dailyRate: number;
  };

  const [guides, setGuides] = useState<Guide[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // The specific guide names we want to display
  const targetGuides = ["Marie Laurent", "Mansor Ali", "Andru Rodriguez"];

  // Static fallback data in case API fails
  const fallbackGuides = [
    {
      _id: "1",
      name: "Marie Laurent",
      city: "Paris",
      rating: 4.9,
      reviews: 127,
      languages: ["English", "French"],
      specialty: "Art & History",
      profilePicture:
        "https://images.unsplash.com/photo-1589570140724-cea446042562?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      dailyRate: 360,
    },
    {
      _id: "2",
      name: "Mansor Ali",
      city: "Tokyo",
      rating: 5.0,
      reviews: 89,
      languages: ["English", "Japanese"],
      specialty: "Food & Culture",
      profilePicture:
        "https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      dailyRate: 400,
    },
    {
      _id: "3",
      name: "Andru Rodriguez",
      city: "Barcelona",
      rating: 4.8,
      reviews: 156,
      languages: ["English", "Spanish", "Catalan"],
      specialty: "Architecture",
      profilePicture:
        "https://plus.unsplash.com/premium_photo-1661602011150-6c6f8b9ba788?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      dailyRate: 320,
    },
  ];

  useEffect(() => {
    const fetchTopGuides = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch all users from API
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/user/all`,
          {
            credentials: "include",
          }
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch guides: ${response.status}`);
        }

        const result = await response.json();

        if (result.success && result.data) {
          // Filter for only the 3 specific guides by name
          const filteredGuides = result.data.filter((user: any) =>
            targetGuides.includes(user.name)
          );

          // Transform the data to match our component format
          const transformedGuides = targetGuides.map((targetName) => {
            const apiGuide = filteredGuides.find(
              (g: any) => g.name === targetName
            );

            if (apiGuide) {
              // Use API data
              return {
                _id: apiGuide._id,
                name: apiGuide.name,
                city: getCityFromName(apiGuide.name),
                rating: getRatingFromName(apiGuide.name),
                reviews: getReviewsFromName(apiGuide.name),
                languages: apiGuide.languages || ["English"],
                specialty: getSpecialtyFromName(apiGuide.name),
                profilePicture:
                  apiGuide.profilePicture || getDefaultImage(apiGuide.name),
                dailyRate: apiGuide.dailyRate || 350,
              };
            }

            // Fallback if API doesn't have this guide
            return (
              fallbackGuides.find((g) => g.name === targetName) || {
                _id: targetName,
                name: targetName,
                city: "Unknown",
                rating: 4.5,
                reviews: 100,
                languages: ["English"],
                specialty: "Local Guide",
                profilePicture:
                  "https://thumbs.dreamstime.com/b/tourist-guide-logo-professional-sign-isolated-white-background-42405913.jpg",
                dailyRate: 350,
              }
            );
          });

          setGuides(transformedGuides);
        } else {
          // If API structure is different, use fallback
          console.log("API response structure unexpected, using fallback data");
          setGuides(fallbackGuides);
        }
      } catch (err: any) {
        console.error("Error fetching guides:", err);
        setError(err.message);
        // Use fallback data if API fails
        setGuides(fallbackGuides);
      } finally {
        setLoading(false);
      }
    };

    fetchTopGuides();
  }, []);

  // Helper functions to get data based on guide name
  const getCityFromName = (name: string) => {
    if (name.includes("Marie")) return "Paris";
    if (name.includes("Mansor")) return "Tokyo";
    if (name.includes("Andru")) return "Barcelona";
    return "Unknown";
  };

  const getRatingFromName = (name: string) => {
    if (name.includes("Marie")) return 4.9;
    if (name.includes("Mansor")) return 5.0;
    if (name.includes("Andru")) return 4.8;
    return 4.5;
  };

  const getReviewsFromName = (name: string) => {
    if (name.includes("Marie")) return 127;
    if (name.includes("Mansor")) return 89;
    if (name.includes("Andru")) return 156;
    return 100;
  };

  const getSpecialtyFromName = (name: string) => {
    if (name.includes("Marie")) return "Art & History";
    if (name.includes("Mansor")) return "Food & Culture";
    if (name.includes("Andru")) return "Architecture";
    return "Local Guide";
  };

  const getDefaultImage = (name: string) => {
    if (name.includes("Marie"))
      return "https://images.unsplash.com/photo-1589570140724-cea446042562?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    if (name.includes("Mansor"))
      return "https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    if (name.includes("Andru"))
      return "https://plus.unsplash.com/premium_photo-1661602011150-6c6f8b9ba788?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return "https://thumbs.dreamstime.com/b/tourist-guide-logo-professional-sign-isolated-white-background-42405913.jpg";
  };

  // Calculate hourly rate from daily rate
  const getHourlyRate = (dailyRate: number) => {
    return `$${Math.round(dailyRate / 8)}/hour`;
  };

  // Loading state
  if (loading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Top-Rated Local Guides
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Loading guides...
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="aspect-[4/3] bg-gray-200"></div>
                  <div className="p-6 space-y-3">
                    <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                    <div className="h-8 bg-gray-200 rounded w-1/3"></div>
                    <div className="pt-4 border-t flex justify-between">
                      <div className="h-6 bg-gray-200 rounded w-1/4"></div>
                      <div className="h-8 bg-gray-200 rounded w-1/3"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Top-Rated Local Guides
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet our most experienced and beloved guides
          </p>

          {error && (
            <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-yellow-50 border border-yellow-200 text-yellow-700 rounded-lg">
              <span className="text-sm">Showing demo data</span>
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {guides.map((guide: any, index) => (
            <div
              key={guide._id || index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={guide.profilePicture}
                  alt={guide.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center space-x-1 shadow-md">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="font-semibold text-sm">{guide.rating}</span>
                  <span className="text-gray-500 text-sm">
                    ({guide.reviews})
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {guide.name}
                </h3>

                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{guide.city}</span>
                </div>

                <div className="flex items-center text-gray-600 mb-3">
                  <Languages className="w-4 h-4 mr-1" />
                  <span className="text-sm">
                    {Array.isArray(guide.languages)
                      ? guide.languages.join(", ")
                      : "English"}
                  </span>
                </div>

                <div className="mb-4">
                  <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    {guide.specialty}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <span className="text-lg font-bold text-gray-900">
                    {getHourlyRate(guide.dailyRate)}
                  </span>
                  <Link href={`/profile/${guide._id}`}>
                    <Button variant="primary" size="sm">
                      View Profile
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



// import React from "react";
// import { Star, MapPin, Languages } from "lucide-react";
// import { Button } from "@/components/ui/button";
// export function TopGuides() {
//   const guides = [
//     {
//       name: "Marie Laurent",
//       city: "Paris",
//       rating: 4.9,
//       reviews: 127,
//       languages: ["English", "French"],
//       specialty: "Art & History",
//       image:
//         "https://images.unsplash.com/photo-1589570140724-cea446042562?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       rate: "$45/hour",
//     },
//     {
//       name: "Mr. Oreo",
//       city: "Turkey",
//       rating: 5.0,
//       reviews: 89,
//       languages: ["English", "Spanish", "French", "Arabic"],
//       specialty: "Art, History, Photography",
//       image:
//         "https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       rate: "$150/hour",
//     },
//     {
//       name: "Andru Rodriguez",
//       city: "Barcelona",
//       rating: 4.8,
//       reviews: 156,
//       languages: ["English", "Spanish", "Catalan"],
//       specialty: "Architecture",
//       image:
//         "https://plus.unsplash.com/premium_photo-1661602011150-6c6f8b9ba788?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       rate: "$40/hour",
//     },
//   ];
//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             Top-Rated Local Guides
//           </h2>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             Meet our most experienced and beloved guides
//           </p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8">
//           {guides.map((guide, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
//             >
//               <div className="aspect-[4/3] relative">
//                 <img
//                   src={guide.image}
//                   alt={guide.name}
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center space-x-1 shadow-md">
//                   <Star className="w-4 h-4 text-yellow-400 fill-current" />
//                   <span className="font-semibold text-sm">{guide.rating}</span>
//                   <span className="text-gray-500 text-sm">
//                     ({guide.reviews})
//                   </span>
//                 </div>
//               </div>

//               <div className="p-6">
//                 <h3 className="text-xl font-bold text-gray-900 mb-2">
//                   {guide.name}
//                 </h3>

//                 <div className="flex items-center text-gray-600 mb-2">
//                   <MapPin className="w-4 h-4 mr-1" />
//                   <span className="text-sm">{guide.city}</span>
//                 </div>

//                 <div className="flex items-center text-gray-600 mb-3">
//                   <Languages className="w-4 h-4 mr-1" />
//                   <span className="text-sm">{guide.languages.join(", ")}</span>
//                 </div>

//                 <div className="mb-4">
//                   <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
//                     {guide.specialty}
//                   </span>
//                 </div>

//                 <div className="flex items-center justify-between pt-4 border-t">
//                   <span className="text-lg font-bold text-gray-900">
//                     {guide.rate}
//                   </span>
//                   <Button variant="primary" size="sm">
//                     View Profile
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
