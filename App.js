import React from 'react'
import { Provider as PaperProvider } from 'react-native-paper';  
import {
  useFonts,
	Montserrat_500Medium,
	Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';
import { CustomStatusBar, Main } from './src/globals';
import Home from './src/screens/Starting/index';

export default function App() {
  let [ fontsLoaded, error ] = useFonts({
    Montserrat_500Medium,
    Montserrat_700Bold,
	})
	if (!fontsLoaded) return <AppLoading />

  return (
    <PaperProvider>
      <Main>
        <CustomStatusBar contentMode="light" backgroundColor="#151515" />
        <Home />
      </Main>
    </PaperProvider>
  );
}
