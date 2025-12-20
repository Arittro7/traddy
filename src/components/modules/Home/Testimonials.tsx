import { Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "New York, USA",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80",
      rating: 5,
      text: "Marie curated an exceptional tour of Paris, guiding us to hidden cafés and local art galleries that we would never have discovered on our own. Her expertise and thoughtful approach made the experience truly memorable"
    },
    {
      name: "David Chen",
      location: "Toronto, Canada",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
      rating: 5,
      text: "Mansor Ali delivered an outstanding culinary journey through Tokyo. His deep knowledge of local cuisine and cultural context provided an authentic and enriching experience that went far beyond expectations.",
    },
    {
      name: "Emma Williams",
      location: "London, UK",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
      rating: 5,
      text: "Andru architectural tour of Barcelona was both insightful and engaging. His ability to bring Gaudí’s work to life through stories and historical context offered a perspective unavailable in traditional guidebooks.",
    },
  ];

  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Travelers Say
          </h2>
          <p className="text-xl max-w-2xl mx-auto">
            Real experiences from real travelers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative group bg-[#FACE68] backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-colors"
            >
              {/* Tooltip */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 rounded-2xl p-4 text-center">
                <p className="text-blue-50 text-sm leading-relaxed">
                  {testimonial.text}
                </p>
              </div>

              {/* Card content */}
              <div className="flex items-center text-black">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-semibold text-xl">{testimonial.name}</p>
                  <p className="text-sm">{testimonial.location}</p>
                  <div className="flex mt-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-green-600 fill-current"
                      />
                    ))}
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