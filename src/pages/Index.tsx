
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEra } from '@/context/EraContext';

const Index = () => {
  const navigate = useNavigate();
  const { setCurrentEra } = useEra();
  
  const handleExplore = () => {
    navigate('/explore');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-950 to-white text-white">
      <div className="text-center max-w-4xl px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text  text-black">
          Web UI Evolution
        </h1>
        <p className="text-xl text-blue-100 mb-10">
          Explore how web design has transformed from the early days to the cutting-edge present
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Web 1.0 Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:shadow-lg transition-all">
            <h3 className="text-2xl font-bold mb-2">Web 1.0</h3>
            <p className="text-blue-100 text-sm mb-2">1990s - Early 2000s</p>
            <p className="text-gray-300 mb-4">
              Experience the nostalgic era of static pages, basic HTML, and the early web foundations.
            </p>
            <button 
              onClick={() => {
                setCurrentEra('web1');
                handleExplore();
              }}
              className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg w-full"
            >
              Experience Web 1.0
            </button>
          </div>

          {/* Web 2.0 Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:shadow-lg transition-all">
            <h3 className="text-2xl font-bold mb-2">Web 2.0</h3>
            <p className="text-blue-100 text-sm mb-2">Mid 2000s - Present</p>
            <p className="text-gray-300 mb-4">
              Explore the social web with dynamic content, user interactions, and responsive designs.
            </p>
            <button 
              onClick={() => {
                setCurrentEra('web2');
                handleExplore();
              }}
              className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg w-full"
            >
              Experience Web 2.0
            </button>
          </div>

          {/* Web 3.0 Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:shadow-lg transition-all">
            <h3 className="text-2xl font-bold mb-2">Web 3.0</h3>
            <p className="text-blue-100 text-sm mb-2">Emerging</p>
            <p className="text-gray-300 mb-4">
              Witness the future with decentralized apps, AI-powered interfaces, and immersive experiences.
            </p>
            <button 
              onClick={() => {
                setCurrentEra('web3');
                handleExplore();
              }}
              className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg w-full"
            >
              Experience Web 3.0
            </button>
          </div>
        </div>

        <div className="mt-8 flex justify-center space-x-6">
          <button 
            onClick={() => navigate('/about')} 
            className="text-black hover:text-white transition-colors"
          >
            About This Project
          </button>
          <button 
            onClick={() => navigate('/compare')} 
            className="text-black hover:text-white transition-colors"
          >
            Compare All Eras
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
