import { DollarSign, Globe, Award, Shield, Heart, Users } from "lucide-react";

const benefits = [
  {
    icon: <DollarSign className="w-8 h-8 transition-all duration-300 group-hover:w-10 group-hover:h-10 group-hover:-translate-x-2 group-hover:translate-y-2" />,
    title: "Earn Extra Income",
    description: "Turn your local knowledge into a flexible source of income",
  },
  {
    icon: <Globe className="w-8 h-8 transition-all duration-300 group-hover:w-10 group-hover:h-10 group-hover:-translate-x-2 group-hover:translate-y-2" />,
    title: "Meet People Worldwide",
    description: "Connect with travelers from different cultures and backgrounds",
  },
  {
    icon: <Award className="w-8 h-8 transition-all duration-300 group-hover:w-10 group-hover:h-10 group-hover:-translate-x-2 group-hover:translate-y-2" />,
    title: "Build Your Brand",
    description: "Establish yourself as an expert guide in your city",
  },
  {
    icon: <Heart className="w-8 h-8 transition-all duration-300 group-hover:w-10 group-hover:h-10 group-hover:-translate-x-2 group-hover:translate-y-2" />,
    title: "Share Your Passion",
    description: "Showcase what you love about your city or region",
  },
  {
    icon: <Shield className="w-8 h-8 transition-all duration-300 group-hover:w-10 group-hover:h-10 group-hover:-translate-x-2 group-hover:translate-y-2" />,
    title: "Secure Payments",
    description: "Get paid reliably through our secure payment system",
  },
  {
    icon: <Users className="w-8 h-8 transition-all duration-300 group-hover:w-10 group-hover:h-10 group-hover:-translate-x-2 group-hover:translate-y-2" />,
    title: "Flexible Schedule",
    description: "Work when you want and set your own availability",
  },
];

export default function BenefitsSection() {
  return (
    <section className="mb-20">
      <h2 className="text-3xl font-bold text-center mb-12">Why Become a Guide</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="group relative bg-white p-8 rounded-xl shadow-lg transition-all duration-300 hover:bg-[#628141] hover:text-white hover:shadow-xl hover:-translate-y-2"
          >
            {/* Icon */}
            <div className="text-blue-600 mb-4 transition-all duration-300 group-hover:text-yellow-300">
              {benefit.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-3 transition-all duration-300 group-hover:text-2xl group-hover:-translate-y-2">
              {benefit.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 transition-all duration-300 group-hover:text-lg group-hover:text-gray-100">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}