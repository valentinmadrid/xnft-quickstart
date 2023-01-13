import { registerRootComponent } from 'expo';
import React from 'react';
import { View, Text } from 'react-native';

function App() {
  return (
    <View>
      <Text style={{ color: 'white' }}>Hello world!</Text>
    </View>
  );
}

export default registerRootComponent(App);
