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
import en from "../assets/en.json"
const langData = {
  en,
};
export const App = () => {
  const [whatsNextYCoord, setWhatsNextYCoord] = useState<number>(0);
  const scrollViewRef = useRef<null | ScrollView>(null);

  return (
    <LocalizationProvider localizationData={langData}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <Text>
        <L10N l10nKey='hello'/>
        </Text>
      </SafeAreaView>
    </LocalizationProvider>
  );
};


export default App;
