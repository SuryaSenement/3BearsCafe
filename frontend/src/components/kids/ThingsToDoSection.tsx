import React from 'react';
import { Link } from 'react-router-dom';

const activities = [
  {
    id: 1,
    title: 'Adventure & Play Games',
    icon: '📚',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-100',
    items: [
      'Jungle Trail Run',
      'Treasure Hunt Quest', 
      'Obstacle Dash',
      'Hide & Seek Safari',
      'Balance Beam Challenge',
      'Giant Hopscotch'
    ],
    character: 'https://images.pexels.com/photos/8613230/pexels-photo-8613230.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: 2,
    title: 'Creative & Fun Corners',
    icon: '📚',
    bgColor: 'bg-blue-50', 
    borderColor: 'border-blue-100',
    items: [
      'Paint & Splash',
      'Clay Play Day',
      'Crafty Hands',
      'Nature Collage',
      'DIY Party Hats'
    ],
    character: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: 3,
    title: 'Nature & Exploration',
    icon: '📚',
    bgColor: 'bg-pink-50',
    borderColor: 'border-pink-100', 
    items: [
      'Bug Hunt Adventure',
      'Leaf & Stone Collectors',
      'Mini Garden Explorers',
      'Picnic Playtime'
    ],
    character: 'https://images.pexels.com/photos/8613295/pexels-photo-8613295.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: 4,
    title: 'Party & Group Fun',
    icon: '📚',
    bgColor: 'bg-rose-50',
    borderColor: 'border-rose-100',
    items: [
      'Balloon Burst Challenge',
      'Musical Trails (like musical chairs but outdoors)',
      'Dance & Freeze',
      'Parachute Play'
    ],
    character: 'https://images.pexels.com/photos/8613102/pexels-photo-8613102.jpeg?auto=compress&cs=tinysrgb&w=300'
  }
];

const ThingsToDoSection = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-100 rounded-full opacity-30 -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full opacity-30 translate-x-1/2 translate-y-1/2 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Things To Do At KidzDistrict
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className={`${activity.bgColor} ${activity.borderColor} border rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden min-h-[280px] sm:min-h-[320px] group`}
            >
              {/* Header with Icon */}
              <div className="flex items-center gap-3 mb-6">
                <div className="text-2xl bg-white rounded-xl p-2.5 shadow-sm">{activity.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">{activity.title}</h3>
              </div>

              {/* Activity List */}
              <div className="space-y-2.5 mb-4 relative z-10">
                {activity.items.map((item, index) => (
                  <div key={index} className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm font-medium leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>

              {/* Character Illustration - Bottom Right */}
              <div className="absolute bottom-4 right-4 w-32 h-32 sm:w-40 sm:h-40 transition-transform duration-300 group-hover:scale-105">
                <img 
                  src={activity.character}
                  alt={`${activity.title} illustration`}
                  className="w-full h-full object-contain drop-shadow-lg"
                />
              </div>

              {/* Decorative paper plane (optional) */}
              {activity.id === 2 && (
                <div className="absolute top-4 right-20 text-gray-400 opacity-30">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link
            to="/kids/workshops"
            className="inline-block bg-green-500 text-white px-10 py-3.5 rounded-lg font-bold text-base uppercase hover:bg-green-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            EXPLORE DISTRICT
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ThingsToDoSection;
