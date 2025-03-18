
import React, { createContext, useContext, useState } from 'react';

type Era = 'web1' | 'web2' | 'web3' | 'landing';

interface EraContextType {
  currentEra: Era;
  setCurrentEra: (era: Era) => void;
}

const EraContext = createContext<EraContextType | undefined>(undefined);

export const EraProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentEra, setCurrentEra] = useState<Era>('landing');

  return (
    <EraContext.Provider value={{ currentEra, setCurrentEra }}>
      {children}
    </EraContext.Provider>
  );
};

export const useEra = (): EraContextType => {
  const context = useContext(EraContext);
  if (context === undefined) {
    throw new Error('useEra must be used within an EraProvider');
  }
  return context;
};

export type { Era };
