
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEra } from '@/context/EraContext';
import { ArrowRight, Compass, History, Cpu } from 'lucide-react';

const Landing = () => {
  const navigate = useNavigate();
  const { setCurrentEra } = useEra();

  const handleExploreEra = (era: 'web1' | 'web2' | 'web3') => {
    setCurrentEra(era);
    navigate('/explore');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16 pt-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              The Evolution of Web UI
            </span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100">
            Experience how web design has transformed from the early days to the cutting-edge present
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Web 1.0 Card */}
          <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:shadow-lg transition-all">
            <div className="text-center mb-6">
              <div className="bg-blue-900/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Compass className="w-8 h-8 text-blue-300" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Web 1.0</h3>
              <p className="text-blue-100 text-sm">1990s - Early 2000s</p>
            </div>
            <p className="text-gray-300 mb-6">
              Experience the nostalgic era of static pages, basic HTML, and the early foundations of the web.
            </p>
            <button 
              onClick={() => handleExploreEra('web1')} 
              className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg w-full flex items-center justify-center"
            >
              <span>Time Travel to Web 1.0</span>
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>

          {/* Web 2.0 Card */}
          <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:shadow-lg transition-all">
            <div className="text-center mb-6">
              <div className="bg-blue-900/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <History className="w-8 h-8 text-blue-300" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Web 2.0</h3>
              <p className="text-blue-100 text-sm">Mid 2000s - Present</p>
            </div>
            <p className="text-gray-300 mb-6">
              Explore the social web with dynamic content, user interactions, and responsive designs.
            </p>
            <button 
              onClick={() => handleExploreEra('web2')} 
              className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg w-full flex items-center justify-center"
            >
              <span>Experience Web 2.0</span>
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>

          {/* Web 3.0 Card */}
          <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:shadow-lg transition-all">
            <div className="text-center mb-6">
              <div className="bg-blue-900/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu className="w-8 h-8 text-blue-300" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Web 3.0</h3>
              <p className="text-blue-100 text-sm">Emerging</p>
            </div>
            <p className="text-gray-300 mb-6">
              Witness the future with decentralized apps, AI-powered interfaces, and immersive experiences.
            </p>
            <button 
              onClick={() => handleExploreEra('web3')} 
              className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg w-full flex items-center justify-center"
            >
              <span>Dive into Web 3.0</span>
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="mt-20 text-center">
          <p className="text-blue-200 mb-4">
            Created for the UI Evolution Hackathon
          </p>
          <div className="flex justify-center space-x-4">
            <button onClick={() => navigate('/about')} className="text-blue-300 hover:text-white transition-colors">
              About this Project
            </button>
            <div className="border-r border-blue-700"></div>
            <button onClick={() => navigate('/compare')} className="text-blue-300 hover:text-white transition-colors">
              Compare All Eras
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
