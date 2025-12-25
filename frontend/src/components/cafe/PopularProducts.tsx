import { Star, Heart, Plus } from 'lucide-react';

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
    name: 'Hazelnut Latte',
    price: '230',
    image: 'https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.8,
    isIced: true
  }
];

const PopularProducts = () => {
  return (
    <section className="bg-[#F5F1EB] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-[#5D4037] mb-4">
            Popular <span className="underline decoration-[#FF8C00]">Now</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="group relative overflow-hidden bg-gradient-to-br from-white to-gray-50 hover:from-amber-50 hover:to-orange-50 transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1"
              style={{
                borderRadius: '30px 10px 30px 10px',
                boxShadow: '0 10px 30px rgba(139, 69, 19, 0.1)',
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Decorative corner elements */}
              <div className="absolute top-3 right-3 w-6 h-6 bg-gradient-to-br from-[#FF8C00] to-[#FFA500] rounded-full opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="absolute bottom-3 left-3 w-4 h-4 bg-gradient-to-br from-[#8B4513] to-[#A0522D] rounded-full opacity-20 group-hover:opacity-40 transition-opacity"></div>
              
              {/* Image with creative shape */}
              <div className="relative overflow-hidden" style={{ borderRadius: '30px 10px 0 0' }}>
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Floating price tag */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg">
                  <span className="text-lg font-bold text-[#5D4037]">₹{product.price}</span>
                </div>
                
                {/* Heart icon */}
                <button className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-full p-2 hover:bg-red-50 transition-all duration-300 group">
                  <Heart className="h-4 w-4 text-gray-600 group-hover:text-red-500 group-hover:fill-red-500 transition-all" />
                </button>
              </div>
              
              {/* Content area with creative layout */}
              <div className="p-6 relative">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle cx="80" cy="20" r="15" fill="currentColor" className="text-[#8B4513]"/>
                    <circle cx="20" cy="80" r="10" fill="currentColor" className="text-[#FF8C00]"/>
                  </svg>
                </div>
                
                <div className="relative z-10">
                  <h3 className="font-secondary text-[#5D4037] text-lg mb-3 group-hover:text-[#8B4513] transition-colors">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {product.isHot && (
                        <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs px-3 py-1 rounded-full font-medium shadow-md">
                          🔥 HOT
                        </span>
                      )}
                      {product.isIced && (
                        <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs px-3 py-1 rounded-full font-medium shadow-md">
                          ❄️ ICED
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                      <span className="text-sm text-gray-700 font-medium">{product.rating}</span>
                    </div>
                    
                    <button className="bg-gradient-to-r from-[#5D4037] to-[#8B4513] text-white rounded-full p-3 hover:from-[#4A2C20] hover:to-[#6B3410] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110">
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button className="bg-[#5D4037] text-white px-8 py-3 rounded-full hover:bg-[#4A2C20] transition-colors font-medium">
            Explore Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;