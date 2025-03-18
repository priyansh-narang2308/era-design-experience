
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-8">
          <button 
            className="flex items-center text-blue-300 hover:text-white transition-colors"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Home
          </button>
        </div>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">About This Project</h1>
          
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Web Evolution Showcase</h2>
            <p className="text-lg mb-4">
              This project was created to demonstrate the evolution of web design and user interfaces from the early days of the internet to the cutting-edge present and beyond.
            </p>
            <p className="text-lg mb-4">
              As the web has evolved, so has the way we design and interact with it. From static HTML pages to dynamic, interactive applications, and now to decentralized, AI-powered interfaces, the journey of web UI is fascinating.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">Web 1.0</h3>
              <p className="text-blue-100 text-sm mb-4">The Read-Only Web (1990s - Early 2000s)</p>
              <p className="text-gray-300">
                The first generation of the internet was characterized by static pages, basic HTML, and minimal interactivity. Users were consumers of content, but had few ways to contribute.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">Web 2.0</h3>
              <p className="text-blue-100 text-sm mb-4">The Social Web (Mid 2000s - Present)</p>
              <p className="text-gray-300">
                Web 2.0 introduced dynamic content, rich user interactions, and responsive designs. It enabled user-generated content and transformed the web into a social platform.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">Web 3.0</h3>
              <p className="text-blue-100 text-sm mb-4">The Decentralized Web (Emerging)</p>
              <p className="text-gray-300">
                The next generation is focused on decentralization, blockchain, and semantic understanding. It aims to give users control over their data while creating more immersive experiences.
              </p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Project Goals</h2>
            <ul className="space-y-3 list-disc pl-6">
              <li className="text-lg">Demonstrate the visual and functional evolution of web interfaces</li>
              <li className="text-lg">Provide an interactive experience of different web eras</li>
              <li className="text-lg">Highlight the technological shifts that enabled each new era</li>
              <li className="text-lg">Explore the future possibilities of web design</li>
            </ul>
          </div>

          <div className="text-center">
            <p className="text-lg mb-6">
              Created for the UI Evolution Hackathon - 2024
            </p>
            <div className="flex justify-center gap-4">
              <button 
                onClick={() => navigate('/compare')} 
                className="bg-white/20 hover:bg-white/30 text-white py-2 px-6 rounded-lg transition-colors"
              >
                Compare Web Eras
              </button>
              <button 
                onClick={() => navigate('/')} 
                className="border border-white/20 text-white py-2 px-6 rounded-lg hover:bg-white/10 transition-colors"
              >
                Back to Homepage
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
