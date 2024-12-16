import { Navigation } from "@/components/ui/navigation";
import { PortfolioGrid } from "@/components/ui/portfolio-grid";
import { AboutSection } from "@/components/ui/about-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <HeroSection />
      
      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary">
            About Me
          </h2>
          <AboutSection />
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="work" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
            Featured Work
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto">
            Explore our collection of award-winning films, documentaries, and commercial projects
          </p>
        </div>
        <PortfolioGrid />
      </section>

      <ServicesSection />
      <ContactSection />
      <Footer />
    </main>
  );
}