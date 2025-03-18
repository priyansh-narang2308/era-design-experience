
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, Wallet, User, Bell, Moon, Sun } from 'lucide-react';

const Web3Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleWallet = () => setWalletConnected(!walletConnected);

  return (
    <header className="web3-glass fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-4 px-6">
          <Link to="/explore" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-web3-primary to-web3-accent">
            Web3.0
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/explore" 
              className="text-white/80 hover:text-white transition-colors font-medium"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-white/80 hover:text-white transition-colors font-medium"
            >
              About
            </Link>
            <Link 
              to="/blog" 
              className="text-white/80 hover:text-white transition-colors font-medium"
            >
              Blog
            </Link>
            <Link 
              to="/nft-gallery" 
              className="text-white/80 hover:text-white transition-colors font-medium"
            >
              NFT Gallery
            </Link>
            <Link 
              to="/dao" 
              className="text-white/80 hover:text-white transition-colors font-medium"
            >
              DAO
            </Link>
          </nav>

          {/* Right Side Controls */}
          <div className="flex items-center space-x-4">
            <button className="text-white/80 hover:text-white transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="text-white/80 hover:text-white transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <button 
              className="text-white/80 hover:text-white transition-colors" 
              onClick={toggleDarkMode}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button 
              className={`flex items-center space-x-2 px-4 py-1.5 rounded-full ${
                walletConnected 
                  ? 'bg-web3-success/20 text-web3-success' 
                  : 'bg-web3-accent/20 text-web3-accent'
              }`}
              onClick={toggleWallet}
            >
              <Wallet className="w-4 h-4" />
              <span className="text-sm font-medium">
                {walletConnected ? 'Connected' : 'Connect Wallet'}
              </span>
            </button>
            <button className="text-white/80 hover:text-white transition-colors md:hidden" onClick={toggleMenu}>
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden web3-glass absolute top-16 left-0 right-0 p-4 border-t border-white/10">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/explore" 
              className="text-white/80 hover:text-white transition-colors font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-white/80 hover:text-white transition-colors font-medium"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/blog" 
              className="text-white/80 hover:text-white transition-colors font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              to="/nft-gallery" 
              className="text-white/80 hover:text-white transition-colors font-medium"
              onClick={() => setMenuOpen(false)}
            >
              NFT Gallery
            </Link>
            <Link 
              to="/dao" 
              className="text-white/80 hover:text-white transition-colors font-medium"
              onClick={() => setMenuOpen(false)}
            >
              DAO
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Web3Header;
