import collage1 from '../../assets/collage1.jpg';
import collage2 from '../../assets/collage2.jpg';
import collage3 from '../../assets/collage3.jpg';
import collage4 from '../../assets/collage4.jpg';

const QualitySection = () => {
  return (
    <section className="bg-[##FFFFFF] pt-30 py-16 mt-50">
      {/* Add mt-40 to push content down so Popular Now overlay doesn't overlap */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Collage */}
          <div className="relative h-96">
            {/* Main large image */}
            <div className="absolute top-0 left-0 bg-white p-3 rounded-lg shadow-lg transform rotate-3 hover:rotate-1 transition-transform duration-300">
              <img 
                src={collage1} 
                alt="Coffee collage 1"
                className="w-64 h-48 object-cover rounded"
              />
            </div>
            
            {/* Second image - overlapping top right */}
            <div className="absolute top-8 right-0 bg-white p-3 rounded-lg shadow-lg transform -rotate-2 hover:rotate-0 transition-transform duration-300">
              <img 
                src={collage2} 
                alt="Coffee collage 2"
                className="w-48 h-36 object-cover rounded"
              />
            </div>
            
            {/* Third image - bottom left */}
            <div className="absolute bottom-8 left-8 bg-white p-3 rounded-lg shadow-lg transform rotate-1 hover:rotate-3 transition-transform duration-300">
              <img 
                src={collage3} 
                alt="Coffee collage 3"
                className="w-40 h-28 object-cover rounded"
              />
            </div>
            
            {/* Fourth image - bottom right */}
            <div className="absolute bottom-0 right-12 bg-white p-3 rounded-lg shadow-lg transform -rotate-1 hover:-rotate-3 transition-transform duration-300">
              <img 
                src={collage4} 
                alt="Coffee collage 4"
                className="w-56 h-40 object-cover rounded"
              />
            </div>
          </div>
          
          {/* Right side - Content */}
          <div className="space-y-6">
            {/* Decorative element */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-[#8B4513] rounded-full"></div>
                <div className="w-2 h-2 bg-[#8B4513] rounded-full"></div>
                <div className="w-2 h-2 bg-[#8B4513] rounded-full"></div>
              </div>
              <div className="h-px bg-[#8B4513] flex-1"></div>
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-[#8B4513] rounded-full"></div>
                <div className="w-2 h-2 bg-[#8B4513] rounded-full"></div>
                <div className="w-2 h-2 bg-[#8B4513] rounded-full"></div>
              </div>
            </div>
            
            <h2 className="font-primary text-4xl md:text-5xl lg:text-5xl font-light text-black leading-tight">
              Enjoy Best Quality<br />
              <span className="text-black">Products</span>
            </h2>
            
            <p className="text-gray-700 leading-relaxed text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Vivamus lobortis elit sit mi lobortis, sed varius tortor 
              aliquam. Maecenas ac quam lacinia, lorem ipsum dolor 
              sit amet, consectetur adipiscing elit. Vivamus lobortis 
              elit sit mi lobortis, sed varius tortor consectetur.
            </p>
            
            {/* Black button at bottom */}
            <div className="pt-4">
              <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors font-medium">
                Explore Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;