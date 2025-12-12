const steps = [
  {
    number: "01",
    title: "Create Your Profile",
    description: "Sign up and complete your guide profile with photos and bio",
  },
  {
    number: "02",
    title: "Design Your Tours",
    description: "Create unique tour experiences that showcase your expertise",
  },
  {
    number: "03",
    title: "Get Verified",
    description: "Complete our verification process to build trust with travelers",
  },
  {
    number: "04",
    title: "Start Earning",
    description: "Accept bookings and share amazing experiences while earning",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="mb-20">
      <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="group relative rounded-2xl bg-white shadow-md border border-gray-100 p-6 transition-all duration-300 hover:bg-[#001F3D]  hover:shadow-xl hover:-translate-y-2"
          >
            {/* Step Number */}
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-lg font-bold mb-6 shadow-md transition-opacity duration-300 group-hover:opacity-0">
              {step.number}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-3 transition-all duration-300 group-hover:text-2xl group-hover:text-white">
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed transition-all duration-300 group-hover:text-lg group-hover:text-gray-300">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}