import React, { createContext, useContext, useEffect, useState } from 'react';
import { Localization } from '../types/localization';

interface LocalizationContextType {
  localization: Localization;
  changeLanguage: (lang: string) => void;
  currentLanguage: string;
}

interface LocalizationProviderProps {
  localizationData: {
    [key: string]: Localization;
  };
  children: React.ReactNode; // Define children prop
}

export const LocalizationContext = createContext<
  LocalizationContextType | undefined
>(undefined);

const LocalizationProvider: React.FC<LocalizationProviderProps> = ({
  localizationData,
  children,
}) => {
  const [localization, setLocalization] = useState<Localization>({});
  const [currentLanguage, setCurrentLanguage] = useState<string>('en');

  useEffect(() => {
    setLocalization(localizationData[currentLanguage]);
  }, [currentLanguage, localizationData]);

  const changeLanguage = (lang: string) => {
    setCurrentLanguage(lang);
  };

  return (
    <LocalizationContext.Provider
      value={{ localization, changeLanguage, currentLanguage }}
    >
      {children}
    </LocalizationContext.Provider>
  );
};

export default LocalizationProvider;
