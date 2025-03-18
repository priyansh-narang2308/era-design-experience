
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center mb-8">
          <button 
            className="flex items-center text-blue-300 hover:text-white transition-colors"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Home
          </button>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          Evolution of Web Design
        </h1>
        <p className="text-xl text-blue-100 max-w-3xl mx-auto text-center mb-12">
          Compare the design patterns, UI elements, and functionality across different web eras
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Web 1.0 Column */}
          <div className="border border-blue-700/30 rounded-xl overflow-hidden">
            <div className="bg-blue-800/30 p-4">
              <h2 className="text-2xl font-bold text-center">Web 1.0</h2>
              <p className="text-center text-blue-200">1990s - Early 2000s</p>
            </div>
            <div className="p-6 space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3">Key Characteristics</h3>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Static HTML pages</li>
                  <li>Limited styling with basic CSS</li>
                  <li>Table-based layouts</li>
                  <li>GIF animations</li>
                  <li>Simple hyperlinks navigation</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-3">Visual Style</h3>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Bright background colors</li>
                  <li>Basic typography (Times New Roman)</li>
                  <li>Under construction GIFs</li>
                  <li>Visitor counters</li>
                  <li>Browser compatibility badges</li>
                </ul>
              </div>

              <button 
                onClick={() => handleEraSelect('web1')} 
                className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors py-2 px-4 rounded-lg w-full mt-4"
              >
                Experience Web 1.0
              </button>
            </div>
          </div>

          {/* Web 2.0 Column */}
          <div className="border border-purple-700/30 rounded-xl overflow-hidden">
            <div className="bg-purple-800/30 p-4">
              <h2 className="text-2xl font-bold text-center">Web 2.0</h2>
              <p className="text-center text-purple-200">Mid 2000s - Present</p>
            </div>
            <div className="p-6 space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3">Key Characteristics</h3>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Dynamic content with AJAX</li>
                  <li>CSS for styling and layouts</li>
                  <li>JavaScript interactivity</li>
                  <li>Responsive design</li>
                  <li>Rich media integration</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-3">Visual Style</h3>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Gradients and drop shadows</li>
                  <li>Rounded corners</li>
                  <li>Glossy buttons</li>
                  <li>Web-safe fonts</li>
                  <li>Social sharing buttons</li>
                </ul>
              </div>

              <button 
                onClick={() => handleEraSelect('web2')} 
                className="border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition-colors py-2 px-4 rounded-lg w-full mt-4"
              >
                Experience Web 2.0
              </button>
            </div>
          </div>

          {/* Web 3.0 Column */}
          <div className="border border-cyan-700/30 rounded-xl overflow-hidden">
            <div className="bg-cyan-800/30 p-4">
              <h2 className="text-2xl font-bold text-center">Web 3.0</h2>
              <p className="text-center text-cyan-200">Emerging</p>
            </div>
            <div className="p-6 space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3">Key Characteristics</h3>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Blockchain-based infrastructure</li>
                  <li>Decentralized applications (dApps)</li>
                  <li>AI-powered interfaces</li>
                  <li>3D and immersive experiences</li>
                  <li>Semantic web technologies</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-3">Visual Style</h3>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Glassmorphism and blur effects</li>
                  <li>Dark mode by default</li>
                  <li>Minimalist UI with focus on content</li>
                  <li>Custom typography</li>
                  <li>3D elements and animations</li>
                </ul>
              </div>

              <button 
                onClick={() => handleEraSelect('web3')} 
                className="border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white transition-colors py-2 px-4 rounded-lg w-full mt-4"
              >
                Experience Web 3.0
              </button>
            </div>
          </div>
        </div>

        {/* Future Section */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl mx-auto max-w-4xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">What's Next? Web 4.0 and Beyond</h2>
          <p className="text-xl text-blue-100 mb-8">
            The future of web design will likely incorporate these emerging technologies:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-4 border border-white/10 rounded-xl">
              <div className="text-4xl mb-2">🧠</div>
              <h3 className="text-lg font-bold mb-2">Brain-Computer Interfaces</h3>
              <p className="text-sm text-blue-200">Direct neural interfaces for seamless interaction</p>
            </div>
            <div className="p-4 border border-white/10 rounded-xl">
              <div className="text-4xl mb-2">🔮</div>
              <h3 className="text-lg font-bold mb-2">Ambient Computing</h3>
              <p className="text-sm text-blue-200">Invisible UI that anticipates needs</p>
            </div>
            <div className="p-4 border border-white/10 rounded-xl">
              <div className="text-4xl mb-2">🌐</div>
              <h3 className="text-lg font-bold mb-2">Holographic Interfaces</h3>
              <p className="text-sm text-blue-200">3D projections replacing physical screens</p>
            </div>
            <div className="p-4 border border-white/10 rounded-xl">
              <div className="text-4xl mb-2">🤖</div>
              <h3 className="text-lg font-bold mb-2">Autonomous Agents</h3>
              <p className="text-sm text-blue-200">AI entities that browse and interact for you</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compare;
