import { Star } from "lucide-react";

const featuredGuides = [
  {
    name: "Alex Alanso",
    city: "Madrid",
    specialty: "History & Art",
    earnings: "$42,580",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    name: "Jude Balinghum",
    city: "England",
    specialty: "Traditional Arts",
    earnings: "$38,920",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1623366302587-b38b1ddaefd9?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    name: "Killian Mbappy",
    city: "Paris",
    specialty: "Art History",
    earnings: "$51,230",
    rating: 4.9,
    image:
      "https://plus.unsplash.com/premium_photo-1689708721750-8a0e6dc14cee?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
];

export default function SuccessStoriesSection() {
  return (
    <section className="mb-20">
      <h2 className="text-3xl font-bold text-center mb-12">
        Meet Our Successful Guides
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuredGuides.map((guide, index) => (
          <div
            key={index}
            className="group rounded-2xl p-6 shadow-lg bg-white text-gray-800 transition-all duration-300 hover:bg-[#001F3D] hover:text-white hover:scale-[1.02] flex flex-col items-center text-center"
          >
            {/* Avatar */}
            <img
              src={guide.image}
              alt={guide.name}
              className="w-24 h-24 rounded-full border-4 border-white shadow-md mb-4"
            />

            {/* Name & City */}
            <h3 className="text-xl font-bold group-hover:text-yellow-300 transition-colors duration-300">
              {guide.name}
            </h3>
            <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mb-2">
              {guide.city}
            </p>
            <div className="flex items-center gap-1 mb-4">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="font-semibold">{guide.rating}</span>
              </div>

            {/* Specialty */}
            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 group-hover:bg-yellow-300 group-hover:text-[#001F3D] transition-colors duration-300 mb-4">
              {guide.specialty}
            </span>

            {/* Description */}
            <p className="text-sm leading-relaxed mb-4 text-gray-600 group-hover:text-gray-200 transition-colors duration-300">
              A passionate guide sharing local culture and experiences with
              travelers worldwide.
            </p>

            {/* Footer */}
            <div className="flex gap-6 text-xl justify-between">
              <div className="font-bold text-green-600 group-hover:text-yellow-300 transition-colors duration-300">
                {guide.earnings}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}