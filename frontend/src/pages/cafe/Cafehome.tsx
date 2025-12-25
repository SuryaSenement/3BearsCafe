import React from "react";
import Header from "../../components/common/Header";
import Hero from "../../components/common/Hero";
import PopularProducts from "../../components/cafe/PopularProducts";
import QualitySection from "../../components/cafe/QualitySection";
import AboutSection from "../../sections/AboutSection";
import MenuSection from "../../components/cafe/MenuSection";
import TestimonialsSection from "../../components/cafe/TestimonialsSection";
import Footer from "../../components/common/Footer";

const CafeHome: React.FC = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4">
            <PopularProducts />
            <QualitySection />
            <AboutSection />
            <MenuSection />
            <TestimonialsSection />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CafeHome;