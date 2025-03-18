
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Era = 'landing' | 'web1' | 'web2' | 'web3';

interface EraContextType {
  currentEra: Era;
  setCurrentEra: (era: Era) => void;
}

const EraContext = createContext<EraContextType | undefined>(undefined);

export const EraProvider = ({ children }: { children: ReactNode }) => {
  const [currentEra, setCurrentEra] = useState<Era>('landing');

  return (
    <EraContext.Provider value={{ currentEra, setCurrentEra }}>
      {children}
    </EraContext.Provider>
  );
};

export const useEra = () => {
  const context = useContext(EraContext);
  if (context === undefined) {
    throw new Error('useEra must be used within an EraProvider');
  }
  return context;
};
