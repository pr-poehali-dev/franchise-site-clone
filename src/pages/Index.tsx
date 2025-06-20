import Hero from "@/components/Hero";
import LaunchSteps from "@/components/LaunchSteps";
import WhyChooseUs from "@/components/WhyChooseUs";
import FranchiseFormats from "@/components/FranchiseFormats";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <LaunchSteps />
      <WhyChooseUs />
      <FranchiseFormats />
      <FAQ />
      <CTA />
    </div>
  );
};

export default Index;
