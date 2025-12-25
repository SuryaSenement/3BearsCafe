import { useState, useEffect } from 'react';
import { Menu, Phone, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import kidsLogo from '../../assets/Kidz/kidsdistrict.png';

const KidsHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <div className="bg-white rounded-full p-1 w-10 h-10 flex items-center justify-center">
              <img src={kidsLogo} alt="Kids District Logo" className="w-8 h-8 object-cover rounded-full" />
            </div>
            <span className="ml-2 text-xl font-bold text-gray-800">Kidz District</span>
          </Link>
          
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/kids" className="text-gray-700 hover:text-green-500 px-3 py-2 text-sm font-medium transition-colors">
                Home
              </Link>
              <Link to="/kids/workshops" className="text-gray-700 hover:text-green-500 px-3 py-2 text-sm font-medium transition-colors">
                Workshops
              </Link>
            </div>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center text-sm text-gray-600">
              <Phone className="h-4 w-4 mr-1" />
              <span>+91 9876543214</span>
            </div>
            <Link to="/" className="bg-[#8B4513] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#5D4037] transition-colors">
              3Bears
            </Link>
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 hover:text-green-500 p-2"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/kids"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-500 hover:bg-gray-50 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/kids/workshops"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-500 hover:bg-gray-50 transition-colors"
            >
              Workshops
            </Link>
            <div className="flex items-center px-3 py-2 text-sm text-gray-600">
              <Phone className="h-4 w-4 mr-1" />
              <span>+91 9876543214</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default KidsHeader;