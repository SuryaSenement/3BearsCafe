import { Mail, Phone, MapPin } from 'lucide-react';
import kidsLogo from '../../assets/Kidz/kidsdistrict.png';

const KidsFooter = () => {
  return (
    <footer className="bg-gradient-to-br from-green-100 to-blue-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-white rounded-full p-1 w-12 h-12 flex items-center justify-center">
                <img src={kidsLogo} alt="Kids District Logo" className="w-10 h-10 object-cover rounded-full" />
              </div>
              <span className="text-xl font-bold text-gray-800">Kidz District</span>
            </div>
            
            <h3 className="text-lg font-bold text-gray-800 mb-4">News Letter</h3>
            <p className="text-gray-600 mb-6">
              Sign up with your email address to receive news and updates about our workshops and activities
            </p>
            
            <div className="flex gap-3">
              <input 
                type="email" 
                placeholder="Email Address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button className="bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-6">Menu</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Workshops</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Activities</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">About Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-6">CONTACT US</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-green-600" />
                <span className="text-gray-600">Any where, Any city 54321</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-green-600" />
                <span className="text-gray-600">Call Us: +91 9876543214</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-green-600" />
                <span className="text-gray-600">kidz@example.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-300 pt-8 text-center">
          <p className="text-gray-600">
            Copyright ©2025 Kidz District. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default KidsFooter;