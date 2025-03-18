
import React from 'react';
import { Link } from 'react-router-dom';
import { useEra } from '@/context/EraContext';

const NotFound = () => {
  const { currentEra } = useEra();

  const renderContent = () => {
    switch (currentEra) {
      case 'web1':
        return (
          <div className="p-8 text-center">
            <h1 style={{ fontFamily: 'Times New Roman', fontSize: '32px', color: '#800080' }}>
              404 - Page Not Found
            </h1>
            <p style={{ fontFamily: 'Times New Roman', fontSize: '16px', margin: '20px 0' }}>
              The page you are looking for does not exist or has been moved.
            </p>
            <Link to="/" className="web1-button" style={{ display: 'inline-block', margin: '20px 0' }}>
              Return to Homepage
            </Link>
          </div>
        );
      case 'web2':
        return (
          <div className="max-w-md mx-auto p-8 web2-card text-center">
            <h1 className="text-3xl font-bold mb-4 text-gray-800">
              404 - Page Not Found
            </h1>
            <p className="text-gray-600 mb-6">
              Oops! The page you're looking for doesn't exist or has been moved.
            </p>
            <Link to="/" className="web2-button inline-block">
              Return to Homepage
            </Link>
          </div>
        );
      case 'web3':
        return (
          <div className="max-w-md mx-auto web3-card text-center">
            <h1 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              404 - Page Not Found
            </h1>
            <p className="text-white/70 mb-6">
              This digital location doesn't exist in the current metaverse.
            </p>
            <Link to="/" className="web3-button inline-block">
              Return to Main Space
            </Link>
          </div>
        );
      default:
        return (
          <div className="max-w-md mx-auto p-8 bg-white/10 backdrop-blur-md rounded-xl text-center">
            <h1 className="text-3xl font-bold mb-4 text-white">
              404 - Page Not Found
            </h1>
            <p className="text-white/70 mb-6">
              The page you are looking for could not be found.
            </p>
            <Link to="/" className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg inline-block">
              Return to Homepage
            </Link>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      {renderContent()}
    </div>
  );
};

export default NotFound;
