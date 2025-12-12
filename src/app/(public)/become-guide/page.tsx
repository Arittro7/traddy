import BenefitsSection from "@/components/modules/BecomeGuide/BenefitsSection";
import CTASection from "@/components/modules/BecomeGuide/CTASection";
import FAQSection from "@/components/modules/BecomeGuide/FAQSection";
import GuideStatsSection from "@/components/modules/BecomeGuide/GuideStatsSection";
import HowItWorksSection from "@/components/modules/BecomeGuide/HowItWorksSection";
import ReadyToStartSection from "@/components/modules/BecomeGuide/ReadyToStartSection";
import RequirementsSection from "@/components/modules/BecomeGuide/RequirementsSection";
import SuccessStoriesSection from "@/components/modules/BecomeGuide/SuccessStoriesSection";

export const metadata = {
  title: "Guide with Traddy | Inspire & Earn",
  description:
    "Turn your local knowledge into unforgettable experiences. Connect with travelers, share your city, and earn doing what you love.",
};

export default function BecomeAGuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-blue-100">
      {/* Hero Section */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-400 bg-clip-text text-transparent">
              Share Your World as a Local Guide
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600">
              Inspire travelers, showcase hidden gems, and earn by doing what
              excites you most.
            </p>
          </div>

          {/* Highlight Card */}
          <div className="mt-12 mx-auto max-w-4xl rounded-2xl bg-white shadow-xl ring-1 ring-blue-100 p-8">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Traddy empowers locals to transform their passions into authentic
              experiences. Whether it’s food walks, cultural tours, or
              photography adventures — your story can become someone’s
              unforgettable journey.
            </p>
          </div>

          {/* Stats Section */}
          <div className="mt-16">
            <GuideStatsSection />
          </div>
        </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <HowItWorksSection />

        <BenefitsSection />

        <RequirementsSection />

        <SuccessStoriesSection />

        <ReadyToStartSection />

        <FAQSection />

        <CTASection />
      </div>
    </section>
    </div>
  );
}
