
import React from 'react';
import { useEra } from '@/context/EraContext';
import Web1Header from '@/components/web1/Web1Header';
import Web1Content from '@/components/web1/Web1Content';

const Explore = () => {
  const { currentEra } = useEra();

  const renderWeb2Content = () => (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Web 2.0!</h1>
        <p className="text-gray-700 mb-4">
          Web 2.0 transformed the internet from static pages to interactive experiences. 
          Users became creators, not just consumers, with features like comments, likes, 
          and social sharing becoming standard.
        </p>
        
        <div className="bg-gray-100 rounded-lg p-4 mb-4">
          <p className="text-gray-700 font-semibold mb-2">Key Web 2.0 features:</p>
          <ul className="list-disc pl-5 text-gray-700">
            <li>User-generated content and social interactions</li>
            <li>Dynamic pages with AJAX technology</li>
            <li>Rounded corners, gradients, and reflections</li>
            <li>Web applications replacing desktop software</li>
            <li>Mobile-responsive designs</li>
          </ul>
        </div>
        
        <div className="flex justify-between items-center border-t border-gray-200 pt-4">
          <div className="flex space-x-3">
            <button className="flex items-center space-x-1 text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
              </svg>
              <span>Like</span>
            </button>
            <button className="flex items-center space-x-1 text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
              </svg>
              <span>Comment</span>
            </button>
            <button className="flex items-center space-x-1 text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
              </svg>
              <span>Share</span>
            </button>
          </div>
          <button className="text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
            </svg>
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-2 space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                JS
              </div>
              <div className="ml-3">
                <p className="font-semibold">Jane Smith</p>
                <p className="text-sm text-gray-500">Posted 2 hours ago</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              Just tried this amazing new JavaScript framework! It's so much faster and easier to use than the old ones. 
              #WebDev #JavaScript #Web2point0
            </p>
            <div className="flex justify-between items-center border-t border-gray-200 pt-3">
              <div className="flex space-x-4">
                <button className="flex items-center space-x-1 text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                  </svg>
                  <span>89</span>
                </button>
                <button className="flex items-center space-x-1 text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                  </svg>
                  <span>12</span>
                </button>
                <button className="flex items-center space-x-1 text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                  </svg>
                  <span>Share</span>
                </button>
              </div>
              <button className="text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">Popular Tags</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">#WebDesign</span>
              <span className="px-3 py-1 bg-green-500 text-white rounded-full text-sm">#JavaScript</span>
              <span className="px-3 py-1 bg-red-500 text-white rounded-full text-sm">#CSS3</span>
              <span className="px-3 py-1 bg-yellow-500 text-white rounded-full text-sm">#Responsive</span>
              <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">#UX</span>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">Friends Online</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-bold">
                  JD
                </div>
                <div className="ml-2">
                  <p className="text-sm font-semibold">John Doe</p>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-green-500 mr-1"></div>
                    <p className="text-xs text-gray-500">Online</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-sm font-bold">
                  AS
                </div>
                <div className="ml-2">
                  <p className="text-sm font-semibold">Alice Smith</p>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-green-500 mr-1"></div>
                    <p className="text-xs text-gray-500">Online</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderWeb3Content = () => (
    <div className="bg-gray-900 min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-4">
        <div className="web3-card mx-auto max-w-4xl mb-12">
          <h1 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            The Web 3.0 Experience
          </h1>
          <p className="text-white/80 mb-8">
            Welcome to the decentralized web. Experience the future of internet interaction with blockchain technology, 
            AI-powered interfaces, and immersive digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="web3-button flex items-center justify-center">
              <span>Explore the Metaverse</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="bg-black/30 backdrop-blur-md text-white py-2 px-6 rounded-xl border border-white/10 transition-all hover:bg-black/40 flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.5 12C18.5 15.5899 15.5899 18.5 12 18.5C8.41015 18.5 5.5 15.5899 5.5 12C5.5 8.41015 8.41015 5.5 12 5.5C15.5899 5.5 18.5 8.41015 18.5 12Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19.5 12H22.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1.5 12H4.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 4.5V1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 22.5V19.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17.3033 6.69668L19.4245 4.57551" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4.57551 19.4245L6.69668 17.3033" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17.3033 17.3033L19.4245 19.4245" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4.57551 4.57551L6.69668 6.69668" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Connect Wallet</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="web3-card">
            <h3 className="text-xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Decentralized Architecture
            </h3>
            <p className="text-white/80 mb-4">
              Web 3.0 runs on blockchain technology, eliminating central authorities and giving users control over their data and digital assets.
            </p>
            <ul className="space-y-2 text-white/70">
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-cyan-400 mr-2"></div>
                <span>Blockchain-based infrastructure</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-cyan-400 mr-2"></div>
                <span>No central points of failure</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-cyan-400 mr-2"></div>
                <span>User-owned data and content</span>
              </li>
            </ul>
          </div>

          <div className="web3-card">
            <h3 className="text-xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              AI-Powered Experiences
            </h3>
            <p className="text-white/80 mb-4">
              Intelligent systems that understand context and personalize experiences without compromising privacy.
            </p>
            <ul className="space-y-2 text-white/70">
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-purple-400 mr-2"></div>
                <span>Semantic understanding</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-purple-400 mr-2"></div>
                <span>Personalized without tracking</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-purple-400 mr-2"></div>
                <span>Predictive user interfaces</span>
              </li>
            </ul>
          </div>

          <div className="web3-card">
            <h3 className="text-xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Immersive Digital Spaces
            </h3>
            <p className="text-white/80 mb-4">
              3D environments, virtual reality, and seamless digital-physical experiences define the spatial web.
            </p>
            <ul className="space-y-2 text-white/70">
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-green-400 mr-2"></div>
                <span>VR/AR integration</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-green-400 mr-2"></div>
                <span>Spatial computing</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-green-400 mr-2"></div>
                <span>Persistent virtual worlds</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="web3-card mx-auto max-w-4xl mb-12">
          <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            AI Web Assistant
          </h2>
          <p className="text-white/80 mb-6">
            Experience the power of AI integration in Web 3.0. Ask any question about blockchain, decentralized technologies, or web evolution.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              className="web3-input flex-grow"
              placeholder="Ask about Web 3.0 technologies..."
            />
            <button className="web3-button">
              Generate Response
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderWeb2Header = () => (
    <div className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              Web2.0
            </div>
            <nav className="hidden md:flex ml-10">
              <a href="#" className="mx-3 px-2 py-1 text-gray-700 font-semibold hover:text-blue-500 transition-colors">Home</a>
              <a href="#" className="mx-3 px-2 py-1 text-gray-700 font-semibold hover:text-blue-500 transition-colors">About</a>
              <a href="#" className="mx-3 px-2 py-1 text-gray-700 font-semibold hover:text-blue-500 transition-colors">Blog</a>
              <a href="#" className="mx-3 px-2 py-1 text-gray-700 font-semibold hover:text-blue-500 transition-colors">Contact</a>
            </nav>
          </div>
          
          <div className="flex items-center">
            <div className="relative mr-4">
              <input
                type="text"
                className="web2-input pr-8"
                placeholder="Search..."
              />
              <svg className="absolute right-2 top-2.5 h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
            
            <div className="flex">
              <button className="p-2 text-gray-500 hover:text-blue-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                </svg>
              </button>
              <button className="p-2 text-gray-500 hover:text-blue-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </button>
              <button className="p-2 text-gray-500 hover:text-blue-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderWeb3Header = () => (
    <header className="bg-black/20 backdrop-blur-lg fixed top-0 left-0 right-0 z-50 border-b border-white/10">
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-4 px-6">
          <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            Web3.0
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white/80 hover:text-white transition-colors font-medium">Home</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors font-medium">About</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors font-medium">Blog</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors font-medium">NFT Gallery</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors font-medium">DAO</a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="text-white/80 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </button>
            <button className="text-white/80 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
              </svg>
            </button>
            <button className="text-white/80 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            </button>
            <button 
              className="flex items-center space-x-2 px-4 py-1.5 rounded-full bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.5 12C18.5 15.5899 15.5899 18.5 12 18.5C8.41015 18.5 5.5 15.5899 5.5 12C5.5 8.41015 8.41015 5.5 12 5.5C15.5899 5.5 18.5 8.41015 18.5 12Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19.5 12H22.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1.5 12H4.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 4.5V1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 22.5V19.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17.3033 6.69668L19.4245 4.57551" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4.57551 19.4245L6.69668 17.3033" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17.3033 17.3033L19.4245 19.4245" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4.57551 4.57551L6.69668 6.69668" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-sm font-medium">Connect Wallet</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );

  switch (currentEra) {
    case 'web1':
      return (
        <div className="web1-bg min-h-screen">
          <Web1Header />
          <Web1Content />
        </div>
      );
    case 'web2':
      return (
        <div className="min-h-screen bg-gray-100">
          {renderWeb2Header()}
          {renderWeb2Content()}
        </div>
      );
    case 'web3':
      return (
        <div className="min-h-screen bg-gray-900 text-white">
          {renderWeb3Header()}
          {renderWeb3Content()}
        </div>
      );
    default:
      return null;
  }
};

export default Explore;
