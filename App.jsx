import React from 'react';
import { AppRegistry, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';

// コンポーネント
import Home from './src/screens/Home';
import Header from './src/screens/Header';

export default function App() {
  return (
    <PaperProvider>
      <Header/>
      <Home />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
