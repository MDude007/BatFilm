import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MyStack from './src/Main';

const App = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({

})

export default App;
