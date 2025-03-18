
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white flex items-center justify-center">
      <div className="text-center px-4">
        <div className="text-9xl font-bold mb-4 opacity-20">404</div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Page Not Found</h1>
        <p className="text-xl text-blue-200 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved to another URL.
        </p>
        <button
          onClick={() => navigate('/')}
          className="flex items-center mx-auto bg-white/20 hover:bg-white/30 transition-colors px-6 py-3 rounded-lg"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Homepage
        </button>
      </div>
    </div>
  );
};

export default NotFound;
