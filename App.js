import { Provider as PaperProvider } from 'react-native-paper';  
  
import First from './src/screens/Starting/First';
import Main from './src/screens/styles'
import { CustomStatusBar } from './src/globals';

export default function App() {
  return (
    <PaperProvider>
      <CustomStatusBar backgroundColor="#202020" />
      <Main>
        <First />
      </Main>
    </PaperProvider>
  );
}
