import { useMemo } from "react";
import aboutuspic from "../assets/Food/aboutus.jpg";
import coffeeVec from "../assets/Designs/cofeevectors.png";

const ROWS = 3; // adjust to spread vertically
const COLS = 6; // adjust to spread horizontally
const ICONS_PER_CELL = 1; // keep 1 to keep it uniform

const AboutSection = () => {
  const icons = useMemo(() => {
    const arr = [];
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        for (let k = 0; k < ICONS_PER_CELL; k++) {
          // base cell position (0..100%)
          const cellTop = (r / ROWS) * 100;
          const cellLeft = (c / COLS) * 100;

          // random jitter inside the cell (10% of cell size) so icons don't look perfectly grid-aligned
          const jitterY = (Math.random() * 0.8 - 0.4) * (100 / ROWS); // ±40% of cell height
          const jitterX = (Math.random() * 0.8 - 0.4) * (100 / COLS); // ±40% of cell width

          // small tilt only: -15deg .. +15deg
          const rotate = -15 + Math.random() * 30;

          // small size and opacity variation for depth
          const size = 40 + Math.random() * 18; // px
          const opacity = 0.2 + Math.random() * 0.18;

          arr.push({
            top: Math.min(98, Math.max(1, cellTop + (100 / ROWS) * 0.5 + jitterY)), // center of cell + jitter
            left: Math.min(98, Math.max(1, cellLeft + (100 / COLS) * 0.5 + jitterX)),
            rotate,
            size,
            opacity,
          });
        }
      }
    }
    return arr;
  }, []);

  return (
    <section className="relative py-20 mt-50 bg-cream-100 overflow-hidden">
      {/* Beige rectangle background */}
      <div className="absolute inset-0 bg-[#F2E6D6]"></div>

      {/* Scattered coffee icons (uniform grid distribution with small tilt) */}
      {icons.map((icon, i) => (
        <img
          key={i}
          src={coffeeVec}
          alt=""
          className="absolute pointer-events-none select-none"
          style={{
            top: `${icon.top}%`,
            left: `${icon.left}%`,
            width: `${icon.size}px`,
            transform: `translate(-50%, -50%) rotate(${icon.rotate}deg)`,
            opacity: icon.opacity,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="flex justify-center lg:justify-center items-center">
            <img
              src={aboutuspic}
              alt="Latte art"
              className="border-4 border-white w-70 sm:w-96 h-100 sm:h-96 lg:h-100:w-80 object-cover rounded-2xl shadow-xl z-10"
            />
          </div>

          {/* Right Text */}
          <div className="space-y-6 z-10">
            <div className="inline-block border-b-2 border-coffee-dark pb-2 mb-2">
              <h2 className="font-primary text-3xl font-light text-coffee-dark">
                About us
              </h2>
            </div>

            <h3 className="pt-10 text-secondary text-2xl font-bold text-coffee-dark">
              We provide quality coffee, <br />and ready to deliver.
            </h3>

            <p className="text-gray-600 font-medium leading-relaxed">
             We are a company that makes and distributes <br /> delicious drinks. our main product is made with a  <br />secret recipe and available in stores worldwide.
            </p>

            <button
  className="font-primary bg-[#59331c] text-[#FFF8F4] border-2 border-black px-8 py-3 rounded-full hover:bg-brown/90 transition-colors focus:outline-none focus:ring-2 focus:ring-brown/20"
>
  Get your coffee
</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
