
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, User, Mail, Bell } from 'lucide-react';

const Web2Header = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <Link to="/explore" className="text-2xl font-bold bg-gradient-web2 text-transparent bg-clip-text">
              Web2.0
            </Link>
            <nav className="hidden md:flex ml-10">
              <Link 
                to="/explore" 
                className="mx-3 px-2 py-1 text-gray-700 font-semibold hover:text-web2-blue transition-colors"
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="mx-3 px-2 py-1 text-gray-700 font-semibold hover:text-web2-blue transition-colors"
              >
                About
              </Link>
              <Link 
                to="/blog" 
                className="mx-3 px-2 py-1 text-gray-700 font-semibold hover:text-web2-blue transition-colors"
              >
                Blog
              </Link>
              <Link 
                to="/contact" 
                className="mx-3 px-2 py-1 text-gray-700 font-semibold hover:text-web2-blue transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>
          
          <div className="flex items-center">
            <div className="relative mr-4">
              <input
                type="text"
                className="web2-input pr-8"
                placeholder="Search..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <Search className="absolute right-2 top-2.5 h-4 w-4 text-gray-400" />
            </div>
            
            <div className="flex">
              <button className="p-2 text-gray-500 hover:text-web2-blue transition-colors">
                <Bell className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-500 hover:text-web2-blue transition-colors">
                <Mail className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-500 hover:text-web2-blue transition-colors">
                <User className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Web2Header;
