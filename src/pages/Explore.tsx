
import React from 'react';
import { useEra } from '@/context/EraContext';
import Web1Header from '@/components/web1/Web1Header';
import Web1Content from '@/components/web1/Web1Content';
import Web2Header from '@/components/web2/Web2Header';
import Web2Content from '@/components/web2/Web2Content';
import Web3Header from '@/components/web3/Web3Header';
import Web3Content from '@/components/web3/Web3Content';
import { ArrowRight } from 'lucide-react';

const Explore = () => {
  const { currentEra } = useEra();

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
          <Web2Header />
          <Web2Content />
        </div>
      );
    case 'web3':
      return (
        <div className="min-h-screen bg-gray-900 text-white">
          <Web3Header />
          <Web3Content />
        </div>
      );
    default:
      return null;
  }
};

export default Explore;
