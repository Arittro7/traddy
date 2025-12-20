import { MapPin } from "lucide-react";

export function FeaturedCities() {
  const cities = [
    {
      name: "Paris",
      country: "France",
      guides: 132,
      image:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
      description: "Explore the Eiffel Tower and charming hidden cafés.",
    },
    {
      name: "New York",
      country: "USA",
      guides: 180,
      image:
        "https://images.unsplash.com/photo-1642873744568-a7c5f7d10aae?q=80&w=751&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Visit Times Square and Central Park.",
    },
    {
      name: "Istanbul",
      country: "Turkey",
      guides: 220,
      image:
        "https://media.cntraveller.com/photos/68ff3db8e7084c26e7744dee/1:1/w_2160,h_2160,c_limit/1480863367",
      description: "Marvel at Hagia Sophia and the Grand Bazaar.",
    },
    {
      name: "Sydney",
      country: "Australia",
      guides: 76,
      image:
        "https://images.unsplash.com/photo-1559507703-7b0e88e1bebf?q=80&w=683&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Experience Shibuya Crossing and authentic street food.",
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold  mb-4">
            Popular Destinations
          </h2>
          <p className="text-xl max-w-2xl mx-auto">
            Discover amazing experiences in cities around the world
          </p>
        </div>

        {/* City Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cities.map((city, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-[4/5] relative">
                {/* Image */}
                <img
                  src={city.image}
                  alt={`${city.name}, ${city.country}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                {/* City + Country */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white hover:text-yellow-500 transition-all duration-300">
                  <div className="">
                    <h3 className="text-xl font-bold group-hover:text-4xl transition-all duration-300">
                      {city.name}
                    </h3>
                    <p className="group-hover:text-3xl transition-all duration-300">
                      {city.country}
                    </p>
                  </div>
                  <div className="flex items-center text-sm mt-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{city.guides} local guides</span>
                  </div>
                </div>

                {/* Tooltip */}
                <div className="absolute top-6 left-6 right-6 bg-gradient-to-r from-white/90 to-gray-100/90 text-gray-900 rounded-xl px-4 py-3 shadow-lg opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 -translate-y-4 transition-all duration-500">
                  <p className="text-sm font-medium text-center">
                    {city.description}
                  </p>
                  <div className="absolute -top-2 left-8 w-4 h-4 bg-white rotate-45 shadow-md"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}