import {
  Utensils,
  Camera,
  Landmark,
  Music,
  ShoppingBag,
  Mountain,
} from "lucide-react";

export function Categories() {
  const categories = [
    { icon: Utensils, name: "Food & Drink", count: 342, color: "from-pink-400 to-red-500" },
    { icon: Camera, name: "Photography", count: 189, color: "from-purple-400 to-indigo-500" },
    { icon: Landmark, name: "History & Culture", count: 267, color: "from-yellow-400 to-orange-500" },
    { icon: Music, name: "Nightlife", count: 156, color: "from-blue-400 to-cyan-500" },
    { icon: ShoppingBag, name: "Shopping", count: 198, color: "from-green-400 to-emerald-500" },
    { icon: Mountain, name: "Adventure", count: 223, color: "from-teal-400 to-blue-500" },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Explore by Interest
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Find experiences that match your passion
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 text-center cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Icon with gradient ring */}
              <div
                className={`bg-gradient-to-r ${category.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}
              >
                <category.icon className="w-10 h-10 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {category.name}
              </h3>

              {/* Count */}
              <p className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors">
                {category.count} tours
              </p>

              {/* Decorative hover effect */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-blue-200 transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative background element */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-blue-50 to-transparent"></div>
    </section>
  );
}