import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import bearLogo from '../../assets/Logos/3 Bears Logo Png.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // active checks
  const isHomeActive = location.pathname === '/' || location.hash === '/.';
  const isMenuActive = location.pathname.startsWith('/menu');
  const isKidsActive = location.pathname.startsWith('/kids') || location.pathname.startsWith('/kidsdistrict');

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? ' text-black bg-white shadow-2xl h-18' : ' bg-opacity-90 backdrop-blur-lg h-25'}`}>
      <div className="max-w-6xl pt-2 mx-auto px-5 sm:px-6 lg:px-5 h-full">
        <div className="relative flex items-center justify-between h-full">
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img
                src={bearLogo}
                alt="3Bears Logo"
                className={`object-contain transition-all duration-300 ${isScrolled ? 'pb-2 w-16 h-16' : 'w-24 h-24'}`}
              />
                {isScrolled && <h4 className="px-5 font-primary font-medium lg:font-light">3 Bears Cafe</h4>}
            </Link>
          </div>


          {/* Center: Desktop nav (absolutely centered so logo / right content don't affect centering) */}
          <nav
            role="navigation"
            aria-label="Primary"
            className="absolute left-0 right-0 mx-auto w-max pointer-events-auto hidden md:flex justify-center"
          >
            <div className={`flex items-baseline transition-all duration-300 ${isScrolled ? 'space-x-4' : 'space-x-8'
              }`}>
              <a
                href="/."
                className={`font-primary px-3 py-2 text-lg font-medium transition-all ${isHomeActive ? 'text-orange-400' : 'text-brown'} hover:text-orange-400`}
              >
                Home
              </a>

              <Link
                to="/menu"
                className={`font-primary px-3 py-2 text-lg font-medium transition-all ${isMenuActive ? 'text-orange-400' : 'text-brown'} hover:text-orange-400`}
              >
                Menu
              </Link>
            </div>

          </nav>

          {/* Right: Kid's District on desktop, mobile menu button on small screens */}
          <div className="flex items-center">
            <div className="hidden md:block">
              <Link
                to="/kids"
                className={`font-primary border-2 border-brown rounded transition-all duration-300 px-3 py-2 bg-brown text-cream hover:bg-[#4A2C20] hover:text-white underline decoration-green-600 decoration-1 underline-offset-4
                            ${isScrolled ? 'text-xs px-2 py-1' : 'text-sm px-3 py-2'}
                            ${isKidsActive && 'underline decoration-green-600 decoration-2 underline-offset-4'}`}
                >
                Kidz District
              </Link>

            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-latte bg-brown hover:bg-opacity-90 p-2 rounded"
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
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
            <a
              href="#home"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-3 py-2 text-base font-medium font-primary ${isHomeActive ? 'text-orange' : 'text-brown'
                } hover:text-orange hover:bg-gray-50 transition-colors`}
            >
              Home
            </a>
            <Link
              to="/menu"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-3 py-2 text-base font-medium font-primary ${isMenuActive ? 'text-orange' : 'text-brown'
                } hover:text-orange hover:bg-gray-50 transition-colors`}
            >
              Menu
            </Link>
            <Link
              to="/kids"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-3 py-2 text-base font-medium font-primary ${isKidsActive ? 'text-orange' : 'text-brown'
                } hover:text-orange hover:bg-gray-50 transition-colors`}
            >
              Kid's District
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;