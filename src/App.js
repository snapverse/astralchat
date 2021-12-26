import { StatusBar } from 'expo-status-bar';
import { Provider as PaperProvider } from 'react-native-paper';
import styled from 'styled-components/native';

import First from './screens/Starting/First/First';
import styles from './globals'; 

const Main = styled.View`
  background-color: ${styles.colors.primary};
  height: 100%;
  width: 100%;
`;

export default function App() {
  return (
    <PaperProvider>
      <Main>
        <First />
      </Main>
      <StatusBar style="light" />
    </PaperProvider>
  );
}