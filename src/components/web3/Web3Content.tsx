
import React, { useState } from 'react';
import { Wallet, ArrowRight, Share2, Heart, MessageCircle, ExternalLink } from 'lucide-react';

const Web3Content = () => {
  const [aiPrompt, setAiPrompt] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedNFT, setSelectedNFT] = useState<number | null>(null);
  const [likedNFTs, setLikedNFTs] = useState<number[]>([]);

  const nfts = [
    { id: 1, name: 'Cosmic Voyager #238', creator: '0x71C9...93BA', price: '0.38 ETH', likes: 142 },
    { id: 2, name: 'Digital Dream #567', creator: '0x18F2...42DB', price: '0.75 ETH', likes: 89 },
    { id: 3, name: 'Neural Network #112', creator: '0x39A1...F720', price: '0.21 ETH', likes: 211 },
    { id: 4, name: 'Quantum Realm #045', creator: '0x82C3...B1EA', price: '1.05 ETH', likes: 173 },
  ];

  const handlePromptSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (aiPrompt.trim()) {
      setIsGenerating(true);
      // Simulate AI response generation
      setTimeout(() => {
        setAiResponse(`Based on your query "${aiPrompt}", I recommend exploring decentralized governance models that utilize blockchain verification. These systems can provide transparent decision-making while maintaining user privacy through zero-knowledge proofs.`);
        setIsGenerating(false);
      }, 1500);
    }
  };

  const toggleLikeNFT = (id: number) => {
    if (likedNFTs.includes(id)) {
      setLikedNFTs(likedNFTs.filter(nftId => nftId !== id));
    } else {
      setLikedNFTs([...likedNFTs, id]);
    }
  };

  return (
    <div className="bg-web3-dark min-h-screen text-white pt-20 pb-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="web3-card mx-auto max-w-5xl mb-12 py-12 px-6 sm:px-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-web3-primary to-web3-accent animate-pulse-slow">
              The Web 3.0 Experience
            </h1>
            <p className="text-lg text-white/80 mb-8">
              Welcome to the decentralized web. Experience the future of internet interaction with blockchain technology, 
              AI-powered interfaces, and immersive digital experiences.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="web3-button flex items-center justify-center">
                <span>Explore the Metaverse</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="bg-black/30 backdrop-blur-md text-white py-2 px-6 rounded-xl border border-white/10 font-web3 font-medium transition-all hover:bg-black/40 flex items-center justify-center">
                <Wallet className="mr-2 h-5 w-5" />
                <span>Connect Wallet</span>
              </button>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="web3-card">
            <h3 className="text-xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-web3-primary to-web3-accent">
              Decentralized Architecture
            </h3>
            <p className="text-white/80 mb-4">
              Web 3.0 runs on blockchain technology, eliminating central authorities and giving users control over their data and digital assets.
            </p>
            <ul className="space-y-2 text-white/70">
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-web3-accent mr-2"></div>
                <span>Blockchain-based infrastructure</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-web3-accent mr-2"></div>
                <span>No central points of failure</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-web3-accent mr-2"></div>
                <span>User-owned data and content</span>
              </li>
            </ul>
          </div>

          <div className="web3-card">
            <h3 className="text-xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-web3-primary to-web3-accent">
              AI-Powered Experiences
            </h3>
            <p className="text-white/80 mb-4">
              Intelligent systems that understand context and personalize experiences without compromising privacy.
            </p>
            <ul className="space-y-2 text-white/70">
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-web3-primary mr-2"></div>
                <span>Semantic understanding</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-web3-primary mr-2"></div>
                <span>Personalized without tracking</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-web3-primary mr-2"></div>
                <span>Predictive user interfaces</span>
              </li>
            </ul>
          </div>

          <div className="web3-card">
            <h3 className="text-xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-web3-primary to-web3-accent">
              Immersive Digital Spaces
            </h3>
            <p className="text-white/80 mb-4">
              3D environments, virtual reality, and seamless digital-physical experiences define the spatial web.
            </p>
            <ul className="space-y-2 text-white/70">
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-web3-success mr-2"></div>
                <span>VR/AR integration</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-web3-success mr-2"></div>
                <span>Spatial computing</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-web3-success mr-2"></div>
                <span>Persistent virtual worlds</span>
              </li>
            </ul>
          </div>
        </div>

        {/* AI Assistant Section */}
        <div className="web3-card mx-auto max-w-4xl mb-12">
          <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-web3-primary to-web3-accent">
            AI Web Assistant
          </h2>
          <p className="text-white/80 mb-6">
            Experience the power of AI integration in Web 3.0. Ask any question about blockchain, decentralized technologies, or web evolution.
          </p>
          <form onSubmit={handlePromptSubmit} className="mb-6">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                className="web3-input flex-grow"
                placeholder="Ask about Web 3.0 technologies..."
                value={aiPrompt}
                onChange={(e) => setAiPrompt(e.target.value)}
              />
              <button
                type="submit"
                className="web3-button"
                disabled={isGenerating}
              >
                {isGenerating ? 'Generating...' : 'Generate Response'}
              </button>
            </div>
          </form>
          {aiResponse && (
            <div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-xl p-4">
              <p className="text-white/90">{aiResponse}</p>
            </div>
          )}
        </div>

        {/* NFT Gallery Section */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-web3-primary to-web3-accent">
              NFT Gallery
            </h2>
            <a href="#" className="text-white/70 hover:text-white flex items-center">
              View all <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {nfts.map((nft) => (
              <div key={nft.id} className="web3-card group relative">
                <div 
                  className="aspect-square rounded-lg mb-3 bg-gradient-to-br from-purple-600/30 to-blue-500/30 overflow-hidden flex items-center justify-center cursor-pointer"
                  onClick={() => setSelectedNFT(nft.id)}
                >
                  <div className="text-9xl font-bold text-white/20 group-hover:text-white/30 transition-all">
                    {nft.id}
                  </div>
                </div>
                <h3 className="font-medium text-white mb-1">{nft.name}</h3>
                <div className="flex justify-between text-white/60 text-sm mb-3">
                  <span>by {nft.creator}</span>
                  <span className="text-web3-accent">{nft.price}</span>
                </div>
                <div className="flex justify-between">
                  <button 
                    className={`flex items-center space-x-1 ${likedNFTs.includes(nft.id) ? 'text-pink-500' : 'text-white/60'}`}
                    onClick={() => toggleLikeNFT(nft.id)}
                  >
                    <Heart className="h-4 w-4" />
                    <span>{likedNFTs.includes(nft.id) ? nft.likes + 1 : nft.likes}</span>
                  </button>
                  <div className="flex space-x-2">
                    <button className="text-white/60 hover:text-white transition-colors">
                      <MessageCircle className="h-4 w-4" />
                    </button>
                    <button className="text-white/60 hover:text-white transition-colors">
                      <Share2 className="h-4 w-4" />
                    </button>
                    <button className="text-white/60 hover:text-white transition-colors">
                      <ExternalLink className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {selectedNFT === nft.id && (
                  <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50" onClick={() => setSelectedNFT(null)}>
                    <div className="web3-card max-w-3xl mx-4 p-6" onClick={(e) => e.stopPropagation()}>
                      <div className="aspect-video rounded-lg mb-6 bg-gradient-to-br from-purple-600/50 to-blue-500/50 overflow-hidden flex items-center justify-center">
                        <div className="text-9xl font-bold text-white/30">
                          {nft.id}
                        </div>
                      </div>
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h2 className="text-2xl font-bold text-white mb-1">{nft.name}</h2>
                          <p className="text-white/60">Created by {nft.creator}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-web3-accent font-bold text-xl">{nft.price}</p>
                          <p className="text-white/60">Current Price</p>
                        </div>
                      </div>
                      <p className="text-white/80 mb-6">
                        This unique digital asset represents the convergence of art and technology in the Web 3.0 era. 
                        Stored on the blockchain, it guarantees authenticity and true ownership.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <button className="web3-button flex-1">Buy Now</button>
                        <button className="bg-black/30 backdrop-blur-md text-white py-2 px-6 rounded-xl border border-white/10 font-web3 font-medium transition-all hover:bg-black/40 flex-1">
                          Place Bid
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Web3Content;
