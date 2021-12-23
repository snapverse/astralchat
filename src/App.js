import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import styled from 'styled-components/native';

import StartScreen from './screens/Starting/StartScreen/StartScreen';
import globalStyles from './global-styles'; 

const Main = styled.View`
  background-color: ${globalStyles.colors.bg};
  height: 100%;
  width: 100%;
`;

export default function App() {
  return (
    <PaperProvider>
      <Main>
        <StartScreen />
      </Main>
      <StatusBar style='auto' />
    </PaperProvider>
  );
}