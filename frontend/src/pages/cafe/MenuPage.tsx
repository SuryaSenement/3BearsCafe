import React, { useEffect, useState } from "react";
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import MenuSection from '../../components/cafe/MenuSection';
import backgg from '../../assets/Ambience/0J3A1289-HDR.jpg';
import { getMenuItems } from "../../services/menu.service";
import type { MenuItem } from "../../types";

const MenuPage = () => {
  const [menu, setMenu] = useState<MenuItem[]>([]);

  useEffect(() => {
    getMenuItems().then((items) => {
      setMenu(items || []);
    }).catch((err) => {
      console.error("Failed to load menu items:", err);
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F1EB]">
      <Header />

      {/* Hero Section with Cafe Background */}
      <section className="relative pt-16 overflow-hidden min-h-screen">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${backgg})`
          }}
          aria-hidden
        >
          <div className="relative inset-0 bg-blur bg-black bg-opacity-30"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center text-white mb-16">
            <h1 className="text-3xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Enjoy your <span className="text-[#FF8C00]">coffee</span> before your activity
            </h1>
          </div>

          {/* Most Popular Section - Overlapping the hero */}
          <div className="mt-32">
            <div className="bg-[#F5F1EB] bg-opacity-90 backdrop-blur-sm rounded-3xl p-8 max-w-4xl mx-auto shadow-lg">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-[#D2691E] mb-4">Most Popular</h2>

                {/* Decorative line */}
                <div className="flex items-center justify-center mb-8">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-px bg-[#D2691E]"></div>
                    <div className="w-2 h-2 bg-[#D2691E] rotate-45"></div>
                    <div className="w-2 h-2 bg-[#D2691E] rotate-45"></div>
                    <div className="w-2 h-2 bg-[#D2691E] rotate-45"></div>
                    <div className="w-8 h-px bg-[#D2691E]"></div>
                  </div>
                </div>

                {/* Featured Coffee */}
                <div className="relative max-w-lg mx-auto">
                  <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src="https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Vanilla Latte"
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay text on image */}
                    <div className="absolute inset-0 bg-black bg-opacity-20 flex items-end">
                      <div className="w-full text-center pb-6">
                        <h3 className="text-3xl font-bold text-white tracking-wider drop-shadow-lg">VANILLA LATTE</h3>
                      </div>
                    </div>
                  </div>

                  {/* Navigation arrows (visual only) */}
                  <button className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white bg-opacity-80 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all" aria-hidden>
                    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white bg-opacity-80 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all" aria-hidden>
                    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section - Using the same component as home page */}
      <MenuSection />

      {/* Simple menu grid from API */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold mb-6">Full Menu</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menu.length === 0 ? (
            <div className="col-span-full text-center text-gray-500">No items available.</div>
          ) : (
            menu.map((item) => (
              <div key={item.id} className="border rounded-lg p-4 bg-white">
                {item.image_url && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={item.image_url} alt={item.name} className="h-40 w-full object-cover rounded-md mb-4" />
                )}
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                <div className="text-xl font-bold">₹{item.price}</div>
              </div>
            ))
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MenuPage;
