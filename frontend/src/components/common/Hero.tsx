import { Star, ShoppingCart } from 'lucide-react';
import cupImage from '../../assets/Food/nameless-3791-5nYLHK68TLM-unsplash.jpg';
import { useEffect, useState } from 'react';
import heroBg from '../../assets/Designs/rectangle.png';
import icedtea from '../../assets/Food/0J3A6052.jpg';

const products = [
  {
    id: 1,
    name: 'Vanilla Latte',
    price: '210',
    image: 'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.8,
    isHot: true
  },
  {
    id: 2,
    name: 'Espresso',
    price: '198',
    image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.9,
    isHot: true
  },
  {
    id: 3,
    name: 'Hazelnut Latte',
    price: '230',
    image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.7,
    isIced: true
  },
  {
    id: 4,
    name: 'Iced Tea Latte',
    price: '230',
    image: icedtea,
    rating: 4.8,
    isIced: true
  }
];

const heroSlides = [
  {
    id: 1,
    name: "Cappuccino",
    rating: 5.0,
    reviews: "18K",
    image: cupImage,
  },
  {
    id: 2,
    name: "Vanilla Latte",
    rating: 4.8,
    reviews: "12K",
    image: "https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    name: "Hazelnut Latte",
    rating: 4.7,
    reviews: "9K",
    image: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=600",
  }
];

const Hero = () => {

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000); // changes every 6 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative bg-[#F6EBDA] pt-10 pl-10 h-[135vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">

          <div className="space-y-8">
            <h1 className="font-primary text-3xl lg:text-5xl sm:text-2xl font-bold text-[#502B14] leading-tight tracking-wide">
              ENJOY YOUR <span className="font-medium text-[#FF8C00]">Feast</span><br />
              BEFORE YOUR ACTIVITY
            </h1>

            <p className="font-secondary font-semibold text-base text-[#8B7355] leading-relaxed max-w-md">
              Boost your productivity and build your mood with a glass of coffee in the morning
            </p>

            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
              <a
                href="https://maps.app.goo.gl/5ekM3dknWZQrAWwg7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-[#5D4037] font-semibold text-white px-6 lg:px-8 py-3 rounded-full hover:bg-[#4A2C20] transition-colors flex items-center justify-center gap-2 text-sm lg:text-base">
                  Visit Now
                  <i className="fas fa-location-dot"></i>
                </button>
              </a>

              <button className="font-semibold text-[#5D4037] px-6 lg:px-8 py-3 rounded-full bg-white hover:bg-[#5D4037] hover:text-white transition-colors text-sm lg:text-base">
                Explore Menu
              </button>
            </div>
          </div>

          <div className="relative flex justify-center sm-4px-0 lg:px-10 mt-10 lg:mt-0">
            {/* Large circular coffee container */}
            <div className="relative w-[400px] h-[400px]">
              {/* Main brown circle background */}
              {/* <div className="absolute inset-0 rounded-full"></div> */}

              <img
                src={heroSlides[currentSlide].image}
                alt={heroSlides[currentSlide].name}
                className="w-full h-full border-2 border-amber-500 object-cover transform hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute top-80 -left-10 bg-white rounded-full px-4 py-2 shadow-lg z-10">
                <span className="font-primary text-sm font-medium text-[#5D4037]">
                  {heroSlides[currentSlide].name}
                </span>
              </div>

              <div className="absolute top-3 right-3 bg-white rounded-full px-3 py-2 flex items-center gap-1 shadow-lg z-10">
                <Star className="h-4 w-4 fill-[#FFD700] text-[#FFD700]" />
                <span className="text-sm font-bold text-[#5D4037]">
                  {heroSlides[currentSlide].rating}
                </span>
              </div>

              <div className="absolute bottom-4 right-4 bg-white rounded-full px-2 py-2 shadow-lg z-10">
                <span className="text-sm font-bold text-[#5D4037]">
                  {heroSlides[currentSlide].reviews}
                </span>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Popular Now Overlay Box */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 translate-y-1/2 z-20 w-full"
        aria-hidden={false}
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
          {/* background rectangle - use inline style so Vite resolves import */}
          <div
            className="relative bg-center bg-no-repeat bg-contain"
            style={{
              backgroundImage: `url(${heroBg})`,
              backgroundSize: '100% auto', // span full container width, keep aspect
              backgroundPosition: 'center bottom 42%',
            }}
          >
            {/* inner padding positions the cards visually on top of the rectangle */}
            <div className="px-4 py-10 sm:px-8 sm:py-12">
              <div className="flex items-center justify-between mb-6 px-2 sm:px-4">
                <h2 className="font-primary text-2xl sm:text-3xl lg:text-2xl font-bold text-[#5D4037]">
                  Popular <span className="underline decoration-[#502B14] decoration-2 underline-offset-4">Now</span>
                </h2>
                <div className="hidden sm:flex" />
              </div>

              {/* product grid - responsive */}
              <div className="mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {products.map((p) => (
                    <article
                      key={p.id}
                      className=" double-border group relative bg-white rounded-xl p-3 shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-2"
                    >
                      {/* rating badge */}
                      <div className="absolute left-4 top-4 z-20">
                        <div className="bg-white px-1 py-1 rounded-full shadow flex items-center gap-1 text-xs font-semibold text-[#5D4037] border-2 border-brown">
                          <span>{p.rating}</span>
                          <Star className="h-4 w-4 text-[#ad9a2f]" />
                        </div>
                      </div>

                      {/* image */}
                      <div className="overflow-hidden rounded-md border-1" style={{ borderRadius: 10 }}>
                        <img
                          src={p.image}
                          alt={p.name}
                          className="w-full h-44 sm:h-40 object-cover block transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>

                      {/* content */}
                      <div className="mt-4 px-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-secondary text-lg text-[#5D4037] font-semibold">{p.name}</h3>
                          <div className="font-bold text-[#5D4037]">₹ {p.price}</div>
                        </div>

                        <div className="mt-3 flex items-center gap-3">
                          <button className="border-2 border-brown inline-flex items-center rounded-2xl bg-white text-brown text-xs font-semibold px-3 py-1 shadow">Hot</button>
                          <button className="border-2 border-blue-400 inline-flex items-center rounded-2xl bg-white text-brown text-xs font-semibold px-3 py-1 shadow">Iced</button>
                          <div className="flex-1" />
                          <button
                            className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#5D4037] text-white shadow hover:scale-105 transition"
                            aria-label={`Add ${p.name} to cart`}
                          >
                            <ShoppingCart className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                {/* CTA aligned right on desktop, centered on mobile */}
                <div className="mt-10 pt-10 flex justify-center lg:justify-end">
                  <button className="font-medium inline-flex items-center gap-2 bg-[#5D4037] text-white px-6 py-2 rounded-full shadow-sm hover:bg-[#4A2C20] transition">
                    Explore Menu
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;