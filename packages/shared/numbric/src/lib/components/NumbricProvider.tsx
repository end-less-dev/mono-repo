import React, { createContext } from 'react';
import numeral, {Numeral} from 'numeral';

interface NumeralProviderProps {
  children: React.ReactNode;
}

// Create a type for the context value
interface NumeralContextValue {
  numeral: typeof numeral;
}

// Initialize the context with a default value
export const NumeralContext = createContext<NumeralContextValue>({ numeral });

export const NumeralProvider: React.FC<NumeralProviderProps> = ({ children }) => {

  // Check if the locale is not already registered
  if (!numeral.locales['in']) {
    // Register a new format
    numeral.register('locale', 'in', {
      delimiters: {
          thousands: ',',
          decimal: '.'
      },
      abbreviations: {
        thousand: 'K',
        million: 'L', // 10 Lakhs
        billion: 'Cr', // 100 Crore
        trillion: 'T' // Trillion
      },
      ordinal: function (number) {
          return number === 1 ? 'st' : 'th';
      },
      currency: {
          symbol: '₹'
      }
  });
  
  }

  numeral.locale("in")

  return (
    <NumeralContext.Provider value={{ numeral}}>
      {children}
    </NumeralContext.Provider>
  );
};

export default NumeralProvider;
