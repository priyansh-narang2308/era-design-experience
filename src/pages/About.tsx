
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEra } from '@/context/EraContext';
import { ArrowLeft, Globe, Clock, Rocket, BrainCircuit } from 'lucide-react';

const About = () => {
  const navigate = useNavigate();
  const { currentEra } = useEra();
  
  const renderWeb1About = () => {
    return (
      <table width="100%" cellPadding="0" cellSpacing="0" border="0">
        <tbody>
          <tr>
            <td align="center" bgcolor="#C0C0C0" className="p-4">
              <font size="6" face="Times New Roman">
                <b>About This Project</b>
              </font>
            </td>
          </tr>
          <tr>
            <td bgcolor="#FFFFFF" className="p-4">
              <p>
                <font face="Times New Roman" size="3">
                  This website demonstrates the evolution of web design across different eras. It was created for a UI design hackathon to showcase how web interfaces have changed over time.
                </font>
              </p>
              <hr size="1" noshade="noshade" />
              <h2>
                <font face="Times New Roman" size="4" color="#800080">
                  <b>Project Goals</b>
                </font>
              </h2>
              <ul>
                <li>
                  <font face="Times New Roman" size="3">
                    Recreate authentic UI experiences from Web 1.0, 2.0, and 3.0
                  </font>
                </li>
                <li>
                  <font face="Times New Roman" size="3">
                    Demonstrate the evolution of user interactions
                  </font>
                </li>
                <li>
                  <font face="Times New Roman" size="3">
                    Show how design patterns have changed over time
                  </font>
                </li>
                <li>
                  <font face="Times New Roman" size="3">
                    Create an educational resource for web design history
                  </font>
                </li>
              </ul>
              <hr size="1" noshade="noshade" />
              <p align="center">
                <button className="web1-button" onClick={() => navigate('/')}>
                  Return to Homepage
                </button>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    );
  };
  
  const renderWeb2About = () => {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="web2-card mb-6">
          <h1 className="text-3xl font-bold text-web2-dark mb-4">About This Project</h1>
          <p className="text-gray-700 mb-6">
            This interactive website was developed for a UI design hackathon to demonstrate how web interfaces and user experiences have evolved through different eras of the internet.
          </p>
          <div className="bg-web2-gray rounded-lg p-6 mb-6">
            <h2 className="text-xl font-bold text-web2-dark mb-3">Our Mission</h2>
            <p className="text-gray-700">
              To create an authentic and educational experience that showcases the design patterns, interactions, and technologies that defined each web era - from the static pages of Web 1.0 to the social experiences of Web 2.0 and the emerging decentralized interfaces of Web 3.0.
            </p>
          </div>
          <h2 className="text-xl font-bold text-web2-dark mb-3">Technologies Used</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-bold text-web2-blue mb-2">Frontend</h3>
              <ul className="text-gray-700 space-y-1">
                <li>React</li>
                <li>Tailwind CSS</li>
                <li>TypeScript</li>
                <li>Lucide Icons</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-bold text-web2-green mb-2">Routing</h3>
              <ul className="text-gray-700 space-y-1">
                <li>React Router</li>
                <li>Context API</li>
                <li>Dynamic Components</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-bold text-web2-red mb-2">Styling</h3>
              <ul className="text-gray-700 space-y-1">
                <li>Era-specific CSS</li>
                <li>Custom Animations</li>
                <li>Responsive Design</li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="web2-button" onClick={() => navigate('/')}>
              Return to Homepage
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  const renderWeb3About = () => {
    return (
      <div className="pt-24 pb-12 container mx-auto px-4">
        <div className="web3-card max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-web3-primary to-web3-accent">
            About This Project
          </h1>
          <p className="text-white/80 mb-8">
            This immersive web experience was created for a UI design hackathon to showcase the evolution of web interfaces across different technological eras, from the early days of the internet to the cutting-edge present and beyond.
          </p>
          
          <div className="space-y-8 mb-10">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 flex-1">
                <Globe className="h-8 w-8 text-blue-400 mb-4" />
                <h2 className="text-xl font-bold mb-3">Web 1.0</h2>
                <p className="text-white/70">
                  The Read-Only Web (1990s - Early 2000s) was characterized by static HTML pages, minimal styling, and basic interactions. We've recreated the nostalgic aesthetic with table-based layouts, basic fonts, and iconic elements like hit counters and under construction GIFs.
                </p>
              </div>
              <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 flex-1">
                <Clock className="h-8 w-8 text-purple-400 mb-4" />
                <h2 className="text-xl font-bold mb-3">Web 2.0</h2>
                <p className="text-white/70">
                  The Social Web (Mid 2000s - Present) brought dynamic content, user-generated content, and rich interactions. Our Web 2.0 experience features gradient buttons, rounded corners, comment systems, and social sharing capabilities that defined this era.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 flex-1">
                <Rocket className="h-8 w-8 text-cyan-400 mb-4" />
                <h2 className="text-xl font-bold mb-3">Web 3.0</h2>
                <p className="text-white/70">
                  The Decentralized Web (Emerging) features blockchain technology, AI-powered interfaces, and immersive experiences. Our Web 3.0 implementation showcases glassmorphism, dark mode interfaces, wallet connections, and AI assistants that represent this evolving era.
                </p>
              </div>
              <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 flex-1">
                <BrainCircuit className="h-8 w-8 text-green-400 mb-4" />
                <h2 className="text-xl font-bold mb-3">What's Next</h2>
                <p className="text-white/70">
                  Looking ahead, Web 4.0 and beyond will likely feature brain-computer interfaces, ambient computing, holographic displays, and autonomous AI agents that further blur the line between digital and physical experiences.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-black/30 backdrop-blur-lg rounded-xl p-6 mb-8">
            <h2 className="text-xl font-bold mb-4">Technology Stack</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/5 p-3 rounded-lg text-center">
                <p className="font-medium">React</p>
              </div>
              <div className="bg-white/5 p-3 rounded-lg text-center">
                <p className="font-medium">TypeScript</p>
              </div>
              <div className="bg-white/5 p-3 rounded-lg text-center">
                <p className="font-medium">Tailwind CSS</p>
              </div>
              <div className="bg-white/5 p-3 rounded-lg text-center">
                <p className="font-medium">React Router</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <button className="web3-button" onClick={() => navigate('/')}>
              Return to Home
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  const renderDefaultAbout = () => {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 to-blue-900 text-white">
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
          
          <div className="max-w-4xl mx-auto web3-card">
            <h1 className="text-4xl font-bold mb-6 text-center">About This Project</h1>
            <p className="text-xl text-center mb-12">
              Exploring the evolution of web design through interactive experiences
            </p>
            
            <div className="space-y-8 mb-10">
              <p>
                This project was created for a UI design hackathon to showcase how web interfaces have evolved over time, from the static pages of Web 1.0 to the dynamic social experiences of Web 2.0 and the emerging decentralized interfaces of Web 3.0.
              </p>
              
              <p>
                By recreating authentic UI experiences from each era, we aim to provide both nostalgia for those who lived through these changes and education for newer designers about how web design has progressed over the decades.
              </p>
              
              <p>
                The website allows you to switch between different web eras seamlessly, experiencing not just the visual differences but also the functional differences in how users interacted with web content during each period.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="border border-blue-500/30 rounded-xl p-6">
                <Globe className="h-8 w-8 text-blue-400 mb-4" />
                <h2 className="text-xl font-bold mb-3">Web 1.0</h2>
                <ul className="space-y-2 text-blue-100">
                  <li>Static HTML pages</li>
                  <li>Basic CSS styling</li>
                  <li>Table-based layouts</li>
                  <li>Simple navigation</li>
                </ul>
              </div>
              
              <div className="border border-purple-500/30 rounded-xl p-6">
                <Clock className="h-8 w-8 text-purple-400 mb-4" />
                <h2 className="text-xl font-bold mb-3">Web 2.0</h2>
                <ul className="space-y-2 text-blue-100">
                  <li>Dynamic content</li>
                  <li>Social interactions</li>
                  <li>Rich media support</li>
                  <li>Responsive design</li>
                </ul>
              </div>
              
              <div className="border border-cyan-500/30 rounded-xl p-6">
                <Rocket className="h-8 w-8 text-cyan-400 mb-4" />
                <h2 className="text-xl font-bold mb-3">Web 3.0</h2>
                <ul className="space-y-2 text-blue-100">
                  <li>Decentralized apps</li>
                  <li>AI integration</li>
                  <li>3D interfaces</li>
                  <li>Blockchain features</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  switch (currentEra) {
    case 'web1':
      return renderWeb1About();
    case 'web2':
      return renderWeb2About();
    case 'web3':
      return renderWeb3About();
    default:
      return renderDefaultAbout();
  }
};

export default About;
