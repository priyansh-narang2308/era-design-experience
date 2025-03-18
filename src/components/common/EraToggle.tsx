
import React from 'react';
import { useEra, type Era } from '@/context/EraContext';
import { Clock, Rocket, Globe } from 'lucide-react';

const EraToggle = () => {
  const { currentEra, setCurrentEra } = useEra();

  const eras: { value: Era; label: string; icon: React.ReactNode }[] = [
    { value: 'web1', label: 'Web 1.0', icon: <Globe className="h-4 w-4" /> },
    { value: 'web2', label: 'Web 2.0', icon: <Clock className="h-4 w-4" /> },
    { value: 'web3', label: 'Web 3.0', icon: <Rocket className="h-4 w-4" /> },
  ];

  const renderToggleButton = () => {
    switch (currentEra) {
      case 'web1':
        return (
          <div className="space-y-2">
            {eras.map((era) => (
              <button
                key={era.value}
                onClick={() => setCurrentEra(era.value)}
                className={`web1-button block w-full text-left ${
                  currentEra === era.value ? 'bg-blue-200' : ''
                }`}
              >
                {era.label}
              </button>
            ))}
          </div>
        );
      case 'web2':
        return (
          <div className="flex space-x-2">
            {eras.map((era) => (
              <button
                key={era.value}
                onClick={() => setCurrentEra(era.value)}
                className={`web2-button flex items-center space-x-1 ${
                  currentEra === era.value ? 'bg-web2-blue' : ''
                }`}
              >
                {era.icon}
                <span>{era.label}</span>
              </button>
            ))}
          </div>
        );
      case 'web3':
        return (
          <div className="flex space-x-2">
            {eras.map((era) => (
              <button
                key={era.value}
                onClick={() => setCurrentEra(era.value)}
                className={`web3-button flex items-center space-x-1 ${
                  currentEra === era.value ? 'bg-web3-primary/80' : 'bg-black/30 backdrop-blur-md'
                }`}
              >
                {era.icon}
                <span>{era.label}</span>
              </button>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return <div className="era-toggle">{renderToggleButton()}</div>;
};

export default EraToggle;
