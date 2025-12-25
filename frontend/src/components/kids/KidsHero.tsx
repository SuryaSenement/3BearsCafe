import heroKidsImage from "../../assets/Kidz/herokids.png";

const KidsHero = () => {
  return (
    <section className="w-full bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 pt-16 sm:pt-20 pb-8 sm:pb-16 overflow-hidden min-h-screen flex items-center relative">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-green-200 rounded-full opacity-30 blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-200 rounded-full opacity-30 blur-xl"></div>
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1 w-full">
            {/* Badge */}
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm border-2 border-green-300 text-gray-800 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium shadow-sm">
              <span className="mr-2">🌟</span>
              Making Kids Fall in Love with Play!
            </div>
            
            {/* Services offered section */}
            <div className="space-y-4">
              <h3 className="text-sm sm:text-base font-semibold text-gray-700 uppercase tracking-wide">
                HERE'S WHAT WE OFFER AT KIDZ DISTRICT
              </h3>
              
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <span className="bg-white border-2 border-green-400 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium text-gray-800 hover:bg-green-50 transition-colors">
                  play area
                </span>
                <span className="bg-white border-2 border-green-400 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium text-gray-800 hover:bg-green-50 transition-colors">
                  birthday parties
                </span>
                <span className="bg-white border-2 border-green-400 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium text-gray-800 hover:bg-green-50 transition-colors">
                  workshops
                </span>
              </div>
              
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <span className="bg-white border-2 border-green-400 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium text-gray-800 hover:bg-green-50 transition-colors">
                  adventure trails
                </span>
                <span className="bg-white border-2 border-green-400 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium text-gray-800 hover:bg-green-50 transition-colors">
                  creative hubs
                </span>
                <span className="bg-white border-2 border-green-400 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium text-gray-800 hover:bg-green-50 transition-colors">
                  special events
                </span>
              </div>
            </div>
            
            {/* CTA Button */}
            <button className="w-full sm:w-auto bg-green-500 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-lg font-bold uppercase text-sm sm:text-base hover:bg-green-600 transition-all transform hover:scale-105 shadow-lg">
              CONSULT NOW
            </button>
            
            {/* Visit link */}
            <p className="text-xs sm:text-sm text-gray-600">
              Visit Us | <a href="#" className="text-green-600 font-semibold hover:underline">CLICK HERE</a>
            </p>
          </div>
          
          {/* Right Image Section */}
          <div className="relative order-1 lg:order-2 mb-4 sm:mb-6 lg:mb-0">
            <div className="relative w-full max-w-lg mx-auto aspect-square">
              {/* Outer rainbow ring blur effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-300 via-yellow-200 to-blue-300 blur-2xl opacity-50"></div>
              
              {/* Rainbow border ring */}
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-yellow-200 via-pink-200 to-blue-200 p-2 sm:p-3">
                
                {/* Main circular container with green grass background */}
                <div className="w-full h-full rounded-full overflow-hidden relative bg-gradient-to-b from-green-400 to-green-500">
                  
                  {/* Grass zigzag pattern texture */}
                  <div className="absolute inset-0 opacity-60">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <pattern id="zigzag" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                          <path d="M0 20 L10 10 L20 20 L30 10 L40 20" stroke="#2d5016" strokeWidth="1.5" fill="none"/>
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#zigzag)"/>
                    </svg>
                  </div>
                  
                  {/* Actual hero image - fills the entire circle */}
                  <div className="absolute inset-0 rounded-full overflow-hidden">
                    <img 
                      src={heroKidsImage}
                      alt="Kids playing at Kidz District"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  
                  {/* Decorative stars overlay */}
                  <div className="absolute top-1/4 left-1/4 text-yellow-300 text-2xl sm:text-3xl animate-pulse z-10 drop-shadow-lg">✨</div>
                  <div className="absolute top-1/3 right-1/4 text-yellow-300 text-lg sm:text-xl animate-pulse z-10 drop-shadow-lg" style={{animationDelay: '0.2s'}}>⭐</div>
                  <div className="absolute bottom-1/4 right-1/3 text-yellow-300 text-xl sm:text-2xl animate-pulse z-10 drop-shadow-lg" style={{animationDelay: '0.4s'}}>✨</div>
                  <div className="absolute top-1/2 left-1/5 text-yellow-300 text-base sm:text-lg animate-pulse z-10 drop-shadow-lg" style={{animationDelay: '0.6s'}}>⭐</div>
                  <div className="absolute bottom-1/3 left-1/4 text-yellow-300 text-lg sm:text-xl animate-pulse z-10 drop-shadow-lg" style={{animationDelay: '0.8s'}}>✨</div>
                </div>
              </div>
              
              {/* Decorative floating elements around the circle */}
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-green-300 rounded-full opacity-40 blur-lg"></div>
              <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-blue-300 rounded-full opacity-40 blur-lg"></div>
              <div className="absolute top-1/4 -left-4 w-12 h-12 bg-purple-300 rounded-full opacity-30 blur-md"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KidsHero;
