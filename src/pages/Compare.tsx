import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEra } from '@/context/EraContext';
import { ArrowLeft } from 'lucide-react';

const Compare = () => {
  const navigate = useNavigate();
  const { setCurrentEra } = useEra();

  const handleEraSelect = (era: 'web1' | 'web2' | 'web3') => {
    setCurrentEra(era);
    navigate('/explore');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-indigo-900 text-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center mb-8">
          <button 
            className="flex items-center text-indigo-300 hover:text-white transition-colors"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Home
          </button>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-indigo-100">
          Evolution of Web Design
        </h1>
        <p className="text-xl text-indigo-200 max-w-3xl mx-auto text-center mb-12">
          Compare the design patterns, UI elements, and functionality across different web eras
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Web 1.0 Column */}
          <div className="border border-indigo-700/30 rounded-xl overflow-hidden">
            <div className="bg-gray-500 p-4">
              <h2 className="text-2xl font-bold text-center">Web 1.0</h2>
              <p className="text-center text-black">1990s - Early 2000s</p>
            </div>
            <div className="p-6 space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3">Key Characteristics</h3>
                <ul className="space-y-2 list-disc pl-5 text-gray-300">
                  <li>Static HTML pages</li>
                  <li>Limited styling with basic CSS</li>
                  <li>Table-based layouts</li>
                  <li>GIF animations</li>
                  <li>Simple hyperlinks navigation</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-3">Visual Style</h3>
                <ul className="space-y-2 list-disc pl-5 text-gray-300">
                  <li>Bright background colors</li>
                  <li>Basic typography (Times New Roman)</li>
                  <li>Under construction GIFs</li>
                  <li>Visitor counters</li>
                  <li>Browser compatibility badges</li>
                </ul>
              </div>

              <button 
                onClick={() => handleEraSelect('web1')} 
                className="border-2 border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white transition-colors py-2 px-4 rounded-lg w-full mt-4"
              >
                Experience Web 1.0
              </button>
            </div>
          </div>

          {/* Web 2.0 Column */}
          <div className="border border-teal-700/30 rounded-xl overflow-hidden">
            <div className="bg-teal-900 p-4">
              <h2 className="text-2xl font-bold text-center">Web 2.0</h2>
              <p className="text-center text-teal-300">Mid 2000s - Present</p>
            </div>
            <div className="p-6 space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3">Key Characteristics</h3>
                <ul className="space-y-2 list-disc pl-5 text-gray-300">
                  <li>Dynamic content with AJAX</li>
                  <li>CSS for styling and layouts</li>
                  <li>JavaScript interactivity</li>
                  <li>Responsive design</li>
                  <li>Rich media integration</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-3">Visual Style</h3>
                <ul className="space-y-2 list-disc pl-5 text-gray-300">
                  <li>Gradients and drop shadows</li>
                  <li>Rounded corners</li>
                  <li>Glossy buttons</li>
                  <li>Web-safe fonts</li>
                  <li>Social sharing buttons</li>
                </ul>
              </div>

              <button 
                onClick={() => handleEraSelect('web2')} 
                className="border-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-colors py-2 px-4 rounded-lg w-full mt-4"
              >
                Experience Web 2.0
              </button>
            </div>
          </div>

          {/* Web 3.0 Column */}
          <div className="border border-orange-700/30 rounded-xl overflow-hidden">
            <div className="bg-orange-900 p-4">
              <h2 className="text-2xl font-bold text-center">Web 3.0</h2>
              <p className="text-center text-orange-300">Emerging</p>
            </div>
            <div className="p-6 space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3">Key Characteristics</h3>
                <ul className="space-y-2 list-disc pl-5 text-gray-300">
                  <li>Blockchain-based infrastructure</li>
                  <li>Decentralized applications (dApps)</li>
                  <li>AI-powered interfaces</li>
                  <li>3D and immersive experiences</li>
                  <li>Semantic web technologies</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-3">Visual Style</h3>
                <ul className="space-y-2 list-disc pl-5 text-gray-300">
                  <li>Glassmorphism and blur effects</li>
                  <li>Dark mode by default</li>
                  <li>Minimalist UI with focus on content</li>
                  <li>Custom typography</li>
                  <li>3D elements and animations</li>
                </ul>
              </div>

              <button 
                onClick={() => handleEraSelect('web3')} 
                className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors py-2 px-4 rounded-lg w-full mt-4"
              >
                Experience Web 3.0
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compare;