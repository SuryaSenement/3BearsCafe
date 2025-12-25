// Updated testimonials data to match the design
const testimonials = [
  {
    id: 1,
    name: '- Lisa',
    feedback: 'My daughter had the best birthday ever at Kidz District! She still talks about the games and nature trails.',
    image: 'https://i.imgur.com/rN5h0j5.jpg', // Placeholder image for Lisa
  },
  {
    id: 2,
    name: '- Jimmy',
    feedback: "It's the perfect place for kids to play and explore safely. My son asks to visit every weekend!",
    image: 'https://i.imgur.com/yO7sWjY.jpg', // Placeholder image for Jimmy
  }
];

const TestimonialsKids = () => {
  return (
    // Main section with the light yellow background
    <section className="py-20 bg-[#FFFBF0] relative overflow-hidden">

      {/* Decorative background shapes */}
      <div className="absolute top-0 -left-48 w-96 h-96 bg-green-100/50 rounded-full opacity-70"></div>
      <div className="absolute bottom-0 -right-32 w-80 h-80 bg-green-100/50 rounded-full opacity-70"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          {/* Trophy Icon */}
          <img src="https://i.imgur.com/W2C0Uf2.png" alt="Trophy" className="mx-auto w-12 h-12" />
          
          {/* Subtitle */}
          <h3 className="mt-2 text-orange-500 font-bold text-lg">
            Families Love Coming Back To Kidz District!
          </h3>
          
          {/* Main Title */}
          <h2 className="text-4xl font-bold text-gray-800 mt-2">
            Don't Just Take Our Word For It
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {testimonials.map((testimonial) => (
            // Testimonial card styled like a pinned note
            <div 
              key={testimonial.id} 
              className="bg-[#FEF6FF] rounded-2xl p-8 pt-10 shadow-lg border-2 border-dashed border-gray-300 relative"
            >
              {/* Decorative Pin */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-6 h-6 bg-red-400 rounded-full shadow-md border-2 border-white"></div>
              </div>
              
              {/* Quotation Marks */}
              <span className="absolute top-6 left-6 text-6xl text-green-300 font-serif opacity-80">“</span>
              <span className="absolute bottom-2 right-6 text-6xl text-green-300 font-serif opacity-80">”</span>
              
              <div className="flex flex-col h-full">
                {/* Feedback Text */}
                <p className="text-gray-700 italic text-lg mb-6 z-10 flex-grow">
                  {testimonial.feedback}
                </p>
                {/* Author Info */}
                <div className="flex items-center gap-4 mt-auto z-10">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover shadow-md"
                  />
                  <h3 className="font-bold text-lg text-gray-800">{testimonial.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsKids;