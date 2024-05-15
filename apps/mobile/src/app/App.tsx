/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useRef, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Linking,
} from 'react-native';
import Svg, { G, Path } from 'react-native-svg';
import { L10N, LocalizationProvider } from '@happynrwl/l10n';
import { Numbric, NumeralProvider } from '@happynrwl/numbric';

import en from "../assets/en.json"
const langData = {
  en,
};
export const App = () => {
  const [whatsNextYCoord, setWhatsNextYCoord] = useState<number>(0);
  const scrollViewRef = useRef<null | ScrollView>(null);
  
  // const number = numeral(1000)

  return (
    <LocalizationProvider localizationData={langData}>
      <NumeralProvider>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <Text>
        <L10N l10nKey='hello'/>
        </Text>
        <Text>
          <Numbric value={100000000000}/>
        </Text>
      </SafeAreaView>
      </NumeralProvider>
    </LocalizationProvider>
  );
};


export default App;
