import { Search, MessageCircle, MapPin } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: "Find Your Guide",
      description:
        "Browse local experts by destination, interests, and language. Read reviews and check their expertise.",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: MessageCircle,
      title: "Book & Connect",
      description:
        "Request a tour date and communicate directly with your guide to customize your experience.",
      color: "from-green-400 to-green-600",
    },
    {
      icon: MapPin,
      title: "Explore Together",
      description:
        "Meet your guide and discover hidden gems, local stories, and authentic experiences.",
      color: "from-pink-400 to-pink-600",
    },
  ];

  return (
    <section className="py-24 dark:text-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            How It Works
          </h2>
          <p className="text-lg md:text-xl  max-w-2xl mx-auto">
            Just three simple steps to unlock your next authentic adventure
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-12 relative">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group transform transition duration-500 hover:scale-105"
            >
              {/* Card */}
              <div className=" dark:border-2 dark:border-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-shadow relative z-10">
                {/* Icon */}
                <div
                  className={`bg-gradient-to-r ${step.color} w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto shadow-md`}
                >
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                {/* Title */}
                <h3 className="text-2xl font-bold  mb-4 text-center">
                  {step.title}
                </h3>

                {/* Description */}
                <p className=" text-center leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector Line */}
              <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative background element */}
      <div className="absolute inset-x-0 bottom-0 h-32  to-transparent"></div>
    </section>
  );
}
