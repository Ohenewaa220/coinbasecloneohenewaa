import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "../common/Button";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Cryptocurrencies", path: "/explore" },
    { name: "Individuals", path: "/" },
    { name: "Businesses", path: "/" },
    { name: "Institutions", path: "/" },
    { name: "Developers", path: "/" },
    { name: "Company", path: "/" },
  ];

  return (
    <nav className="bg-white border-b border-gray-100/80 sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-[68px] items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer mr-6">
            <Link to="/" className="text-[#0052FF] font-bold text-2xl tracking-tight flex items-center justify-center w-8 h-8 rounded-full">
              <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
                <path d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z" fill="#0052FF"/>
                <path d="M24 13C20.134 13 17 16.134 17 20C17 23.866 20.134 27 24 27C24.5772 27 25.1378 26.9298 25.6723 26.8016C24.1252 28.751 21.7212 30 19 30C13.4772 30 9 25.5228 9 20C9 14.4772 13.4772 10 19 10C21.7212 10 24.1252 11.249 25.6723 13.1984C25.1378 13.0702 24.5772 13 24 13Z" fill="white"/>
              </svg>
            </Link>
          </div>

          {/* Desktop Navigation (Centered) */}
          <div className="hidden lg:flex flex-1 justify-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-900 font-semibold hover:text-[#0052FF] text-[14px] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Area: Icons + Auth Buttons (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-400 hover:bg-gray-100 p-2 rounded-full transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </button>
            <button className="text-gray-400 hover:bg-gray-100 p-2 rounded-full transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </button>
            
            <div className="h-4 w-px bg-gray-200 mx-2"></div>

            <Link to="/signin" className="text-gray-900 font-semibold text-[14px] hover:text-[#0052FF] px-2 transition-colors">
              Sign in
            </Link>
            <Button variant="primary" to="/signup" className="!bg-[#0052FF] hover:!bg-blue-700 !rounded-full !px-5 !py-2 !text-[14px]">
              Sign up
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-100 p-4 absolute top-[68px] left-0 right-0 bg-white shadow-lg h-[calc(100vh-68px)] flex flex-col">
          <div className="flex flex-col space-y-4 flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-900 font-semibold text-xl hover:text-[#0052FF]"
              >
                {link.name}
              </Link>
            ))}
            
            <div className="mt-auto pt-8 flex flex-col space-y-4">
              <Button variant="outline" className="w-full justify-center !rounded-full !py-3" to="/signin">
                Sign in
              </Button>
              <Button variant="primary" className="w-full justify-center !bg-[#0052FF] !rounded-full !py-3" to="/signup">
                Sign up
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
