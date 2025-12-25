import React from 'react';
import tdimg from '../../assets/Kidz/3dpic.png';
import tdimg1 from '../../assets/Kidz/3dpic1.png';
import tdimg2 from '../../assets/Kidz/3dpic2.png';
import tdimg3 from '../../assets/Kidz/3dpic3.png';
import tdimg4 from '../../assets/Kidz/3dpic4.png';

// The data structure for features is updated to match the new content and image-based icons.
const features = [
  {
    id: 1,
    title: 'Active Play and Coordination',
    description: 'Climbing, running, balancing, and team games to develop physical skills.',
    icon:tdimg1, // Image for active play
  },
  {
    id: 2,
    title: 'Nature Exploration',
    description: 'Discover plants, insects, and natural elements through hands-on activities.',
    icon:tdimg2, // Image for nature exploration
  },
  {
    id: 3,
    title: 'Creative Arts and Crafts',
    description: 'Painting, crafting, and imaginative projects to spark creativity.',
    icon:tdimg3, // Image for creative arts
  },
  {
    id: 4,
    title: 'Problem Solving & Curiosity',
    description: 'Treasure hunts, puzzles, and building challenges to encourage thinking and teamwork.',
    icon:tdimg4, // Image for problem solving
  }
];

const NurturingSection = () => {
  return (
    <>
      {/* This SVG defines the custom shape. It's not visible itself, 
        but we reference its ID in the style attribute below.
      */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <clipPath id="customCurve" clipPathUnits="objectBoundingBox">
            <path d="M 0.05, 0 C 0.13, 0.01, 0.24, 0.06, 0.35, 0.06 C 0.61, 0.06, 0.66, -0.06, 1, 0.05 L 1, 0.95 C 0.9, 1.05, 0.7, 0.95, 0.5, 0.95 C 0.25, 0.95, 0.13, 1.02, 0.05, 0.98 L 0, 0.2 C 0, 0.1, 0.01, 0.02, 0.05, 0 Z" />
          </clipPath>
        </defs>
      </svg>

      <section className="py-20 bg-white relative overflow-hidden">
        {/* Decorative top-left pink blob */}
        <div className="absolute top-0 left-0 w-[400px] h-[300px] bg-pink-200 rounded-br-full opacity-40"></div>
        <div className="absolute top-0 left-0 w-[300px] h-[200px] bg-pink-100/70 rounded-br-full opacity-60"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Nurturing Curiosity And Creativity.
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Our Friendly Guides Help Every Child Find The Perfect Way To Play, Explore, And Have Fun!
            </p>
          </div>
          
          {/* Main content block with the custom curve applied.
            Note the removal of 'rounded-3xl' and the addition of the 'style' attribute.
          */}
          <div 
            className="bg-[#FEFBF2] p-8 md:p-12 shadow-xl flex flex-col lg:flex-row items-center justify-center gap-10"
            style={{ clipPath: 'url(#customCurve)' }}
          >
            {/* Left side: Kids playing image */}
            <div className="lg:w-1/2 flex justify-center">
              <img 
                src={tdimg} // Image of kids playing
                alt="Kids playing"
                className="w-full max-w-md object-cover"
              />
            </div>

            {/* Right side: Features list */}
            <div className="lg:w-1/2 space-y-8">
              {features.map((feature) => (
                <div key={feature.id} className="flex items-start gap-4">
                  {/* Feature Icon */}
                  <img src={feature.icon} alt="Feature icon" className="w-20 h-20 flex-shrink-0" />
                  {/* Feature Text */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{feature.title}</h3>
                    <p className="text-gray-600 text-base">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NurturingSection;