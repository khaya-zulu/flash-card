/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { type RootStackParamList } from './App.types';

import { HomeScreen } from './screens/home';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <GestureHandlerRootView>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
          </Stack.Navigator>
        </GestureHandlerRootView>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
