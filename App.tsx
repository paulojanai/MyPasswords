/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './src/navigation/AppStack';
import { StatusBar } from 'react-native';
import { theme } from './src/theme';

function App() {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor={theme.colors.neutral[150]}
        barStyle={'dark-content'}
      />
      <AppStack />
    </NavigationContainer>
  );
}

export default App;
