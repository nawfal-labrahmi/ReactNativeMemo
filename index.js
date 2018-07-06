// Import  a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component
const App = () => (
  // JSX syntax: only return a high order component at once.
  // This is why Header and AlbumList are wrapped inside a single view.
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums!'} />
    <AlbumList />
  </View>
);

// Render it to the device
// Only root component (App) is registered
AppRegistry.registerComponent('ReactNativeDemo', () => App);
