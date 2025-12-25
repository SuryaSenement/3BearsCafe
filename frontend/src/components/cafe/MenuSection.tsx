import { Plus } from "lucide-react";

const menuItems = [
  {
    id: 1,
    name: "Sandwich",
    description: "bread with meat and vegetables",
    price: "12 K",
    image:
      "https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 2,
    name: "Hot Milk",
    description: "hot milk with less sugar",
    price: "12 K",
    image:
      "https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 3,
    name: "Coffee Ice Cream",
    description: "coffee with ice cream vanilla",
    price: "12 K",
    image:
      "https://images.pexels.com/photos/887853/pexels-photo-887853.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 4,
    name: "Cappuccino",
    description: "hot cappuccino",
    price: "12 K",
    image:
      "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 5,
    name: "Moccaccino",
    description: "hot moccaccino",
    price: "12 K",
    image:
      "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 6,
    name: "Waffle Ice Cream",
    description: "waffle with ice cream",
    price: "12 K",
    image:
      "https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 7,
    name: "Waffle Ice Cream",
    description: "waffle with ice cream",
    price: "12 K",
    image:
      "https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 8,
    name: "Waffle Ice Cream",
    description: "waffle with ice cream",
    price: "12 K",
    image:
      "https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
];

const MenuSection = () => {
  return (
    <section id="menu" className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-12">
          <h2 className="font-primary text-4xl lg:text-3xl font-extralight text-coffee-dark mb-4">
            What is on our{" "}
            <span className="underline decoration-3 decoration-amber-900 underline-offset-4">
              menu
            </span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10 shadow-stone-700">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-2xl border border-gray-100 shadow-2xl hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              style={{ borderRadius: "16px" }}
            >
              {/* Image wrapper - small padded inner area to make image look "smaller inside border" */}
              <div className="relative p-5 bg-white">
                {/* small rounded inner panel that holds the image */}
                <div className="relative h-60 w-full justify-center items-center bg-white rounded-xl overflow-hidden shadow-inner">
                  {/* image (keeps some whitespace inside card) */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full lg:h-60 sm:h-44 object-cover block transition-transform duration-700 rounded-lg transform group-hover:scale-105"
                  />

                  {/* rating pill (top-left) */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium flex items-center gap-2 shadow-sm border border-gray-100">
                    <span className="text-sm font-semibold text-[#5D4037]">4.8</span>
                    <svg className="w-3 h-3 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  </div>

                  {/* price badge (top-right) */}
                  <div className="absolute top-3 right-3 bg-white/95 px-3 py-1 rounded-lg shadow-sm border border-gray-100 text-sm font-semibold text-[#5D4037]">
                    {item.price}
                  </div>
                </div>
              </div>

              {/* Content section */}
              <div className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-[#5D4037] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-gray-500 font-medium text-sm leading-relaxed">{item.description}</p>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="font-medium text-sm text-green-700 decoration border-dotted text-gray-500">
                      <span>Available</span>
                    </div>

                    <button className="bg-[#5D4037] hover:bg-[#4A2C20] text-white px-5 py-2 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 font-medium">
                      <Plus className="h-4 w-4" />
                      <span>Add</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* subtle bottom accent */}
              <div className="h-1 bg-gradient-to-r from-[#5D4037] to-[#8B4513] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default MenuSection;
