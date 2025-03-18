
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Bell, Moon, Wallet } from 'lucide-react';

const Web3Header = () => {
  return (
    <header className="bg-black/20 backdrop-blur-lg fixed top-0 left-0 right-0 z-50 border-b border-white/10">
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-4 px-6">
          <Link to="/explore" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            Web3.0
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/explore" className="text-white/80 hover:text-white transition-colors font-medium">Home</Link>
            <Link to="/about" className="text-white/80 hover:text-white transition-colors font-medium">About</Link>
            <Link to="/blog" className="text-white/80 hover:text-white transition-colors font-medium">Blog</Link>
            <Link to="/nft-gallery" className="text-white/80 hover:text-white transition-colors font-medium">NFT Gallery</Link>
            <Link to="/dao" className="text-white/80 hover:text-white transition-colors font-medium">DAO</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="text-white/80 hover:text-white transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <button className="text-white/80 hover:text-white transition-colors">
              <Bell className="h-5 w-5" />
            </button>
            <button className="text-white/80 hover:text-white transition-colors">
              <Moon className="h-5 w-5" />
            </button>
            <button 
              className="flex items-center space-x-2 px-4 py-1.5 rounded-full bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 transition-colors"
            >
              <Wallet className="w-4 h-4" />
              <span className="text-sm font-medium">Connect Wallet</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Web3Header;
