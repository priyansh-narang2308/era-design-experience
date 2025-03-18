
import React from 'react';
import { Outlet } from 'react-router-dom';
import { useEra } from '@/context/EraContext';
import EraToggle from '@/components/common/EraToggle';

const MainLayout = () => {
  const { currentEra } = useEra();

  const getLayoutClass = () => {
    switch (currentEra) {
      case 'web1':
        return 'web1-bg';
      case 'web2':
        return 'bg-gray-100';
      case 'web3':
        return 'bg-gray-900 text-white';
      default:
        return 'bg-gradient-to-br from-purple-900 to-blue-900 text-white';
    }
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${getLayoutClass()}`}>
      {currentEra !== 'landing' && (
        <div className={`fixed bottom-4 right-4 z-50 ${currentEra === 'web3' ? 'web3-glass p-2 rounded-xl' : ''}`}>
          <EraToggle />
        </div>
      )}
      <Outlet />
    </div>
  );
};

export default MainLayout;
