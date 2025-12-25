import { Link } from 'react-router-dom';
import { Calendar, Clock, Users } from 'lucide-react';

const workshops = [
  {
    id: 1,
    title: 'Creative Art Workshop',
    description: 'Learn painting, drawing and creative expression',
    date: 'Dec 15, 2024',
    time: '10:00 AM - 12:00 PM',
    age: '5-12 years',
    price: '₹500',
    image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 2,
    title: 'Cooking Adventure',
    description: 'Fun cooking activities for young chefs',
    date: 'Dec 18, 2024',
    time: '2:00 PM - 4:00 PM',
    age: '6-14 years',
    price: '₹600',
    image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 3,
    title: 'Dance & Movement',
    description: 'Express yourself through dance and movement',
    date: 'Dec 20, 2024',
    time: '11:00 AM - 1:00 PM',
    age: '4-10 years',
    price: '₹450',
    image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

const WorkshopsPreview = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            🎪 Up-Coming WORKSHOPS
          </div>
          <h2 className="text-3xl font-bold text-gray-800">Upcoming Workshops</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {workshops.map((workshop) => (
            <div key={workshop.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src={workshop.image} 
                alt={workshop.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{workshop.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{workshop.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    {workshop.date}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    {workshop.time}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-2" />
                    Age: {workshop.age}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-600">{workshop.price}</span>
                  <button className="bg-green-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-green-600 transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link 
            to="/kids/workshops"
            className="bg-purple-600 text-white px-8 py-3 rounded-full font-medium hover:bg-purple-700 transition-colors inline-block"
          >
            Explore All Workshops
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WorkshopsPreview;