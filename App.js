import { 
  Provider as PaperProvider,
  configureFonts, 
  DefaultTheme
} from 'react-native-paper';  
import styled from 'styled-components/native';
  
import First from './src/screens/Starting/First/First';
import Main from './src/screens/styles'
import { CustomStatusBar } from './src/globals';


export default function App() {
  return (
    <PaperProvider>
      <CustomStatusBar backgroundColor="#fff" />
      <Main>
        <First />
      </Main>
    </PaperProvider>
  );
}
