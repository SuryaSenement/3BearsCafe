const testimonials = [
  {
    id: 1,
    name: 'Naura',
    feedback: 'I really love the cappuccino, the coffee was very smooth',
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: 2,
    name: 'John',
    feedback: 'this coffee shop is very cozy, very comfortable',
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: 3,
    name: 'Azura',
    feedback: 'the coffee menu here is very complete, very nice',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
  }
];

const TestimonialsSection = () => {
  return (
    <section className="bg-[##FFFFFF] py-16 relative overflow-hidden">
      {/* Background coffee cup pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 gap-8 h-full">
          {Array.from({ length: 48 }).map((_, i) => (
            <div key={i} className="flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-[#8B4513]">
                <path d="M2 21h20v-2H2v2zM20 8h-3V4h-2v4H9V4H7v4H4c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2zm0 8H4v-6h16v6zM7 10h10v4H7v-4z"/>
              </svg>
            </div>
          ))}
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-[#5D4037]">
              What they say about us <span className="text-[#FF8C00]">?</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We always provide the best service and always maintain the quality of coffee
            </p>
          </div>
          
          {/* Right side - Testimonial Cards */}
          <div className="relative">
            <div className="grid grid-cols-1 gap-4">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                  style={{
                    animationDelay: `${index * 150}ms`,
                  }}
                >
                  <div className="flex items-start gap-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-xl object-cover flex-shrink-0"
                    />
                    <div className="flex-1">
                      <h3 className="font-bold text-[#5D4037] text-lg mb-1">{testimonial.name}</h3>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {testimonial.feedback}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Feast Like a Bear Section */}
        <div className="relative rounded-3xl overflow-hidden bg-[#5D4037] text-white shadow-2xl mt-16">
          <img 
            src="https://images.pexels.com/photos/2061043/pexels-photo-2061043.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Coffee machine"
            className="w-full h-64 object-cover opacity-60"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="font-primary text-4xl md:text-6xl font-bold text-center tracking-wider">
              FEAST LIKE A BEAR
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;