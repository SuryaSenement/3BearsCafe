const activities = [
  {
    id: 1,
    title: 'Creative & Art Class',
    description: 'Unleash creativity through painting, drawing, and crafts',
    features: ['Painting & Drawing', 'Clay Modeling', 'Paper Crafts', 'Digital Art'],
    color: 'bg-pink-100',
    icon: '🎨'
  },
  {
    id: 2,
    title: 'Cooking Adventure Kids',
    description: 'Learn cooking basics while having fun in the kitchen',
    features: ['Basic Cooking Skills', 'Healthy Recipes', 'Kitchen Safety', 'Food Science'],
    color: 'bg-blue-100',
    icon: '👨‍🍳'
  },
  {
    id: 3,
    title: 'Dance & Exploration',
    description: 'Express yourself through movement and rhythm',
    features: ['Classical Dance', 'Modern Dance', 'Folk Dance', 'Creative Movement'],
    color: 'bg-green-100',
    icon: '💃'
  },
  {
    id: 4,
    title: 'Fun & Game Day',
    description: 'Enjoy interactive games and team activities',
    features: ['Board Games', 'Outdoor Games', 'Team Building', 'Problem Solving'],
    color: 'bg-yellow-100',
    icon: '🎮'
  }
];

const ActivitiesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Fun activities + expert guides = Endless Adventures!
          </h2>
          <p className="text-gray-600">
            Discover amazing activities designed to inspire and educate your children
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {activities.map((activity) => (
            <div key={activity.id} className={`${activity.color} rounded-2xl p-6 hover:shadow-lg transition-all duration-300`}>
              <div className="text-4xl mb-4">{activity.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{activity.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{activity.description}</p>
              <ul className="space-y-2">
                {activity.features.map((feature, index) => (
                  <li key={index} className="text-sm text-gray-700 flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;

