import React, { createContext, useContext, useEffect, useState } from 'react';
import { ReferenceTypes } from './types';

interface ReferenceContextType {
    reference : ReferenceTypes
}
interface ReferenceProviderProps {
    reference : ReferenceTypes;
    children: React.ReactNode; // Define children prop
}

export const ReferenceContext = createContext<ReferenceContextType | undefined>(undefined);

const ReferenceProvider: React.FC<ReferenceProviderProps> = ({children, reference}) => {
    
    return (
      <ReferenceContext.Provider  value={{reference}}>
        {children}
      </ReferenceContext.Provider>
    );
  };

export default ReferenceProvider;